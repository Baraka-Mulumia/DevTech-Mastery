<script>
export default {
  data: () => ({
    count: 10,
    counterTitle: 'Counter Standard',
    incrementAmount: 8
  }),

  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter standard - Very Long'
      } else {
        return 'Counter Standard'
      }
    },

    optimizeIncremeentAmount() {
      return this.displayTitle.length * this.incrementAmount
    }
  },

  methods: {
    incrementCount() {
      this.count += this.optimizeIncremeentAmount
    },

    decrementCount() {
      this.count -= this.optimizeIncremeentAmount
    }
  }
}
</script>

<template>
  <div class="counter">
    <h1>{{ displayTitle }}</h1>

    <div>
      <label for="incrementAmount">Increment By: </label>
      <input type="number" id="incrementAmount" v-model.number="incrementAmount" />
      <p>Optimized Increment: {{ optimizeIncremeentAmount }}</p>
    </div>

    <p>Count : {{ count }}</p>

    <button @click="decrementCount" :disabled="count <= 0">Decrement Count</button>
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
