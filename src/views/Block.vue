<script setup lang="ts">
import BlockCard from "@/components/BlockCard.vue";
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
