<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import { myScreen, useScreen } from "@/composables/screen";
import Header from "@/components/Header.vue";

const screen = ref(useScreen()) as Ref<myScreen>;

// set default dark to device theme
const isDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
// detect user-theme and set to isDark
const userTheme = localStorage.getItem("user-theme");
if (userTheme) {
  isDark.value = userTheme === "dark";
}

provide("isDark", isDark);
provide("screen", screen);
</script>

<template>
  <div
    class="Content"
    :class="['Content--' + screen.type, isDark ? 'Content--dark' : '']"
  >
    <Header />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/scss/fonts.scss";
@import "./assets/scss/main.scss";
@import "./assets/scss/const.scss";

#app {
  font-family: Inter, Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
