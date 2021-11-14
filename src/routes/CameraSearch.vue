<template>
  <div class="camera-search">
    <video width="100%" height="100%" autoplay @ended="onVideoEnded">
      <source :src="currentFruitSelection" type="video/mp4">
    </video>
    <div :class='[{"camera-search__dark-overlay--banana": (isProductFound && currentFruit === "banana"), "camera-search__dark-overlay--mango": (isProductFound && currentFruit !== "banana")}, "camera-search__dark-overlay"]'/>
    <div class="camera-search__close-btn" >✖</div>
    <router-link :to="'/product/'+currentFruit" >
      <img :class='["camera-search__menu", {"camera-search__menu--open": isProductFound}]'  alt="Menu" :src="currentFruitMenu">
    </router-link>
  </div>
</template>

<script>

import bananaSelection from "@/assets/mock-selection-banana.mp4";
import mangoSelection from "@/assets/mock-selection-mango.mp4";
import bananaMenu from "@/assets/mock-photo-search-menu-banana.png";
import mangoMenu from "@/assets/mock-photo-search-menu-mango.png";

export default {
  name: 'CameraSearch',
 data() {
    return {
      
      currentFruitSelection: (this.currentFruit === "banana") ? bananaSelection : mangoSelection,
      currentFruitMenu: (this.currentFruit === "banana") ? bananaMenu : mangoMenu,
      isProductFound: false
    }
 },
  beforeCreate() {
    this.currentFruit = this.$store.state.currentFruitSearch;
    this.$store.dispatch("toggleFruit");
  },
  methods: {
    onVideoEnded() {
      this.isProductFound =true;
    }
  }
}
</script>

<style scoped lang="scss">
.camera-search {
    &__menu {
      transition: bottom 0.5s;
      position: absolute;
      left: 0;
      bottom: -200px;

      &--open {
        bottom: 0;
      }
    }

    &__close-btn {
      position:absolute;
      left: 16px;
      top: 16px;
      color: aliceblue;
    }

    &__dark-overlay {
      display: none;
      position:absolute;
      top:0;
      left: 0;
      transition: opacity 0.5s;
      visibility: hidden;
      position: fixed;
      background-color: #000000;
      opacity: 0;
      height: 100vh;
      width: 100vw;

      &--banana {
        display: block;
        clip-path: polygon(0% 0%, 0% 100%, 3% 100%, 3% 13%, 75% 13%, 75% 78%, 3% 78%, 3% 100%, 100% 100%, 100% 0%);
        visibility: visible;
        opacity: 0.6;
      }
      &--mango {
        display: block;
        clip-path: polygon(0% 0%, 0% 100%, 20% 100%, 20% 17%, 89% 17%, 89% 66%, 3% 66%, 20% 100%, 100% 100%, 100% 0%);
        visibility: visible;
        opacity: 0.6;
      }
    }
}
</style>