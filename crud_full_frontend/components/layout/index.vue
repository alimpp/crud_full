<template>
  <div class="w-100 h-100-dvh default-layout-style bg-secondary-white">
    <div class="main-content">
      <div class="header-content">
        <LayoutHeader @addTask="addTask" />
      </div>
      <div class="router-content">
        <NuxtPage />
      </div>
    </div>
    <BasePageLoading v-if="pageLoading" />
    <BaseToastBar />
    <ModalsAddTask
      :isOpen="addTaskModalState"
      @close="addTaskModalState = false"
    />
  </div>
</template>

<script setup>
import { BaseAppStoreElementModule } from "@/stores/baseApp";

const pageLoading = computed(() => {
  return BaseAppStoreElementModule.loading.value;
});

const addTaskModalState = ref(false);
const addTask = () => {
  addTaskModalState.value = true;
};
</script>

<style scoped>
.default-layout-style {
  display: flex;
}
.main-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

.header-content {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.router-content {
  height: 90dvh;
  overflow-y: scroll;
  padding: 0 34px;
}

@media (max-width: 1600px) {
  .router-content {
    padding: 0 28px;
  }
}

@media (max-width: 1400px) {
  .router-content {
    padding: 0 22px;
  }
}

@media (max-width: 1200px) {
  .router-content {
    padding: 0 18px;
  }
}

@media (max-width: 1000px) {
  .router-content {
    padding: 0 15px;
  }
}

.router-content::-webkit-scrollbar {
  display: none;
}

.sidebar-content {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-size {
  display: none;
}

@media (max-width: 800px) {
  .sidebar-content {
    display: none;
  }
  .mobile-size {
    display: flex;
  }
}
</style>
