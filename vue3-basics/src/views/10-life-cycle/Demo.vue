<script setup>
import { ref, onMounted, onBeforeMount, onUnmounted, onBeforeUpdate, onUpdated } from 'vue';

const count = ref(0);
let t = null;
// setTimeout(() => {
//     count.value = 200;
// }, 10000);

onMounted(() => {
    console.log('onMounted');
    console.log(document.getElementById('a').innerHTML);

    t = setTimeout(() => {
        count.value = 1000;
    }, 2000);
});

onBeforeMount(() => {
    console.log('onBeforeMount');
    count.value = 100;
    console.log('Count.value has been updated to 100');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
    console.log(document.getElementById('a').innerHTML);
});

onUpdated(() => {
    console.log('onUpdated');
    console.log(document.getElementById('a').innerHTML);
});
// console.log(document.getElementById('a').innerHTML);

onUnmounted(() => { clearTimeout(t); console.log('onUnmounted'); });


</script>

<template>
    <div>
        <div id="a">{{ count }}</div>
    </div>
</template>

<style lang="css">
</style>
