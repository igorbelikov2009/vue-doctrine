<template>
  <div id="array-methods-filter">
    <button
      class="array-methods__button"
      @click="isFilter = !isFilter"
      :class="{ 'array-methods__button_active': isFilter }"
    >
      array.filter()
    </button>

    <p class="array-methods__description">
      Метод filter() <span class="array-methods__span">создаёт новый массив </span> со всеми
      элементами, прошедшими проверку, задаваемую в передаваемой функции. Если ни один элемент не
      прошёл проверку, то будет возвращён пустой массив. <br />
      Метод filter()
      <span class="array-methods__span">не изменяет массив, для которого он был вызван</span>.
    </p>

    <div v-if="isFilter">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
        >array.filter()</a
      >

      <p class="array-methods__text">
        Синтаксис: <br />
        let arrayResults = arr.filter(function(item, index, array) { <br />
        // если true - элемент добавляется к результату, и перебор продолжается // возвращается
        пустой массив в случае, если ничего не найдено <br />
        });
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Функция </span> вызывается по очереди для каждого элемента
        массива: <br />

        <span class="array-methods__span">item </span>– очередной, текущий обрабатываемый элемент
        массива.<br />
        <span class="array-methods__span">index </span> – его индекс.<br />
        <span class="array-methods__span">array </span> – сам массив, по которому осуществляется
        проход..
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Описание </span> <br />
        Метод filter() вызывает переданную функцию callback один раз для каждого элемента,
        присутствующего в массиве, и создаёт новый массив со всеми значениями, для которых функция
        callback вернула значение, которое может приведено к true. Функция callback вызывается
        только для индексов массива с уже определёнными значениями; она не вызывается для индексов,
        которые были удалены или которым значения никогда не присваивались. Элементы массива, не
        прошедшие проверку функцией callback, просто пропускаются и не включаются в новый массив.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          возвращает массив, состоящий из двух первых пользователей</span
        >
        <br />

        имеем <span class="array-methods__span">users: {{ users }} </span> <br />

        <span class="array-methods__span-purple"
          >someUsers() { <br />
          return users.filter(item => item.id &lt; 3) <br />

          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ someUsers }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Следующий пример использует filter() для создания отфильтрованного массива, все элементы
          которого больше или равны 10, а все меньшие 10 удалены.</span
        >
        <br />

        имеем <span class="array-methods__span">arrNumeric3: {{ arrNumeric3 }} </span> <br />
        <span class="array-methods__span-purple"
          >arrNumeric3FilterMore10() { <br />
          return this.arrNumeric3.filter(item => item >= 10) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrNumeric3FilterMore10 }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Найти все простые числа в массиве</span> <br />

        имеем <span class="array-methods__span">arrNumeric4: {{ arrNumeric4 }} </span> <br />
        <span class="array-methods__span-purple">
          computed: { <br />
          arrNumeric4Filtered() { <br />
          return this.arrNumeric4.filter(this.isPrime) } }
        </span>
        <br />
        <br />

        <span class="array-methods__span-purple">
          methods: { <br />
          isPrime(num) { <br />
          for (let i = 2; num > i; i++) { <br />
          if (num % i == 0) { <br />
          return false } } <br />
          return num > 1 <br />
          }, }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ arrNumeric4Filtered }} </span>
      </p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterMethod',

  data() {
    return {
      isFilter: false,
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
      arrNumeric3: [2, 3, 4, 8, 9, 12, 16, 18, 25, 78, 36, 66],
      arrNumeric4: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    }
  },
  computed: {
    users() {
      return [this.vasya, this.petya, this.masha]
    },
    someUsers() {
      return this.users.filter(item => item.id < 3)
    },
    arrNumeric3FilterMore10() {
      return this.arrNumeric3.filter(item => item >= 10)
    },
    arrNumeric4Filtered() {
      return this.arrNumeric4.filter(this.isPrime)
    },
  },
  methods: {
    isPrime(num) {
      for (let i = 2; num > i; i++) {
        if (num % i == 0) {
          return false
        }
      }
      return num > 1
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
