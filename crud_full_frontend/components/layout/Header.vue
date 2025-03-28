<template>
  <div class="layout-header-style bg-primary-white">
    <div class="flex flex-column w-50">
      <span class="f-s-16 f-w-600 color-primary">FULL STACK TASK</span>
      <span class="f-s-10 f-w-500 color-gray">WITH NUXT JS AND NEST JS</span>
    </div>
    <div class="flex justify-end w-50">
      <IconsPlusCircle class="cursor-pointer" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.layout-header-style {
  width: 95%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #d1cdcd53;
  padding: 0 10px;
}
@media (max-width: 800px) {
  .layout-header-style {
    width: 90%;
  }
}
</style>
