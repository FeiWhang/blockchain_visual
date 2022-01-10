<script setup lang="ts">
import { Chain } from "@/composables/blockchain";
import { defineAsyncComponent, ref, Ref } from "vue";
import LoadingBlock from "@/components/LoadingBlock.vue";

const BlockCard = defineAsyncComponent({
  loader: () => import("@/components/BlockCard.vue"),
  delay: 0,
  timeout: 8000,
  loadingComponent: LoadingBlock,
});

const chain = ref(new Chain(1));
const isAdding = ref(false);
function onAddBlockClicked() {
  if (!chain.value.isChainValid) return;
  isAdding.value = true;
  setTimeout(async () => {
    await chain.value.addBlock();
    isAdding.value = false;
    const newBlockEl = document.getElementById(
      "block" + (chain.value.length - 1)
    );
    newBlockEl?.scrollIntoView({ block: "center" });
  }, 0);
}
</script>

<template>
  <div class="Chain">
    <BlockCard
      v-for="block in chain.blocks"
      :key="block.index"
      :block="block"
      :chain="chain"
      :id="'block' + block.index"
    />
    <LoadingBlock v-if="isAdding" />
    <button
      class="Cta Chain__addBlock"
      @click="onAddBlockClicked()"
      :style="{
        'background-color': chain.isChainValid
          ? 'var(--mainColor5)'
          : 'var(--grey)',
        cursor: chain.isChainValid ? 'pointer' : 'not-allowed',
      }"
    >
      Add Block
    </button>
  </div>
</template>

<style lang="scss" scoped>
.Chain {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: calc(var(--sectionPadding) * 0.8);
  &__addBlock {
    align-self: center;
    display: inline-block;
    background-color: var(--mainColor5);
    color: var(--mainColor23);
    opacity: 0;
    backface-visibility: hidden;
    animation: fadeInFromAbove var(--revealDuration) var(--mainCubic)
        calc(var(--revealDuration) * 2) forwards,
      hovering 0.88s var(--mainCubic) calc(var(--revealDuration) * 2.5) infinite
        alternate;
    &:hover {
      animation-play-state: paused;
    }
  }
}
</style>
