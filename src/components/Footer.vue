<script setup lang="ts">
function copyEther() {
  navigator.clipboard.writeText("0x553596229AFEAe79Ec0bCB0d703ab8111170bFfb");
  const etherEl = document.getElementsByClassName("Footer__text")[1] as Element;
  etherEl.setAttribute("id", "FooterEther");
  setTimeout(() => {
    etherEl.removeAttribute("id");
  }, 1555);
}
</script>

<template>
  <footer class="Footer">
    <p class="Footer__text">
      Designed & built by
      <a href="https://feiwhang.com/" target="_blank">Feiwhang</a>
    </p>
    <p
      class="Footer__text Footer__text--ether"
      aria-label="Ethereum public key"
      @click="copyEther()"
      :style="{ cursor: 'pointer' }"
      title="Ether key for donation"
    >
      <svg viewBox="0 0 256 417" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M127.961 0L125.166 9.5V285.168L127.961 287.958L255.923 212.32L127.961 0Z"
          fill="#69D4FF"
        />
        <path
          d="M127.962 0L0 212.32L127.962 287.959V154.158V0Z"
          fill="#3DC1F5"
        />
        <path
          d="M127.961 312.187L126.386 314.107V412.306L127.961 416.906L256 236.587L127.961 312.187Z"
          fill="#0B9CD5"
        />
        <path
          d="M127.962 416.905V312.185L0 236.585L127.962 416.905Z"
          fill="#3DC1F5"
        />
        <path
          d="M127.961 287.958L255.921 212.321L127.961 154.159V287.958Z"
          fill="#078FC5"
        />
        <path d="M0 212.32L127.96 287.958V154.158L0 212.32Z" fill="#0B9CD5" />
      </svg>
      0x553596229AFEAe79Ec0bCB0d703ab8111170bFfb
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.Footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: var(--footerHeight);
  row-gap: var(--gapM);
  background-color: var(--mainColor22);
  &__text {
    font-size: var(--fontS);
    color: var(--mainColor3);
    a {
      color: var(--mainColor5);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    svg {
      width: var(--fontXXS);
    }
    &--ether {
      font-family: JetBrainsMono;
      display: flex;
      align-items: center;
      font-size: var(--fontXXS);
      justify-content: center;
      color: var(--mainColor4);
      column-gap: var(--gapS);
    }
  }
}
#FooterEther {
  position: relative;
  &::after {
    content: "Key copied !";
    font-family: Inter;
    position: absolute;
    left: 36.9%;
    background-color: var(--mainColor18);
    padding: var(--gapS);
    border-radius: var(--radiusS);
    animation: fadeInAndOutFromBelow 1.55s var(--mainCubic) forwards;
  }
}

// animation
@keyframes fadeInAndOutFromBelow {
  0% {
    opacity: 0;
    transform: translate3d(0, -16px, 0);
  }
  15% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  85% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -16px, 0);
  }
}
</style>
