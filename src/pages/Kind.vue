<template>
 <div class="container">
    <header class="header" style="height:.4rem;">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" style="display:block;width:.7rem;height:.2rem;margin:auto;" alt="">
    </header>
    <div class="content-kind" style="overflow:hidden;">
      <div style="display:flex; justify-content:space-around;margin-bottom:.1rem;">
        <button style="border:0;width:20%;height:.4rem;background:#B4282D;color:#fff;" class="brand" v-for="(item, index) of kind" :key="index" @click="show">{{ item }}</button>
      </div>
      <ul class="showlist-kind">
        <router-link :to="{name:'detail',params:{id:item.id}}" class="itemlist" v-for="item of someKind" :key="item.id" tag="a" style="width:100%;height:1.1rem;border-bottom:1px solid #eee;display:block;margin-bottom:.1rem;" >
          <div style="float:left;">
            <!-- <img :src="item.images.small" :alt="item.alt"> -->
            <img style="width:1.1rem;height:1.1rem" :src="item.img" :alt="item.title">
          </div>
          <div class="info" style="float:left;margin-left:.1rem;position:relative;height:100%;">
            <p style="width:2.5rem;color:#333;padding-top:.1rem;">{{item.title}}</p>
            <div class="info-b" style="position:absolute;bottom:0;left:0;">
              <span class="sale" style="color:#B4282D;font-size:.2rem;font-weight:700;">￥{{item.price}}</span>
              <span class="price" style="color:#999;text-decoration:line-through">￥{{item.sale}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '@/api/kind'
import { mapState, mapActions, mapGetters } from "vuex";

// export default {
//   name: 'kind',
//   computed: {
//     msg () {
//       return 'test'
//     },
//     ...mapGetters(['year1994']),
//     // year1994 () {
//     //   // console.log(this.$store)
//     //   return this.$store.getters.year1994
//     // },
//     // 使用对象展开运算符将此对象混入到外部对象中
//     ...mapState({
//       bannerdata: state => state.kindStore.bannerdata,
//       prolist: state => state.kindStore.prolist
//     })
//     // bannerdata () {
//     //   console.log(this.$store)
//     //   return this.$store.state.kindStore.bannerdata
//     // },
//     // prolist () {
//     //   console.log(this.$store)
//     //   return this.$store.state.kindStore.prolist
//     // }
//   },
//   created () {
//     // api.requestdata('https://www.daxunxun.com/douban').then(data => {
//     //   this.$store.commit('changeProList', data)
//     // })
//     // api.requestdata('https://www.daxunxun.com/banner').then(data => {
//     //   this.$store.commit('changeBannerData', data)
//     // })
//     // this.$store.dispatch('requestBannerdata')
//     // this.$store.dispatch('requestProlist')
//     this.requestBannerdata()
//     this.requestProlist()
//   },
//   methods: {
//     ...mapActions([
//       'requestBannerdata',
//       'requestProlist'
//     ])
//   }
// }

export default {
  name: "kind",
  data() {
    return {
      list: [],
      kind: [],
      someKind: []
    };
  },
  methods: {
    show(event) {
      this.someKind = [];
      // console.log(event.target.innerText)
      for (let i = 0; i < this.list.length; i++) {
        if (event.target.innerText === this.list[i].brand) {
          this.someKind.push(this.list[i]);
        }
      }
      console.log(this.someKind);
    }
  },
  created() {
    api
      .requestData()
      .then(data => {
        this.list = data;
        console.log(this.list);
        for (let i = 0; i < data.length; i++) {
          this.kind.push(data[i].brand);
        }
        this.kind = [...new Set(this.kind)];
        console.log(this.kind);
      })
      .catch(err => console.log(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
