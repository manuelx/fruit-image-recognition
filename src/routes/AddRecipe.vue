<template>
  <div class="add-recipe">
    <app-bar class="add-recipe__app-bar"/>
    <MainMenu />
    <img class="add-recipe__title"  alt="Vue logo" src="@/assets/mock-add-recipe.png" />
    
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';

export default {
  name: 'Add Recipe',
  components: {
    AppBar,
    MainMenu
  }
}
</script>

<style scoped lang="scss">
.add-recipe {
  &__app-bar {
    position: fixed;
  }

  &__title {
    margin-top:80px;
  }
}
</style>