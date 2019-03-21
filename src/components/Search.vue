<template lang="pug">
  main
      om-notification(v-show="showNotification")
        p(slot="body") Keine Ergebnisse gefunden

      om-loader(v-show="isLoading")
      section.section(v-show="!isLoading")
        nav.nav.has-shadow
          .container
            input.input.is-large(type="text", placeholder="Suchen", v-model="searchQuery"
            )
            a.button.is-success.is-large(@click="search") Suchen
            a.button.is-danger.is-large &times;
        .container
          p
            small {{ searchMessage }}

        .container.results
          .columns.is-multiline
            .column.is-one-quarter(v-for="t in tracks")
              om-track(
                :track="t",
                @select="setSelectedTrack",
                :class="{ 'is-active': t.id == selectedTrack }")
  </template>

<script>
import trackService from '@/services/track'
import OmTrack from '@/components/Track.vue'
import OmLoader from '@/components/shared/Loader.vue'
import OmNotification from '@/components/shared/Notification.vue'
export default {
  name: 'app',

  components: { OmTrack, OmLoader, OmNotification },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }

      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `gefunden: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  .results {
    margin-top: 50px;
  }

  .is-active{
    border: 3px #5D4037 solid;
  }
</style>
