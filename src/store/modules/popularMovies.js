import {generateUrl} from '../../utils'

export default {
  state: {
    popularMovies: []
  },
  getters: {
    getPopularMovies(state) {
      return state.popularMovies
    },
  },
  mutations: {
    setPopularMovies(state, popularMovies) {
      state.popularMovies = popularMovies
    }
  },
  actions: {
    async fetchPopularMovies({commit}) {
      await fetch(generateUrl('popular'))
        .then(res => res.json())
        .then(data => commit('setPopularMovies', data.results))
    }
  },
}