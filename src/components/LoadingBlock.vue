<script setup lang="ts"></script>

<template>
  <div class="LoadingBlock">
    <div class="scaling-squares-spinner">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LoadingBlock {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scaling-squares-spinner,
.scaling-squares-spinner * {
  box-sizing: border-box;
}

.scaling-squares-spinner {
  height: 64px;
  width: 64px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation 1250ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);
}

.scaling-squares-spinner .square {
  height: calc(64px * 0.25 / 1.3);
  width: calc(64px * 0.25 / 1.3);
  margin-right: auto;
  margin-left: auto;
  border-radius: 2px;
  border: calc(64px * 0.05 / 1.3) solid var(--mainColor);
  position: absolute;
  animation-duration: 1250ms;
  animation-timing-function: var(--mainCubic);
  animation-iteration-count: infinite;
}

.scaling-squares-spinner .square:nth-child(1) {
  animation-name: scaling-squares-spinner-animation-child-1;
}

.scaling-squares-spinner .square:nth-child(2) {
  animation-name: scaling-squares-spinner-animation-child-2;
}

.scaling-squares-spinner .square:nth-child(3) {
  animation-name: scaling-squares-spinner-animation-child-3;
}

.scaling-squares-spinner .square:nth-child(4) {
  animation-name: scaling-squares-spinner-animation-child-4;
}

@keyframes scaling-squares-animation {
  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@keyframes scaling-squares-spinner-animation-child-1 {
  50% {
    transform: translate(150%, 150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-2 {
  50% {
    transform: translate(-150%, 150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-3 {
  50% {
    transform: translate(-150%, -150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-4 {
  50% {
    transform: translate(150%, -150%) scale(2, 2);
  }
}
</style>
