import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collection: [],
  },
  mutations: {
    SET_TASKS: (state, tasks) => {
      state.collection.push(tasks)
    },
  },
  actions: {
  },
  modules: {
  }
})
