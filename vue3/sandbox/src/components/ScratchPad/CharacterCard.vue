<script>
export default {
  props: {
    character: {
      type: Object,
      required: true
    },
    isFav: {
      type: Boolean,
      required: true
    }
  },

  emits: ['modify-character'],

  methods: {
    handleClick() {
      this.$emit('modify-character')
    }
  }
}
</script>

<template>
  <div>
    <p>{{ character.name }}</p>
    <button @click="handleClick">
      {{ this.isFav ? 'Remove from ' : 'Add to' }}
      Favorites
    </button>
  </div>
</template>
