<template>
  <v-main>
    <h1>Index page</h1>
  </v-main>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
