import { defineStore } from 'pinia'

export const useCountStore = defineStore('CountStore', {
  state: () => ({
    count: 0,
    incrementAmount: 10,
    counterTitle: 'Counter Standard'
  }),

  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },

  actions: {
    increment() {
      this.count += this.incrementAmount
    },

    decrement() {
      this.count -= this.incrementAmount
    }
  }
})
