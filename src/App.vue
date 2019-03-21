<template lang="pug">
  #app
    om-header

    router-view

    om-footer

  </template>

<script>
import OmFooter from '@/components/layout/Footer.vue'
import OmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',

  components: { OmFooter, OmHeader }
}
</script>

<style lang="scss">
  @import "./scss/main.scss";
  .results {
    margin-top: 50px;
  }

  .is-active{
    border: 3px #5D4037 solid;
  }
</style>
