<template>
  <div class="user">
    <app-bar class="user__app-bar"/>
    <MainMenu />
    <img class="user__title"  alt="Vue logo" src="@/assets/mock-user.png" />
    
  </div>
</template>

<script>
import AppBar from '@/components/app-bar/AppBar.vue';
import MainMenu from '@/components/main-menu/MainMenu.vue';

export default {
  name: 'User',
  components: {
    AppBar,
    MainMenu
  }
}
</script>

<style scoped lang="scss">
.user {
  &__app-bar {
    position: fixed;
  }

  &__title {
    margin-top:80px;
  }
}
</style>