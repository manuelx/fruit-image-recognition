<template>
  <div class="home">
    <app-bar class="home__app-bar"/>
    <MainMenu />
    <router-link to="/product/arandano" >
      <img class="home__mock-home-1"  alt="Vue logo" src="@/assets/mock-home-1.png">
    </router-link>
    <router-link to="/recipe" >
      <img class="home__mock-home-2"  alt="Vue logo" src="@/assets/mock-home-2.png">
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';



export default {
  name: 'Home',
  components: {
    AppBar,
    MainMenu
  }
}
</script>

<style scoped lang="scss">
.home {
  &__app-bar {
    position: fixed;
  }

  &__mock-home-1 {
    margin-top: 80px ;
  }
  
  &__mock-home-2 {
    margin-top: 4px ;
  }
}
</style>