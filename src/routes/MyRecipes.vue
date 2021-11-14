<template>
  <div class="my-recipes">
    <app-bar class="my-recipes__app-bar"/>
    <MainMenu />
    <img class="my-recipes__title"  alt="Vue logo" src="@/assets/mock-my-recipes.png" />
    
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';

export default {
  name: 'MyRecipes',
  components: {
    AppBar,
    MainMenu
  }
}
</script>

<style scoped lang="scss">
.my-recipes {
  &__app-bar {
    position: fixed;
  }

  &__title {
    margin-top:80px;
  }
}
</style>