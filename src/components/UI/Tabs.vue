<template>
  <ul class="tabs">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      class="tabs__item"
      :class="{ 'active': $route.name === tab.name }"
      @click="activateTab(tab)">
      <a class="tabs__link">
        {{ tab.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    activateTab(tab) {
      if (this.$route.name !== tab.name) {
        this.$router.push({name: tab.name });
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs {
    background-color:var(--color-white);
    border-bottom: 1px solid var(--color-gray-light);
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    list-style-type:none;
    margin: 0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;

    &__item {
      color: var(--color-primary-light);
      cursor: pointer;
      font: var(--font-h4);
      padding: 0.5em 2em;

      &.active {
        border-bottom: 3px solid var(--color-primary); 
        color: var(--color-primary);
      }

      &:hover {
        background: var(--color-gray-light);
      }
    }
  }
</style>
