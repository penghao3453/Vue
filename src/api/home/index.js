import axios from 'axios'

const api = {
  requestList () {
    // console.log('1111')
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.141.79/api/product')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
    // axios.get('https://www.daxunxun.com/douban')
    //   .then(data => {
    //     console.log(data.data)
    //   })
    //   .catch(err => console.log(err))
  },
  requestBanner () {
    return new Promise((resolve, reject) => {
      axios.get('https://www.daxunxun.com/banner')
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  loadmore (pageCode) {
    pageCode +=1
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.141.79/api/product?pageCode=' + pageCode + '&count=8')
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
