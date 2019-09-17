<template>
  <div class="hello" style="position: relative;">
    <img src="//yanxuan.nosdn.127.net/f6ddd5a19a09eb4c5bcfa8dd0fa5cb70.jpg" alt="">
    <img src="//yanxuan.nosdn.127.net/a29c67d49e940a95201c46f666487ecc.jpg" alt="">
    <img src="//yanxuan.nosdn.127.net/319818ebdeda0469705877d6e20da871.jpg" alt="">
    <p>网易公司版权所有 © 1997-2019食品经营许可证：JY13301080111719</p>
    <router-link class="open" style="position: absolute; bottom:246px; left:97px;" to='/home' tag="div"></router-link>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/qunar/reset.scss';

.hello{
  @include rect(100%, 100%);

  img{
    @include rect(100%, auto);
  }

  p{
    @include font-size(.1rem);
    @include color(#c9c9c9);
  }

  .open{
    @include rect(180px, 40px);
  }
}
</style>
