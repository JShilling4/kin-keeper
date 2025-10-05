<script lang="ts" setup>
import { layoutKey } from "@/core/models";

const { layout: $layout } = useLayout();
provide(layoutKey, $layout);
</script>

<template>
  <AppLayout>
    <ViewContainer>
      <RouterView />
    </ViewContainer>
  </AppLayout>
</template>

<style lang="scss">
@use "./styles/scss/main.scss";

html,
body {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
