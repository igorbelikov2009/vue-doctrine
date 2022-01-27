<template>
  <div class="user-card">
    <div class="user-card__container">
      <div class="user-card__left">
        <img class="user-card__image" src="../../assets/images/aboutMeeting.jpg" alt="" />
      </div>

      <div class="user-card__right">
        <h3>
          {{ getAuthorFullName }}
        </h3>

        <strong>Бизнес-коуч</strong>

        <ul>
          <li>Учу людей делать реальные бабки, на себя просто не хватило времени</li>

          <li>Не знаю, что такое "Успешый успех", но знаю, что нужно тебе!</li>

          <li>Пообещал, что побреюсь, когда кого-нибудь обману</li>
        </ul>

        <p>Участников: {{ users.length }}</p>

        <ul>
          <li v-for="(user, index) in users" :key="index">
            {{ `${index + 1} ${getFullName(user)}` }}
          </li>
        </ul>

        <button type="button" @click="descreasesCurrentPage">Пред.</button>

        <button
          type="button"
          v-for="(page, index) in pages"
          :key="index"
          @click="currentPage = page"
        >
          {{ page }}
        </button>

        <button type="button" @click="increasesCurrentPage">След.</button>
        <p>Страница {{ currentPage }} из {{ pages }}</p>

        <UserCardLesson />
      </div>
    </div>
  </div>
</template>

<script>
import UserCardLesson from '@/components/lesson-01/UserCardLesson.vue'
export default {
  name: 'UserCard',
  data() {
    return {
      firstName: 'Игнатий',
      secondName: 'Иларионович',
      lastName: 'Богатов',
      users: [
        { firstName: 'Иванов', secondName: 'Иван', lastName: 'Иванович' },
        { firstName: 'Петров', secondName: 'Пётр', lastName: 'Петрович' },
        { firstName: 'Васильев', secondName: 'Василий', lastName: 'Васильевич' },
      ],
      pages: 5,
      currentPage: 1,
    }
  },

  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    },
  },

  methods: {
    getFullName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`
    },

    increasesCurrentPage(currentPage, pages) {
      if (this.currentPage < this.pages) {
        return this.currentPage++
      }
    },
    descreasesCurrentPage(currentPage, pages) {
      if (this.currentPage > 1) {
        return this.currentPage--
      }
    },
    loadUsers(page) {
      // наш watch следит за изменениями страниц
      console.log(`Загрузка пользователей: страница ${page}`)
    },
  },

  watch: {
    // наш watch следит за изменениями страниц
    currentPage(page) {
      this.loadUsers(page)
    },
  },

  components: {
    UserCardLesson,
  },
}
</script>

<style lang="scss" scoped>
.user-card {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 24px 0;

  &__container {
    display: flex;
    flex-wrap: wrap;
  }

  &__left {
    width: 100%;
    max-width: calc(50% - 12px);
    margin-right: 12px;
  }

  &__right {
    width: 100%;
    max-width: calc(50% - 12px);
    margin-left: 12px;
  }

  &__image {
    width: 100%;
    aspect-ratio: 468 / 344;
  }
}
</style>
