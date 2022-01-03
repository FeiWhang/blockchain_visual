<script setup lang="ts">
import { Ref, ref } from "vue";
import { getHash } from "@/composables/blockchain";

const data: Ref<string> = ref<string>("");
const hash: Ref<string> = ref<string>(
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
);

function onDataChange() {
  hash.value = getHash(data.value);
}
</script>

<template>
  <section class="Section Hash">
    <div class="Section__container Hash__container">
      <h1 class="Hash__title">Hash</h1>
      <form @submit.prevent class="Hash__form">
        <div class="Hash__inputContainer">
          <label for="data" class="Hash__label"
            ><svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 28H17.825C17.6951 27.9773 17.5711 27.9293 17.4598 27.8585C17.3486 27.7878 17.2525 27.6957 17.177 27.5877C17.1015 27.4796 17.0481 27.3577 17.0199 27.229C16.9916 27.1002 16.9891 26.9672 17.0125 26.8375L18.075 21.0125H12.1125L10.9875 27.1875C10.9645 27.3171 10.9162 27.441 10.8454 27.552C10.7745 27.6631 10.6825 27.759 10.5745 27.8345C10.4666 27.9099 10.3448 27.9634 10.2162 27.9918C10.0876 28.0202 9.95468 28.0229 9.825 28C9.69532 27.977 9.57144 27.9287 9.46042 27.8578C9.34941 27.787 9.25344 27.6949 9.17799 27.587C9.10254 27.479 9.04909 27.3573 9.0207 27.2287C8.9923 27.1001 8.98952 26.9671 9.0125 26.8375L10.075 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5195 3 20.2652 3 20C3 19.7347 3.10536 19.4804 3.29289 19.2929C3.48043 19.1053 3.73478 19 4 19H10.4375L11.525 13H5.45C5.18478 13 4.93043 12.8946 4.74289 12.7071C4.55536 12.5195 4.45 12.2652 4.45 12C4.45 11.7347 4.55536 11.4804 4.74289 11.2929C4.93043 11.1053 5.18478 11 5.45 11H11.8875L13.0125 4.82496C13.0589 4.56306 13.2075 4.33032 13.4255 4.17795C13.5334 4.1025 13.6552 4.04906 13.7838 4.02066C13.9124 3.99227 14.0453 3.98948 14.175 4.01246C14.3047 4.03544 14.4286 4.08374 14.5396 4.1546C14.6506 4.22546 14.7466 4.31749 14.822 4.42544C14.8975 4.53338 14.9509 4.65514 14.9793 4.78374C15.0077 4.91234 15.0105 5.04528 14.9875 5.17496L13.925 11H19.8875L21.0125 4.82496C21.0589 4.56306 21.2075 4.33032 21.4255 4.17795C21.6435 4.02558 21.9131 3.96605 22.175 4.01246C22.4369 4.05887 22.6696 4.20743 22.822 4.42544C22.9744 4.64345 23.0339 4.91306 22.9875 5.17496L21.925 11H28C28.2652 11 28.5196 11.1053 28.7071 11.2929C28.8946 11.4804 29 11.7347 29 12C29 12.2652 28.8946 12.5195 28.7071 12.7071C28.5196 12.8946 28.2652 13 28 13H21.5625L20.475 19H26.55C26.8152 19 27.0696 19.1053 27.2571 19.2929C27.4446 19.4804 27.55 19.7347 27.55 20C27.55 20.2652 27.4446 20.5195 27.2571 20.7071C27.0696 20.8946 26.8152 21 26.55 21H20.1125L18.9875 27.175C18.9463 27.4067 18.8247 27.6165 18.6441 27.7674C18.4634 27.9183 18.2354 28.0007 18 28ZM12.475 19H18.4375L19.525 13H13.5625L12.475 19Z"
                fill="black"
              />
            </svg>
            SHA256 Hash</label
          >
          <div class="Hash__input Hash__input--placeholder">
            <p class="Hash__placeholder" :key="hash">
              {{ hash }}
            </p>
          </div>
        </div>
        <div class="Hash__inputContainer">
          <label for="data" class="Hash__label">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 30C6.0111 30 5.0444 29.7068 4.22215 29.1574C3.39991 28.6079 2.75904 27.8271 2.3806 26.9134C2.00217 25.9998 1.90315 24.9945 2.09608 24.0246C2.289 23.0546 2.76521 22.1637 3.46447 21.4645C4.16373 20.7652 5.05465 20.289 6.02455 20.0961C6.99446 19.9031 7.99979 20.0022 8.91342 20.3806C9.82705 20.759 10.6079 21.3999 11.1573 22.2222C11.7068 23.0444 12 24.0111 12 25C11.9984 26.3256 11.4711 27.5964 10.5338 28.5338C9.59644 29.4711 8.3256 29.9984 7 30V30ZM7 22C6.40666 22 5.82664 22.1759 5.33329 22.5056C4.83994 22.8352 4.45543 23.3038 4.22836 23.852C4.0013 24.4001 3.94189 25.0033 4.05765 25.5853C4.1734 26.1672 4.45912 26.7018 4.87868 27.1213C5.29824 27.5409 5.83279 27.8266 6.41473 27.9424C6.99667 28.0581 7.59987 27.9987 8.14805 27.7716C8.69623 27.5446 9.16477 27.1601 9.49441 26.6667C9.82406 26.1734 10 25.5933 10 25C9.99921 24.2046 9.68288 23.442 9.12045 22.8796C8.55801 22.3171 7.79541 22.0008 7 22Z"
                fill="black"
              />
              <path
                d="M24 26H14V24H24V17H8C7.46973 16.9995 6.96133 16.7886 6.58637 16.4136C6.21141 16.0387 6.00053 15.5303 6 15V8C6.00053 7.46973 6.21141 6.96133 6.58637 6.58637C6.96133 6.21141 7.46973 6.00053 8 6H18V8H8V15H24C24.5303 15.0005 25.0387 15.2114 25.4136 15.5864C25.7886 15.9613 25.9995 16.4697 26 17V24C25.9995 24.5303 25.7886 25.0387 25.4136 25.4136C25.0387 25.7886 24.5303 25.9995 24 26V26Z"
                fill="black"
              />
              <path
                d="M28 12H22C21.4697 11.9995 20.9613 11.7886 20.5864 11.4136C20.2114 11.0387 20.0005 10.5303 20 10V4C20.0005 3.46973 20.2114 2.96133 20.5864 2.58637C20.9613 2.21141 21.4697 2.00053 22 2H28C28.5303 2.00053 29.0387 2.21141 29.4136 2.58637C29.7886 2.96133 29.9995 3.46973 30 4V10C29.9995 10.5303 29.7886 11.0387 29.4136 11.4136C29.0387 11.7886 28.5303 11.9995 28 12V12ZM22 4V10H28V4H22Z"
                fill="black"
              />
            </svg>

            Data</label
          >
          <textarea
            name="data"
            id=""
            rows="5"
            class="Hash__input"
            @keyup="onDataChange"
            v-model="data"
          ></textarea>
        </div>
      </form>
    </div>
    <div class="Hash__bgMask"></div>
  </section>
