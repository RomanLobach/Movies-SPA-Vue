<template>
  <div class="home-view">
    <Search/>
    <PopularMovies/>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import PopularMovies from '../components/PopularMovies.vue'

export default {
  name: 'HomeView',
  components: {Search, PopularMovies}
}
</script>

<style scoped lang="scss">
</style>