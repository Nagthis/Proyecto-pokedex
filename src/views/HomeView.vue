<template>
  <div class="home">
    <div v-if="store.loading">Loading...</div>
    <div v-if="store.error">{{ store.error }}</div>
    <div v-if="store.pokemons.length" class="pokemon-list">
      <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon.name" :pokemon="pokemon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonCard from '@/components/PokemonCard.vue'

const store = usePokemonStore()

onMounted(() => {
  store.fetchPokemons()
})
</script>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
