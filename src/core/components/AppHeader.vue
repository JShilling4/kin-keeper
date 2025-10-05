<script setup lang="ts">
import { layoutKey, ICON_NAMES, type ILayout } from "@/core/types";

const { height = "5rem" } = defineProps<{ height?: string }>();

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => height,
  (newValue) => {
    $layout.header.height = newValue;
  },
  { immediate: true }
);

function toggleLeftDrawer() {
  $layout.leftDrawer.isVisible = !$layout.leftDrawer.isVisible;
}
</script>

<template>
  <header class="app-header">
    <div class="fit flex items-center px-sm">
      <BaseIcon
        v-if="!$layout.leftDrawer.isFixed"
        :name="ICON_NAMES.Menu"
        color="#fff"
        size="2x"
        class="left-drawer-toggle"
        @click="toggleLeftDrawer"
      />
      <div class="app-header-title">Kin Keeper</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: v-bind(height);
  z-index: 2000;

  &-title {
    color: #fff;
    margin-left: var(--space-sm);
  }
}
</style>
