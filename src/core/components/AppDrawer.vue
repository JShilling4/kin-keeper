<script setup lang="ts">
import { ICON_NAMES, layoutKey, type ILayout } from "@/core/types";

export interface AppDrawerProps {
  modelValue: boolean;
  side: "left" | "right";
  bgColor?: string;
  fixed?: boolean;
}

const {
  modelValue,
  side,
  bgColor,
  fixed = false,
} = defineProps<AppDrawerProps>();

const $layout = inject<ILayout>(layoutKey) as ILayout;

watch(
  () => modelValue,
  (show) => {
    if (show) $layout.leftDrawer.width = $layout.leftDrawer.maxWidth;
    else $layout.leftDrawer.width = $layout.leftDrawer.minWidth;
  },
  { immediate: true }
);

watch(
  () => fixed,
  (fix) => {
    if (fix) $layout.leftDrawer.isFixed = true;
    else $layout.leftDrawer.isFixed = false;
  },
  { immediate: true }
);

function toggleLeftDrawer() {
  $layout.leftDrawer.isOpen = !$layout.leftDrawer.isOpen;
}
</script>

<template>
  <aside :class="['app-drawer', { 'app-drawer--hidden': !modelValue }]">
    <BaseIcon
      v-if="!$layout.leftDrawer.isFixed"
      :name="ICON_NAMES.Menu"
      color="#fff"
      size="2x"
      class="app-drawer-toggle"
      @click="toggleLeftDrawer"
    />
    <div class="app-drawer-content">
      <SideNavigation :mini-mode="$layout.leftDrawer.isOpen" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.app-drawer {
  position: v-bind("fixed ? 'fixed' : 'initial'");
  top: 0;
  left: v-bind("side === 'left' ? 0 : 'initial'");
  right: v-bind("side === 'right' ? 0 : 'initial'");
  height: calc(100vh - 5rem);
  width: v-bind("$layout.leftDrawer.width");
  overflow: hidden;
  background-color: v-bind(bgColor);
  transition: width 0.3s ease-in-out;

  &--hidden {
    width: v-bind("$layout.leftDrawer.minWidth");
  }

  &-content {
    padding-top: v-bind("$layout.header.height");
  }

  &-toggle {
    position: absolute;
    top: calc(v-bind("$layout.header.height") / 2 - 15px);
    left: var(--space-sm);
  }
}
</style>
