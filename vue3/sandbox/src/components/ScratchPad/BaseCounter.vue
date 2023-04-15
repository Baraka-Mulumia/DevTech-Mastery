<script setup>
import { reactive, computed } from 'vue'

import { useCountStore } from '../../stores/CountStore'

const countStore = useCountStore()

const displayTitle = computed(() => {
  if (countStore.count > 20) {
    return 'Counter standard - Very Long'
  } else {
    return 'Counter Standard'
  }
})

const optimizeIncrementAmount = computed(() => {
  return displayTitle.value.length * countStore.incrementAmount
})
</script>

<template>
  <div class="counter">
    <h1>{{ displayTitle }}</h1>

    <div>
      <label for="incrementAmount">Increment By: </label>
      <input type="number" id="incrementAmount" v-model.number="countStore.incrementAmount" />
      <p>Optimized Increment: {{ optimizeIncrementAmount }}</p>
    </div>

    <p>Count : {{ countStore.count }}</p>

    <button @click="countStore.decrement" :disabled="countStore.count <= 0">Decrement Count</button>
    <button @click="countStore.increment">Increment Count</button>
  </div>
</template>

<style scoped>
.counter {
  padding: 10px;
}

button {
  margin: 5px;
}
</style>
