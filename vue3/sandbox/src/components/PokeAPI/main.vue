<script>
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export default {
  data: () => ({
    pokedex: [1, 2, 4]
  }),

  methods: {
    async fetchPokemon() {
      this.pokedex = await fetch(API_URL).then((response) => response.json())
    }
  },

  created() {
    this.fetchPokemon()
  }
}
</script>

<template>
  <h1>Pokemon App</h1>

  <button @click="fetchPokemon">Fetch Pokemon</button>

  <pre>
    {{ pokedex }}
  </pre>
</template>
