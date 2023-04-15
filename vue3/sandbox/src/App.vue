<script>
// import ScratchPad from './components/ScratchPad/main.vue'
import Pokedex from './components/Pokedex/main.vue'

export default {
  components: {
    Pokedex
  }
}
</script>

<template>
  <h1>Pokemon App</h1>
  <Suspense>
    <Pokedex />
    <template v-slot:fallback> Loading pokedex data .......... </template>
  </Suspense>
</template>
