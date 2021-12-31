<script setup lang="ts">
import { ref, inject } from "vue";
import { myScreen } from "@/composables/screen";

const screen: myScreen = inject("screen") as myScreen;
const showMobileDialog = ref(true);
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
          <button class="Header__mobileHam">
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
    <div class="Header__mobileDialog" v-if="showMobileDialog">
      <nav class="Header__mobileNav">
        <ul class="Header__mobileNavList">
          <li class="Header__mobileNavItem" id="mobileLink1">
            <a class="Header__mobileNavLink">Hash</a>
          </li>
          <li class="Header__mobileNavItem" id="mobileLink1">
            <a class="Header__mobileNavLink">Block</a>
          </li>
          <li class="Header__mobileNavItem" id="mobileLink1">
            <a class="Header__mobileNavLink">Blockchain</a>
          </li>
          <li class="Header__mobileNavItem" id="mobileLink1">
            <a class="Header__mobileNavLink">Coinbase</a>
          </li>
        </ul>
      </nav>
    </div>
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
    background-color: #022a3c;
    transition: var(--buttonHoverTransition);
    padding: var(--buttonPaddingS);
    &:hover {
      box-shadow: 4px 5px 4px #035377;
      transform: translate3d(-1px, -2px, 0);
    }
    opacity: 0;
    transform: translate3d(0, -16px, 0);
    animation: var(--ctaAnimation);
  }
  &__mobileHam {
    display: var(--mobileNavDisplay);
    svg {
      width: 24px;
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
      align-items: center;
      list-style: none;
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
      font-size: var(--fontS);
      transition: var(--colorTransition);
      color: var(--lightTextColor);
      &:hover {
        color: var(--mainColor);
      }
    }
  }

  // responsive variables
  --desktopNavDisplay: block;
  --mobileNavDisplay: none;
  --logoMarginRight: calc(128px - var(--headerLogoWidth));
  --ctaAnimation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
    calc(var(--revealDuration) * 3.5) forwards;
  --rightActionGap: var(--gapL);
  &--xs,
  &--sm {
    --desktopNavDisplay: none;
    --mobileNavDisplay: flex;
    --logoMarginRight: 0;
    --ctaAnimation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      var(--revealDuration) forwards;
    --rightActionGap: var(--gapM);
  }
}
</style>
