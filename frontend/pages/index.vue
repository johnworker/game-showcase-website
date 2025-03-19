<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-4">遊戲展示</h1>
      <div class="grid grid-cols-3 gap-4">
        <GameCard v-for="game in games" :key="game._id" :game="game" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import GameCard from '~/components/GameCard.vue';
  
  const games = ref([]);
  
  onMounted(async () => {
    const res = await fetch('/api/games');
    games.value = await res.json();
  });
  </script>
  