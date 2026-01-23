<template>
  <div>
    <h2>This is App Vue</h2>
    <div>{{ counter }}</div>

    <button
      @click="plus"
      style="
        padding: 8px 16px;
        background-color: #4caf50;
        border: none;
        color: white;
        text-align: center;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
      "
    >
      Add
    </button>
    <br />
    <br />
    <br />
    <br />
    <RouterLink to="/home">Go to Home</RouterLink>
    <br />
    <RouterLink to="/about">Go to About</RouterLink>

    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const plus = () => {
  counter.value++;
};
</script>
