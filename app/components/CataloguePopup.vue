<template>
    <Teleport to="body">
      <div
        v-if="open"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <!-- MODAL -->
        <div
          class="relative w-[92%] max-w-[420px] bg-white rounded-xl px-8 py-10"
        >
          <!-- CLOSE -->
          <button
            class="absolute top-4 right-4 text-sm opacity-60 hover:opacity-100"
            @click="$emit('close')"
          >
            ✕
          </button>
  
          <!-- LOGO -->
          <div class="flex justify-center mb-6">
            <img :src="popupLogo" class="w-[160px]" />
          </div>
  
          <!-- NOTE -->
          <p class="text-center text-[14px] opacity-80 mb-6 leading-[1.5]">
            Share your details below and we’ll send you our curated catalogue of
            luxury kitchens and handcrafted bedroom solutions.
          </p>
  
          <!-- SUCCESS -->
          <div
            v-if="status === 'success'"
            class="text-center text-green-600"
          >
            <p class="text-[16px] text-green-600">
              Thank you! Our catalogue will reach you shortly.
            </p>
          </div>
  
          <!-- ERROR -->
          <div
            v-else-if="status === 'error'"
            class="text-center"
          >
            <p class="text-[16px] text-red-500">
              Something went wrong. Please try again later
            </p>
          </div>
  
          <!-- FORM -->
          <form
            v-else
            class="flex flex-col gap-4"
            @submit.prevent="submit"
          >
            <input
              v-model="form.name"
              type="text"
              placeholder="Full Name "
              required
              class="input"
            />
  
            <input
              v-model="form.email"
              type="email"
              placeholder="Email Address "
              required
              class="input"
            />
  
            <div class="flex gap-2">
              <select v-model="form.code" class="input w-[20%]">
                <option value="+91">+91</option>
              </select>
  
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Mobile Number "
                required
                class="input w-[80%]"
              />
            </div>
  
            <button
              type="submit"
              class="btn-pill mt-4"
            >
              <div class="btn-inner">
                <div class="btn-flex">
                  <div class="btn-text top">Get Catalogue</div>
                  <div class="btn-text bottom">Get Catalogue</div>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from "vue"
  import popupLogo from '@/assets/images/logo-h-black.png'
  
  defineProps({
    open: Boolean,
    logo: String
  })
  
  defineEmits(["close"])
  
  const form = ref({
    name: "",
    email: "",
    phone: "",
    code: "+91"
  })
  
  const status = ref("idle") // idle | success | error
  
  async function submit() {
    try {
      await new Promise(res => setTimeout(res, 900))
      status.value = "success"
    } catch (e) {
      status.value = "error"
    }
  }
  </script>
  
  <style scoped>
  .input {
    padding: 12px 14px;
    border-radius: 8px;
    background: #f3f3f3;
    border: 1px solid #e1e1e1;
    outline: none;
    font-size: 14px;
  }
  
  .btn-pill {
    padding: 12px 22px;
    border-radius: 100vw;
    display: flex;
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
  }
  
  /* TEXT STACK */
  .btn-inner {
    height: 1em;
    overflow: hidden;
    line-height: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .btn-text {
    line-height: 1em;
    white-space: nowrap;
    transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .btn-flex {
    display: flex;
    flex-direction: column;
    transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* HOVER ANIMATION */
  .btn-pill:hover .btn-flex {
    transform: translateY(-50%);
  }
  </style>
  