<template>
  <div
    class="base-chip"
    :style="{ width: width, height: height }"
    :class="[bg, color, border]"
  >
    <div class="flex align-center">
      <slot name="iconRight"></slot>
      <span :class="[fontSize, fontWight, color]"> {{ name }}</span>
      <slot name="iconLeft"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "bg-primary",
  },
  color: {
    type: String,
    default: "color-primary-white",
  },
  fontSize: {
    type: String,
    default: "f-s-12",
  },
  fontWight: {
    type: String,
    default: "f-w-500",
  },
  name: {
    type: String,
    default: "",
  },
  border: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "70px",
  },
  height: {
    type: String,
    default: "26px",
  },
});
</script>

<style scoped>
.base-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: none;
}
</style>
