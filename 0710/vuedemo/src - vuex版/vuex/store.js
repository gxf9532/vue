// vuex最核心的管理模块

import Vue from 'vue'
import VueX from 'vuex'

// 在Vue中使用VueX
Vue.use(VueX)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {

  increment (context) {
    context.commit('INCREMENT')
  },
  decrement (context) {
    context.commit('DECREMENT')
  },

  incrementOdd (context) {
    if (state.count % 2 === 1) {
      context.commit('INCREMENT')
    }
  },
  incrementSync (context) {
    setTimeout(() => {
      context.commit('INCREMENT')
    }, 500)
  }
}

const getters = {
  isOdd (state) {
    return state.count % 2 === 1 ? '奇' : '偶'
  }
}

export default new VueX.Store({
  state,
  mutations,
  actions,
  getters
})
