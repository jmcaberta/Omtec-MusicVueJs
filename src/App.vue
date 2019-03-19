<template lang="pug">
  #app
    om-header

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
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}
    om-footer

  </template>

<script>
import trackService from './services/track.js'
import OmFooter from './components/layout/Footer.vue'
import OmHeader from './components/layout/Header.vue'
export default {
  name: 'app',

  components: { OmFooter, OmHeader },

  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
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
