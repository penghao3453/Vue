import axios from 'axios'

const api = {
  requestData (id) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.141.79/api/product/search?id=' + id)
        .then(data => resolve(data.data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
