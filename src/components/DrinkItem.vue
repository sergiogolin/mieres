<template>
  <div class="drink">
    <img
      class="drink__image"
      loading="lazy"
      :src="drink.image_url" />
    <div class="drink__body">
      <div>
        <div class="drink__title">
          {{ drink.name }}
        </div>
        <div class="drink__description">
          {{ drink.description }}
        </div>
      </div>
      <div class="drink__pairings" v-if="drink.food_pairing">
        Ideal para combinar con: {{ pairingsAsList }}
      </div>
    </div>
    <div
      class="drink__abv"
      :class="abvClass">
      {{ drink.abv }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkItem',
  props: {
    drink: {
      type: Object,
      required: true
    }
  },
  computed: {
    pairingsAsList() {
      const foodPairings = this.drink.food_pairing;
      const lastItem = foodPairings.pop();
      if (foodPairings.length === 0) {
        return lastItem;
      }
      return `${foodPairings.join(', ')} y ${lastItem}`;
    },
    abvClass() {
      if (this.drink.abv <= 5) {
        return 'low-abv';
      }
      return this.drink.abv <= 10 ? 'medium-abv' : 'high-abv';
    }
  }
}
</script>

<style scoped lang="scss">
  .drink {
    background: var(--color-white);
    border: 1px solid var(--color-gray-light);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    position: relative;

    &__image {
      margin: auto auto;
      width: 12rem;
      max-height: 15rem;
      flex-shrink: 0;
      object-fit: contain;
    }

    &__body {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      color: var(--color-primary);
      font: var(--font-h3);
      margin-bottom: 1rem;
    }

    &__description {
      font: var(--font-text-body);
      margin-bottom: 2rem;
    }

    &__pairings {
      color: var(--color-primary-light);
      font: var(--font-subtitle-2);
    }

    &__abv {
      font: var(--font-h3);
      padding: 0.2rem 0.5rem;
      position: absolute;
      right: 0;
      top: 1rem;
      text-align: right;
      width: 80px;

      &.low-abv {
        background: var(--color-yellow);
      }
      &.medium-abv {
        background: var(--color-orange);
      }
      &.high-abv {
        background: var(--color-red);
        color: var(--color-white);
      }
    }
  }

  @media(min-width: 768px) {
    .drink {
      flex-direction: row;

      &__body {
        margin-right: 8rem;
      }
    }
  }
</style>
