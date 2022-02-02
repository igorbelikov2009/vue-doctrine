<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isReduceMethod = !isReduceMethod"
      :class="{ 'array-methods__button_active': isReduceMethod }"
    >
      array.reduce()
    </button>

    <p class="array-methods__description">
      Метод array.reduce() используются для
      <span class="array-methods__span"
        >вычисления какого-нибудь единого значения на основе всего массива
      </span>
      (суммирование всех элементов, умножение друг на друга и другое). <br />
      Значение, возвращённое методом reduce() будет равным последнему результату выполнения
      колбэк-функции. <br />
      Массив, к которому применяется метод, остаётся неизменным.
    </p>

    <div v-if="isReduceMethod">
      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
        >array.reduce()</a
      >

      <p class="array-methods__text">
        Синтаксис: <br />

        let value = arr.reduce(function(previousValue, item, index, array) { // ... },
        [initialValue])
        <br /><span class="array-methods__span">Функция </span> применяется по очереди ко всем
        элементам массива и «переносит» свой результат на следующий вызов, принимает четыре
        аргумента:
      </p>
      <p class="array-methods__text">
        <span class="array-methods__span">Аргументы:</span>
        <br />

        <span class="array-methods__span">previousValue </span> – результат предыдущего вызова этой
        функции, равен initialValue при первом вызове (если передан initialValue). Аккумулятор,
        аккумулирующий значение, которое возвращает функция callback после посещения очередного
        элемента, либо значение initialValue, если оно предоставлено. <br />
        <span class="array-methods__span">item </span> – очередной, текущий обрабатываемый элемент
        массива, <br />
        <span class="array-methods__span">index </span> – его индекс, <br />
        <span class="array-methods__span">array </span> – сам массив, для которого была вызвана
        функция reduce. <br />
        <span class="array-methods__span">initialValueValue </span> - необязательный параметр.
        Объект, используемый в качестве первого аргумента при первом вызове функции callback.
      </p>

      <p class="array-methods__text">
        Описание <br />
        Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в
        массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение
        от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по
        которому происходит итерация
      </p>

      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
        >смотри пример</a
      >

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReduceMethod',

  data() {
    return {
      isReduceMethod: false,
    }
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
    color: #c328c3;
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
