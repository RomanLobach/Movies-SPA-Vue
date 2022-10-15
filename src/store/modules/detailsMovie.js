import {generateUrl} from '../../utils'

export default {
  state: {
    detailsMovie: {}
  },
  getters: {
    getDetailsMovie(state) {
      return state.detailsMovie
    },
  },
  mutations: {
    setDetailsMovie(state, detailsMovie) {
      state.detailsMovie = detailsMovie
    }
  },
  actions: {
    async fetchDetailsMovie({commit}, movieId) {
      await fetch(generateUrl(movieId))
      .then(res => res.json())
      .then(data => commit('setDetailsMovie', data))
    }
  },
}