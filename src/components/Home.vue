<script setup lang="ts">
import { ref, inject } from "vue";

const screen = inject("screen");
</script>

<template>
  <section
    class="Section Home"
    :class="screen.type ? 'Home--' + screen.type : ''"
  >
    <div class="Section__container Home__container">
      <div class="Home__hero">
        <h1 class="Home__heroTitle">Blockchain Visual</h1>
        <h2 class="Home__heroSubtitle">The building blocks of blockchain</h2>
        <button class="Cta Home__cta">Start now</button>
      </div>
      <div class="Home__illu">
        <svg
          viewBox="0 0 508 446"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Hero__vector">
            <g id="Block4">
              <path
                id="Front"
                d="M359 271.684V198.84L432 228.211V301.055L359 271.684Z"
                fill="url(#paint0_linear_91_555)"
                fill-opacity="0.8"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Side"
                d="M507 271.684V198.84L434 228.211V301.055L507 271.684Z"
                fill="url(#paint1_linear_91_555)"
                fill-opacity="0.9"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Above"
                d="M505.321 197.36L433 168.258L360.679 197.36L433 226.458L505.321 197.36Z"
                fill="url(#paint2_linear_91_555)"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector45"
              d="M393.702 250L319.361 280.698"
              stroke="url(#paint3_linear_91_555)"
              stroke-width="4"
              stroke-linecap="round"
            />
            <g id="Block5">
              <g id="Front_2">
                <path
                  d="M179 265.18L254 295.356V370.356L179 340.18V265.18Z"
                  fill="#010E14"
                />
                <path
                  d="M180 339.504V266.66L253 296.031V368.875L180 339.504Z"
                  stroke="url(#paint4_linear_91_555)"
                  stroke-opacity="0.8"
                  stroke-width="2"
                />
              </g>
              <g id="Side_2">
                <path
                  d="M329 265.18L254 295.356V370.356L329 340.18V265.18Z"
                  fill="#010E14"
                />
                <path
                  d="M328 339.504V266.66L255 296.031V368.875L328 339.504Z"
                  stroke="url(#paint5_linear_91_555)"
                  stroke-opacity="0.9"
                  stroke-width="2"
                />
              </g>
              <path
                id="Above_2"
                d="M326.321 265.18L254 236.078L181.679 265.18L254 294.278L326.321 265.18Z"
                fill="#010E14"
                stroke="url(#paint6_linear_91_555)"
                stroke-width="2"
              />
            </g>
            <path
              id="Vector56"
              d="M212.702 318L138.361 348.698"
              stroke="url(#paint7_linear_91_555)"
              stroke-width="4"
              stroke-linecap="round"
            />
            <g id="Block6">
              <path
                id="Front_3"
                d="M1.00001 414.504V341.66L74 371.031V443.875L1.00001 414.504Z"
                fill="url(#paint8_linear_91_555)"
                fill-opacity="0.8"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Side_3"
                d="M149 414.504V341.66L76 371.031V443.875L149 414.504Z"
                fill="url(#paint9_linear_91_555)"
                fill-opacity="0.9"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Above_3"
                d="M147.321 340.18L75 311.078L2.6789 340.18L75 369.278L147.321 340.18Z"
                fill="url(#paint10_linear_91_555)"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector34"
              d="M432.634 125L431.979 196.873"
              stroke="url(#paint11_linear_91_555)"
              stroke-width="4"
              stroke-linecap="round"
            />
            <g id="Block3">
              <g id="Front_4">
                <path
                  d="M358 30.1799L433 60.3557V135.356L358 105.18V30.1799Z"
                  fill="#010E14"
                />
                <path
                  d="M359 104.504V31.6602L432 61.0313V133.875L359 104.504Z"
                  stroke="url(#paint12_linear_91_555)"
                  stroke-opacity="0.8"
                  stroke-width="2"
                />
              </g>
              <g id="Side_4">
                <path
                  d="M508 30.1799L433 60.3557V135.356L508 105.18V30.1799Z"
                  fill="#010E14"
                />
                <path
                  d="M507 104.504V31.6602L434 61.0313V133.875L507 104.504Z"
                  stroke="url(#paint13_linear_91_555)"
                  stroke-opacity="0.9"
                  stroke-width="2"
                />
              </g>
              <path
                id="Above_4"
                d="M505.321 30.1799L433 1.07793L360.679 30.1799L433 59.2779L505.321 30.1799Z"
                fill="#010E14"
                stroke="url(#paint14_linear_91_555)"
                stroke-width="2"
              />
            </g>
            <path
              id="Vector23"
              d="M322.692 115.266L397.033 84.5673"
              stroke="url(#paint15_linear_91_555)"
              stroke-width="4"
              stroke-linecap="round"
            />
            <g id="Block2">
              <path
                id="Front_5"
                d="M180 172.504V99.6602L253 129.031V201.875L180 172.504Z"
                fill="url(#paint16_linear_91_555)"
                fill-opacity="0.8"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Side_5"
                d="M328 172.504V99.6602L255 129.031V201.875L328 172.504Z"
                fill="url(#paint17_linear_91_555)"
                fill-opacity="0.9"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                id="Above_5"
                d="M326.321 98.1799L254 69.0779L181.679 98.1799L254 127.278L326.321 98.1799Z"
                fill="url(#paint18_linear_91_555)"
                stroke="#010E14"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector12"
              d="M140.692 186.266L215.033 155.567"
              stroke="url(#paint19_linear_91_555)"
              stroke-width="4"
              stroke-linecap="round"
            />
            <g id="Block1">
              <g id="Front_6">
                <path
                  d="M6.31809e-06 173L75 203.176V278.176L6.31809e-06 248V173Z"
                  fill="#010E14"
                />
                <path
                  d="M1.00001 247.324V174.48L74 203.851V276.696L1.00001 247.324Z"
                  stroke="url(#paint20_linear_91_555)"
                  stroke-opacity="0.8"
                  stroke-width="2"
                />
              </g>
              <g id="Side_6">
                <path
                  d="M150 173L75 203.176V278.176L150 248V173Z"
                  fill="#010E14"
                />
                <path
                  d="M149 247.324V174.48L76 203.851V276.696L149 247.324Z"
                  stroke="url(#paint21_linear_91_555)"
                  stroke-opacity="0.9"
                  stroke-width="2"
                />
              </g>
              <path
                id="Above_6"
                d="M147.321 173L75 143.898L2.6789 173L75 202.098L147.321 173Z"
                fill="#010E14"
                stroke="url(#paint22_linear_91_555)"
                stroke-width="2"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_91_555"
              x1="395.5"
              y1="197.36"
              x2="395.5"
              y2="302.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_91_555"
              x1="470.5"
              y1="197.36"
              x2="470.5"
              y2="302.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_91_555"
              x1="433"
              y1="167.18"
              x2="433"
              y2="227.536"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_91_555"
              x1="355.351"
              y1="261.366"
              x2="357.712"
              y2="269.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_91_555"
              x1="216.5"
              y1="265.18"
              x2="216.5"
              y2="370.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_91_555"
              x1="291.5"
              y1="265.18"
              x2="291.5"
              y2="370.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_91_555"
              x1="291.5"
              y1="190.18"
              x2="291.5"
              y2="295.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_91_555"
              x1="174.351"
              y1="329.366"
              x2="176.712"
              y2="337.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#010E14" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_91_555"
              x1="37.5"
              y1="340.18"
              x2="37.5"
              y2="445.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_91_555"
              x1="112.5"
              y1="340.18"
              x2="112.5"
              y2="445.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_91_555"
              x1="75"
              y1="310"
              x2="75"
              y2="370.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_91_555"
              x1="422.49"
              y1="194.061"
              x2="442.124"
              y2="127.812"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_91_555"
              x1="395.5"
              y1="30.1799"
              x2="395.5"
              y2="135.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_91_555"
              x1="470.5"
              y1="30.1799"
              x2="470.5"
              y2="135.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_91_555"
              x1="470.5"
              y1="-44.8201"
              x2="470.5"
              y2="60.3557"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_91_555"
              x1="361.043"
              y1="103.9"
              x2="358.682"
              y2="95.9335"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#010E14" />
              <stop offset="1" stop-color="#FFFDE9" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_91_555"
              x1="216.5"
              y1="98.1799"
              x2="216.5"
              y2="203.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_91_555"
              x1="291.5"
              y1="98.1799"
              x2="291.5"
              y2="203.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_91_555"
              x1="254"
              y1="68"
              x2="254"
              y2="128.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#D8F3FD" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_91_555"
              x1="179.043"
              y1="174.9"
              x2="176.682"
              y2="166.933"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#010E14" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_91_555"
              x1="37.5"
              y1="173"
              x2="37.5"
              y2="278.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_91_555"
              x1="112.5"
              y1="173"
              x2="112.5"
              y2="278.176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFDE9" />
              <stop offset="1" stop-color="#C5EAFC" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_91_555"
              x1="112.5"
              y1="98"
              x2="112.5"
              y2="203.176"
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

<style lang="scss">
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
    &:hover {
      box-shadow: 4px 5px 4px #0697db;
      transform: translate3d(-1px, -2px, 0);
    }
    opacity: 0;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
      calc(var(--revealDuration) * (var(--delayInitDuration) + 1)) forwards;
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
    --delayInitDuration: 4;
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
</style>
