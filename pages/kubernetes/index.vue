<template>
  <v-main>
    <h1>Kubernetes page</h1>
  </v-main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
