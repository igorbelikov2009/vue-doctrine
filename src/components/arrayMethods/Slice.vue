<template>
  <div id="array-methods-slice">
    <button
      class="array-methods__button"
      @click="isSlice = !isSlice"
      :class="{ 'array-methods__button_active': isSlice }"
    >
      array.slice()
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span"> Он возвращает новый массив, </span> в который копирует
      элементы, начиная с индекса start и до end (не включая end). Метод arr.slice() без аргументов
      создаёт копию массива arr. Это часто используют, чтобы создать копию массива для дальнейших
      преобразований, которые не должны менять исходный массив.
    </p>

    <div v-if="isSlice">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"
        >Array.slice()</a
      >
      <p class="array-methods__text">
        Его синтаксис: arr.slice([start], [end]) <br />
        Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет
        осуществляться с конца массива.
      </p>

      <p class="array-methods__text">
        e,s (копирует с 1 до 3) <br />
        имеем
        <br />
        <span class="array-methods__span">arrayLetter: {{ arrayLetter }} </span>
        <span class="array-methods__span-purple">
          arrayLetterSlice(){ <br />
          return this.arrayLetter.slice(1, 3) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">arrayLetterSlice: {{ arrayLetterSlice }} </span>
      </p>

      <p class="array-methods__text">
        s,t (копирует с -2 до конца) <br />
        имеем <span class="array-methods__span">arrayLetter: {{ arrayLetter }} </span> <br />
        <span class="array-methods__span-purple">
          arrayLetterSliceNegativeIndex() { <br />
          return this.arrayLetter.slice(-2) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrayLetterSliceNegativeIndex: {{ arrayLetterSliceNegativeIndex }}
        </span>
      </p>

      <p class="array-methods__text">
        Метод slice() не изменяет исходный массив, а возвращает новую «одноуровневую» копию,
        содержащую копии элементов, вырезанных из исходного массива. Элементы исходного массива
        копируются в новый массив по следующим правилам:
      </p>

      <p class="array-methods__text">
        1. Ссылки на объекты (но не фактические объекты): метод slice() копирует ссылки на объекты в
        новый массив. И оригинал, и новый массив ссылаются на один и тот же объект. То есть, если
        объект по ссылке будет изменён, изменения будут видны и в новом, и в исходном массивах.
      </p>

      <p class="array-methods__text">
        2. Строки и числа (но не объекты String и Number): метод slice() копирует значения строк и
        чисел в новый массив. Изменения строки или числа в одном массиве никак не затрагивает
        другой.
      </p>

      <p class="array-methods__text">
        3. Если к любому массиву будет добавлен новый элемент, это никак не повлияет на другой
        массив.
      </p>

      <p class="array-methods__text">
        имеем <span class="array-methods__span"></span>fruits: {{ fruits }} <br />
        <span class="array-methods__span-purple">
          citrus() { <br />
          return this.fruits.slice(1, 3)} <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">citrus: {{ citrus }} </span>
      </p>

      <p class="array-methods__text">
        Аргумент (параметр) <span class="array-methods__span"> start </span> <br />
        <span class="array-methods__span">start </span> - необязательный <br />
        Индекс (счёт начинается с нуля), по которому начинать извлечение. <br />
        Если индекс отрицательный, <span class="array-methods__span">start </span> указывает
        смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента
        последовательности. <br />
        Если <span class="array-methods__span">start </span> не определён, slice() начинает работать
        с индекса 0. <br />
        Если <span class="array-methods__span">start </span> больше длины последовательности
        вернётся пустой массив.
      </p>

      <p class="array-methods__text">
        Аргумент (параметр) <span class="array-methods__span"> end </span> <br />
        <span class="array-methods__span"> end </span> - необязательный <br />
        Индекс (счёт начинается с нуля), по которому заканчивать извлечение. Метод slice() извлекает
        элементы с индексом меньше <span class="array-methods__span"> end </span>. <br />
        Вызов slice(1, 4) извлечёт элементы со второго по четвёртый (элементы по индексам 1, 2 и 3).
        <br />
        Если индекс отрицательный, <span class="array-methods__span"> end </span>указывает смещение
        от конца последовательности. Вызов slice(2, -1) извлечёт из последовательности элементы
        начиная с третьего элемента с начала и заканчивая вторым с конца. <br />
        Если <span class="array-methods__span"> end </span> опущен, slice() извлекает все элементы
        до конца последовательности (arr.length).
      </p>

      <p class="array-methods__text">
        имеем <span class="array-methods__span">animals: {{ animals }} </span> <br />

        <span class="array-methods__span-purple">
          animalsSlice2() { <br />
          return this.animals.slice(2) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">animalsSlice2:{{ animalsSlice2 }} </span> <br />
        <br />

        <span class="array-methods__span-purple">
          animalsSlice24() { <br />
          return this.animals.slice(2, 4) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">animalsSlice24: {{ animalsSlice24 }} </span> <br />
        <br />

        <span class="array-methods__span-purple"
          >animalsSlice15() { <br />
          return this.animals.slice(1, 5) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">animalsSlice15: {{ animalsSlice15 }} </span> <br />
        <br />

        <span class="array-methods__span-purple">
          animalsSliceMinus2() { <br />
          return this.animals.slice(-2) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">animalsSliceMinus2: {{ animalsSliceMinus2 }} </span>
        <br />
        <br />

        <span class="array-methods__span-purple">
          animalsSlice2Minus1() { <br />
          return this.animals.slice(2, -1) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">
          animalsSlice2Minus1: {{ animalsSlice2Minus1 }}
        </span>
        <br />
        <br />

        <span class="array-methods__span-purple"
          >animalsSlice() { <br />
          return this.animals.slice() <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">animalsSlice: {{ animalsSlice }} </span> <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slice',

  data() {
    return {
      isSlice: false,
      arrayLetter: ['t', 'e', 's', 't'],
      fruits: ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'],
      animals: ['ant', 'bison', 'camel', 'duck', 'elephant'],
      //   animals: ['cockroach', 'bison', 'camel', 'duck', 'elephant'],
    }
  },
  computed: {
    arrayLetterSlice() {
      return this.arrayLetter.slice(1, 3)
    },
    arrayLetterSliceNegativeIndex() {
      return this.arrayLetter.slice(-2)
    },
    citrus() {
      return this.fruits.slice(1, 3)
    },
    animalsSlice2() {
      return this.animals.slice(2)
    },
    animalsSlice24() {
      return this.animals.slice(2, 4)
    },
    animalsSlice15() {
      return this.animals.slice(1, 5)
    },
    animalsSliceMinus2() {
      return this.animals.slice(-2)
    },
    animalsSlice2Minus1() {
      return this.animals.slice(2, -1)
    },
    animalsSlice() {
      return this.animals.slice()
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
