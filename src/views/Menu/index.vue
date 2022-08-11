<template>
  <div>
    <h1>{{ store.user }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';

const store = useStore();
console.log(store.user);
</script>

<style scoped></style>
