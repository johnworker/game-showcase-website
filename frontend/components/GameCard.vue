<template>
    <div class="border p-4 rounded">
      <img :src="game.image" alt="game image" class="w-full h-40 object-cover">
      <h2 class="text-xl mt-2">{{ game.title }}</h2>
      <p>{{ game.description.slice(0, 50) }}...</p>
      <NuxtLink :to="`/game/${game._id}`" class="text-blue-500">查看詳情</NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps(['game']);
  </script>
  