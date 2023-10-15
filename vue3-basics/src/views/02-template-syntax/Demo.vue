<script setup>
import { ref, reactive } from "vue";
const msg = ref("qfnext");
const rawHtml = ref("<h1>Hello</h1>");
const title = ref("goodbye");
const object = ref({
  id: "1",
  class: "box",
});
const number = ref(100);
const bool = ref(true);
const words = ref("hello, world");
const isShow = ref(true);

const handleClick = () => {
  isShow.value = !isShow.value;
};

const handleKeyup = (e) => {
  console.log(e.target.value);
};
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <div>
    {{ rawHtml }}
  </div>
  <div v-html="rawHtml"></div>
  <div v-bind:title="title">再见</div>
  <div v-bind="object">object</div>
  <div>{{ number + 1 }}</div>
  <div>{{ bool ? "true" : "false" }}</div>
  <div>{{ words.split("").reverse().join("") }}</div>
  <div v-if="isShow">good</div>
  <div>
    <button @click="handleClick">toggle</button>
  </div>

  <div>
    <input type="text" v-on:keyup.enter="handleKeyup" />
  </div>
</template>

<style lang="css"></style>
