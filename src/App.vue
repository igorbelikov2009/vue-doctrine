<template>
  <div id="app">
    <router-view></router-view>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',

  components: {
    Sidebar,
  },
}
</script>

<style scoped>
#app {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
