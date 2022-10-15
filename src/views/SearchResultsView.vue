<template>
  <div class="main">
    <Search/>
    <SearchResults/>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import SearchResults from '../components/SearchResults.vue'
export default {
  name: 'SearchResultsView',
  components: {Search, SearchResults}
}
</script>

<style scoped lang="scss">
</style>