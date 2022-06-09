<template>
  <section class="sidebar" :class="{ 'sidebar__reduced-width': !isSidebarVisible }">
    <button class="sidebar__button" v-if="isSidebarVisible" @click="openSidebar">Меню</button>

    <div class="sidebar__navigator" v-if="!isSidebarVisible" @click="closeSidebar">
      <div class="sidebar__container-links">
        <h2>Навигатор по страницам</h2>

        <router-link class="sidebar__link" :to="{ name: 'Lesson00' }"
          >Урок 0 Как использовать background image в стиле тэга</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson01' }"
          >Урок 1 - установка, основные понятия, что такое v-for, computed, watch</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson02' }"
          >Урок 2 - условная отрисовка: v-if, v-else и стили: v-bind:style</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson03' }"
          >Урок 3 - v-model, props и пользовательские события</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson04' }"
          >Урок 4 реактивность и решение ее основных проблем, $set().</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson05' }"
          >Урок 5 - работа с формами, валидация с Vuelidate</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson06' }"
          >Урок 6 - слоты, refs, жизненный цикл компонентов</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Lesson07' }"
          >Урок 7 - миксины(примеси), плагины, фильтры, установка "marked"</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'Posts' }"
          >Урок 9.1 - Работа с Vuex, глобальным хранилищем
        </router-link>

        <router-link class="sidebar__link" :to="{ name: 'VuexPage' }"
          >Урок 9.2 - Vuex, глобальное хранилище, теория</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'ApiFetchAxiosPage' }"
          >Урок 10 - работа с API fetch и axios</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'UsingAxiosPage' }"
          >Урок 11 - Таблица на Vue.js. VUEX+AXIOS+API. Пагинация и сортировка данных.</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'ArrayMethodsPage' }"
          >Методы массивов</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'ObjectMethodsPage' }">Объекты</router-link>

        <router-link class="sidebar__link" :to="{ name: 'OperatorPage' }">Операторы</router-link>

        <router-link class="sidebar__link" :to="{ name: 'FunctionsPage' }">Функции</router-link>

        <router-link class="sidebar__link" :to="{ name: 'FunctionalExpressionPage' }"
          >Функциональное выражение</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'ProcessingErrorsPage' }"
          >Обработка ошибок, деструктуризация</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'QuestionsWithAnswersPage' }"
          >Вопросы (с ответами) кандидату на должность frontend разработчика</router-link
        >

        <router-link class="sidebar__link" :to="{ name: 'github' }">Git и Github </router-link>

        <router-link class="sidebar__link" :to="{ name: 'VueLinks' }">Vue ссылки </router-link>

        <router-link class="sidebar__link" :to="{ name: 'UsefulLinks' }"
          >Браузерные ссылки с компьютера</router-link
        >
      </div>

      <button class="sidebar__cross-switch" @click="closeSidebar">
        <img class="sidebar__cross-image" src="/icons/triple/Cross/Dark.svg" alt="cross" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',

  data() {
    return {
      isSidebarVisible: true,
    }
  },

  methods: {
    openSidebar() {
      this.isSidebarVisible = false
      // console.log(this.isSidebarVisible)
    },
    closeSidebar() {
      this.isSidebarVisible = true
      // console.log(this.isSidebarVisible)
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: 8px;
  width: calc(100% - 16px);
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(26, 65, 100, 0.24);

  // sidebar__reduced-width
  &__reduced-width {
    width: 60%;
    padding: 0;
  }

  &__button {
    width: 100%;
    padding: 24px;
    background-color: rgb(175, 38, 141);
    background: linear-gradient(45deg, yellow, red, black);
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  &__navigator {
    padding: 24px;

    @media screen and (min-width: 576px) {
      padding: 28px;
    }
  }

  &__container-links {
    margin-top: 48px;
  }

  &__link {
    text-decoration: none;
    font-size: 18px;
    line-height: 24px;
    color: #5a646e;
    display: block;
    margin-bottom: 16px;

    &:hover {
      color: blue;
    }
  }

  &__cross-switch {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 1px solid #50287d;
    }
  }

  &__cross-image {
    width: 24px;
    height: 24px;
  }
}

// transition name="sidebar"
.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.5s;
}

.sidebar-enter,
.sidebar-leave-to {
  opacity: 0;
  right: 100%;
}
</style>
