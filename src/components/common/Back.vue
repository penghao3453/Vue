<template>
  <img src="../../../static/icon_arrow_left_24.png" alt="" @click="back" class="back">
</template>

<script>
export default {
  name: 'back',
  methods: {
    back () {
      console.log(this)
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.back{
  display: block;
  width: .44rem;
  height: .44rem;
  float: left;
}
</style>
