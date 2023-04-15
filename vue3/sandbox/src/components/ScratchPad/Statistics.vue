<script>
export default {
  props: {
    favCharacters: {
      type: Array,
      required: true
    }
  },

  computed: {
    characterStats() {
      const total = this.favCharacters.length

      const intelligent = this.favCharacters.filter((c) => c.character === 'intelligent').length
      const cunning = this.favCharacters.filter((c) => c.character === 'cunning').length
      const loyal = this.favCharacters.filter((c) => c.character === 'loyal').length

      function round(number) {
        if (isNaN(number)) {
          return 0
        }
        return Math.round(number * 100) / 100
      }

      const stats = {
        intelligent: `${round((intelligent / total) * 100)}%`,
        cunning: `${round((cunning / total) * 100)}%`,
        loyal: `${round((loyal / total) * 100)}%`
      }

      return stats
    }
  }
}
</script>

<template>
  <h2>Stats</h2>
  <ul>
    <li v-for="(value, key) in characterStats" :key="key">{{ key }} : {{ value }}</li>
  </ul>
</template>
