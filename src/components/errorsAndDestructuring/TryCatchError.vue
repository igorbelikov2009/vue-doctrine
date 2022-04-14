<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isTryCatchError = !isTryCatchError"
      :class="{ 'array-methods__button_active': isTryCatchError }"
    >
      "try..catch, Обработка ошибок"
    </button>

    <div v-if="isTryCatchError">
      <p class="array-methods__description">
        Работает только для ошибок, возникающих во время выполнения
        <span class="array-methods__span"> корректного кода. </span>
        <br />

        <span class="array-methods__span-purple">
          try { <br />
          // исполняем код <br />
          } catch(err) { <br />
          // если случилась ошибка, прыгаем сюда <br />
          // err - это объект ошибки <br />
          } finally { <br />
          // выполняется всегда после try/catch <br />
          }
        </span>
        <br />
        <span class="array-methods__span-green">
          Он не сработает, если код синтаксически неверен.</span
        >
        <br />
        JavaScript-движок сначала читает код, а затем исполняет его. Ошибки, которые возникают во
        время фазы чтения, называются <span class="array-methods__span">ошибками парсинга.</span> Их
        нельзя обработать (изнутри этого кода), потому что движок не понимает код. <br />
        Таким образом, try..catch может обрабатывать только ошибки, которые возникают в корректном
        коде. Такие ошибки называют
        <span class="array-methods__span">«ошибками во время выполнения»,</span> а иногда
        <span class="array-methods__span">«исключениями»</span> .
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Поймать ошибку, пример.</span> <br />

        имеем methods: {
        <span class="array-methods__span"
          >fnWithError() { <br />
          throw new Error('Some error') <br />
          }</span
        >
        } <br />
        computed: { <br />
        <span class="array-methods__span-purple">
          withoutTryCatch() { <br />
          return this.fnWithError() <br />
          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">ничего не получаем </span>
        <br />
        <br />
        computed: { <br />
        <span class="array-methods__span-purple">
          try { <br />
          return this.fnWithError() <br />
          } catch (error) { <br />
          console.error(error) <br />
          console.log(error.message) <br />
          } <br />
          console.log('continue...') <br />
          }</span
        >
        } <br />
        получаем в консоли: <br />
        <span class="array-methods__span-green"
          >Some error <br />
          continue... {{ withTryCatch }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TryCatchError',

  data() {
    return {
      isTryCatchError: false,
    }
  },
  computed: {
    withoutTryCatch() {
      return this.fnWithError()
    },
    withTryCatch() {
      try {
        return this.fnWithError()
      } catch (error) {
        console.error(error)
        console.log(error.message)
      }
      console.log('continue...')
    },
  },
  methods: {
    fnWithError() {
      throw new Error('Some error')
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  width: calc(100% - 48px);

  margin: 0 auto;
  margin-top: 76px;
  padding: 24px;

  @media screen and (min-width: 576px) {
    width: calc(100% - 56px);
    padding: 24px 28px;
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

    // array-methods__button_active
    &_active {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }
  }

  &__description {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
    margin-bottom: 36px;
  }

  &__link {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }

  &__text {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
  }

  // array-methods__span
  &__span {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: black;
  }

  // array-methods__span-bold
  &__span-bold {
    font-size: inherit;
    line-height: inherit;
    font-weight: 900;
    color: black;
  }

  // array-methods__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #ff3b0e;
    cursor: pointer;
  }

  // array-methods__span-green
  &__span-green {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: green;
  }

  // array-methods__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
