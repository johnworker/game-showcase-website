<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold">{{ game.title }}</h1>
      <img :src="game.image" alt="game image" class="w-96 mt-4">
      <p class="mt-2">{{ game.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const game = ref({});
  
  onMounted(async () => {
    const res = await fetch(`/api/games/${route.params.id}`);
    game.value = await res.json();
  });
  </script>
  