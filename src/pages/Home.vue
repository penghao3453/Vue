<template>
  <div class="container">
    <header class="header" style="background:#fff;">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" class="logo">
      <input type="search" name="" placeholder="搜索商品，共21200款好物" class="search" style="border:0">
      <router-link class="log" to='/register' tag='a' style="border:0.01rem solid #b4282d">R/L</router-link>
    </header>
    <div class="content">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) of bannerdata" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <List :list = "list"/>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import List from '@/components/home/List'
import api from '@/api/home'
import { Swipe, SwipeItem, Loadmore, Toast } from 'mint-ui'

Vue.use(Swipe, SwipeItem, Loadmore)

export default {
  name: 'home',
  data () {
    return {
      list: [],
      bannerdata: [],
      allLoaded: false,
      pageCode: 1
    }
  },
  components: {
    List
  },
  methods: {
    loadTop () { // 下拉刷新的函数  ---  实际上请求的就是列表第一页的数据
      api.requestList().then(data => {
        // console.log(data)
        this.list = data
        this.pageCode = 1 // 重置页码
        this.$refs.loadmore.onTopLoaded() // 更新列表的高度
      }).catch(err => console.log(err))
    },
    loadBottom () { // 上拉加载的函数  ---  分页
      api.loadmore(this.pageCode).then(data => {
        if (data.length === 0) { // 没有数据了
          this.allLoaded = true
          Toast({
            message: '数据加载完毕',
            position: 'bottom',
            duration: 5000
          })
        } else {
          this.list = [...this.list, ...data]
          this.pageCode += 1
        }
        this.$refs.loadmore.onBottomLoaded() // 更新列表的高度
      })
    }
  },
  created () {
    api.requestList().then(data => {
      // console.log(data)
      this.list = data
    }).catch(err => console.log(err))
    api.requestBanner().then(data => {
      console.log(data)
      let arr = []
      for (var item of data) {
        arr.push('https://www.daxunxun.com' + item)
      }
      this.bannerdata = arr
    }).catch(err => console.log(err))
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

.logo{
   @include display(block);
   @include rect(.7rem, .2rem);
   @include margin(.05rem 0 0 0);
}

.search{
  @include background-color(#eee);
  @include padding(.04rem .06rem);
  @include margin(0 0 0 0.2rem);
  @include rect(1.82rem, .29rem);
}

.log{
  @include display(block);
  @include color(#b4282d);
  @include border-radius(0.02rem);
  @include line-height(.26rem);
  @include rect(.4rem, .26rem);
  @include text-align();
  @include margin(0 0 0 0.2rem);
  @include rect(.38rem, .26rem);
}

.mint-swipe {
  @include rect(100%, 2rem);
  img {
    @include rect(100%, auto);
  }
}

</style>