</template>

<style lang="scss" scoped>
.Hash {
  position: relative;
  &__bgMask {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--mainColor);
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }
  &__title {
    font-size: var(--fontL);
    color: var(--darkTextColor);
    margin-bottom: calc(var(--sectionPadding) * 0.5);
  }
  &__form {
    display: flex;
    flex-direction: column;
    row-gap: var(--gapL);
  }
  &__label {
    font-family: Inter;
    font-size: var(--fontR);
    color: var(--darkTextColor);
    font-weight: 600;
    display: flex;
    align-items: center;
    column-gap: var(--gapS);
    svg {
      width: var(--fontR);
      path {
        fill: var(--darkBodyTextColor);
      }
    }
  }
  &__input {
    font-family: Inter;
    font-size: var(--fontS);
    background-color: var(--mainColor2);
    color: var(--darkBodyTextColor);
    padding: var(--buttonPadding);
    border-radius: var(--radiusS);
    transition: box-shadow var(--revealDuration) var(--mainCubic);
    letter-spacing: 0.5px;
    width: clamp(
      var(--minWidth) - var(--layoutPadding) * 2,
      calc(100vw - var(--layoutPadding) * 2),
      724px
    );
    &:focus {
      box-shadow: 0 0 6px var(--mainColor5);
    }
    &--placeholder {
      position: relative;
      cursor: not-allowed;
    }
  }
  &__placeholder {
    animation: morph 0.15s linear forwards;
    text-overflow: ellipsis;
    letter-spacing: 1px;
    overflow: hidden;
  }
  &__inputContainer {
    display: flex;
    flex-direction: column;
    row-gap: var(--gapS);
  }
}

@keyframes morph {
  0% {
    filter: blur(0.25px);
    opacity: 1;
  }
  50% {
    filter: blur(1px);
    opacity: 0.25;
  }
  100% {
    filter: none;
    opacity: 1;
  }
}
</style>
