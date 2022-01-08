<script setup lang="ts"></script>

<template>
  <div class="LoadingCircle">
    <div class="LoadingCircle__circle LoadingCircle__circle--1"></div>
    <div class="LoadingCircle__circle LoadingCircle__circle--2"></div>
  </div>
</template>

<style lang="scss" scoped>
.LoadingCircle,
.LoadingCircle * {
  box-sizing: border-box;
}
.LoadingCircle {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  &__circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(24px / 10) solid transparent;
    &--1 {
      border-top-color: white;
      animation: spinning 1.69s var(--mainCubic) infinite;
    }
    &--2 {
      border-bottom-color: white;
      animation: spinning 1.69s var(--mainCubic) infinite alternate;
    }
  }
}
@keyframes spinning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
