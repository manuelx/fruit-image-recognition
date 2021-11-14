<template>
  <div class="favorites">
    <app-bar class="favorites__app-bar"/>
    <MainMenu />
    <img class="favorites__title"  alt="Vue logo" src="@/assets/mock-favorites-header.png" />
    <img v-show="showProducts" class="favorites__results"  alt="Vue logo" src="@/assets/mock-favorites-product.png" @click="showProducts = !showProducts" />
    <img v-show="!showProducts" class="favorites__results"  alt="Vue logo" src="@/assets/mock-favorites-recipe.png" @click="showProducts = !showProducts" />
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';

export default {
  name: 'Favorites',
  components: {
    AppBar,
    MainMenu
  },
  data() {
    return {
      showProducts: (this.$router.currentRoute.query?.showRecipes) ? false :  true
    };
  }
}
</script>

<style scoped lang="scss">
.favorites {
  &__app-bar {
    position: fixed;
  }

  &__title {
    margin-top:80px;
  }

  &__results {
    margin-top:8px;
  }
}
</style>