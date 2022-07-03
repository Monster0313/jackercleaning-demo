<template>
  <div class="category-clip">
    <CategoryCard v-for="(i, index) in categoryData" :key="index" :category-data="i" />
  </div>
</template>

<script>
import CategoryCard from './CategoryCard.vue'

export default {
  components: {
    CategoryCard
  },
  props: {
    categoryData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.category-clip {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: stretch;
}
@media screen and (max-width: 400px) {
  .category-clip {
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
