<template>
  <div class="home">
    <div class="filters">
      <button
        v-for="(label, type) in types"
        :key="type"
        @click="filterPokemon(type)"
        :class="['filter-btn', { active: currentType === type }]"
      >
        {{ label }}
      </button>
    </div>

    <div v-if="store.loading" class="loading">Cargando Pokémon...</div>
    <div v-if="store.error" class="error">{{ store.error }}</div>

    <div v-if="!store.loading && store.pokemons.length" class="pokemon-list">
      <PokemonCard
        v-for="pokemon in store.pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
    <div v-else-if="!store.loading" class="no-results">
      No se encontraron Pokémon.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import PokemonCard from "@/components/PokemonCard.vue";

const store = usePokemonStore();
const currentType = ref("all");

const types: Record<string, string> = {
  all: "Todos",
  normal: "Normal",
  fire: "Fuego",
  water: "Agua",
  grass: "Planta",
  electric: "Eléctrico",
  ice: "Hielo",
  fighting: "Lucha",
  poison: "Veneno",
  ground: "Tierra",
  flying: "Volador",
  psychic: "Psíquico",
  bug: "Bicho",
  rock: "Roca",
  ghost: "Fantasma",
  dragon: "Dragón",
  steel: "Acero",
  fairy: "Hada",
};

const filterPokemon = (type: string) => {
  currentType.value = type;
  store.fetchPokemonsByType(type);
};

onMounted(() => {
  store.fetchPokemons();
});
</script>

<style scoped>
.home {
  padding: 20px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.filter-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  color: #555;
}

.filter-btn:hover {
  background-color: #d0d0d0;
  transform: translateY(-2px);
}

.filter-btn.active {
  background-color: #ff5252;
  color: white;
  box-shadow: 0 4px 6px rgba(255, 82, 82, 0.3);
}

.pokemon-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px;
}

.loading,
.error,
.no-results {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 40px;
  color: #666;
}

.error {
  color: #ff5252;
}
</style>
