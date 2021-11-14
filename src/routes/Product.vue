<template>
  <div class="product">
    <app-bar class="product__app-bar" />
    <MainMenu />
    <router-link to="/search/banana?showRecipes=true" >
      <img class="product__mock-product-1"  alt="Vue logo" :src="getProductSrc()">
    </router-link>
    
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';
import arandano from "@/assets/mock-product-arandano.png";
import banana from "@/assets/mock-product-banana.png";
import mango from "@/assets/mock-product-mango.png";

export default {
  name: 'Product',
  components: {
    AppBar,
    MainMenu
  },
  data() {
    return {
      productsById: {
        arandano,
        banana,
        mango
      }
    };
  },
  methods: {
    getProductSrc(){
      const productId = this.$router.currentRoute.params.id;
      return this.productsById[productId]
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  &__app-bar {
    position: fixed;
  }

  &__mock-product-1 {
    margin-top: 80px ;
  }

  
}
</style>