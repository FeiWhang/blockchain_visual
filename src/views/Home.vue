<script setup lang="ts">
import { inject, onMounted, Ref, ref } from "vue";
import { myScreen } from "@/composables/screen";

const screen: myScreen = inject("screen") as myScreen;
const isMounted: Ref<boolean> = ref(false);

onMounted(() => {
  isMounted.value = true;
  // add animation to illu
  const duration = 0.369;
  for (let i = 1; i < 7; i++) {
    const blockEl = document.getElementById("Block" + i);
    if (blockEl)
      blockEl.style.animation =
        "fadeInAngle " +
        duration +
        "s var(--mainCubic) " +
        (0.3 * 2.5 + duration * i) +
        "s forwards";
    const chainEl = document.getElementById("Chain" + i + (i + 1).toString());
    if (chainEl)
      chainEl.style.animation =
        "stroke " +
        duration +
        "s var(--mainCubic) " +
        (0.3 * 2.5 + duration * (i + 0.5)) +
        "s forwards";
  }
});
</script>

<template>
  <section class="Section Home" :class="'Home--' + screen.type">
    <div class="Section__container Home__container">
      <div class="Home__hero">
        <h1 class="Home__heroTitle">Blockchain Visual</h1>
        <h2 class="Home__heroSubtitle">The building blocks of blockchain</h2>
        <router-link class="Cta Home__cta" to="/hash" ref="spotlightRef"
          >Start now</router-link
        >
      </div>
      <div class="Home__illu">
        <svg
          viewBox="0 0 518 446"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="HeroFrame">
            <g id="HeroVector">
              <g id="Block1">
                <path
                  id="Front"
                  d="M17 192.978L82.8739 219.482V285.355L17 258.852V192.978Z"
                  fill="#C5C9F5"
                  fill-opacity="0.8"
                />
                <path
                  id="Side"
                  d="M154.385 192.978L88.5112 219.482V285.355L154.385 258.852V192.978Z"
                  fill="#C5C9F5"
                  fill-opacity="0.9"
                />
                <path
                  id="Above"
                  d="M85.6924 160.833L19.8186 187.341L85.6924 213.845L151.566 187.341L85.6924 160.833Z"
                  fill="#C5C9F5"
                />
              </g>
              <g id="Block6">
                <path
                  id="Front_2"
                  d="M17 336.978L82.8739 363.482V429.355L17 402.852V336.978Z"
                  fill="#0B9CD5"
                  fill-opacity="0.25"
                />
                <path
                  id="Side_2"
                  d="M154.385 336.978L88.5112 363.482V429.355L154.385 402.852V336.978Z"
                  fill="#16B4F3"
                  fill-opacity="0.3"
                />
                <path
                  id="Above_2"
                  d="M85.6924 304.833L19.8186 331.341L85.6924 357.845L151.566 331.341L85.6924 304.833Z"
                  fill="#3DC1F5"
                  fill-opacity="0.35"
                />
              </g>
              <g id="Block2">
                <path
                  id="Front_3"
                  d="M189 121.145L254.874 147.649V213.522L189 187.019V121.145Z"
                  fill="#0B9CD5"
                  fill-opacity="0.25"
                />
                <path
                  id="Side_3"
                  d="M326.385 121.145L260.511 147.649V213.522L326.385 187.019V121.145Z"
                  fill="#16B4F3"
                  fill-opacity="0.3"
                />
                <path
                  id="Above_3"
                  d="M257.692 89L191.819 115.508L257.692 142.012L323.566 115.508L257.692 89Z"
                  fill="#3DC1F5"
                  fill-opacity="0.35"
                />
              </g>
              <g id="Block5">
                <path
                  id="Front_4"
                  d="M189 265.145L254.874 291.649V357.522L189 331.019V265.145Z"
                  fill="#C5C9F5"
                  fill-opacity="0.8"
                />
                <path
                  id="Side_4"
                  d="M326.385 265.145L260.511 291.649V357.522L326.385 331.019V265.145Z"
                  fill="#C5C9F5"
                  fill-opacity="0.9"
                />
                <path
                  id="Above_4"
                  d="M257.692 233L191.819 259.508L257.692 286.012L323.566 259.508L257.692 233Z"
                  fill="#C5C9F5"
                />
              </g>
              <g id="Block3">
                <path
                  id="Front_5"
                  d="M362 49.1447L427.874 75.6486V141.522L362 115.019V49.1447Z"
                  fill="#C5C9F5"
                  fill-opacity="0.8"
                />
                <path
                  id="Side_5"
                  d="M499.385 49.1447L433.511 75.6486V141.522L499.385 115.019V49.1447Z"
                  fill="#C5C9F5"
                  fill-opacity="0.9"
                />
                <path
                  id="Above_5"
                  d="M430.692 17L364.819 43.5076L430.692 70.0116L496.566 43.5076L430.692 17Z"
                  fill="#C5C9F5"
                />
              </g>
              <g id="Block4">
                <path
                  id="Front_6"
                  d="M362 193.145L427.874 219.649V285.522L362 259.019V193.145Z"
                  fill="#0B9CD5"
                  fill-opacity="0.25"
                />
                <path
                  id="Side_6"
                  d="M499.385 193.145L433.511 219.649V285.522L499.385 259.019V193.145Z"
                  fill="#16B4F3"
                  fill-opacity="0.3"
                />
                <path
                  id="Above_6"
                  d="M430.692 161L364.819 187.508L430.692 214.012L496.566 187.508L430.692 161Z"
                  fill="#3DC1F5"
                  fill-opacity="0.35"
                />
              </g>
            </g>
            <path
              id="Chain23"
              d="M327 122L389.62 97"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="Chain12"
              d="M154.755 194L217.375 169"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="Chain45"
              d="M389.375 241L326.755 266"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="Chain56"
              d="M217.375 313L154.755 338"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="Chain34"
              d="M431 143L430.979 186.873"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/const.scss";

.Home {
  &__container {
    row-gap: var(--sectionPadding);
  }
  &__hero {
    text-align: center;
  }
  &__heroTitle {
    font-size: var(--fontXL);
    letter-spacing: 1.234px;
    margin-bottom: var(--gapS);
    opacity: 0;
    color: var(--mainColor1);
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration)) forwards;
  }
  &__heroSubtitle {
    font-size: var(--fontR);
    color: var(--mainColor3);
    font-weight: 400;
    margin-bottom: var(--gapL);
    opacity: 0;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration) * 1.5) forwards;
  }
  $duration: 0.369s;
  &__cta {
    display: inline-block;
    padding: var(--buttonPadding);
    background-color: var(--mainColor5);
    color: var(--mainColor23);
    opacity: 0;
    backface-visibility: hidden;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 2) forwards,
      hovering 0.88s var(--mainCubic)
        calc(var(--revealDuration) * 3 + $duration * 5.6789) infinite alternate;
    &:hover {
      animation-play-state: paused;
    }
  }
  &__illu {
    width: clamp(250px, 88vw, 500px);
    svg {
      [id^="Block"] {
        transform-origin: bottom left;
        opacity: 0;
      }
      [id^="Chain"] {
        stroke: var(--mainColor15);
        stroke-dasharray: 67.5;
        stroke-dashoffset: 67.5;
      }
    }
  }
}

@keyframes hovering {
  from {
    transform: translate3d(0, 0, 0);
    box-shadow: none;
  }
  to {
    transform: translate3d(-2px, -4px, 0);
    box-shadow: 4px 5px 4px var(--mainColor18);
  }
}
</style>
