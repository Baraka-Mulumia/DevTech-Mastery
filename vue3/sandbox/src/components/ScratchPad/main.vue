<script>
import BaseCounter from './BaseCounter.vue'
import CharacterList from './CharacterList.vue'
import FavoriteCharacters from './FavoriteCharacters.vue'
import BaseButton from './BaseButton.vue'
import BaseLayout from './BaseLayout.vue'

export default {
  components: {
    BaseCounter,
    BaseButton,
    BaseLayout,
    CharacterList,
    FavoriteCharacters
  },

  data: () => ({
    message: 'Hello Vue! i am here',
    characters: [
      {
        name: 'Michael Scofield',
        character: 'intelligent'
      },
      {
        name: 'Lincoln Burrows',
        character: 'cunning'
      },
      {
        name: 'Sara Tancredi',
        character: 'loyal'
      },
      {
        name: 'LJ Burrows',
        character: 'cunning'
      }
    ],
    newCharacter: '',
    favCharacters: []
  }),

  methods: {
    addFavCharacter(character) {
      this.favCharacters.push(character)
    },

    removeFavCharacter(character) {
      this.favCharacters = this.favCharacters.filter((c) => c.name != character.name)
    },

    addCharacter(event) {
      this.characters.push({
        name: this.newCharacter
      })
      this.newCharacter = ''
    }
  }
}
</script>

<template>
  <h1>
    <span v-if="message.length % 2 == 0">Even</span>
    <span v-else>Odd</span>
    {{ message }}
  </h1>

  <!-- <BaseButton> Arrow Left - Hi </BaseButton> -->

  <BaseLayout>
    <template v-slot:sidebar>
      <BaseCounter />
    </template>
    <template v-slot:main>
      <div>
        <label for="newCharacter"> Enter new Character </label>
        <input
          type="text"
          id="newCharacter"
          v-model.text="newCharacter"
          @keyup.enter="addCharacter"
        />
      </div>

      <CharacterList :characters="characters" @add-fav-character="addFavCharacter" />

      <FavoriteCharacters
        :favCharacters="favCharacters"
        @remove-fav-character="removeFavCharacter"
      />
    </template>
    <template v-slot:footer> Footer </template>
  </BaseLayout>
</template>
