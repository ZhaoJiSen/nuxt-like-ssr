<template>
  <div>This is About page</div>

  <button @click="toHome">Go to home</button>
  <button @click="back">Back to root</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () => {
  router.push({ name: 'home' });
};

const back = () => {
  router.push('/');
};
</script>
