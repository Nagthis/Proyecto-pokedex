<template>
  <div class="pokemon-view" v-if="store.selectedPokemon">
    <h2>{{ store.selectedPokemon.name }}</h2>
    <img :src="store.selectedPokemon.sprites.front_default" :alt="store.selectedPokemon.name">
    <h3>Types</h3>
    <ul>
      <li v-for="typeInfo in store.selectedPokemon.types" :key="typeInfo.type.name" :style="getTypeStyle(typeInfo.type.name)">
        {{ typeInfo.type.name }}
      </li>
    </ul>
    <h3>Abilities</h3>
    <ul>
      <li v-for="abilityInfo in store.selectedPokemon.abilities" :key="abilityInfo.ability.name">
        {{ abilityInfo.ability.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '@/stores/pokemon'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = usePokemonStore()
const route = useRoute()

onMounted(() => {
  store.fetchPokemon(route.params.name as string)
})

const getTypeStyle = (typeName: string) => {
  const typeColorMap: { [key: string]: string } = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };
  return {
    backgroundColor: typeColorMap[typeName] || '#FFFFFF',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '5px',
    margin: '0.5rem',
    display: 'inline-block'
  };
}
</script>

<style scoped>
.pokemon-view {
  text-align: center;
}
</style>
