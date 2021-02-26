<template>
  <main>
    <section class="hero">
      <img class="bg" :srcset="require('~/assets/images/about.jpg').srcSet">
      <div class="over">
        <div class="wrapper">
          <h1 class="huge">
            LF>GF.<br>
            Made in 2021.
          </h1>
          <h2>
            Timeless words, said again and again by many. Looking For Girlfriend aims to solve yesterday's problems using the technology we have today.
          </h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data:()=>({
      page: null,
    }),
    async fetch(){
      // [this.page] = await this.$content('index').fetch()
    },
  }
</script>

<style lang="scss" scoped>

  @import '~/assets/scss/global.scss';

  .huge{
    font-size: 96px;
    @media (max-width: 950px){
      font-size: 64px;
    }
  }

  .hero{
    height: 100vh;
    .bg{
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
    .over{
      color: #f7f7f7;
      position: relative;
      z-index: 1;
      height: 100%;
      background: rgba(0,0,0,0.3);
      display: grid;
      place-items: center;
    }
  }

</style>
