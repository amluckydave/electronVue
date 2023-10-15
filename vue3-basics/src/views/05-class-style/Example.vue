<script setup>
import { ref } from "vue";

const list = ref(["line 1", "line 2", "line 3"]);
const currentIndex = ref(0);

const handleClick = (index) => {
  currentIndex.value = index;
};
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in list"
        :class="{ active: index === currentIndex }"
        @click="handleClick(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="css">
.active {
  color: red;
  font-size: 30px;
}
</style>
