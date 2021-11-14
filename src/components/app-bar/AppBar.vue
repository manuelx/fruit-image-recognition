<template>
  <div class="app-bar">
    <div class="app-bar__menu-btn" @click="$store.dispatch('toggleMenu')">
      <img  alt="Vue logo" src="../../assets/menu-btn.png">
    </div>
    <div class="app-bar__title">
      <div class="app-bar__main-title">Green Nutrition</div>
      <div class="app-bar__sub-title">by Carrot Box</div>
    </div>
    <router-link to="/search" >
      <div class="app-bar__search-btn">
        <img  alt="Vue logo" src="../../assets/search.png">
      </div>
    </router-link>
    <router-link to="/camera-search" >
      <div class="app-bar__camera-btn">
        <img  alt="Vue logo" src="../../assets/camera.png">
      </div>
    </router-link>
  
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-bar {
  position: fixed;
  top: 0;
  background-color: #C8E6C9;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
  height: 56px;
  width: 100%; 
  display: flex;
  align-content: center;
  align-items: center;

  &__menu-btn {
    margin-left: 8px;
  }

  &__title{
    width:100%;
    text-align: left;
    margin-left: 8px;
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

  &__search-btn {
    margin-right: 16px;
  }
  
  &__camera-btn {
    margin-right: 8px;
  }
}
</style>
