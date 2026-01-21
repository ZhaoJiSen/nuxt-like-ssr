<template>
  <div>
    <h2>Vue</h2>
    <div>{{ counter }}</div>
    <button @click="plus"></button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const plus = () => {
  counter.value++;
};
</script>
