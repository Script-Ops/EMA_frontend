<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="mdi-account"
                  type="text"
                  name="username"
                  label="Username"
                  v-model="username"
                  autocomplete="username"
                />
                <v-text-field
                  prepend-icon="mdi-lock"
                  type="password"
                  name="password"
                  label="Password"
                  v-model="password"
                  autocomplete="current-password"
                />
                <v-spacer />
                <!-- <v-btn color="primary" text>Forgot Password?</v-btn> -->
                <v-btn
                  block
                  color="primary"
                  variant="outlined"
                  :disabled="!isFormValid"
                  @click="logIn"
                  >Login</v-btn
                >
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { useUserStore } from "~~/stores/userStore";

definePageMeta({
  layout: "login",
});

const userStore = useUserStore();
const route = useRoute();

const username = ref("");
const password = ref("");

const isFormValid = computed(() => {
  return username.value.length > 0 && password.value.length > 0;
});

function logIn() {
  if (!isFormValid.value) return;
  userStore.logIn(
    {
      username: username.value,
      password: password.value,
    },
    route.query.redirect as string
  );
}
</script>

<style lang="scss" scoped>
// scss
</style>
