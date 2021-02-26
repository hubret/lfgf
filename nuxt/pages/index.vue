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
        </div>
        <form>
          <label for="name">
            Your Name
            <span class="error">
              {{errors.name}}
            </span>
          </label>
          <input id="name" name="name" type="text" v-model="form.name">
          <label for="contact">
            Contact Info (phone, email, IG handle, etc.)
            <span class="error">
              {{errors.contact}}
            </span>
          </label>
          <input id="contact" name="contact" type="contact" v-model="form.contact">
          <label for="message">
            Leave a message
            <span class="note">Optional</span>
          </label>
          <textarea id="message" rows="6" v-model="form.message"></textarea>
          <div class="group">
            <input id="age" name="age" type="checkbox" v-model="form.age">
            <label for="age">
              I confirm I am at least 18 years old
              <span class="error">
                {{errors.age}}
              </span>
            </label>
          </div>
          <div class="group">
            <input id="consent" name="consent" type="checkbox" v-model="form.consent">
            <label for="consent">
              I consent to being romantically pursued in the case that I might be The One
              <span class="error">
                {{errors.consent}}
              </span>
            </label>
          </div>
          <input class="button" type="submit" :value="!sent ? 'Send' : 'Sent ❤' " @click.prevent="validate(form)">
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
        message: '',
        age: '',
        consent: '',
      },
      errors:{
        name: '',
        contact: '',
        age: '',
        consent: '',
      },
      sent: false
    }),
    async fetch(){
      // [this.page] = await this.$content('index').fetch()
    },
    methods:{
      validate(payload){

        this.errors = {
          name: '',
          contact: '',
          age: '',
          consent: '',
        }

        if(!payload.name){
          this.errors.name = "Please enter your name"
        }
        if(!payload.contact){
          this.errors.contact = "Please provide a method of contact"
        }
        if(!payload.age){
          this.errors.age = "Please confirm age of majority"
        }
        if(!payload.consent){
          this.errors.consent = "Please state your consent"
        }

        if(!this.errors.name && !this.errors.contact && !this.errors.age && !this.errors.consent){
          this.send(payload)
        }

      },
      send(payload){
        submit.send(payload)
        this.sent = true
        this.form = {
          name: '',
          contact: '',
          message: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~/assets/scss/global.scss';

  .huge{
    font-size: 96px;
    @media (max-width: 950px){
      font-size: 48px;
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
      @media (max-width: 600px){
        padding: 48px 0;
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
      .error{
        font-size: 16px;
        color: #ff7777;
      }
      input[type=submit]{
        @extend .button;

        display: inline-block;
        height: auto;
        width: auto;
      }
      .group{
        display: grid;
        grid-template-columns: auto auto;
        gap: 16px;
      }
      input[type=checkbox]{
        display: block;
        width: 24px;
        height: 24px;
        margin: 4px 0 0 0;
      }
    }
  }

</style>
