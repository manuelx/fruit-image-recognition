<template>
  <div class="section-title">
    <div class="section-title__title">
      {{title}}
    </div>
    <div class="section-title__line" />
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-title {
  text-align: left;
  margin-left: 8px;
  margin-right: 8px;

  &__title {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.4px;
  }
  &__line {
    background-color: #E1E2E1;
    height: 1px;
    
    width: 100%;
  }
}
</style>
