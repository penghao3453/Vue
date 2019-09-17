import Vue from 'vue'
import VueX from 'vuex'
import kindStore from './kind'
import cartStore from './cart'

Vue.use(VueX)

const store = new VueX.Store({
  modules: {
    kindStore,
    cartStore
  }
})

export default store
