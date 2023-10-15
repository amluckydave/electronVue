<script setup>
import { ref } from "vue";

const isShow = ref(false);
const grade = ref(85);
const handleClick = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <div>
    <div v-if="isShow">Show</div>
    <div>
      <button @click="handleClick">Toggle</button>
    </div>

    <div v-if="grade >= 86">A</div>
    <div v-else-if="grade <= 85 && grade >= 73">B</div>
    <div v-else>C</div>

    <template v-if="isShow">
      <p>hello</p>
      <p>world</p>
    </template>

    <template v-else>
      <p>world</p>
      <p>helloo</p>
    </template>
  </div>
</template>

<style lang="css"></style>
