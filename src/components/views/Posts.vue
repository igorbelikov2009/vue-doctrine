<template>
  <div class="lesson-vuex">
    <div class="lesson-vuex__container">
      <PostForm />
      <h1>{{ postsCount }}</h1>
      <div class="lesson-vuex__post" v-for="post in validPosts" :key="post.id">
        <h2>{{ post.title }}</h2>

        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/post/PostForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posts',

  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts()
  },

  components: {
    PostForm,
  },
}
</script>

<style lang="scss" scoped>
.lesson-vuex {
  width: calc(100% - 48px);
  margin: 0 auto;
  margin-top: 76px;
  padding: 24px;

  @media screen and (min-width: 576px) {
    width: calc(100% - 56px);
    padding: 24px 28px;
  }

  &__container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    width: 400px;
  }

  &__post {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
}
</style>
