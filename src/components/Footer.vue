<template>
  <footer class="footer">
    <ul>
      <router-link to="/home" tag="li">
        <span></span>
        <p>首页</p>
      </router-link>
      <router-link  to="/kind" tag="li">
        <span></span>
        <p>分类</p>
      </router-link>
      <router-link  to="/cart" tag="li">
        <span></span>
        <p>购物车</p>
      </router-link>
      <router-link  to="/user" tag="li">
        <span></span>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
}
</script>
