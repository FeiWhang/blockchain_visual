<script setup lang="ts">
import { ref, inject, Ref } from "vue";
import { myScreen } from "@/composables/screen";

const screen: myScreen = inject("screen") as myScreen;
const showMobileDialog = ref(false);
const isDark = inject("isDark") as Ref<boolean>;

function setTheme() {
  // save user-theme to storage, get after next reload
  localStorage.setItem("user-theme", isDark.value ? "light" : "dark");
  isDark.value = !isDark.value;
}
</script>

<template>
  <header class="Header" :class="'Header--' + screen.type">
    <div class="Header__container">
      <div class="Header__navContainer">
        <router-link class="Header__logo" to="/">
          <svg
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="LogoFrame">
              <g id="LogoBlock">
                <path
                  id="Front"
                  d="M2 27.5177L46.0961 45.2595V89.3555L2 71.6138V27.5177Z"
                  fill="#0B9CD5"
                />
                <path
                  id="Side"
                  d="M93.9658 27.5177L49.8697 45.2595V89.3555L93.9658 71.6138V27.5177Z"
                  fill="#16B4F3"
                />
                <path
                  id="Above"
                  d="M47.9828 6L3.88674 23.7443L47.9828 41.486L92.0789 23.7443L47.9828 6Z"
                  fill="#3DC1F5"
                />
              </g>
            </g>
          </svg>
        </router-link>
        <nav class="HeaderNav">
          <ul class="HeaderNav__list">
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/hash">Hash</router-link>
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/block"
                >Block</router-link
              >
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/blockchain"
                >Blockchain</router-link
              >
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/coin"
                >Coinbase</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="Header__rightAction">
          <button class="Header__theme" @click="setTheme">
            <svg
              v-if="!isDark"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4642 29C12.8933 29 9.4686 27.5815 6.94358 25.0564C4.41855 22.5314 3 19.1067 3 15.5358C3 10.0805 6.13391 5.18924 10.9862 3.07733C11.1573 3.0028 11.3468 2.9815 11.5301 3.01622C11.7133 3.05094 11.8819 3.14006 12.0138 3.27197C12.1457 3.40388 12.2349 3.57247 12.2696 3.75576C12.3043 3.93905 12.283 4.12854 12.2085 4.29956C11.6513 5.57866 11.3571 7.217 11.3571 9.03583C11.3571 15.436 16.564 20.6429 22.9642 20.6429C24.783 20.6429 26.4213 20.3487 27.7004 19.7915C27.8715 19.717 28.061 19.6957 28.2442 19.7304C28.4275 19.7651 28.5961 19.8543 28.728 19.9862C28.8599 20.1181 28.9491 20.2867 28.9838 20.4699C29.0185 20.6532 28.9972 20.8427 28.9227 21.0137C26.8108 25.8661 21.9195 29 16.4642 29Z"
                fill="black"
              />
            </svg>
            <svg
              v-if="isDark"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5 16C24.5 17.6811 24.0015 19.3245 23.0675 20.7223C22.1335 22.1202 20.806 23.2096 19.2528 23.853C17.6996 24.4963 15.9906 24.6647 14.3417 24.3367C12.6929 24.0087 11.1783 23.1992 9.98959 22.0104C8.80085 20.8217 7.9913 19.3071 7.66333 17.6583C7.33535 16.0094 7.50368 14.3004 8.14702 12.7472C8.79037 11.194 9.87983 9.8665 11.2777 8.93251C12.6755 7.99852 14.3189 7.5 16 7.5C18.2533 7.50331 20.4134 8.3999 22.0068 9.99324C23.6001 11.5866 24.4967 13.7467 24.5 16ZM16 5.5C16.2652 5.5 16.5196 5.39464 16.7071 5.20711C16.8946 5.01957 17 4.76522 17 4.5V3.5C17 3.23478 16.8946 2.98043 16.7071 2.79289C16.5196 2.60536 16.2652 2.5 16 2.5C15.7348 2.5 15.4804 2.60536 15.2929 2.79289C15.1054 2.98043 15 3.23478 15 3.5V4.5C15 4.76522 15.1054 5.01957 15.2929 5.20711C15.4804 5.39464 15.7348 5.5 16 5.5ZM7.1625 8.575C7.35154 8.75902 7.60494 8.86199 7.86875 8.86199C8.13257 8.86199 8.38596 8.75902 8.575 8.575C8.76201 8.38753 8.86704 8.13355 8.86704 7.86875C8.86704 7.60395 8.76201 7.34997 8.575 7.1625L7.8625 6.45C7.67228 6.27764 7.42305 6.18503 7.16643 6.19135C6.90982 6.19767 6.66545 6.30243 6.48394 6.48394C6.30243 6.66545 6.19767 6.90982 6.19135 7.16643C6.18503 7.42305 6.27764 7.67228 6.45 7.8625L7.1625 8.575ZM4.5 15H3.5C3.23478 15 2.98043 15.1054 2.79289 15.2929C2.60536 15.4804 2.5 15.7348 2.5 16C2.5 16.2652 2.60536 16.5196 2.79289 16.7071C2.98043 16.8946 3.23478 17 3.5 17H4.5C4.76522 17 5.01957 16.8946 5.20711 16.7071C5.39464 16.5196 5.5 16.2652 5.5 16C5.5 15.7348 5.39464 15.4804 5.20711 15.2929C5.01957 15.1054 4.76522 15 4.5 15ZM7.1625 23.425L6.45 24.1375C6.26299 24.325 6.15796 24.579 6.15796 24.8438C6.15796 25.1085 6.26299 25.3625 6.45 25.55C6.64196 25.7335 6.89696 25.8364 7.1625 25.8375C7.42449 25.8371 7.67584 25.7338 7.8625 25.55L8.575 24.8375C8.74736 24.6473 8.83997 24.3981 8.83365 24.1414C8.82733 23.8848 8.72257 23.6405 8.54106 23.4589C8.35955 23.2774 8.11518 23.1727 7.85857 23.1664C7.60195 23.16 7.35272 23.2526 7.1625 23.425V23.425ZM16 26.5C15.7348 26.5 15.4804 26.6054 15.2929 26.7929C15.1054 26.9804 15 27.2348 15 27.5V28.5C15 28.7652 15.1054 29.0196 15.2929 29.2071C15.4804 29.3946 15.7348 29.5 16 29.5C16.2652 29.5 16.5196 29.3946 16.7071 29.2071C16.8946 29.0196 17 28.7652 17 28.5V27.5C17 27.2348 16.8946 26.9804 16.7071 26.7929C16.5196 26.6054 16.2652 26.5 16 26.5ZM24.8375 23.425C24.6473 23.2526 24.3981 23.16 24.1414 23.1664C23.8848 23.1727 23.6405 23.2774 23.4589 23.4589C23.2774 23.6405 23.1727 23.8848 23.1664 24.1414C23.16 24.3981 23.2526 24.6473 23.425 24.8375L24.1375 25.55C24.3242 25.7338 24.5755 25.8371 24.8375 25.8375C25.103 25.8364 25.358 25.7335 25.55 25.55C25.737 25.3625 25.842 25.1085 25.842 24.8438C25.842 24.579 25.737 24.325 25.55 24.1375L24.8375 23.425ZM28.5 15H27.5C27.2348 15 26.9804 15.1054 26.7929 15.2929C26.6054 15.4804 26.5 15.7348 26.5 16C26.5 16.2652 26.6054 16.5196 26.7929 16.7071C26.9804 16.8946 27.2348 17 27.5 17H28.5C28.7652 17 29.0196 16.8946 29.2071 16.7071C29.3946 16.5196 29.5 16.2652 29.5 16C29.5 15.7348 29.3946 15.4804 29.2071 15.2929C29.0196 15.1054 28.7652 15 28.5 15ZM24.1375 8.8625C24.2675 8.86365 24.3963 8.83881 24.5165 8.78943C24.6367 8.74006 24.7459 8.66715 24.8375 8.575L25.55 7.8625C25.6504 7.77154 25.7312 7.66113 25.7877 7.53798C25.8441 7.41483 25.8749 7.28149 25.8782 7.14607C25.8816 7.01064 25.8574 6.87595 25.8071 6.75017C25.7568 6.62439 25.6814 6.51013 25.5857 6.41434C25.4899 6.31856 25.3756 6.24323 25.2498 6.19293C25.124 6.14264 24.9894 6.11842 24.8539 6.12175C24.7185 6.12509 24.5852 6.1559 24.462 6.21233C24.3389 6.26875 24.2285 6.34961 24.1375 6.45L23.425 7.1625C23.238 7.34997 23.133 7.60395 23.133 7.86875C23.133 8.13355 23.238 8.38753 23.425 8.575C23.5181 8.66868 23.6293 8.74247 23.7517 8.79189C23.8742 8.84131 24.0055 8.86533 24.1375 8.8625Z"
                fill="black"
              />
            </svg>
          </button>
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
      <div
        class="Header__mobileDialog"
        v-if="showMobileDialog"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <button class="Header__mobileClose" @click="showMobileDialog = false">
          <svg viewBox="0 0 16 10">
            <title>Close mobile navigation</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
            />
          </svg>
        </button>
        <nav class="HeaderNav HeaderNav--mobile">
          <ul class="HeaderNav__list">
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/hash">Hash</router-link>
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/block"
                >Block</router-link
              >
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/blockchain"
                >Blockchain</router-link
              >
            </li>
            <li class="HeaderNav__item">
              <router-link class="HeaderNav__link" to="/coin"
                >Coinbase</router-link
              >
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
    padding: var(--innerPadding) 0;
  }
  &__logo {
    svg {
      cursor: pointer;
      width: var(--headerLogoWidth);
    }
  }
  &__rightAction {
    display: flex;
    align-items: center;
    column-gap: var(--rightActionGap);
  }
  &__theme {
    svg {
      width: 28px;
      path {
        stroke: var(--mainColor);
        fill: var(--mainColor);
      }
    }
  }
  &__mobileHam {
    display: var(--mobileNavDisplay);
    svg {
      width: var(--hamSize);
      path {
        stroke: var(--mainColor1);
      }
    }
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

    &__link {
      padding: var(--buttonPadding);
      font-size: var(--navLinkFontSize);
      transition: var(--colorTransition);
      color: var(--mainColor1);
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
    background-color: var(--mainColor21);
  }
  &__mobileClose {
    width: calc(var(--hamSize) + 4px);
    position: fixed;
    top: calc(var(--layoutPadding) - 4px);
    right: calc(var(--layoutPadding) - 4px);
    fill: var(--mainColor1);
  }

  // responsive variables
  --desktopNavDisplay: block;
  --mobileNavDisplay: none;
  --rightActionGap: var(--gapL);
  --navOrient: row;
  --navLinkFontSize: var(--fontS);
  --hamSize: 24px;
  &--xs,
  &--sm {
    --desktopNavDisplay: none;
    --mobileNavDisplay: flex;
    --rightActionGap: var(--gapM);
    --navOrient: column;
    --navLinkFontSize: calc(var(--fontR) * 1.5);
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
