<script setup lang="ts">
import LoadingBlock from "@/components/LoadingBlock.vue";
import { Chain } from "@/composables/blockchain";
import { defineAsyncComponent, ref, Ref } from "vue";

const BlockCard = defineAsyncComponent({
  loader: () => import("@/components/BlockCard.vue"),
  delay: 0,
  timeout: 8000,
  loadingComponent: LoadingBlock,
});

const chain = ref(new Chain(1));

function onAddBlockClicked() {
  chain.value.addBlock();
}
</script>

<template>
  <div class="Chain">
    <BlockCard
      v-for="block in chain.blocks"
      :key="block.index"
      :block="block"
      :chain="chain"
    />
    <button class="Chain__addBlock" @click="onAddBlockClicked()">
      Add Block
    </button>
  </div>
</template>

<style scoped></style>
