<template>
  <div class="recipe">
    <app-bar class="recipe__app-bar" />
    <MainMenu />
    <router-link to="/search/banana?showRecipes=true" >
      <img class="recipe__mock-recipe-1"  alt="recipe" :src="getRecipeSrc()">
    </router-link>
    
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';
import arandano from "@/assets/mock-recipe-muffin-arandano.png";

export default {
  name: 'Recipe',
  components: {
    AppBar,
    MainMenu
  },
  data() {
    return {
      recipeById: {
        arandano,
      }
    };
  },
  methods: {
    getRecipeSrc(){
      const productId = this.$router.currentRoute.params.id || "arandano";
      return this.recipeById[productId]
    }
  }
}
</script>

<style scoped lang="scss">
.recipe {
  &__app-bar {
    position: fixed;
  }

  &__mock-recipe-1 {
    margin-top: 80px ;
  }

  
}
</style>