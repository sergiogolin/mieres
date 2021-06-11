<template>
  <div
    class="accommodation"
    :class="{ 'accommodation--active': isSelected }">
    <div class="accommodation__top">
      <div class="accommodation__title">
        {{ accommodation.title }}
      </div>
      <hr class="accommodation__separator" />
      <ul class="accommodation__features">
        <li
          v-for="(feature, index) in accommodation.features"
          :key="`feature-${index}`">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="accommodation__bottom">
      <div
        class="accommodation__checker"
        :class="{ 'active': isSelected }"
        @click="$emit('input', accommodation)"
        :checked="isSelected">
        <input type="radio" :checked="isSelected" />
        <label>Elegir régimen</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccommodationItem',
  props: {
    accommodation: {
      type: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  data() {
    return {
      localValue: this.value
    }
  },
  computed: {
    isSelected() {
      return this.accommodation.title === this.localValue?.title
    }
  },
  watch: {
     localValue (newValue) {
       this.$emit('input', newValue)
     },
     value (newValue) {
       this.localValue = newValue
     }
  }
}
</script>

<style scoped lang="scss">
  .accommodation {
    background: var(--color-white);
    border: 1px solid var(--color-gray-light);
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    &--active {
      border: 1px solid var(--color-primary);
    }

    &__title {
      color: var(--color-primary); 
      font: var(--font-h5);
      text-align: center;
    }

    &__separator {
      border-color: var(--color-gray-lighter);
      width: 40%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    &__features {
      color: var(--color-gray-dark);
      font: var(--font-subtitle-1);
      margin: 0;
      padding-left: 1rem;
      text-align: left;

      li {
        padding: 3px 0;
      }
    }

    &__checker {
      background: var(--color-gray-lighter);
      border: 1px solid var(--color-gray-light);
      cursor: pointer;
      font: var(--font-h6);
      padding: 0.7rem;
      text-align: left;

      label {
        padding-left: 8px;
        cursor: pointer;
      }

      &.active {
        border: 1px solid var(--color-primary-dark);
      }
    }
  }
</style>
