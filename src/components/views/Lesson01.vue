<template>
  <section>
    <div class="form-fields">
      <h1>Урок 01 - установка, основные понятия, что такое v-for, computed, watch</h1>
      <div class="form-fields__container">
        <EmailPassword />
      </div>
    </div>

    <UserCard />
  </section>
</template>

<script>
import EmailPassword from '@/components/lesson-01/EmailPassword.vue'
import UserCard from '@/components/lesson-01/UserCard.vue'

export default {
  name: 'Lesson01',

  components: {
    EmailPassword,
    UserCard,
  },
}
</script>

<style lang="scss" scoped>
.form-fields {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 96px;

  &__container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
