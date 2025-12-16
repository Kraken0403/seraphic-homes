<template>
  <section
    class="w-full bg-white
           px-[15px] md:px-[30px]
           py-[80px] md:py-[110px]"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-3
             text-center gap-20 md:gap-0 w-full"
    >
      <!-- TALK -->
      <div class="flex py-6 flex-col items-center gap-4">
        <Icon name="uil:phone" class="text-[38px] mb-1" />
        <h2 class="text-[clamp(32px,5.1vw,42px)]">
          Talk
        </h2>
        <a
          href="tel:09898087501"
          class="text-[clamp(16px,3vw,22px)]
                 hover:underline underline-offset-4"
        >
          +91-98980 87501
        </a>
      </div>

      <!-- VISIT -->
      <div
        class="flex flex-col items-center gap-4
               border-y py-6 md:border-y-0 md:border-x px-6"
      >
        <Icon name="uil:location-point" class="text-[38px] mb-1" />
        <h2 class="text-[clamp(32px,5.1vw,42px)]">
          Visit
        </h2>
        <p
          class="text-[clamp(16px,3vw,22px)]
                 leading-relaxed max-w-[420px]"
        >
          <span class="text-[#E96B2C] font-[900]">
            Seraphic Homes
          </span><br />
          Ground & Mazzanine Floor, Eyecon Corporate House, Opp Allen Institute,<br />
          Sindhubhavan Hall Lane, Off Sindhu Bhavan Road,<br />
          Ahmedabad 380054, Gujarat
        </p>
      </div>

      <!-- WRITE -->
      <div class="flex py-6 flex-col items-center gap-4">
        <Icon name="uil:envelope" class="text-[38px] mb-1" />
        <h2 class="text-[clamp(32px,5.1vw,42px)]">
          Write
        </h2>
        <a
          href="mailto:contact@seraphichomes.in"
          class="text-[clamp(16px,3vw,22px)]
                 hover:underline underline-offset-4"
        >
          contact@seraphichomes.in
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// no JS needed
</script>
