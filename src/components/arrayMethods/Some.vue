<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isSome = !isSome"
      :class="{ 'array-methods__button_active': isSome }"
    >
      array.some()
    </button>

    <p class="array-methods__description">
      Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в
      передаваемой функции. <br />
      <span class="array-methods__span">Возвращаемое значение true</span>, если функция проверки
      возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.
    </p>

    <div v-if="isSome">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some"
        >array.some()</a
      >

      <p class="array-methods__text">
        Синтаксис <br />
        arr.some(function(item, index, array)
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
        <span class="array-methods__span">Описание</span> <br />
        Метод some() вызывает переданную функцию callback один раз для каждого элемента,
        присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт
        истинное значение (значение, становящееся равным true при приведении его к типу Boolean).
        Если такой элемент найден, метод some() немедленно вернёт true. В противном случае, если
        callback вернёт false для всех элементов массива, метод some() вернёт false. Функция
        callback вызывается только для индексов массива, имеющих присвоенные значения; она не
        вызывается для индексов, которые были удалены или которым значения никогда не присваивались.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          пример проверяет наличие в массиве элемента, который больше 10.</span
        >
        <br />

        имеем <span class="array-methods__span">arrNumeric:{{ arrNumeric }} </span> <br />
        <span class="array-methods__span-purple"
          >arrNumericSomeMore10() { <br />
          return this.arrNumeric.some(elem => elem >= 10) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrNumericSomeMore10 }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          пример проверяет наличие в массиве элемента, который меньше 10.</span
        >
        <br />
        <br />

        имеем <span class="array-methods__span">arrNumeric:{{ arrNumeric }} </span> <br />
        <span class="array-methods__span-purple"
          >arrNumericSomeLess10() { <br />
          return this.arrNumeric.some(elem => elem &lt;= 10) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrNumericSomeLess10 }} </span> <br />
        <br />

        имеем <span class="array-methods__span">arrNumeric2: {{ arrNumeric2 }} </span> <br />
        <span class="array-methods__span-purple">
          arrNumeric2SomeLess10() { <br />
          return this.arrNumeric2.some(elem => elem &lt;= 10) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ arrNumeric2SomeLess10 }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Some',
  data() {
    return {
      isSome: false,
      arrNumeric: [12, 5, 8, 130, 44],
      arrNumeric2: [12, 54, 18, 130, 44],
    }
  },
  computed: {
    arrNumericSomeMore10() {
      return this.arrNumeric.some(elem => elem >= 10)
    },
    arrNumericSomeLess10() {
      return this.arrNumeric.some(elem => elem <= 10)
    },
    arrNumeric2SomeLess10() {
      return this.arrNumeric2.some(elem => elem <= 10)
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
