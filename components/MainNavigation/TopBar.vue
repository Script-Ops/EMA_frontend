<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>ScrumTool</v-app-bar-title>

    <v-text-field
      v-if="showSearch"
      density="compact"
      variant="outlined"
      label="Search..."
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      class="mx-2"
    ></v-text-field>

    <template v-slot:append>
      <!-- //green "chat" button with icon -->
      <v-btn color="blue" class="mx-2" variant="tonal">
        <v-badge :content="2" color="error" :bordered="true" floating>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-btn
        color="success"
        variant="tonal"
        class="mx-2"
        prepend-icon="mdi-message-text"
        >Chat</v-btn
      >
      <!-- notifications -->

      <v-btn
        size="x-large"
        id="user-dropdown"
        class="mx-2 px-0"
        v-if="currentUser"
      >
        <v-list-item
          :prepend-avatar="currentUser.avatar"
          :title="currentUser.name"
          :subtitle="'@' + currentUser.username"
        >
        </v-list-item>
      </v-btn>
      <MainNavigationUserDropdown />
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ICurrentUser } from "~~/interfaces/currentUser";
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const showSearch = ref(true);
const currentUser: ICurrentUser | null = userStore.currentUser;
</script>

<style lang="scss" scoped>
// scss
</style>
