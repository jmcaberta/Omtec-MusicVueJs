<template lang="pug">
#app
  p(v-show="showValue") {{ value }}
  p(v-if="showValue") {{ value }}
  p(v-else-if="false") {{ 'algo mas' }}
  p(v-else) {{ 'Lo ultimo' }}
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      showValue: false,
      value: 'Algo'
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss"
</style>
