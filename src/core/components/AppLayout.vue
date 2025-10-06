<script setup lang="ts">
import { layoutKey, type ILayout } from "@/core/types";

const $layout = inject<ILayout>(layoutKey) as ILayout;
</script>

<template>
  <div class="app-layout">
    <AppDrawer
      v-model="$layout.leftDrawer.isOpen"
      side="left"
      bgColor="var(--side-nav-bg-color)"
    />
    <AppHeader />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  position: relative;
  width: 100%;
  min-height: 100%;
}
</style>
