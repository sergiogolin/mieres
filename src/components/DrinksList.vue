<template>
  <div class="drinks">
    <div class="drinks__title">
      Bebidas
    </div>
    <div class="drinks__section">
      <div class="drinks__title">
        Cervezas
      </div>
      <DrinkItem
        v-for="drink in drinks"
        :key="drink.id"
        class="drinks__item"
        :drink="drink" />
    </div>
  </div>
</template>

<script>
import DrinkItem from '@/components/DrinkItem.vue'
import { getBeersPage } from '@/services/drinksService.js'

export default {
  name: 'DrinksList',
  components: {
    DrinkItem
  },
  data() {
    return {
      drinks: []
    }
  },
  created() {
    getBeersPage(1, 10)
      .then(drinks => this.drinks = drinks);
  }
}
</script>

<style scoped lang="scss">
  .drinks {
    text-align: left;

    &__title {
      color: var(--color-primary-light);
      font: var(--font-h1);
      margin-bottom: 2rem;
      margin-top: 1rem;
    }

    &__section {
      background: var(--color-white);
      border: 1px solid var(--color-gray-light);
      padding: 1rem;
    }

    &__item + &__item {
      margin-top: 1rem;
    }
   
  }
</style>
