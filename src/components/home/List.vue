<template>
  <ul class="movielist">
    <!-- 声明式导航 -->
    <!-- <router-link tag="li" :to="{name: 'detail', query: {id: item.id}}" v-for="item of list" :key="item.id">
      <div class="movieimg">
        <img :src="item.images.small" :alt="item.alt">
      </div>
      <div class="info">
        <h3>{{ item.title }}</h3>
      </div>
    </router-link> -->
    <!-- <router-link tag="li" :to="{path: '/detail', query: {id: item.id}}" v-for="item of list" :key="item.id">
      <div class="movieimg">
        <img :src="item.images.small" :alt="item.alt">
      </div>
      <div class="info">
        <h3>{{ item.title }}</h3>
      </div>
    </router-link> -->
    <!-- 编程式导航 -->
    <li v-for="item of list" :key="item.id" @click="goDetail(item.id)">
      <div class="movieimg">
        <img :src="item.img" :alt="item.alt">
      </div>
      <div class="info">
        <h3>{{ item.title }}</h3>
      </div>
      <!-- <div class="price">
        原价：<h4>{{ item.price }}</h4>
        现价：<h5>{{ item.sale }}</h5>
      </div> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'homelist',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    goDetail (id) {
      // this.$router.push('/detail?id=' + id)
      this.$router.push({name: 'detail', params: {id}})
      // this.$router.push({path: '/detail', query: {id}})
    }
  }
}
</script>

<style lang="scss">
@import '@/qunar/reset.scss';

.movielist {
  li {
    @include rect(100%, 1.1rem);
    @include flexbox();
    .movieimg{
      @include rect(1rem, 1rem);
      @include padding(0.05rem);
      img{
        @include rect(auto, 1rem);
      }
    }

    .info {
      @include flex();
    }

    @include border(0 0 1px 0, #ccc, solid); // 1px边框实现
  }
}
</style>
