import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => new Vuex.Store({
  state: {
    token: {
      value: null,
      expire: 0
    }
  },
  getters: {
    token (state) {
      let storedToken = localStorage.getItem('LoveStoryWXToken')
      if (storedToken) {
        state.token = JSON.parse(storedToken)
      }
      const current = new Date().getTime()
      let NotExpired = (state.token.expire * 1000) > current
      if (state.token.value && NotExpired) {
        return state.token.value
      } else {
        return null
      }
    }
  },
  mutations: {
    setToken (state, {value, expire}) {
      state.token = { value, expire }
      localStorage.setItem('LoveStoryWXToken', JSON.stringify(state.token))
    }
  },
  actions: {
    login (context, {value, expire}) {
      context.commit('setToken', {value, expire})
    },
    logout (context) {
      context.commit('setToken', {
        value: null,
        expire: 0
      })
    }
  }
})
