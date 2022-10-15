import {generateSearchUrl} from '../../utils'

export default {
  state: {
    searchResults: []
  },
  getters: {
    getSearchResults(state) {
      return state.searchResults
    },
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults
    }
  },
  actions: {
    async fetchSearchResults({commit}, query) {
      await fetch(generateSearchUrl(query))
      .then(res => res.json())
      .then(data => commit('setSearchResults', data.results))
    }
  },
}