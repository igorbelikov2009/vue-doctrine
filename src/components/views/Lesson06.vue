<template>
  <div class="lesson">
    <UserPage />
    <UserPage2 />
  </div>
</template>

<script>
import UserPage from '@/components/lesson-06/UserPage.vue'
import UserPage2 from '@/components/lesson-06/UserPage2.vue'

export default {
  name: 'Lesson06',

  components: {
    UserPage,
    UserPage2,
  },
}
</script>

<style lang="scss" scoped>
.lesson {
  padding-top: 36px;
}
</style>
