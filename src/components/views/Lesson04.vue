<template>
  <div class="lesson04">
    <UserForm />
    <UserForm2 />
  </div>
</template>

<script>
import UserForm from '@/components/lesson-04/UserForm.vue'
import UserForm2 from '@/components/lesson-04/UserForm2.vue'
export default {
  name: 'Lesson04',

  components: {
    UserForm,
    UserForm2,
  },
}
</script>

<style scoped>
.lesson04 {
  padding-top: 36px;
}
</style>
