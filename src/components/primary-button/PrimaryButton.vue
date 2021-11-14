<template>
  <button class="primary-button" >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
}
</script>

<style scoped lang="scss">
.primary-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2E7D32;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
</style>