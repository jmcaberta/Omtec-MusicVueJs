<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Suchen", v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Suchen
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
  </template>

<script>
const tracks = [
  { name: 'Muchacha', artist: 'Lius alberto Sanchez' },
  { name: 'Hoy aca en el baile', artist: 'El pillo' },
  { name: 'El burrito Cha cha cha', artist: 'La sonora matancera' }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  },
  computed: {
    searchMessage () {
      return `gefunden: ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";

  .results {
    margin-top: 50px;
  }
</style>
