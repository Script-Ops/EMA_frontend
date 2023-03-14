<template>
  <v-menu activator="#user-dropdown">
    <v-list>
      <v-list-item
        v-for="(item, index) in userDropdownItems"
        :key="index"
        :value="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :subtitle="item.subtitle"
        :href="item.url"
      >
      </v-list-item>
      <v-divider />
      <v-list-item
        prepend-icon="mdi-logout"
        title="Logout"
        @click="userStore.logOut()"
      >
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
import { useUserStore } from "~~/stores/userStore";

const userDropdownItems = [
  { title: "Profile", icon: "mdi-account", subtitle: "", url: "#" },
  { title: "Settings", icon: "mdi-cog", subtitle: "", url: "#" },
  { title: "Help", icon: "mdi-help-circle", subtitle: "", url: "#" },
];

const userStore = useUserStore();
</script>

<style lang="scss" scoped>
// scss
</style>
