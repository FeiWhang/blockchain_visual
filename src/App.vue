<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import { myScreen, useScreen } from "@/composables/screen";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { Router, useRouter } from "vue-router";

const screen = ref(useScreen()) as Ref<myScreen>;
const router: Router = useRouter();
// set default dark to device theme
const isDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
// detect user-theme and set to isDark
const userTheme = localStorage.getItem("user-theme");
if (userTheme) {
  // userTheme not null
  isDark.value = userTheme === "dark";
}

provide("isDark", isDark);
provide("screen", screen);
</script>

<template>
  <div
    class="Content"
    :class="[
      'Content--' + screen.type,
      isDark ? 'Content--dark' : '',
      router.currentRoute.value.path == '/' ? 'Content--footer' : '',
    ]"
  >
    <Header />
    <router-view></router-view>
    <Footer v-if="router.currentRoute.value.path == '/'" />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/fonts.scss";
@import "./assets/scss/main.scss";
@import "./assets/scss/const.scss";

#app {
  font-family: Inter, Raleway, JetBrainsMono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
