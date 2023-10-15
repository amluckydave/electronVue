<script setup>
import { ref, reactive } from "vue";

const fruits = ref(["🍌", "🍇", "🍒", "🥔"]);
const course = reactive({
  title: "webpack5",
  author: "xu",
  price: "￥9.9",
});
</script>

<template>
  <div>
    <ul>
      <li v-for="(fruit, index) in fruits">{{ index }} - {{ fruit }}</li>
    </ul>
    <ul>
      <template v-for="(fruit, index) in fruits">
        <li v-if="fruit !== '🥔'">{{ index }} - {{ fruit }}</li>
      </template>
    </ul>

    <ul>
      <li v-for="(value, key, i) in course">{{ i }} - {{ key }} - {{ value }}</li>
    </ul>
  </div>
</template>

<style lang="css"></style>
