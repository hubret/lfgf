<template>
  <nav :class="{scrolled: (scrolled || nomove)}">
    <div class="inner wrapperbig">
      <nuxt-link to="/">
        <img src="~/assets/images/logowhite.svg">
      </nuxt-link>
      <div class="menu">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link :to="{path:'/',hash:'form'}">Contact</nuxt-link>
        <nuxt-link :to="{name: 'about'}">About</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['nomove'],
    data:()=>({
      scrolled: false,
    }),
    methods: {
      handleScroll: function (event) {
        if(process.browser){
          if(document.documentElement.scrollTop > 0){
            this.scrolled = true
          }
          if(document.documentElement.scrollTop <= 0){
            this.scrolled = false
          }
        }
      }
    },
    created: function () {
      if(process.browser){
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed: function () {
      if(process.browser){
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav{
    font-family: "Red Hat Display";
    position: fixed;
    height: 100px;
    width: 100%;
    top: 0;
    z-index: 90;
    background: rgba(0,0,0,0);
    transition: 0.5s all ease-in-out;
    &.scrolled{
      height: 60px;
      background: rgba(0,0,0,1);
    }
    .inner{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .menu{
        @media (max-width: 600px){
          display: none;
        }
        a{
          margin-left: 24px;
        }
      }
    }
    img{
      height: 40px;
    }
  }

  a{
    color: #f7f7f7;
    text-decoration: none;
    &.nuxt-link-exact-active{
      font-weight: 800;
      text-decoration: underline;
    }
  }
</style>