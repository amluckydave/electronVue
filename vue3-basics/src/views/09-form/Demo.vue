<script setup>
import { ref } from "vue";

const textValue = ref("a");
const handleInput = (event) => {
    textValue.value = event.target.value;
};

const textAreaValue = ref("b");
const checkedValue = ref(true);
const pickedValue = ref("One");
const favorites = ref(["edu", "entertainment"]);
// const selectedValue = ref("");
const selectedValue = ref([]);
</script>

<template>
    <div>
        <div>
            <p>{{ textValue }}</p>
            <!-- <input type="text" :value="textValue" @input="handleInput"> -->
            <input type="text" v-model="textValue" />
        </div>

        <div>
            <p style="white-space: pre-line;">{{ textAreaValue }}</p>
            <textarea v-model="textAreaValue"></textarea>
        </div>

        <div>
            <input type="checkbox" v-model="checkedValue"> {{ checkedValue }}
        </div>

        <div>
            <p>{{ pickedValue }}</p>
            <input type="radio" id="one" value="One" v-model="pickedValue">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="pickedValue">
            <label for="two">Two</label>
        </div>
        <div>
            <p>{{ favorites }}</p>
            <input type="checkbox" value="edu" v-model="favorites"> edu
            <input type="checkbox" value="entertainment" v-model="favorites"> entertainment
            <input type="checkbox" value="go" v-model="favorites"> go
        </div>
        <div>
            <p>{{ selectedValue }}</p>
            <select v-model="selectedValue" multiple>
                <option value="001">edu</option>
                <option value="002">entertainment</option>
                <option value="003">go</option>
            </select>
        </div>
    </div>
</template>

<style lang="css">
</style>
