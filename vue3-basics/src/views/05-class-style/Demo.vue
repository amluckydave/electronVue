<script setup>
import { ref } from "vue";

const hasColor = ref(true);
const italic = ref("italic");
const ul = ref("underline");

const change = () => {
  hasColor.value = !hasColor.value;
};
</script>

<template>
  <div>
    <div class="c" :class="[italic, { a: hasColor, b: true }]">
      <p :style="{ textDecoration: ul }">Hello World</p>
    </div>
    <div>
      <button @click="change">change</button>
    </div>
  </div>
</template>

<style lang="css">
.a {
  color: red;
}
.b {
  font-size: 50px;
}
.c {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
</style>
