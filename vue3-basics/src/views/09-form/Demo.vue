<script setup>
import { ref } from "vue";
</script>

<template>
	<div>
		<h1>Form</h1>
		<form>
			<label for="name">Name</label>
			<input type="text" id="name" v-model="name" />
			<p>Name: {{ name }}</p>
		</form>
	</div>
</template>

<style lang="css">
</style>
