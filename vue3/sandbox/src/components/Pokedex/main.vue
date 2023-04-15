<script setup>
const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151'
import { ref, computed, reactive } from 'vue'

const regionName = ref('kanto')
const regionNameAllCaps = computed(() => {
  return regionName.value.toUpperCase()
})

const state = reactive({
  elementType: 'lightning'
})

const pokedex = await fetch(API_URL).then((response) => response.json())

const changeRegionName = () => {
  regionName.value = 'Hoen'
}
</script>

<template>
  <h2>{{ regionName }}</h2>
  <h3>{{ regionNameAllCaps }}</h3>
  <button @click="changeRegionName">Change Region Name</button>
  <pre>
    {{ pokedex }}
  </pre>
</template>
