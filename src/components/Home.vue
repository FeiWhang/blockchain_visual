<script setup lang="ts">
import { ref, inject } from "vue";
import { myScreen } from "@/composables/screen";

const screen: myScreen = inject("screen") as myScreen;
</script>

<template>
  <section class="Section Home" :class="'Home--' + screen.type">
    <div class="Section__container Home__container">
      <div class="Home__hero">
        <h1 class="Home__heroTitle">Blockchain Visual</h1>
        <h2 class="Home__heroSubtitle">The building blocks of blockchain</h2>
        <button class="Cta Home__cta">Start now</button>
      </div>
      <div class="Home__illu">
        <svg
          viewBox="0 0 532 464"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Vector">
            <g id="Hero__vector">
              <g id="Block4">
                <path
                  id="Front"
                  d="M371 280.684V207.84L444 237.211V310.055L371 280.684Z"
                  fill="url(#paint0_linear_132_2)"
                  fill-opacity="0.8"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Side"
                  d="M519 280.684V207.84L446 237.211V310.055L519 280.684Z"
                  fill="url(#paint1_linear_132_2)"
                  fill-opacity="0.9"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Above"
                  d="M517.321 206.36L445 177.258L372.679 206.36L445 235.458L517.321 206.36Z"
                  fill="url(#paint2_linear_132_2)"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector45"
                d="M405.702 259L331.361 289.698"
                stroke="url(#paint3_linear_132_2)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Block5">
                <g id="Front_2">
                  <path
                    d="M191 274.18L266 304.356V379.356L191 349.18V274.18Z"
                    fill="#010E14"
                  />
                  <path
                    d="M192 348.504V275.66L265 305.031V377.875L192 348.504Z"
                    stroke="url(#paint4_linear_132_2)"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </g>
                <g id="Side_2">
                  <path
                    d="M341 274.18L266 304.356V379.356L341 349.18V274.18Z"
                    fill="#010E14"
                  />
                  <path
                    d="M340 348.504V275.66L267 305.031V377.875L340 348.504Z"
                    stroke="url(#paint5_linear_132_2)"
                    stroke-opacity="0.9"
                    stroke-width="2"
                  />
                </g>
                <path
                  id="Above_2"
                  d="M338.321 274.18L266 245.078L193.679 274.18L266 303.278L338.321 274.18Z"
                  fill="#010E14"
                  stroke="url(#paint6_linear_132_2)"
                  stroke-width="2"
                />
              </g>
              <path
                id="Vector56"
                d="M224.702 327L150.361 357.698"
                stroke="url(#paint7_linear_132_2)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Block6">
                <path
                  id="Front_3"
                  d="M13 423.504V350.66L86 380.031V452.875L13 423.504Z"
                  fill="url(#paint8_linear_132_2)"
                  fill-opacity="0.8"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Side_3"
                  d="M161 423.504V350.66L88 380.031V452.875L161 423.504Z"
                  fill="url(#paint9_linear_132_2)"
                  fill-opacity="0.9"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Above_3"
                  d="M159.321 349.18L87 320.078L14.6789 349.18L87 378.278L159.321 349.18Z"
                  fill="url(#paint10_linear_132_2)"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector34"
                d="M444.634 134L443.979 205.873"
                stroke="url(#paint11_linear_132_2)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Block3">
                <g id="Front_4">
                  <path
                    d="M370 39.1799L445 69.3557V144.356L370 114.18V39.1799Z"
                    fill="#010E14"
                  />
                  <path
                    d="M371 113.504V40.6602L444 70.0313V142.875L371 113.504Z"
                    stroke="url(#paint12_linear_132_2)"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </g>
                <g id="Side_4">
                  <path
                    d="M520 39.1799L445 69.3557V144.356L520 114.18V39.1799Z"
                    fill="#010E14"
                  />
                  <path
                    d="M519 113.504V40.6602L446 70.0313V142.875L519 113.504Z"
                    stroke="url(#paint13_linear_132_2)"
                    stroke-opacity="0.9"
                    stroke-width="2"
                  />
                </g>
                <path
                  id="Above_4"
                  d="M517.321 39.1799L445 10.0779L372.679 39.1799L445 68.2779L517.321 39.1799Z"
                  fill="#010E14"
                  stroke="url(#paint14_linear_132_2)"
                  stroke-width="2"
                />
              </g>
              <path
                id="Vector23"
                d="M334.692 124.266L409.033 93.5673"
                stroke="url(#paint15_linear_132_2)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Block2">
                <path
                  id="Front_5"
                  d="M192 181.504V108.66L265 138.031V210.875L192 181.504Z"
                  fill="url(#paint16_linear_132_2)"
                  fill-opacity="0.8"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Side_5"
                  d="M340 181.504V108.66L267 138.031V210.875L340 181.504Z"
                  fill="url(#paint17_linear_132_2)"
                  fill-opacity="0.9"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
                <path
                  id="Above_5"
                  d="M338.321 107.18L266 78.0779L193.679 107.18L266 136.278L338.321 107.18Z"
                  fill="url(#paint18_linear_132_2)"
                  stroke="#010E14"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector12"
                d="M152.692 195.266L227.033 164.567"
                stroke="url(#paint19_linear_132_2)"
                stroke-width="4"
                stroke-linecap="round"
              />
              <g id="Block1">
                <g id="Front_6">
                  <path
                    d="M12 182L87 212.176V287.176L12 257V182Z"
                    fill="#010E14"
                  />
                  <path
                    d="M13 256.324V183.48L86 212.851V285.696L13 256.324Z"
                    stroke="url(#paint20_linear_132_2)"
                    stroke-opacity="0.8"
                    stroke-width="2"
                  />
                </g>
                <g id="Side_6">
                  <path
                    d="M162 182L87 212.176V287.176L162 257V182Z"
                    fill="#010E14"
                  />
                  <path
                    d="M161 256.324V183.48L88 212.851V285.696L161 256.324Z"
                    stroke="url(#paint21_linear_132_2)"
                    stroke-opacity="0.9"
                    stroke-width="2"
                  />
                </g>
                <path
                  id="Above_6"
                  d="M159.321 182L87 152.898L14.6789 182L87 211.098L159.321 182Z"
                  fill="#010E14"
                  stroke="url(#paint22_linear_132_2)"
                  stroke-width="2"
                />
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_132_2"
              x1="407.5"
              y1="206.36"
              x2="407.5"
              y2="311.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_132_2"
              x1="482.5"
              y1="206.36"
              x2="482.5"
              y2="311.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_132_2"
              x1="445"
              y1="176.18"
              x2="445"
              y2="236.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_132_2"
              x1="367.351"
              y1="270.366"
              x2="369.712"
              y2="278.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_132_2"
              x1="228.5"
              y1="274.18"
              x2="228.5"
              y2="379.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_132_2"
              x1="303.5"
              y1="274.18"
              x2="303.5"
              y2="379.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_132_2"
              x1="303.5"
              y1="199.18"
              x2="303.5"
              y2="304.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_132_2"
              x1="186.351"
              y1="338.366"
              x2="188.712"
              y2="346.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#010E14" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_132_2"
              x1="49.5"
              y1="349.18"
              x2="49.5"
              y2="454.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_132_2"
              x1="124.5"
              y1="349.18"
              x2="124.5"
              y2="454.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_132_2"
              x1="87"
              y1="319"
              x2="87"
              y2="379.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_132_2"
              x1="434.49"
              y1="203.061"
              x2="454.124"
              y2="136.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_132_2"
              x1="407.5"
              y1="39.1799"
              x2="407.5"
              y2="144.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_132_2"
              x1="482.5"
              y1="39.1799"
              x2="482.5"
              y2="144.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_132_2"
              x1="482.5"
              y1="-35.8201"
              x2="482.5"
              y2="69.3557"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_132_2"
              x1="373.043"
              y1="112.9"
              x2="370.682"
              y2="104.933"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_132_2"
              x1="228.5"
              y1="107.18"
              x2="228.5"
              y2="212.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_132_2"
              x1="303.5"
              y1="107.18"
              x2="303.5"
              y2="212.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_132_2"
              x1="266"
              y1="77"
              x2="266"
              y2="137.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_132_2"
              x1="191.043"
              y1="183.9"
              x2="188.682"
              y2="175.933"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#010E14" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_132_2"
              x1="49.5"
              y1="182"
              x2="49.5"
              y2="287.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_132_2"
              x1="124.5"
              y1="182"
              x2="124.5"
              y2="287.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_132_2"
              x1="124.5"
              y1="107"
              x2="124.5"
              y2="212.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/const.scss";

