<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Suchen")
          a.button.is-info.is-large Suchen
          a.button.is-danger.is-large &times;

      .container
        .columns
          .column
  </template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import "./scss/main.scss"
</style>
