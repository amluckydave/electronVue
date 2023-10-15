<script setup>
import { ref, reactive } from "vue";

const state = reactive({ count: 0 });
const increment = () => {
  state.count++;
};

const countRef = ref(0);
const add = () => {
  countRef.value++;
};
</script>

<template>
  <div>
    <button @click="increment">{{ state.count }}</button>
  </div>

  <button @click="add">
    {{ countRef }}
  </button>
</template>

<style lang="css"></style>
