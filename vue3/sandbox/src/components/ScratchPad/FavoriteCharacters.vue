<script>
import Statistics from './Statistics.vue'
import CharacterCard from './CharacterCard.vue'

export default {
  components: {
    Statistics,
    CharacterCard
  },

  props: {
    favCharacters: {
      type: Array,
      required: true
    }
  },

  emits: ['remove-fav-character']
}
</script>

<template>
  <h1>Favorite Characters</h1>

  <p v-if="favCharacters.length == 0">You have no Favorite characters</p>

  <div v-else>
    <Statistics :favCharacters="favCharacters" />

    <ul>
      <li v-for="favChar in this.favCharacters" :key="Math.random()">
        <CharacterCard
          :character="favChar"
          :isFav="true"
          @modify-character="$emit('remove-fav-character', favChar)"
        />
      </li>
    </ul>
  </div>
</template>
