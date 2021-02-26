<template>
  <main>
    <section class="hero">
      <img class="bg" :srcset="require('~/assets/images/bg.jpg').srcSet">
      <!-- <NuxtContent :document="page"></NuxtContent> -->
      <div class="over">
        <div class="wrapper">
          <h1>
            You could be <i>The One</i> out of<br>
            <animated-number class="huge" :value="7852486580" :format-value="(value)=>`${value.toFixed(0)}`" :duration="9000" easing='easeOutExpo'></animated-number><br>
            people on Earth.
          </h1>
          <nuxt-link class="button" :to="{hash: 'form'}">Drop a line!</nuxt-link>
        </div>
      </div>
    </section>
    <section id="form">
      <div class="wrapper">
        <div>
          <div class="h1">
            Think you are girlfriend material? You'll get your time in the limelight.
          </div>
          You will be contacted within 3 business days once your application is recieved!
        </div>
        <form>
          <label for="name">
            Your Name
          </label>
          <input id="name" name="name" type="text" v-model="form.name">
          <label for="contact">
            Contact Info (phone, email, IG handle, etc.)
          </label>
          <input id="contact" name="contact" type="contact" v-model="form.contact">
          <label for="message">
            Leave a message
            <span class="note">Optional</span>
          </label>
          <textarea id="message" rows="6" v-model="form.message"></textarea>
          <input class="button" type="submit" value="Send" @click.prevent="send()">
        </form>
      </div>
    </section>
  </main>
</template>

<script>
  import submit from '~/services/submit.js'
  export default {
    data:()=>({
      page: null,
      form:{
        name: '',
        contact: '',
        message: ''
      }
    }),
    async fetch(){
      // [this.page] = await this.$content('index').fetch()
    },
    methods:{
      send(){
        console.log(this.$config)
        submit.send(form)
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~/assets/scss/global.scss';

  .huge{
    font-size: 96px;
    @media (max-width: 950px){
      font-size: 64px;
    }
    font-family: 'Anonymous Pro';
    font-variant-numeric: tabular-nums;
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

  #form{
    padding: 96px 0;
    .h1{
      margin-bottom: 24px;
    }
    form{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 96px 144px;
      font-family: "Red Hat Display";
      @media (max-width: 950px){
        padding: 96px 0;
      }
      label{
        font-size: 24px;
        font-family: "Red Hat Display";
      }
      input{
        height: 36px;
      }
      input, textarea{
        width: 100%;
        border: 0;
        background: #f7f7f7;
        border-radius: 10px;
        padding: 0 8px;
        font-family: "Open Sans";
      }
      label, input, textarea{
        margin-bottom: 8px;
        box-sizing: border-box;
      }
      textarea{
        padding: 8px;
      }
      .note{
        font-size: 16px;
        color: #aaaaaa;
      }
      input[type=submit]{
        @extend .button;

        display: inline-block;
        height: auto;
        width: auto;
      }
    }
  }

</style>
