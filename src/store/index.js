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
    }
  },
  actions: {
    async getAllPosts({ commit }) {
      await axios.get('https://filed-notes-app-backend.herokuapp.com/posts').then(response => {
        commit('SET_POSTS', response.data.post)
      })
    },
    async addPost({ commit }, newPost) {
      await axios.post('https://filed-notes-app-backend.herokuapp.com/posts/createPost', newPost, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        commit('NEW_POSTS', response.data)
      })
    },
    async deletePost(_, postId) {
      await axios.delete(`https://filed-notes-app-backend.herokuapp.com/posts/${postId}`).then((response) => {
          console.log(response.data)
      })
    }
  },
  modules: {}
})
