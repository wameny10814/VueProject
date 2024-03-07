<template>
  <NavBar />
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/test">test</RouterLink>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    HelloWorld,
    NavBar
  }
}
</script>

<style scoped>
</style>
