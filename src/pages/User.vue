<template>
  <div class="container">
    <header class="header" style="background: url(//yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png);width: 100%;height: 1.4rem;">
      <p @click="selectAvatar" class="h-l" style="background:url(../../static/b94e6a442b2f218d349a8f76df55dde8.jpg);background-size:.8rem .8rem;width:.8rem;height:.8rem; border-radius:50%;margin-top:.2rem;"></p>
      <div class="h-c" style="margin-top:.3rem;margin-left:.1rem;">
        <p style="font:.2rem '';color:#fff;margin-bottom:.05rem;">18158899789</p>
        <p style="font: 14px '';color:#fff;">普通用户</p>
      </div>
      <!-- <div class="h-r" style="float:right;">
        <img src="https://yanxuan.nosdn.127.net/f90a12cba4806f59846bdf5d82fc988d.png" alt="" style="display:block;width:.44rem;height:.44rem;">
      </div> -->
    </header>
    <div class="content">
      <div class="ctt-t">
        <ul>
          <li><a href="">
            <i class="i1"></i>
            <p>我的订单</p>
          </a></li>

          <li><a href="">
            <i class="i2"></i>
            <p>周六一起拼</p>
          </a></li>

          <li class="te"><a href="">
            <i class="i3"></i>
            <p>售后服务</p>
          </a></li>

          <li><a href="">
            <i class="i4"></i>
            <p>邀请返利</p>
          </a></li>

          <li><a href="">
            <i class="i5"></i>
            <p>优惠券</p>
          </a></li>

          <li class="te"><a href="">
            <i class="i6"></i>
            <p>我的红包</p>
          </a></li>

          <li><a href="">
            <i class="i7"></i>
            <p>优先购</p>
          </a></li>

          <li><a href="">
            <i class="i8"></i>
            <p>礼品卡</p>
          </a></li>

          <li class="te"><a href="">
            <i class="i9"></i>
            <p>积分中心</p>
          </a></li>

          <li><a href="">
            <i class="i10"></i>
            <p>会员俱乐部</p>
          </a></li>

          <li><a href="">
            <i class="i11"></i>
            <p>地址管理</p>
          </a></li>

          <li class="te"><a href="">
            <i class="i12"></i>
            <p>账号安全</p>
          </a></li>

          <li><a href="">
            <i class="i13"></i>
            <p>帮助与客服</p>
          </a></li>

          <li><a href="">
            <i class="i14"></i>
            <p>客户反馈</p>
          </a></li>
        </ul>
      </div>

      <div class="logout">
        退出登录
      </div>
      
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Actionsheet } from 'mint-ui'

Vue.use(Actionsheet)

export default {
  name: 'user',
  data () {
    return {
      actions: [
        {
          name: '拍照',
          method: this.fn1
        },
        {
          name: '从相册选取',
          method: this.fn2
        }
      ],
      sheetVisible: false
    }
  },
  methods: {
    fn1 () {
      console.log('拍照')
    },
    fn2 () {
      console.log('从相册选取')
    },
    selectAvatar () {
      this.sheetVisible = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.container{
  width: 100%;
  height: auto;

}

.ctt-t{
  border-bottom: 20px solid #eee;
}

ul{
  display: flex;
  justify-content:start;
  flex-wrap: wrap;
}

li{
  width: 1.24333rem;
  padding-top: .1rem;
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;

  a{
    width: 100%;
    height: 100%;

    i{
      display: block;
      width: 50px;
      height: 50px;
      background:url(../../static/hxm_yanxuan-wap_p_20161201_style_img_sprites_ucenter-s4184c581c7-1b75c4216b.png) no-repeat;
      margin: auto;
      margin-bottom: .05rem;
    }
    
    .i1{
      background-position-y:-774px;  
    }

    .i2{
      background-position-y:-886px;  
    }

    .i3{
      background-position-y:-294px;  
    }

    .i4{
      background-position-y:-714px;  
    }

    .i5{
      background-position-y:-354px;  
    }

    .i6{
      background-position-y:-1069px;  
    }

    .i7{
      background-position-y:-1010px;  
    }

    .i8{
      background-position-y:-474px;  
    }

    .i9{
      background-position-y:-948px;  
    }

    .i10{
      background-position-y:-834px;  
    }

    .i11{
      background-position-y:-234px;  
    }

    .i12{
      background-position-y:-1126px;  
    }

    .i13{
      background-position-y:-536px;  
    }

    .i14{
      background-position-y:-414px;  
    }

    p{
      font: 14px "";
      color: #333;
      text-align: center;
      padding-bottom: .1rem;
    }
  }
}

.te{
  border-right:0;
}

.logout{
  width: 100%;
  height: .7rem;
  border-bottom: 10px solid #eee;
  font: .16rem/.6rem "";
  color: #fff;
  text-align: center;
  background: rgb(207, 184, 132);
}


</style>
