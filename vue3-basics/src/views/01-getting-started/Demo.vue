<script setup>
import { ref } from "vue";
const count = ref(0);
const handleClick = () => {
  // console.log(count.value);
  count.value++;
};
</script>

<template>
  <div>
    {{ count }}
    <button @click="handleClick">add</button>
  </div>
</template>

<style lang="css"></style>
