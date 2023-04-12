<script>
import CharacterCard from './CharacterCard.vue'

export default {
  components: {
    CharacterCard
  },

  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  emits: ['add-fav-character']
}
</script>

<template>
  <h1>All Characters</h1>

  <p v-if="this.characters.length == 0">There are no characters</p>

  <ul v-else>
    <li v-for="character in characters" :key="character">
      <CharacterCard
        :character="character"
        :isFav="false"
        @modify-character="$emit('add-fav-character', character)"
      />
    </li>
  </ul>
</template>
