<template>
  <div class="container">
    <mt-header title="登录">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" class="yx">
    <mt-field placeholder="请输入手机号" type="tel" :state="phoneState" v-model="phone" style="padding:0 .2rem;"></mt-field>
    <mt-field placeholder="请输入密码" type="password" :state="passwordState" v-model="password" style="padding:0 .2rem;"></mt-field>
    <mt-button  @click.native="logined" class="login">登录</mt-button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Header, Field, Button, Toast } from 'mint-ui'
Vue.use(Header, Field, Button)

export default {
  name: 'login',
  data () {
    return {
      btnflag: false,
      phone: '18158899789',
      password: '',
    }
  },
  computed: {
    phoneState () {
      if (this.phone === '') {
        return ''
      } else {
        if (/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.phone)) {
          return 'success'
        } else {
          return 'error'
        }
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else {
        if (this.password.length > 5) {
          return 'success'
        } else {
          return 'error'
        }
      }
    },
    flag () {
      if (this.codeState === 'success' && this.phoneState === 'success' && this.passwordState === 'success') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    logined () {
      axios.post('https://www.daxunxun.com/users/register', {
        username: this.phone,
        password: this.password
      }).then(data => {
        console.log(data)
        if (data.data === 2) {
          Toast('登陆成功')
          this.$router.push('/home')
          localStorage.setItem('isLogin', 'ok')
        } else if (data.data === 0) {
          Toast('登录失败')
          this.$router.push('/login')
        } else {
          Toast('没有该用户') 
        }
      })
    }
  }
}
</script>

<style lang="scss">
.mint-header {
  background-color: #000;
}

.yx{
    display: block;
    width: 1.33rem;
    height: .45rem;
    margin: .5rem auto;
}

.reg{
  width: 3.4rem;
  margin: .3rem auto;
  background: #fff;
  color: #000;
  border: 1px solid #000;
}

.login{
  width: 3.4rem;
  margin: .3rem auto;
  margin-top: 0;
  background: #B4282D;
  color: #fff;
  margin-top: .2rem;
}
</style>
