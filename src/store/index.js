import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collection: [],
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.collection = posts
    },
    NEW_POSTS: (state, posts) => {
      state.collection.unshift(posts)
    },
    DELETE_POSTS: (state, posts) => {
      state.collection = posts
    },
    NEW_SOIL_TEMP: (state, soilTemp) => {
      state.collection.push(soilTemp)
    }
  },
  actions: {
    async getAllTasks({ commit }) {
      await axios.get('https://field-notes-server.herokuapp.com/task/all').then(response => {
        commit('SET_POSTS', response.data.allTasks)
      })
    },
    async addTask({ commit }, newPost) {
      await axios.post('https://field-notes-server.herokuapp.com/task/create', newPost, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        commit('NEW_POSTS', response.data.createTask)
      })
    },
    async deleteTask(_, postId) {
      await axios.delete(`https://field-notes-server.herokuapp.com/task/${postId}`).then((response) => {
          console.log(response.data)
      })
    }
  },
  modules: {}
})
