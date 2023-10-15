<script setup>
  import { ref } from "vue"  

const count = ref(0);
const handleClick = (num) => {
  count.value += num
};

const handleInput = (num, e) => {
  console.log(e.target.value)
};

const handle1 = () => {
  console.log("handle1")
};

const handle2 = () => {
  console.log("handle2")
};
</script>

<template>
  <div>
    <div>{{ count }}</div>

    <div><button v-on:click=    "handleClick(100)">add</button></div>

    <div><input type="text" @input="handleInput(100, $event)" /></div>

    <div><button @click="handle1(), handle2()">change</button></div>
  </div>
</template>

<style lang="css"></style>
