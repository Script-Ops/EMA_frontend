<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <template v-for="(item, i) in mainMenu" :key="i">
        <v-list-item
          :append-icon="
            item.childNodes && route.path.match(new RegExp(`/${name}.*`, 'gm'))
              ? 'mdi-chevron-down'
              : 'mdi-chevron-right'
          "
          :to="item.url"
          :exact="item.exact"
          :prepend-icon="item.icon"
          :title="item.title"
          nuxt
        >
        </v-list-item>
        <v-list-item
          class="ml-12"
          v-if="
            item.childNodes && route.path.match(new RegExp(`/${name}.*`, 'gm'))
          "
          v-for="(child, i) in item.childNodes"
          :key="i"
          :to="child.url"
          :exact="child.exact"
          :prepend-icon="child.icon"
          :title="child.title"
          nuxt
        >
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const route = useRoute();
const name = "scrum";
const mainMenu = [
  {
    title: "Home",
    icon: "mdi-home",
    url: "/",
    exact: true,
  },
  {
    title: "Scrum",
    icon: "mdi-reiterate",
    url: "/scrum",
    exact: false,
    childNodes: [
      {
        title: "Sprint",
        icon: "mdi-ray-start-arrow",
        url: "/scrum/sprint",
        exact: false,
      },
      //board
      {
        title: "Board",
        icon: "mdi-view-dashboard-variant",
        url: "/scrum/board",
        exact: false,
      },
    ],
  },
  {
    title: "Kubernetes",
    icon: "mdi-kubernetes",
    url: "/kubernetes",
    exact: false,
  },
  {
    title: "Tests",
    icon: "mdi-test-tube",
    url: "/tests",
    exact: false,
  },
  // status
  {
    title: "Status",
    icon: "mdi-list-status",
    url: "/status",
    exact: false,
  },
  //statistics
  {
    title: "Statistics",
    icon: "mdi-chart-timeline-variant",
    url: "/statistics",
    exact: false,
  },
  {
    title: "Calendar",
    icon: "mdi-calendar",
    url: "/calendar",
    exact: false,
  },
  {
    title: "Documentation",
    icon: "mdi-file-document",
    url: "/documentation",
    exact: false,
  },
  {
    title: "Time Tracking",
    icon: "mdi-timer-sand",
    url: "/time-tracking",
    exact: false,
  },
];
</script>

<style lang="scss" scoped>
// scss
</style>
