<template>
  <div class="search">
    <app-bar class="search__app-bar"/>
    <MainMenu />
    
    <div class="search__input-container">
      <div class="search__search-btn" @click="onSearchClick">
        <img class="search__input-icon"  alt="Vue logo" src="@/assets/search.png">
      </div>
      <input class="search__input" type="text" v-model="searchText" />
    </div>

    <img v-show="doSearch==='man' && showProducts" class="search__results"  alt="Vue logo" src="@/assets/product-results-man.png" @click="showProducts = !showProducts">
    <img v-show="doSearch==='man' && !showProducts" class="search__results"  alt="Vue logo" src="@/assets/recipe-results-man.png" @click="showProducts = !showProducts">
    <img v-show="doSearch==='banana' && showProducts" class="search__results"  alt="Vue logo" src="@/assets/product-results-banana.png" @click="showProducts = !showProducts">
    <img v-show="doSearch==='banana' && !showProducts" class="search__results"  alt="Vue logo" src="@/assets/recipe-results-banana.png" @click="showProducts = !showProducts">
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';

export default {
  name: 'Search',
  components: {
    AppBar,
    MainMenu
  },
  data() {
    return {
      doSearch: this.$router.currentRoute.params?.searchText || "",
      searchText: this.$router.currentRoute.params?.searchText || "",
      showProducts: (this.$router.currentRoute.query?.showRecipes) ? false :  true
    };
  },
  methods: {
    onSearchClick() {
      console.log("search", this.$router.currentRoute);
      this.doSearch = this.searchText;
    }
  }
}
</script>

<style scoped lang="scss">
.search {
  
  &__input-container {
    display: flex;
    align-content: center;
    align-items: center;
    margin: 16px 16px;
    margin-top: 80px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    padding: 7px;
  }

  &__input {
    outline: 0;
    border-width: 0;
    width:100%
  }

  &__search-btn {
    display: flex;
    align-content: center;
    align-items: center;
  }
  &__input-icon{
    margin-right: 5px;
  }
}
</style>