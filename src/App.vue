<template>
  <div id="app">
    <router-view></router-view>
    <Sidebar />
    <!-- <div class="container">
      <h5>Это и есть ответ от сервера (response)</h5>

      <div class="message" v-for="message in allMessages" :key="message.id">
        <h2>{{ message.id }}</h2>

        <h2>{{ message.title }}</h2>

        <p>{{ message.body }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',

  // computed: mapGetters(['allMessages']),

  // async mounted() {
  //   this.$store.dispatch('fetchMessages')
  // },

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

/* .container {
  color: gray;
  width: 400px;
  margin: 60px auto;
}

.message {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 6px;
} */
</style>
