<template>
    <NavBar />
    <RouterView />
    <FooterView />
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    NavBar,
    FooterView
  }
}
</script>

<style lang="scss">

</style>
