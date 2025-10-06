<script setup lang="ts">
import { ICON_NAMES } from "@/core/types";

export interface SideNavigationProps {
  miniMode?: boolean;
}

const { miniMode = false } = defineProps<SideNavigationProps>();
</script>

<template>
  <div class="side-navigation">
    <router-link to="/" class="navlink">
      <BaseIcon :name="ICON_NAMES.Home" class="navlink-icon" />
      <div class="navlink-text" :class="{ 'navlink-text--hidden': !miniMode }">
        Home
      </div>
    </router-link>
    <router-link to="/budget" class="navlink">
      <BaseIcon :name="ICON_NAMES.Budget" class="navlink-icon" />
      <div class="navlink-text" :class="{ 'navlink-text--hidden': !miniMode }">
        Budget
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.side-navigation {
  padding: var(--space-sm);
  background-color: var(--side-nav-bg-color);
  height: 100%;

  .navlink {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-bottom: var(--space-sm);
    align-items: center;
    color: #fff;

    &-icon {
      font-size: 1.7rem;
      justify-self: center;
    }

    &-text {
      margin-left: var(--space-xs);
      transition: all 0.3s ease-in-out;

      &--hidden {
        opacity: 0;
        width: 0;
        overflow: hidden;
        margin-left: 0;
      }
    }
  }
}
</style>
