<script setup lang="ts">
import { onMounted, Ref, ref, defineAsyncComponent } from "vue";
import LoadingBlock from "@/components/LoadingBlock.vue";

const BlockCard = defineAsyncComponent({
  loader: () => import("@/components/BlockCard.vue"),
  delay: 0,
  timeout: 8000,
  loadingComponent: LoadingBlock,
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts <= 3) {
      // retry on fetch errors, 3 max attempts
      retry();
    } else {
      fail();
    }
  },
});
</script>

<template>
  <section class="Section Block">
    <div class="Section__container Block__container">
      <p class="Section__subtitle">Step 2</p>
      <h2 class="Section__title">Block</h2>
      <BlockCard :index="1" />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
