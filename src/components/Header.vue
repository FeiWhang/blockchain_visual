<script setup lang="ts">
import { ref, inject } from "vue";
import { myScreen } from "@/composables/screen";

const screen: myScreen = inject("screen") as myScreen;
const showMobileDialog = ref(false);
</script>

<template>
  <header
    class="Header"
    :class="'Header--' + screen.type"
    :style="{
      'background-color':
        screen.scroll > 128 ? 'var(--bgColor)' : 'transparent',
    }"
  >
    <div class="Header__container">
      <div class="Header__navContainer">
        <a class="Header__logo" aria-label="Click logo to go back home">
          <svg
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 69.8348V25.9906L47 43.6938V87.5379L3 69.8348Z"
              fill="url(#paint0_linear_134_7)"
              fill-opacity="0.8"
              stroke="#010E14"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M93 69.8348V25.9906L49 43.6938V87.5379L93 69.8348Z"
              fill="url(#paint1_linear_134_7)"
              fill-opacity="0.9"
              stroke="#010E14"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path
              d="M91.3211 24.5103L48 7.07793L4.6789 24.5103L48 41.9403L91.3211 24.5103Z"
              fill="url(#paint2_linear_134_7)"
              stroke="#010E14"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_134_7"
                x1="25"
                y1="24.5104"
                x2="25"
                y2="89.0182"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CED1F3" />
                <stop offset="1" stop-color="#D8F3FD" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_134_7"
                x1="71"
                y1="24.5104"
                x2="71"
                y2="89.0182"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CED1F3" />
                <stop offset="1" stop-color="#D8F3FD" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_134_7"
                x1="48"
                y1="6"
                x2="48"
                y2="43.0182"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D2D4EA" />
                <stop offset="1" stop-color="#D8F3FD" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <nav class="HeaderNav">
          <ul class="HeaderNav__list">
            <li class="HeaderNav__item" id="link1">
              <a class="HeaderNav__link">Hash</a>
            </li>
            <li class="HeaderNav__item" id="link2">
              <a class="HeaderNav__link">Block</a>
            </li>
            <li class="HeaderNav__item" id="link3">
              <a class="HeaderNav__link">Blockchain</a>
            </li>
            <li class="HeaderNav__item" id="link4">
              <a class="HeaderNav__link">Coinbase</a>
            </li>
          </ul>
        </nav>
        <div class="Header__rightAction">
          <button class="Cta Header__cta">Show guide</button>
          <button class="Header__mobileHam" @click="showMobileDialog = true">
            <svg
              viewBox="0 0 36 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_114_571)">
                <path
                  d="M1.95001 2.95001H33.95"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15L34 15"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 27L34 27"
                  stroke="black"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_114_571">
                  <rect width="36" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition name="moveInOut">
      <div class="Header__mobileDialog" v-if="showMobileDialog">
        <button class="Header__mobileClose" @click="showMobileDialog = false">
          <svg viewBox="0 0 16 10">
            <title>Close mobile navigation</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
              fill="var(--textColor)"
            />
          </svg>
        </button>
        <nav class="HeaderNav HeaderNav--mobile">
          <ul class="HeaderNav__list">
            <li class="HeaderNav__item">
              <a class="HeaderNav__link">Hash</a>
            </li>
            <li class="HeaderNav__item">
              <a class="HeaderNav__link">Block</a>
            </li>
            <li class="HeaderNav__item">
              <a class="HeaderNav__link">Blockchain</a>
            </li>
            <li class="HeaderNav__item">
              <a class="HeaderNav__link">Coinbase</a>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/const.scss";

.Header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: transparent;
  transition: var(--bgTransition);
  &__container {
    max-width: var(--layoutWidth);
    margin: 0 auto;
    padding: 0 var(--layoutPadding);
  }
  &__navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--headerHeight);
    padding: var(--innerPadding);
  }
  &__logo {
    margin-right: var(--logoMarginRight);
    svg {
      cursor: pointer;
      width: var(--headerLogoWidth);
    }
    opacity: 0;
    transform: translate3d(0, -16px, 0);
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic) forwards;
  }
  &__rightAction {
    display: flex;
    align-items: center;
    column-gap: var(--rightActionGap);
  }
  &__cta {
    color: var(--lightTextColor);
    background-color: var(--mainColor8);
    transition: var(--buttonHoverTransition);
    padding: var(--buttonPaddingS);
    &:hover {
      box-shadow: 4px 5px 4px var(--mainColor6);
      transform: translate3d(-1px, -2px, 0);
    }
    opacity: 0;
    transform: translate3d(0, -16px, 0);
    animation: var(--ctaAnimation);
  }
  &__mobileHam {
    display: var(--mobileNavDisplay);
    svg {
      width: var(--hamSize);
      path {
        stroke: var(--lightTextColor);
      }
    }
    opacity: 0;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration) * 1.5) forwards;
  }
  .HeaderNav {
    display: var(--desktopNavDisplay);
    &__list {
      display: flex;
      flex-direction: var(--navOrient);
      align-items: center;
      list-style: none;
      row-gap: var(--gapL);
    }
    &__item {
      display: list-item;
    }
    #link1,
    #link2,
    #link3,
    #link4 {
      opacity: 0;
      transform: translate3d(0, -16px, 0);
    }
    #link1 {
      animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 1) forwards;
    }
    #link2 {
      animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 1.5) forwards;
    }
    #link3 {
      animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 2) forwards;
    }
    #link4 {
      animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 2.5) forwards;
    }
    &__link {
      padding: var(--buttonPadding);
      font-size: var(--navLinkFontSize);
      transition: var(--colorTransition);
      color: var(--lightTextColor);
      &:hover {
        color: var(--mainColor);
      }
    }
    &--mobile {
      display: block;
    }
  }
  &__mobileDialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--mainColor9);
  }
  &__mobileClose {
    width: calc(var(--hamSize) + 4px);
    position: fixed;
    top: calc(var(--layoutPadding) + 8px);
    right: calc(var(--layoutPadding) + 8px);
    fill: var(--lightTextColor);
  }

  // responsive variables
  --desktopNavDisplay: block;
  --mobileNavDisplay: none;
  --logoMarginRight: calc(128px - var(--headerLogoWidth));
  --ctaAnimation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
    calc(var(--revealDuration) * 3.5) forwards;
  --rightActionGap: var(--gapL);
  --navOrient: row;
  --navLinkFontSize: var(--fontS);
  --hamSize: 24px;
  &--xs,
  &--sm {
    --desktopNavDisplay: none;
    --mobileNavDisplay: flex;
    --logoMarginRight: 0;
    --ctaAnimation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      var(--revealDuration) forwards;
    --rightActionGap: var(--gapM);
    --navOrient: column;
    --navLinkFontSize: calc(var(--fontM) * 1.5);
  }
}

// animation
.moveInOut-enter-active {
  animation: moveIn 0.25s var(--mainCubic);
  backface-visibility: hidden;
}
.moveInOut-leave-active {
  animation: moveOut 0.25s var(--mainCubic);
  backface-visibility: hidden;
}
@keyframes moveIn {
  0% {
    transform: translate3d(-100vw, 0, 0);
    transform-origin: right;
  }
  100% {
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
}
@keyframes moveOut {
  0% {
    transform: translate3d(0, 0, 0);
    transform-origin: right;
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
    transform-origin: right;
  }
}
</style>
