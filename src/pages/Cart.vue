<template>
  <div class="container">
    <header class="header" style="height:.4rem;border-bottom:1px solid #eee;margin-bottom:.1rem;font-size:.18rem;">
      <p style="margin:auto;">购物车</p>
    </header>
    <div class="content">
      <ul class="itemlist-cart">
        <li v-for="item of pro" :key="item.data.id">
          <div class="img">
            <img style="width:.8rem;height:.8rem" :src="item.data[0].img" :alt="item.data[0].title">
          </div>
          <div class="info">
            <span>{{item.data[0].title}}</span>
            <div class="btn" style="overflow:hidden;">
              <button size="small" @click="red(item)" style="float:left;width:.26rem;height:.26rem;border:0;">-</button>
              <p style="float:left;width:.26rem;height:.26rem;text-align:center;border-top:1px solid #eee;border-bottom:1px solid #eee;font:.14rem/.26rem '';">{{ item.num }}</p>    
              <button size="small" @click="add(item)" style="float:left;width:.26rem;height:.26rem;border:0;">+</button>
            </div>
            <div class="ps">
              <div class="price">
              ￥{{item.num * item.data[0].price}}
            </div>
            <div class="sale">
              ￥{{ item.data[0].sale }}
            </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="jiesuan">
        <button type="default" style="background:#b4282d;width:100%;height:.5rem;border:0;color:#fff;">结账下单</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import api from '@/api/cart'
import { Button } from 'mint-ui'
Vue.use(Button)

export default {
  name: 'cart',
  data () {
    return {
      pro: [],
      total: 0
    }
  },
  created () {
    let shop = JSON.parse(localStorage.getItem('shoppingCart'))
    // this.cookieshop = shop
    // 获取数据
    for (let i = 0; i < shop.length; i++) {
      api.requestData(shop[i].id).then(data => {
        this.pro.push({
          data: data,
          num: shop[i].num
        })
        console.log(this.pro)
      }).catch(err => console.log(err))
    }
  },
  methods: {
    add (item) {
      item.num++
      this.total -= -item.price
      this.total = this.total.toFixed(2)
    },
    red (item) {
      if (item.num > 1) {
        item.num--
        this.total -= item.price
        this.total = this.total.toFixed(2)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('isLogin') === 'ok') {
      next()
    } else {
      next('/login')
    }
  }
  // beforeRouteLeave (to, from, next) {
  //   if (localStorage.getItem('pay') === 'ok') {
  //     next()
  //   } else {
  //     console.log('没付钱')
  //   }
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';
#app{
  .container{
    .header{
      @include text-align(center);
    }
    .content{
      .itemlist-cart{
        li{
          @include flexbox();
          @include rect(100%,.9rem);
          margin-bottom: .2rem;
          .img{
            margin-right:.1rem;
            margin-left:.1rem;
            padding-bottom: .1rem;
          }
          .info{
            overflow: hidden;
            width:2.6rem;
            height: .8rem;
            position: relative;
            border-bottom: .01rem solid #eee;
            padding-bottom: .1rem;
            span{
              width: 2.6rem;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .btn{
             position: absolute;right: 0;bottom:.1rem;
            }
            .ps{
               width:1.8rem;
               overflow: hidden;
               position: absolute;
               left: 0;
               bottom: .1rem;

              .price{
              color:#b4282d;
              font-size:.16rem;
              float: left;
            }
              .sale{
                color:#999;
                text-decoration:line-through;
                float: left;
                margin-left:.1rem;
                font-size: .16rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
