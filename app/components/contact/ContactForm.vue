<template>
  <section
    ref="sectionRef"
    class="bg-white
           px-[15px] md:px-[30px]
           py-[0px] pb-[80px] md:py-[110px]"
  >
    <div class="flex flex-col md:flex-row gap-12">

      <!-- LEFT TITLE (30%) -->
      <div class="md:w-[30%] flex flex-col items-center justify-start text-center md:text-left">
        <AnimatedSplit
          ref="title1"
          text="Get in Touch with us"
          tag="h2"
          wrap-class="
            text-[clamp(46px,5.1vw,72px)]
            leading-[0.95]
            font-normal
          "
        />
      </div>

      <!-- RIGHT FORM (70%) -->
      <div class="md:w-[70%] flex flex-col gap-10">
        <form
          @submit.prevent="submitForm"
          class="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            v-model="form.name"
            class="form-input text-[clamp(16px,3vw,22px)]"
          />

          <input
            type="email"
            placeholder="Email ID"
            v-model="form.email"
            class="form-input text-[clamp(16px,3vw,22px)]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            v-model="form.phone"
            class="form-input text-[clamp(16px,3vw,22px)]"
          />

          <textarea
            placeholder="Message"
            v-model="form.message"
            rows="4"
            class="form-input text-[clamp(16px,3vw,22px)]"
          ></textarea>

          <!-- SUBMIT -->
          <button
            type="submit"
            class="btn-pill mx-auto md:ml-[0px] md:mr-auto"
            :disabled="loading"
            :class="{ 'opacity-60 pointer-events-none': loading }"
          >
            <div class="btn-inner">
              <div class="btn-flex">
                <div class="btn-text">
                    {{ loading ? "Sending..." : "Submit" }}
                  </div>
                  <div class="btn-text">
                    {{ loading ? "Sending..." : "Submit" }}
                  </div>
              </div>
            </div>
          </button>

        </form>
        <p
          v-if="status === 'success'"
          class="text-green-600 text-center md:text-left"
        >
          Thank you! We’ll get back to you shortly.
        </p>

        <p
          v-else-if="status === 'error'"
          class="text-red-500 text-center md:text-left"
        >
          Something went wrong. Please try again later.
        </p>

      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from "vue"
import AnimatedSplit from "@/components/AnimatedSplit.vue"

const sectionRef = ref(null)
const title1 = ref(null)

/* -----------------------
   FORM STATE
----------------------- */
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const status = ref("idle") // idle | success | error
const loading = ref(false)


/* -----------------------
   TITLE ANIMATION
----------------------- */
onMounted(() => {
  if (!sectionRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      title1.value?.play()
      observer.disconnect()
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)
})

/* -----------------------
   SUBMIT HANDLER
----------------------- */
async function submitForm() {
  if (loading.value) return

  loading.value = true
  status.value = "idle"

  try {
    const res = await $fetch("/api/contact-request", {
      method: "POST",
      body: form.value
    })

    if (res?.success) {
      status.value = "success"
      form.value = {
        name: "",
        email: "",
        phone: "",
        message: ""
      }
    }
  } catch (err) {
    console.error("Contact request failed:", err)
    status.value = "error"
  } finally {
    loading.value = false
  }
}

</script>


<style scoped lang="scss">
/* INPUTS — FIX OVERFLOW */
.form-input {
  width: 100%;
  box-sizing: border-box;

  border: 1px solid #d1d5db;
  padding: 12px 16px;
  font-size: 14px;

  outline: none;
}

.form-input:focus {
  border-color: #1a1a1a;
}

/* BUTTON */
.btn-pill {
  padding: 12px 22px;
  border-radius: 100vw;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: "Instrument Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-variation-settings: "wght" 650;

  cursor: pointer;
  background: #1a1a1a;
  color: #ffffff;
  border: none;
  width: fit-content;
}

/* TEXT STACK */
.btn-inner {
  height: 1em;
  overflow: hidden;
  line-height: 1em;
}

.btn-flex {
  display: flex;
  flex-direction: column;
  transition: transform 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-text {
  line-height: 1em;
  white-space: nowrap;
}

/* HOVER */
.btn-pill:hover .btn-flex {
  transform: translateY(-50%);
}
</style>
