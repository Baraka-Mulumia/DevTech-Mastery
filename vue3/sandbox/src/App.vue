<script setup>
// import ScratchPad from './components/ScratchPad/main.vue'
import Pokedex from './components/Pokedex/main.vue'
import BaseCounter from './components/ScratchPad/BaseCounter.vue'
import { newCount } from './composables/CountStore'

const count = newCount
</script>

<template>
  <h1>Pokemon App</h1>
  <BaseCounter />
  {{ count }}
  <Suspense>
    <Pokedex />
    <template v-slot:fallback> Loading pokedex data .......... </template>
  </Suspense>
</template>
