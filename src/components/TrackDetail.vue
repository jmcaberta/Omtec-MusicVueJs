<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
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
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
.columns {
      margin: 20px;
}
</style>
