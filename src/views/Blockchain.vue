<script setup lang="ts">
import LoadingBlock from "@/components/LoadingBlock.vue";
import { myScreen } from "@/composables/screen";
import { defineAsyncComponent, inject, ref, Ref } from "vue";

const screen: myScreen = inject("screen") as myScreen;
const showCon: Ref<boolean> = ref<boolean>(false);
const Chain = defineAsyncComponent({
  loader: () => import("@/components/Chain.vue"),
  delay: 0,
  timeout: 8000,
  loadingComponent: LoadingBlock,
});
</script>

<template>
  <section class="Section Block">
    <div class="Section__container Block__container">
      <p class="Section__subtitle">Step 3</p>
      <h2 class="Section__title">Blockchain</h2>
      <button class="CtaS Section__showCon" @click="showCon = true">
        Show concepts
      </button>
      <Chain />
      <transition name="fadeInOut">
        <div class="SectionConcept HashConcept" v-if="showCon">
          <div class="SectionConcept__card HashConcept__card">
            <div class="SectionConcept__cardContent">
              <button class="SectionConcept__close" @click="showCon = false">
                <svg viewBox="0 0 16 10">
                  <title>Close mobile navigation</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4283 0.248461C12.5772 0.400341 12.6606 0.604537 12.6606 0.817211C12.6606 1.02989 12.5772 1.23408 12.4283 1.38596L8.98332 4.83909L12.4364 8.28409C12.5894 8.43708 12.6754 8.64459 12.6754 8.86096C12.6754 9.07733 12.5894 9.28484 12.4364 9.43784C12.2835 9.59083 12.0759 9.67678 11.8596 9.67678C11.6432 9.67678 11.4357 9.59083 11.2827 9.43784L7.8377 5.98471L4.3927 9.43784C4.2397 9.59083 4.03219 9.67678 3.81582 9.67678C3.59945 9.67678 3.39195 9.59083 3.23895 9.43784C3.08595 9.28484 3 9.07733 3 8.86096C3 8.64459 3.08595 8.43708 3.23895 8.28409L6.69207 4.83909L3.23895 1.39409C3.08595 1.24109 3 1.03358 3 0.817211C3 0.600841 3.08595 0.393333 3.23895 0.240336C3.39195 0.0873394 3.59945 0.001387 3.81582 0.001387C4.03219 0.001387 4.2397 0.0873394 4.3927 0.240336L7.8377 3.69346L11.2827 0.240336C11.3582 0.164182 11.4481 0.103737 11.5471 0.0624871C11.6461 0.0212375 11.7523 0 11.8596 0C11.9668 0 12.073 0.0212375 12.172 0.0624871C12.2711 0.103737 12.3609 0.164182 12.4364 0.240336L12.4283 0.248461Z"
                  />
                </svg>
              </button>
              <h1 class="SectionConcept__title">
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
                Blockchain
              </h1>
              <br />
              <p>
                A blockchian <span id="HighLightSpan"> is used</span> to store
                the following information.
              </p>
              <br />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
