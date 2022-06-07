<template>
  <div class="general-issues">
    <div class="general-issues__container">
      <h1 class="general-issues__heading">Axios для доступа к API — Vue.js</h1>

      <div>
        <div>
          <button
            class="general-issues__question"
            @click="isQuestion01 = !isQuestion01"
            :class="{ 'general-issues__question_active': isQuestion01 }"
          >
            Axios — это JavaScript-библиотека. Она представляет собой HTTP-клиент для браузера и
            node.js на основе Promise
          </button>

          <div class="general-issues__answer" v-if="isQuestion01">
            <h4>Что такое Axios?</h4>

            <p>
              <a
                class="general-issues__link"
                target="_blank"
                href="https://axios-http.com/ru/docs/intro"
                >Axios</a
              >
              — это JavaScript-библиотека. Она представляет собой HTTP-клиент для браузера и node.js
              на основе Promise. Он изоморфный (одинаково может работать в браузере и node.js с той
              же базой кодов). На стороне сервера он использует нативный node.js http-модуль, тогда
              как на стороне клиента (браузер) он использует XMLHttpRequests.
            </p>

            <h4>Особенности</h4>

            <p>
              - Делает XMLHttpRequests запросы из браузера <br />
              - Делает http запросы из node.js <br />
              - Поддерживает Promise API <br />
              - Перехватывает запросы и ответы <br />
              - Преобразовывает данные запроса и ответа <br />
              - Отменяет запросы <br />
              - Автоматическое преобразование для JSON-данных <br />
              - Поддержка на стороне клиента для защиты от XSRF <br />
              -
            </p>

            <h4>
              Установка
            </h4>

            <p>
              <span class="general-issues__span-grey">Используя npm:</span> <br />

              <span class="general-issues__span-red">$ npm install axios</span> <br />
              или <br />

              <span class="general-issues__span-red"> npm install axios</span>
            </p>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion02 = !isQuestion02"
            :class="{ 'general-issues__question_active': isQuestion02 }"
          >
            Используем axios для доступа к API Vue.js
          </button>

          <div class="general-issues__answer" v-if="isQuestion02">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"
            >
              Используем axios для доступа к API Vue.js</a
            >
            <br />
            <p>
              Работаем по
              <a
                class="general-issues__link"
                target="_blank"
                href="https://www.youtube.com/watch?v=zntx4J9jnb0&t=197s"
                >видео</a
              >
            </p>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion03 = !isQuestion03"
            :class="{ 'general-issues__question_active': isQuestion03 }"
          >
            Устанавливаем axios, json-server,
          </button>

          <div class="general-issues__answer" v-if="isQuestion03">
            <div>
              <h2>
                Устанавливаем
                <a
                  class="general-issues__link"
                  target="_blank"
                  href="https://axios-http.com/ru/docs/intro"
                  >axios</a
                >
              </h2>

              <p>
                Пишем в терминале: <br />
                <span class="general-issues__span-red">$ npm install axios</span>
              </p>
            </div>

            <div>
              <h2>
                Устанавливаем
                <a
                  class="general-issues__link"
                  target="_blank"
                  href="https://github.com/typicode/json-server"
                  >json-server</a
                >
              </h2>

              <p>
                Пишем в терминале: <br />
                - установка
                <span class="general-issues__span-red">npm install -g json-server </span> <br />
                <br />
                - создание папки db.json
                <span class="general-issues__span-red">json-server --watch db.json</span> <br />
                <br />

                - меняем содержимое папки db.json на
                <a
                  class="general-issues__link"
                  target="_blank"
                  href="https://github.com/antonboltnev/vue-portfolio-code-example/blob/master/db.json"
                  >vue-portfolio-code-example</a
                >
              </p>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion04 = !isQuestion04"
            :class="{ 'general-issues__question_active': isQuestion04 }"
          >
            Это ответ с сервера
          </button>

          <div class="general-issues__answer" v-if="isQuestion04">
            <div class="appPost__container">
              <div class="appPost__post" v-for="(user, index) in allUsers" :key="index">
                <p class="appPost__body">index: {{ index }}</p>

                <p class="appPost__body">userId: {{ user.userId }}</p>

                <h2 class="appPost__title">id: {{ user.id }}</h2>

                <p class="appPost__body">title: {{ user.title }}</p>

                <p class="appPost__body">body: {{ user.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion05 = !isQuestion05"
            :class="{ 'general-issues__question_active': isQuestion05 }"
          >
            Это ответ с сервера в виде таблицы
          </button>

          <div class="general-issues__answer" v-if="isQuestion05">
            <VueTable :userData="allUsers" />
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion06 = !isQuestion06"
            :class="{ 'general-issues__question_active': isQuestion06 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion06">
            xxxx
          </div>
        </div>

        <span class="general-issues__span-purple">x</span> <br />

        <span class="general-issues__span-green">x</span> <br />

        <span class="general-issues__span-red">x</span> <br />

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion07 = !isQuestion07"
            :class="{ 'general-issues__question_active': isQuestion07 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion07">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion08 = !isQuestion08"
            :class="{ 'general-issues__question_active': isQuestion08 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion08">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion09 = !isQuestion09"
            :class="{ 'general-issues__question_active': isQuestion09 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion09">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion10 = !isQuestion10"
            :class="{ 'general-issues__question_active': isQuestion10 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion10">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion11 = !isQuestion11"
            :class="{ 'general-issues__question_active': isQuestion11 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion11">
            XXX
            <br />
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion12 = !isQuestion12"
            :class="{ 'general-issues__question_active': isQuestion12 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion12">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion13 = !isQuestion13"
            :class="{ 'general-issues__question_active': isQuestion13 }"
          >
            Xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion13">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion14 = !isQuestion14"
            :class="{ 'general-issues__question_active': isQuestion14 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion14">
            xxxx
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion15 = !isQuestion15"
            :class="{ 'general-issues__question_active': isQuestion15 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion15">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion16 = !isQuestion16"
            :class="{ 'general-issues__question_active': isQuestion16 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion16">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion17 = !isQuestion17"
            :class="{ 'general-issues__question_active': isQuestion17 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion17">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion18 = !isQuestion18"
            :class="{ 'general-issues__question_active': isQuestion18 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion18">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion19 = !isQuestion19"
            :class="{ 'general-issues__question_active': isQuestion19 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion19">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion20 = !isQuestion20"
            :class="{ 'general-issues__question_active': isQuestion20 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion20">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion21 = !isQuestion21"
            :class="{ 'general-issues__question_active': isQuestion21 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion21">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestionisQuestion22 = !isQuestion22"
            :class="{ 'general-issues__question_active': isQuestion22 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion22">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion23 = !isQuestion23"
            :class="{ 'general-issues__question_active': isQuestion23 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion23">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion24 = !isQuestion24"
            :class="{ 'general-issues__question_active': isQuestion24 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion24">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion25 = !isQuestion25"
            :class="{ 'general-issues__question_active': isQuestion25 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion25">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion26 = !isQuestion26"
            :class="{ 'general-issues__question_active': isQuestion26 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion26">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion27 = !isQuestion27"
            :class="{ 'general-issues__question_active': isQuestion27 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion27">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion28 = !isQuestion28"
            :class="{ 'general-issues__question_active': isQuestion28 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion28">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion29 = !isQuestion29"
            :class="{ 'general-issues__question_active': isQuestion29 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion29">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion30 = !isQuestion30"
            :class="{ 'general-issues__question_active': isQuestion30 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion30">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion31 = !isQuestion31"
            :class="{ 'general-issues__question_active': isQuestion31 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion31">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion32 = !isQuestion32"
            :class="{ 'general-issues__question_active': isQuestion32 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion32">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion33 = !isQuestion33"
            :class="{ 'general-issues__question_active': isQuestion33 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion33">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion34 = !isQuestion34"
            :class="{ 'general-issues__question_active': isQuestion34 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion34">
            XXX
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion35 = !isQuestion35"
            :class="{ 'general-issues__question_active': isQuestion35 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion35">
            XXX
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VueTable from '../usingAxios/VueTable.vue'

export default {
  name: 'UsingAxiosPage',

  data() {
    return {
      isUsingAxios: false,

      isQuestion01: false,
      isQuestion02: false,
      isQuestion03: false,
      isQuestion04: false,
      isQuestion05: false,
      isQuestion06: false,
      isQuestion07: false,
      isQuestion08: false,
      isQuestion09: false,
      isQuestion10: false,
      isQuestion11: false,
      isQuestion12: false,
      isQuestion13: false,
      isQuestion14: false,
      isQuestion15: false,
      isQuestion16: false,
      isQuestion17: false,
      isQuestion18: false,
      isQuestion19: false,
      isQuestion20: false,
      isQuestion21: false,
      isQuestion22: false,
      isQuestion23: false,
      isQuestion24: false,
      isQuestion25: false,
      isQuestion26: false,
      isQuestion27: false,
      isQuestion28: false,
      isQuestion29: false,
      isQuestion30: false,
      isQuestion31: false,
      isQuestion32: false,
      isQuestion33: false,
      isQuestion34: false,
      isQuestion35: false,
    }
  },

  computed: mapGetters(['allUsers']),

  methods: mapActions(['axiosUsers']),

  mounted() {
    this.axiosUsers()
  },

  components: {
    VueTable,
  },
}
</script>

<style lang="scss" scoped>
.general-issues {
  width: 100%;
  margin: 0 auto;
  margin-top: 76px;
  background-color: #eee;

  &__container {
    width: calc(100% - 48px);
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
  }

  &__heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: black;
    margin-bottom: 24px;
  }

  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  &__button {
    display: block;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    border: none;
    cursor: pointer;

    &:hover {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }

    // general-issues__button_active
    &_active {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }
  }

  &__question {
    display: block;
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 24px;
    color: black;
    color: blue;
    border: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }

    // general-issues__question_active
    &_active {
      color: blue;
    }
  }

  &__answer {
    font-size: 14px;
    line-height: 24px;
    margin-left: 24px;
  }

  // general-issues__span
  &__span {
    color: black;
    font-size: 18px;
    line-height: 24px;
  }

  // general-issues__span-grey
  &__span-grey {
    color: #605858;
    font-size: 18px;
    line-height: 24px;
  }

  // general-issues__span-green
  &__span-green {
    color: green;
    font-size: 14px;
    line-height: 24px;
  }

  // general-issues__span-red
  &__span-red {
    color: red;
    font-size: 14px;
    line-height: 24px;
  }

  // general-issues__span-purple
  &__span-purple {
    color: purple;
    font-size: 14px;
    line-height: 24px;
  }

  // general-issues__link
  &__link {
    text-decoration: none;
  }
}

.appPost {
  width: 100%;
  margin: 0 auto;

  &__container {
    color: gray;
    width: 400px;
    margin: 60px auto;
  }

  &__post {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 6px;
  }

  &__heading {
    text-align: center;
  }

  &__title,
  &__body {
    text-align: center;
  }
}
</style>
