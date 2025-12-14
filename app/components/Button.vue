<template>
  <NuxtLink
    class="btn-pill"
    :to="href"
    :style="{
      backgroundColor: bgColor,
      color: textColor,
      borderColor: borderColor
    }"
  >
    <div class="btn-inner">
      <div class="btn-flex">
        <div class="btn-text top">{{ label }}</div>
        <div class="btn-text bottom">{{ label }}</div>
      </div>
    </div>

    <div
      class="g-circle"
      :style="{ background: textColor }"
    ></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "learn more about our studio"
  },
  href: {
    type: String,
    default: "/"
  },

  bgColor: {
    type: String,
    default: "#1a1a1a"
  },
  textColor: {
    type: String,
    default: "#fff"
  },
  borderColor: {
    type: String,
    default: "#1a1a1a"
  }
});
</script>

<style lang="scss" scoped>
.btn-pill {
  padding: 12px 22px;
  border-radius: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-family: "Instrument Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-variation-settings: "wght" 650;

  cursor: pointer;
  text-decoration: none;
  position: relative;
  border: 1px solid transparent;
}

/* DOT */
.g-circle {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  transform: translateY(0);
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-flex {
  display: flex;
  flex-direction: column;
  gap: 0px;
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* HOVER */
.btn-pill:hover .btn-flex {
  transform: translateY(-50%);
}

.btn-pill:hover .g-circle {
  width: 9px;
  height: 9px;
  background: transparent !important;
  border: 1px solid currentColor;
}
</style>
