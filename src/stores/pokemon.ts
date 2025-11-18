import { defineStore } from 'pinia'
import pokeapi from '@/services/pokeapi'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [] as { name: string, url: string }[],
    selectedPokemon: null as any,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchPokemons() {
      this.loading = true
      this.error = null
      try {
        const response = await pokeapi.get('/pokemon?limit=151')
        this.pokemons = response.data.results
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchPokemon(name: string) {
      this.loading = true
      this.error = null
      try {
        const response = await pokeapi.get(`/pokemon/${name}`)
        this.selectedPokemon = response.data
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
})
