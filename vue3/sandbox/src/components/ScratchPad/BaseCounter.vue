<script setup>
import { reactive, computed } from 'vue'
import { newCount } from '../../composables/CountStore'

const state = reactive({
  count: newCount,
  counterTitle: 'Counter Standard',
  incrementAmount: 8
})

const displayTitle = computed(() => {
  if (state.count > 20) {
    return 'Counter standard - Very Long'
  } else {
    return 'Counter Standard'
  }
})

const optimizeIncrementAmount = computed(() => {
  return displayTitle.value.length * state.incrementAmount
})

const incrementCount = () => {
  state.count += optimizeIncrementAmount.value
}

const decrementCount = () => {
  state.count -= optimizeIncrementAmount.value
}
</script>

<template>
  <div class="counter">
    <h1>{{ displayTitle }}</h1>

    <div>
      <label for="incrementAmount">Increment By: </label>
      <input type="number" id="incrementAmount" v-model.number="state.incrementAmount" />
      <p>Optimized Increment: {{ optimizeIncrementAmount }}</p>
    </div>

    <p>Count : {{ state.count }}</p>

    <button @click="decrementCount" :disabled="state.count <= 0">Decrement Count</button>
    <button @click="incrementCount">Increment Count</button>
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
