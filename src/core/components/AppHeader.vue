<script setup lang="ts">
import { layoutKey, type ILayout } from "@/core/types";

const { height = "5rem" } = defineProps<{ height?: string }>();

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => height,
  (newValue) => {
    $layout.header.height = newValue;
  },
  { immediate: true }
);
</script>

<template>
  <header class="app-header">
    <div class="app-header-content">
      <div class="app-header-title">Kin Keeper</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  top: 0;
  left: v-bind("$layout.leftDrawer.width");
  width: 100%;
  height: v-bind(height);
  z-index: 2000;
  background-color: var(--tertiary-color);
  transition: all 0.3s ease-in-out;

  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 var(--space-sm);
  }

  &-title {
    color: #fff;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 1.2px;
    transition: margin-left 0.3s ease-in-out;
  }
}
</style>
