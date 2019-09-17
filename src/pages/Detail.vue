<template>
  <transition name="slide">
    <div class="detail">
      <div class="detail-t">
        <Back />
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" class="log">
        <img src="../../static/icon_border_search_24.png" alt="" class="sear">
        <img src="../../static/gouwuche.png" alt="" class="cart">
      </div>
      <div class="detail-c">
        <img :src="pro.img" alt="" class="goods">
        <i class="price">￥{{ pro.price }}</i>
        <s class="sale">￥{{ pro.sale }}</s>
        <s class="color">{{ pro.color }}</s>
        <h3>{{ pro.title }}</h3> 
      </div>
      <div class="detail-b">
        <p class="buyn" @click="buyit()">立即购买</p>
        <p class="joinc" @click="aaa()" >加入购物车</p>
      </div>
    </div>
        
  </transition>
</template>

<script>
import Back from '@/components/common/Back'
import api from '@/api/detail'
export default {
  props: ['id'],
  name: 'detail',
  data () {
    return {
      pro: {}
    }
  },
  components: {
    Back
  },
  created () {
    // console.log(this.$route.query.id)
    // const id =  this.$route.query.id
    const id = this.$route.params.id
    api.requestData(id).then(data => {
      console.log(data[0])
      this.pro = data[0]
    }).catch(err => console.log(err))
  }
,
  methods: {
    aaa () {
      let cookie = JSON.parse(localStorage.getItem('shoppingCart')) ? JSON.parse(localStorage.getItem('shoppingCart')) : []
      if (cookie.length === 0) {
        cookie.push({
          id: this.id,
          num: 1
        })
        localStorage.setItem('shoppingCart', JSON.stringify(cookie))
      } else {
        for (let i = 0; i < cookie.length; i++) {
          // var onOff = true
          console.log(cookie[i].id)
          console.log(this.id)
          if (cookie[i].id === this.id) {
            cookie[i].num++
            localStorage.setItem('shoppingCart', JSON.stringify(cookie))
            // onOff = false
            return
          }
        }
        // if (onOff) {
        cookie.push({id: this.id, num: 1})
        localStorage.setItem('shoppingCart', JSON.stringify(cookie))
        // }
      }
    },
    buyit () {
      this.$router.push({
        name: 'cart'
      })
    }
  }}

</script>

<style lang="scss">
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-active {
  transition: all 0.4s;
}
.slide-enter-to {
  transform: translateX(0);
}

.detail{
  width: 100%;
  height: 100%;
  position: relative;

  .detail-t{
    height: .49rem;
    background: #fff;
    border-bottom: 1px solid #eee;

    .log{
      width: .9rem;
      height: .27rem;
      float: left;
      margin-left: 1rem;
      margin-top: .1rem;
    }

    .sear{
      display: block;
      width: .34rem;
      height: .34rem;
      float: left;
      margin-top: .1rem;
      margin-left: .6rem;
    }

    .cart{
      display: block;
      width: .30rem;
      height: .30rem;
      float: right;
      margin-top: .1rem;
      margin-right: .1rem;
    }
  }

  .detail-c{
    padding: 0 .2rem;
    width: 100%;

    .goods{
    width: 70%;
    height: auto;
    padding: .2rem 0;
    border-bottom: 1px solid #eee;
    display: table-cell;
    margin: auto;
   }

   .price{
     font: 700 .26rem "";
     color: #B4282D;
   }

   .sale{
     color: #999;
     text-decoration:line-through;
   }

  }

  .detail-b{
    width: 100%;
    height: .5rem;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 0;

    .buyn{
      float: left;
      width: 50%;
      height: .5rem;
      border-right: 0;
      font: .16rem/.5rem "";
      color: #000;
      text-align: center;
    }
    
    .joinc{
      width: 50%;
      height: .5rem;
      float: left;
      font: .16rem/.5rem "";
      color: #fff;
      text-align: center;
      background: #B4282D;
    }
  }
}
</style>
