<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isIncludes = !isIncludes"
      :class="{ 'array-methods__button_active': isIncludes }"
    >
      array.includes()
    </button>

    <p class="array-methods__description">
      Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости
      от этого true или false.
    </p>

    <div v-if="isIncludes">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
        >array.includes()</a
      >
      <p class="array-methods__text">
        <span class="array-methods__span">Синтаксис </span> <br />
        arr.includes(searchElement[, fromIndex = 0])
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Параметры </span> <br />
        <span class="array-methods__span">searchElement </span>
        Искомый элемент. <br />
        <span class="array-methods__span">fromIndex </span> необязательный. Позиция в массиве, с
        которой начинать поиск элемента searchElement. При отрицательных значениях поиск
        производится начиная с индекса array.length + fromIndex по возрастанию. Значение по
        умолчанию равно 0.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Возвращаемое значение </span> <br />
        Boolean.
      </p>

      <p class="array-methods__text">
        имеем
        <span class="array-methods__span">
          arrStrings: ['HTML', 'JavaScript', 'CSS', 'SASS', 'VUE.CLI', NaN, 'HTML', 'JavaScript',
          'CSS', 'SASS', 'VUE.CLI', NaN]
        </span>
        <br />

        <span class="array-methods__span">ищем 'HTML' с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesHTML() { <br />
          return this.arrStrings.includes('HTML') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsIncludesHTML }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'HTML' с позиции 4 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesHTML4() {<br />
          return this.arrStrings.includes('HTML', 4) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesHTML4 }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'HTML' с позиции 7 </span> <br />
        <span class="array-methods__span-purple"
          >arrStringsIncludesHTML7() { <br />
          return this.arrStrings.includes('HTML', 7) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesHTML7 }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'JavaScript' с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesJavaScript() { <br />
          return this.arrStrings.includes('JavaScript') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsIncludesJavaScript }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'CSS', 'SASS' с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesCSSSASS() { <br />
          return this.arrStrings.includes('CSS', 'SASS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesCSSSASS }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'Zero' с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIcludesZero() { <br />
          return this.arrStrings.includes('Zero') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIcludesZero }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'SASS', 'Zero' с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesSASSZero() { <br />
          return this.arrStrings.includes('SASS', 'Zero') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsIncludesSASSZero }}</span> <br />
        <br />

        <span class="array-methods__span">ищем NaN с позиции 0 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesNaN() { <br />
          return this.arrStrings.includes(NaN) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesNaN }} </span> <br />
        <br />

        <span class="array-methods__span-red">fromIndex больше или равен длине массива </span>
        <br />
        Если fromIndex больше или равен длине массива, то возвращается false. При этом поиск не
        производится. <br />
        <span class="array-methods__span">ищем 'HTML' с позиции 100 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesHTML100() { <br />
          return this.arrStrings.includes('HTML', 100) <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringsIncludesHTML100 }} </span> <br />
        <br />

        <span class="array-methods__span-red">Вычисленный индекс меньше нуля 0 </span> <br />Если
        fromIndex отрицательный, то вычисляется индекс, начиная с которого будет производиться поиск
        элемента searchElement. Если вычисленный индекс меньше нуля, то поиск будет производиться во
        всём массиве. <br />

        // длина массива равна 12 <br />
        // fromIndex равен -100 <br />
        // вычисленный индекс равен 12 + (-100) = -88 <br />
        <br />

        <span class="array-methods__span">ищем 'HTML' с позиции -100 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesHTMLMinus100() { <br />
          return this.arrStrings.includes('HTML', -100) <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesHTMLMinus100 }} </span> <br />
        <br />

        <span class="array-methods__span">ищем 'JavaScript' с позиции -100 </span> <br />
        <span class="array-methods__span-purple"
          >arrStringsIncludesJavaScriptMinus100() { <br />
          return this.arrStrings.includes('JavaScript', -100) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesJavaScriptMinus100 }} </span>
        <br />

        <span class="array-methods__span">ищем NaN с позиции -100 </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIncludesNaNMinus100() { <br />
          return this.arrStrings.includes(NaN, -100) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIncludesNaNMinus100 }} </span> <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Includes',
  data() {
    return {
      isIncludes: false,
      arrStrings: [
        'HTML',
        'JavaScript',
        'CSS',
        'SASS',
        'VUE.CLI',
        NaN,
        'HTML',
        'JavaScript',
        'CSS',
        'SASS',
        'VUE.CLI',
        NaN,
      ],
    }
  },
  computed: {
    arrStringsIncludesHTML() {
      return this.arrStrings.includes('HTML')
    },
    arrStringsIncludesHTML4() {
      return this.arrStrings.includes('HTML', 4)
    },
    arrStringsIncludesHTML7() {
      return this.arrStrings.includes('HTML', 7)
    },
    arrStringsIncludesJavaScript() {
      return this.arrStrings.includes('JavaScript')
    },
    arrStringsIncludesCSSSASS() {
      return this.arrStrings.includes('CSS', 'SASS')
    },
    arrStringsIcludesZero() {
      return this.arrStrings.includes('Zero')
    },
    arrStringsIncludesSASSZero() {
      return this.arrStrings.includes('SASS', 'Zero')
    },
    arrStringsIncludesNaN() {
      return this.arrStrings.includes(NaN)
    },
    arrStringsIncludesHTML100() {
      return this.arrStrings.includes('HTML', 100)
    },
    arrStringsIncludesHTMLMinus100() {
      return this.arrStrings.includes('HTML', -100)
    },
    arrStringsIncludesJavaScriptMinus100() {
      return this.arrStrings.includes('JavaScript', -100)
    },
    arrStringsIncludesNaNMinus100() {
      return this.arrStrings.includes(NaN, -100)
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
