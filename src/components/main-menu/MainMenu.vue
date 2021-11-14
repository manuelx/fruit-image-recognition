<template>
  <div :class='["main-menu", ]' >
    <div :class='[{"main-menu__dark-overlay--visible": $store.state.isMenuOpen}, "main-menu__dark-overlay"]' @click="toggleMenu"/>
    
    <div :class='["main-menu__container", {"main-menu__container--open": $store.state.isMenuOpen}]' >
      <img class="main-menu__header"  alt="menu" src="@/assets/menu-header-user.png">
      <div v-for="(item) in items" :key="`${item.route}`">
        <div v-if="item.isSeparator" class="main-menu__separator" />
        <router-link v-else :to="item.route" @click.native="toggleMenu">
          <img class="main-menu__item"  :alt="'menu-'+item.route" :src="item.icon">
        </router-link>
      </div>
        
    </div>
  </div>
</template>

<script>
import iconHome from "@/assets/menu-item-inicio.png";
import iconSearch from "@/assets/menu-item-buscar.png";
import iconSearchImage from "@/assets/menu-item-buscar-imagen.png";
import iconMyRecipes from "@/assets/menu-item-mis-recetas.png";
import iconAddRecipe from "@/assets/menu-item-agregar-receta.png";
import iconFavorites from "@/assets/menu-item-favorites.png";
import iconUser from "@/assets/menu-item-usuario.png";
import iconLogout from "@/assets/menu-item-exit.png";
export default {
  name: 'MainMenu',
  props: {
    isOpen: Boolean
  },
  data() {
    return {
      items: [
        {route:"/", icon: iconHome},
        {route:"/search", icon: iconSearch},
        {route:"/camera-search", icon: iconSearchImage},
        {route:"/myrecipes", icon: iconMyRecipes},
        {route:"/addrecipe", icon: iconAddRecipe},
        {route:"/favorites", icon: iconFavorites},
        {isSeparator:true},
        {route:"/edituser", icon: iconUser},
        {route:"/login", icon: iconLogout},
      ]
    };
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('toggleMenu');
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  position: fixed;
  top: 0;
  &__container {
    text-align: left;
    margin-left: -360px;
    transition: margin-left 0.5s;
    position: absolute;
    background-color: #ffffff;
    height: 100vh;
    width: 300px;
    
    &--open {
      margin-left:  0px;  
    }
  }

  &__item {
    margin-left: 32px;
    margin-top: 16px
  }

  &__separator {
    background-color: #E1E2E1;
    height: 2px;
    width: calc(100% - 64px);
    margin-left: 32px;
    margin-top: 16px
  }

  &__dark-overlay {
    position: absolute;
    transition: opacity 0.5s;
    visibility: hidden;
    background-color: #000000;
    opacity: 0;
    height: 100vh;
    width: 100vw;

    &--visible {
      visibility: visible;
      opacity: 0.6;
    }
  }
}
</style>