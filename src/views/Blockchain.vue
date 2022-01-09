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
                  <path
                    d="M6 29.8491L23.6153 36.9365V54.5518L6 47.4644V29.8491Z"
                    fill="#0B9CD5"
                  />
                  <path
                    d="M42.738 29.8491L25.1227 36.9365V54.5518L42.738 47.4644V29.8491Z"
                    fill="#16B4F3"
                  />
                  <path
                    d="M24.369 21.2534L6.75365 28.3418L24.369 35.4292L41.9843 28.3418L24.369 21.2534Z"
                    fill="#3DC1F5"
                  />
                  <path
                    d="M6 68.3564L23.6153 75.4439V93.0592L6 85.9717V68.3564Z"
                    fill="#0B9CD5"
                  />
                  <path
                    d="M42.738 68.3564L25.1227 75.4439V93.0592L42.738 85.9717V68.3564Z"
                    fill="#16B4F3"
                  />
                  <path
                    d="M24.369 59.7605L6.75365 66.8489L24.369 73.9363L41.9843 66.8489L24.369 59.7605Z"
                    fill="#3DC1F5"
                  />
                  <path
                    d="M52.262 10.5959L69.8773 17.6834V35.2987L52.262 28.2113V10.5959Z"
                    fill="#0B9CD5"
                  />
                  <path
                    d="M89 10.5959L71.3847 17.6834V35.2987L89 28.2113V10.5959Z"
                    fill="#16B4F3"
                  />
                  <path
                    d="M70.631 2L53.0157 9.0884L70.631 16.1758L88.2463 9.0884L70.631 2Z"
                    fill="#3DC1F5"
                  />
                  <path
                    d="M52.262 49.1025L69.8773 56.1899V73.8052L52.262 66.7178V49.1025Z"
                    fill="#0B9CD5"
                  />
                  <path
                    d="M89 49.1025L71.3847 56.1899V73.8052L89 66.7178V49.1025Z"
                    fill="#16B4F3"
                  />
                  <path
                    d="M70.6309 40.5066L53.0156 47.595L70.6309 54.6824L88.2462 47.595L70.6309 40.5066Z"
                    fill="#3DC1F5"
                  />
                  <path
                    d="M42.9024 30.078L59.6477 23.3927"
                    stroke="#C5C9F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M59.5824 61.8998L42.8371 68.5851"
                    stroke="#C5C9F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M70.7131 35.6936L70.7076 47.4258"
                    stroke="#C5C9F5"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Blockchain
              </h1>
              <br />
              <p>
                A blockchian <span id="HighLightSpan"> is</span> an
                <span id="HighLightSpan">encrypted</span> and
                <span id="HighLightSpan">distributed</span>
                database that is shared among the nodes of a computer network.
              </p>
              <br />
              <p>
                What's added from
                <router-link to="/block" id="UnderlineTextLink"
                  >Block</router-link
                >?
              </p>
              <div
                class="SectionConcept__item"
                :class="'SectionConcept__item--' + screen.type"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 13V4H23V6H20V8H23V13H20V15H28V13H25Z"
                    fill="black"
                  />
                  <path
                    d="M8.5 6C9.19224 6 9.86893 6.20527 10.4445 6.58986C11.0201 6.97444 11.4687 7.52107 11.7336 8.16061C11.9985 8.80015 12.0678 9.50388 11.9328 10.1828C11.7977 10.8618 11.4644 11.4854 10.9749 11.9749C10.4854 12.4644 9.86175 12.7977 9.18282 12.9327C8.50389 13.0678 7.80015 12.9985 7.16061 12.7336C6.52107 12.4687 5.97444 12.0201 5.58986 11.4445C5.20527 10.8689 5 10.1922 5 9.5C5.00106 8.57207 5.37015 7.68244 6.0263 7.0263C6.68245 6.37015 7.57207 6.00106 8.5 6ZM8.5 4C7.41221 4 6.34884 4.32257 5.44437 4.92692C4.5399 5.53126 3.83495 6.39025 3.41867 7.39524C3.00238 8.40023 2.89346 9.5061 3.10568 10.573C3.3179 11.6399 3.84173 12.6199 4.61092 13.3891C5.3801 14.1583 6.36011 14.6821 7.42701 14.8943C8.4939 15.1065 9.59977 14.9976 10.6048 14.5813C11.6098 14.1651 12.4687 13.4601 13.0731 12.5556C13.6774 11.6512 14 10.5878 14 9.5C14 8.04131 13.4205 6.64236 12.3891 5.61091C11.3576 4.57946 9.95869 4 8.5 4Z"
                    fill="black"
                  />
                  <path
                    d="M23.5 20C24.1922 20 24.8689 20.2053 25.4445 20.5899C26.0201 20.9744 26.4687 21.5211 26.7336 22.1606C26.9985 22.8001 27.0678 23.5039 26.9328 24.1828C26.7977 24.8617 26.4644 25.4854 25.9749 25.9749C25.4854 26.4644 24.8618 26.7977 24.1828 26.9327C23.5039 27.0678 22.8002 26.9985 22.1606 26.7336C21.5211 26.4687 20.9744 26.0201 20.5899 25.4445C20.2053 24.8689 20 24.1922 20 23.5C20.0011 22.5721 20.3701 21.6824 21.0263 21.0263C21.6824 20.3701 22.5721 20.0011 23.5 20V20ZM23.5 18C22.4122 18 21.3488 18.3226 20.4444 18.9269C19.5399 19.5313 18.8349 20.3902 18.4187 21.3952C18.0024 22.4002 17.8935 23.5061 18.1057 24.573C18.3179 25.6399 18.8417 26.6199 19.6109 27.3891C20.3801 28.1583 21.3601 28.6821 22.427 28.8943C23.4939 29.1065 24.5998 28.9976 25.6048 28.5813C26.6098 28.1651 27.4687 27.4601 28.0731 26.5556C28.6774 25.6512 29 24.5878 29 23.5C29 22.0413 28.4205 20.6424 27.3891 19.6109C26.3576 18.5795 24.9587 18 23.5 18Z"
                    fill="black"
                  />
                  <path
                    d="M6 28V26H9.586L4 20.414L5.414 19L11 24.586V21H13V28H6Z"
                    fill="black"
                  />
                </svg>
                <p>
                  <span id="HighLightSpan">Previous hash</span> is the hash of
                  the block before this.
                </p>
              </div>
            </div>
            <a
              class="SectionConcept__readmore"
              href="https://www.investopedia.com/terms/b/blockchain.asp"
              target="_blank"
              aria-label="Hash definition - Investopedia"
              rel="noopener"
            >
              Read more
            </a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#UnderlineTextLink {
  color: var(--mainColor21);
  text-decoration-line: underline;
  &:hover {
    color: var(--mainColor18);
  }
}
</style>
