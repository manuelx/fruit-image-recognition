<template>
  <div class="login">
    <div class="login__header">
      <div class="login__logo">
        <img  alt="Vue logo" src="@/assets/logo.png">
      </div>
      <div class="login__title">
        <div class="login__main-title">Green Nutrition</div>
        <div class="login__sub-title">by Carrot Box</div>
      </div>
    </div>
    <div class="headline-6 align-left m-l-16 m-t-64" >Login</div>
    <form class="login__form" @submit.prevent="gotoHome">
      <primary-input class="login__input" placeholder="Usuario" type="text"/>
      <primary-input class="login__input" placeholder="contraseña" type="password"/>
      <div class="login__bottom-bar">
        <primary-button class="login__btn" >INGRESAR</primary-button> 
        <img class="home__mock-home-1"  alt="Vue logo" src="@/assets/mock-login-bottom-options.png">
      </div>
    </form>
  </div>
</template>

<script>

import PrimaryInput from "@/components/primary-input/PrimaryInput.vue";
import PrimaryButton from '../components/primary-button/PrimaryButton.vue';

export default {
  name: 'Login',
  components: {
    PrimaryInput,
    PrimaryButton,
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    gotoHome () {
      console.log("anda")
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  &__header{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  
  &__logo {
    margin-top: 16px
  }
  
  &__title{
    text-align: left;
    margin-left: 16px;
    margin-top: 16px
  }

  &__main-title{
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
  }

  &__sub-title{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.4px;
  }

  &__form {
    margin-left: 16px;
    margin-right: 16px;
  }

  &__input {
    margin-top: 32px;
    width: 100%;
  }

  &__bottom-bar {
    position:absolute;
    bottom: 0;
    right: 8px;
    text-align: -webkit-right;
  }

  &__btn {
    margin-bottom: 8px;
  }

  
}
</style>