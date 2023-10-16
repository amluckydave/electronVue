<script setup>
import { ref, watchEffect, watch, computed } from 'vue';

const counter = ref(1);
const doubleCounter = computed(() => counter.value * 2);

const handleClick = () => {
    counter.value++;
};

// watchEffect(() => {
//     console.log('counter has been changed to ' + counter.value);
// });

watch(
    () => counter.value,
    (newValue, oldValue) => {
        console.log('counter has been from ' + oldValue + ' changed to ' + newValue);
    }
);
</script>

<template>
    <div>
        <div>
            {{ counter }}
            {{ doubleCounter }}
        </div>
        <div>
            <button @click="handleClick">Increment</button>
        </div>
    </div>
</template>

<style lang="css">
</style>
