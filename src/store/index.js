import Vue from 'vue'
import Vuex from 'vuex'
import popularMovies from '../store/modules/popularMovies'
import searchResults from '../store/modules/searchResults'
import detailsMovie from '../store/modules/detailsMovie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularMovies,
    searchResults,
    detailsMovie
  }
})
