<template>
  <div class="lesson07">
    <UserPage3 />
    <UserPage4 />
    <TextEditor />
  </div>
</template>

<script>
import UserPage3 from '@/components/lesson-07/UserPage3.vue'
import UserPage4 from '@/components/lesson-07/UserPage4.vue'
import TextEditor from '@/components/lesson-07/TextEditor.vue'

export default {
  name: 'Lesson07',

  components: {
    UserPage3,
    UserPage4,
    TextEditor,
  },
}
</script>

<style lang="scss" scoped>
.lesson07 {
  padding-top: 36px;
}
</style>