.Home {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    row-gap: var(--sectionPadding);
  }
  &__hero {
    text-align: center;
  }
  &__heroTitle {
    font-size: var(--fontXL);
    letter-spacing: 4px;
    margin-bottom: var(--gapS);
    opacity: 0;
    color: var(--lightTextColor);
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration) * var(--delayInitDuration)) forwards;
  }
  &__heroSubtitle {
    font-size: var(--fontM);
    color: var(--lightBodyTextColor);
    font-weight: 400;
    margin-bottom: var(--gapL);
    opacity: 0;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration) * (var(--delayInitDuration) + 0.5)) forwards;
  }
  &__cta {
    padding: var(--buttonPadding);
    background-color: var(--mainColor);
    color: var(--darkTextColor);
    transition: var(--buttonHoverTransition);
    opacity: 0;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * (var(--delayInitDuration) + 1)) forwards,
      hovering 0.88s var(--mainCubic)
        calc(var(--revealDuration) * (var(--delayInitDuration) + 2)) infinite
        alternate;
    &:hover {
      animation-play-state: paused;
    }
  }
  &__illu {
    width: clamp(250px, 80vw, 500px);
    svg {
      $duration: 0.369s;
      [id^="Block"] {
        opacity: 0;
        transform-origin: bottom left;
      }
      #Block1 {
        animation: fadeIn $duration ease
          calc(var(--revealDuration) * (var(--delayInitDuration) + 3)) forwards;
      }
      #Block2 {
        animation: fadeIn $duration ease-in-out
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              1
          )
          forwards;
      }
      #Block3 {
        animation: fadeIn $duration ease-in-out
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              2
          )
          forwards;
      }
      #Block4 {
        animation: fadeIn $duration ease-in-out
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              3
          )
          forwards;
      }
      #Block5 {
        animation: fadeIn $duration ease-in-out
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              4
          )
          forwards;
      }
      #Block6 {
        animation: fadeIn $duration ease-in-out
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              5
          )
          forwards;
      }
      #Vector12 {
        --len: 80.5;
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: stroke $duration var(--mainCubic)
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              0.5
          )
          forwards;
      }
      #Vector23 {
        --len: 80.5;
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: stroke $duration var(--mainCubic)
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              1.5
          )
          forwards;
      }
      #Vector34 {
        --len: 71.87599182128906;
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: stroke $duration var(--mainCubic)
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              2.5
          )
          forwards;
      }
      #Vector45 {
        --len: 80.5;
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: stroke $duration var(--mainCubic)
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              3.5
          )
          forwards;
      }
      #Vector56 {
        --len: 80.5;
        stroke-dasharray: var(--len);
        stroke-dashoffset: var(--len);
        animation: stroke $duration var(--mainCubic)
          calc(
            var(--revealDuration) * (var(--delayInitDuration) + 3) + $duration *
              4.5
          )
          forwards;
      }
    }
  }
  --delayInitDuration: 5;
  &--xs,
  &--sm {
    --delayInitDuration: 3;
  }
}

// animations
@keyframes fadeIn {
  from {
    transform: translate3d(-4.96px, -2px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes hovering {
  from {
    transform: translate3d(0, 0, 0);
    box-shadow: none;
  }
  to {
    transform: translate3d(-2px, -4px, 0);
    box-shadow: 4px 5px 4px var(--mainColor5);
  }
}
</style>
