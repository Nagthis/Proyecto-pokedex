<template>
  <router-link :to="`/pokemon/${pokemon.name}`" class="pokemon-card">
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(pokemon.url)}.png`" :alt="pokemon.name">
    <p>{{ pokemon.name }}</p>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  pokemon: {
    name: string,
    url: string
  }
}>()

const getPokemonId = (url: string) => {
  return url.split('/').filter(Boolean).pop()
}
</script>

<style scoped>
.pokemon-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.pokemon-card:hover {
  transform: scale(1.05);
}
</style>
