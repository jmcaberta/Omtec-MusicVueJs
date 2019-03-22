<template lang="pug">
    om-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import OmTrack from '@/components/Track.vue'
export default {
  components: { OmTrack },
  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        console.log(res)
      })
  }
}
</script>
