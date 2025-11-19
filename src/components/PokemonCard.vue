<template>
  <router-link :to="`/pokemon/${pokemon.name}`" class="pokemon-card">
    <div class="card-image">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
          pokemon.url
        )}.png`"
        :alt="pokemon.name"
        loading="lazy"
      />
    </div>
    <div class="card-info">
      <span class="pokemon-id">#{{ getPokemonId(pokemon.url) }}</span>
      <h3 class="pokemon-name">{{ pokemon.name }}</h3>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  pokemon: {
    name: string;
    url: string;
  };
}>();

const getPokemonId = (url: string) => {
  return url.split("/").filter(Boolean).pop();
};
</script>

<style scoped>
.pokemon-card {
  background-color: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2));
}

.card-info {
  width: 100%;
}

.pokemon-id {
  display: block;
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
}

.pokemon-name {
  margin: 0;
  font-size: 1.2rem;
  text-transform: capitalize;
  color: #333;
  font-weight: 700;
}
</style>
