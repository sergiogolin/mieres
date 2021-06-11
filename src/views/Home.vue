<template>
  <div class="home">
    <Tabs :tabs="tabs" />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/UI/Tabs.vue'

export default {
  name: 'Home',
  components: {
    Tabs
  },
  data() {
    return {
      tabs: [
        { id: '1', title: 'Tab 1', name: 'Accommodation' },
        { id: '3', title: 'Tab 3', name: 'Drinks' }        
      ]
    }
  }
}
</script>

<style lang="scss">
  .content-wrapper {
    margin: 0 2.5rem 2rem 2.5rem;
  }
</style>
