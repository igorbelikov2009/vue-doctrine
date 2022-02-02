<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isConcat = !isConcat"
      :class="{ 'array-methods__button_active': isConcat }"
    >
      array.concat()
    </button>

    <p class="array-methods__description">
      Метод concat() <span class="array-methods__span">возвращает новый массив</span>, состоящий из
      массива, на котором он был вызван, соединённого с другими массивами и/или значениями,
      переданными в качестве аргументов.
    </p>

    <div v-if="isConcat">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
        >Array.concat()</a
      >

      <p class="array-methods__text">
        <span class="array-methods__span">array1: {{ array1 }}, array2: {{ array2 }} </span>
        <span class="array-methods__span-purple">
          => let array3 = array1.concat(array2) =>
        </span>
        <span class="array-methods__span-green">array3: {{ array3 }} </span>
      </p>

      <p class="array-methods__text">
        Синтаксис <br />
        var new_array = old_array.concat(value1[, value2[, ...[, valueN]]]) <br />
        <span class="array-methods__span"> old_array </span> - массив, на котором метод был вызван.
        <br />
        <span class="array-methods__span">value1, value2, valueN</span> - массивы и/или значения,
        соединяемые в новый массив <br />
        <span class="array-methods__span">new_array - </span> возвращаемое значение, новый экземпляр
        Array.
      </p>

      <p class="array-methods__text">
        Метод concat создаёт новый массив, состоящий из элементов в объекте, на котором он был
        вызван, за которыми по порядку следуют, для каждого аргумента, все его элементы (если
        аргумент является массивом), либо сам аргумент (если он массивом не является).
      </p>

      <p class="array-methods__text">
        Метод concat не изменяет данный массив или любой из массивов, переданных в аргументах, а
        вместо этого возвращает поверхностную копию, содержащую копии тех элементов, что были
        объединены с исходными массивами. Элементы оригинальных массивов копируются в новый массив
        по следующим правилам:
      </p>

      <p class="array-methods__text">
        1. Ссылки на объекты (но не фактические объекты): метод concat копирует ссылки на объекты в
        новый массив. И оригинал, и новый массив ссылаются на один и тот же объект. То есть, если
        объект по ссылке будет изменён, изменения будут видны и в новом, и в исходном массивах.
      </p>

      <p class="array-methods__text">
        2. Строки, числа и булевы значения
        <span class="array-methods__span">(но не объекты String, Number или Boolean)</span> : метод
        concat копирует значения строк и чисел в новый массив.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Примечание: </span>Соединение массивов и/или значений в
        новый массив оставит соединяемые массивы/значения неизменными. Кроме того, любая операция
        над новым массивом (если только элемент не является ссылкой) не будет затрагивать исходные
        массивы и наоборот.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Соединение двух массивов: </span> <br />
        имеем
        <span class="array-methods__span">letters: {{ letters }}, numeric: {{ numeric }} </span>
        <br />
        <span class="array-methods__span-purple">
          lettersNumeric() { <br />
          return this.letters.concat(this.numeric) <br />
          }</span
        >
        <br />
        <span class="array-methods__span-purple"
          >/* или let lettersNumeric = letters.concat(numeric) */</span
        >
        <br />
        получаем -
        <span class="array-methods__span-green">lettersNumeric: {{ lettersNumeric }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Соединение трёх массивов: </span>
        <br />
        имеем
        <span class="array-methods__span"
          >num1: {{ num1 }}, num2: {{ num2 }}, num3: {{ num3 }}
        </span>
        <br />
        <span class="array-methods__span-purple"
          >nums() { <br />
          return this.num1.concat(this.num2, this.num3) <br />
          }</span
        >
        <br />
        <span class="array-methods__span-purple">
          /* или let nums = num1.concat(num2, num3) */</span
        >
        <br />
        получаем -
        <span class="array-methods__span-green">nums: {{ nums }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Соединение значений в массив: </span> <br />
        имеем <span class="array-methods__span">alpha: {{ alpha }} </span> <br />
        <span class="array-methods__span-purple">
          alphaNumeric() { <br />
          return this.alpha.concat(1, [2, 3]) <br />
          }</span
        >
        <br />
        <span class="array-methods__span-purple"
          >/* или var alphaNumeric = alpha.concat(1, [2, 3]); */</span
        >
        <br />
        получаем -
        <span class="array-methods__span-green">alphaNumeric: {{ alphaNumeric }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >создать массив из массивов: numeric {{ numeric }} и безымянный [44, 55], потом добавить
          значения 66 и 77:</span
        >
        <br />
        имеем <span class="array-methods__span">numeric: {{ numeric }}, [44, 55], 66, 77 </span>
        <br />
        <span class="array-methods__span-purple"
          >numericArrayValues() { <br />
          return this.numeric.concat([44, 55], 66, 77) <br />
          }</span
        >
        <br />
        <span class="array-methods__span-purple"
          >/* или let numericArrayValues = numeric.concat([44, 55], 66, 77) */</span
        >
        <br />
        получаем -
        <span class="array-methods__span-green">numericArrayValues: {{ numericArrayValues }} </span>
      </p>

      <p class="array-methods__text">
        Обычно он просто копирует элементы из массивов. Другие объекты, даже если они выглядят как
        массивы, добавляются как есть:
      </p>

      <p class="array-methods__text">
        имеем
        <span class="array-methods__span"
          >numeric: {{ numeric }}, arrayLike: { 0: 'что-то', 1: "ещё", }
        </span>
        <br />
        <span class="array-methods__span-purple">
          numericArrayLike() { <br />
          return this.numeric.concat(this.arrayLike) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">numericArrayLike: {{ numericArrayLike }} </span>
      </p>

      <p class="array-methods__text">
        …Но <span class="array-methods__span">если объект имеет </span> специальное свойство
        <span class="array-methods__span">Symbol.isConcatSpreadable</span>, то он обрабатывается
        методом <span class="array-methods__span">concat </span> как массив: вместо него добавляются
        его числовые свойства. Для корректной обработки в объекте ключами должны быть числовые
        свойства и <span class="array-methods__span">length</span>:
      </p>

      <p class="array-methods__text">
        имеем <br />
        numeric: <span class="array-methods__span"> [11, 22, 33], </span> otherArrayLike:
        <span class="array-methods__span"
          >{ 0: 'что-то', 1: 'ещё',
          <span class="array-methods__span-bold">
            [Symbol.isConcatSpreadable]: true, length: 2,
          </span>
          }
        </span>
        <br />
        <span class="array-methods__span-purple">
          numericOtherArrayLike() { <br />
          return this.numeric.concat(this.otherArrayLike) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"
          >numericOtherArrayLike: {{ numericOtherArrayLike }}
        </span>
      </p>

      <p class="array-methods__text"></p>

      <p class="array-methods__text"></p>
    </div>
  </div>
</template>

<script>
import { numeric } from 'vuelidate/lib/validators'
export default {
  name: 'Concat',

  data() {
    return {
      isConcat: false,
      array1: ['a', 'b', 'c'],
      array2: ['d', 'e', 'f'],
      letters: ['a', 'b', 'c'],
      numeric: [11, 22, 33],
      num1: [1, 2, 3],
      num2: [4, 5, 6],
      num3: [7, 8, 9],
      alpha: ['a', 'b', 'c'],
      arrayLike: {
        0: 'что-то',
        1: 'ещё',
      },
      otherArrayLike: {
        0: 'что-то',
        1: 'ещё',
        [Symbol.isConcatSpreadable]: true,
        length: 2,
      },
    }
  },
  computed: {
    array3() {
      return this.array1.concat(this.array2)
    },
    lettersNumeric() {
      return this.letters.concat(this.numeric)
    },
    nums() {
      return this.num1.concat(this.num2, this.num3)
    },
    alphaNumeric() {
      return this.alpha.concat(1, [2, 3])
    },
    numericArrayValues() {
      return this.numeric.concat([44, 55], 66, 77)
    },
    numericArrayLike() {
      return this.numeric.concat(this.arrayLike)
    },
    numericOtherArrayLike() {
      return this.numeric.concat(this.otherArrayLike)
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
