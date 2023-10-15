<script setup>
import { ref, computed } from "vue";

const count = ref(1);
const title = ref("hello");

const handleClick = () => count.value++;
const handleTitleClick = () => {
  title.value = "world";
};

const doubleCountMethod = () => {
  console.log("doubleCount");
  return count.value * 2;
};

const doubleCountProperty = computed(() => {
  // 计算属性会基于依赖缓存
  console.log("doubleCount");
  return count.value * 2;
});
</script>

<template>
  <div>
    <div>
      {{ count }} -
      <!-- {{ doubleCountMethod() }} -->
      {{ doubleCountProperty }}

      {{ title }}
    </div>

    <div>
      <button @click="handleClick">add</button>
      <button @click="handleTitleClick">change title</button>
    </div>
  </div>
</template>

<style lang="css"></style>
