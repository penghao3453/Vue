import api from '@/api/kind'
const store = {
  state: { // 存放当前页面的状态
    bannerdata: ['banner1', 'banner2'],
    prolist: ['pro1', 'pro2', 'pro3']
  },
  getters: { // 状态的衍生值，其实就是state中的计算属性
    year1994 (state) {
      return state.prolist.filter(item => {
        if (item.year === '1994') {
          return true
        }
      })
    }
  },
  actions: { // 处理组件中的异步操作
    requestBannerdata (context) {
      api.requestdata('https://www.daxunxun.com/banner').then(data => {
        console.log(data)
        console.log(context)
        context.commit('changeBannerData', data)
      })
    },
    requestProlist (context) {
      api.requestdata('https://www.daxunxun.com/douban').then(data => {
        console.log(data)
        context.commit('changeProList', data)
      })
    }
  },
  mutations: { // 唯一改变当前页面的状态的地方
    changeBannerData (state, data) { // state就是{bannerdata:[], prolist" []}
      state.bannerdata = data // 改变状态管理器中的数据
    },
    changeProList (state, data) {
      state.prolist = data
    }
  }
}

export default store
