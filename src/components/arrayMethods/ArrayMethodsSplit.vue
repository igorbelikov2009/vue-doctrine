<template>
  <div id="array-methods-split">
    <button
      class="array-methods__button"
      @click="isArrayMethodsSplit = !isArrayMethodsSplit"
      :class="{ 'array-methods__button_active': isArrayMethodsSplit }"
    >
      string.split([separator[, limit]])
    </button>

    <p class="array-methods__description">
      Метод split() разбивает объект String на массив строк путём разделения строки указанной
      подстрокой.
    </p>

    <div v-if="isArrayMethodsSplit">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split"
        >split()</a
      >

      <p class="array-methods__text">
        Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит
        имена тех, кому его отправить, через запятую: Вася, Петя, Маша. Но нам-то гораздо удобнее
        работать с массивом имён, чем с одной строкой. Как его получить?
      </p>

      <p class="array-methods__text">
        Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному
        разделителю delim. В примере ниже таким
        <span class="array-methods__span"
          >разделителем является строка из запятой и пробела. <br />
          Имеем - stringNames: {{ stringNames }}</span
        >
        <br />
        <span class="array-methods__span-purple">
          stringNamesSplit() { <br />
          return this.stringNames.split(', ') <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> stringNamesSplit: {{ stringNamesSplit }}</span>
      </p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text">
        <span class="array-methods__span"> В сепараторе нет запятой, только пробел</span> <br />
        <span class="array-methods__span-purple">
          stringNamesSplit2() { <br />
          return this.stringNames.split(' ') <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> stringNamesSplit2: {{ stringNamesSplit2 }} </span>
        <span class="array-methods__span"> ( смотрим на запятые после Васи, Пети,) </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-purple">
          stringNamesSplitMessage() { <br />
          let arr = this.stringNames.split(', ') <br />
          for (let name of arr) { <br />
          console.log(`Сообщение получат: ${name}.`) } <br />
          }
        </span>
        смотрим в консоль
        <span class="array-methods__span-green">
          {{ stringNamesSplitMessage }}
          // Сообщение получат: Вася. <br />
          // Сообщение получат: Петя. <br />
          // Сообщение получат: Маша. <br />
          // Сообщение получат: Саша.
        </span>
      </p>

      <p class="array-methods__text">
        У метода split есть необязательный второй числовой аргумент –
        <span class="array-methods__span">'limit' </span> ограничение на количество элементов в
        массиве.
        <span class="array-methods__span">
          Если количество элементов больше, чем указано в ограничении
        </span>
        (limit), то остаток массива будет отброшен. На практике это редко используется: <br />
        <span class="array-methods__span-purple">
          stringNamesSplitLimit() { <br />
          return this.stringNames.split(', ', 2) <br />
          }
        </span>

        получаем -
        <span class="array-methods__span-green"
          >stringNamesSplitLimit: {{ stringNamesSplitLimit }}
        </span>
      </p>

      <p class="array-methods__text">
        Вызов <span class="array-methods__span"> split(s) с пустым аргументом s </span> разбил бы
        строку на массив букв: <br />
        <span class="array-methods__span-purple">
          stringNamesSplitZero() { <br />
          return this.stringNames.split('') <br />
          }
        </span>
        <br />
        получаем -
        <span class="array-methods__span-green"
          >stringNamesSplitZero: {{ stringNamesSplitZero }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsSplit',

  data() {
    return { isArrayMethodsSplit: false, stringNames: 'Вася, Петя, Маша, Саша' }
  },
  computed: {
    stringNamesSplit() {
      return this.stringNames.split(', ')
    },
    stringNamesSplit2() {
      return this.stringNames.split(' ')
    },
    stringNamesSplitMessage() {
      let arr = this.stringNames.split(', ')

      for (let name of arr) {
        console.log(`Сообщение получат: ${name}.`) // Сообщение получат: Вася (и другие имена)
      }
    },
    stringNamesSplitLimit() {
      return this.stringNames.split(', ', 2)
    },
    stringNamesSplitZero() {
      return this.stringNames.split('')
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
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
