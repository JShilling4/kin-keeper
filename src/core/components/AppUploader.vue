<script setup lang="ts">
const model = defineModel<File>();
</script>

<template>
  <QFile rounded v-model="model" />
</template>
