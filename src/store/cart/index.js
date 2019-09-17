import api from '@/api/cart'
const store = {
  state: {
    cartlist: []
  },
  getters: {
    totalPrice (state) {
      return state.cartlist.reduce((sum, item) => {
        if (item.flag) {
          return sum + item.num * item.price
        } else {
          return sum
        }
      }, 0)
    },
    totalNum (state) {
      return state.cartlist.reduce((sum, item) => {
        if (item.flag) {
          return sum + item.num
        } else {
          return sum
        }
      }, 0)
    }
  },
  actions: {
    requestdata (context) {
      api.requestdata().then(data => {
        context.commit('changeCartlist', data)
      })
    }
  },
  mutations: {
    changeCartlist (state, data) {
      state.cartlist = data
    }
  }
}

export default store
