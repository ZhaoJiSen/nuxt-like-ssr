<template>
  <div>This is Home page</div>

  <button @click="toAbout">Go to About</button>
  <button @click="back">Back to root</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toAbout = () => {
  router.push('/about');
};

const back = () => {
  router.push('/');
};
</script>
