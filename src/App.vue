<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import { useScreen } from "./composables/screen";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

const screen: Ref = ref(useScreen());
provide("screen", screen);
</script>

<template>
  <div class="Content" :class="'Content--' + screen.type">
    <Header />
    <Home />
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

html {
  background-color: #010e14;
}
</style>
