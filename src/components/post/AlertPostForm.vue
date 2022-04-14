<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title" />

    <input type="text" placeholder="body" v-model="body" />

    <button type="submit">Create Post</button>

    <hr />
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AlertPostForm',

  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    ...mapMutations(['createAlertPosts']),
    // createAlertPosts
    submit() {
      this.createAlertPosts({
        //   createAlertPosts
        title: this.title,
        body: this.body,
        id: Date.now(),
      })
      this.title = this.body = ''
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  display: block;
  width: calc(100% - 22px);
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  margin-top: 24px;
}
</style>
