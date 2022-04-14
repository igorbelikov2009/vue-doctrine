<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isPrinterErrors = !isPrinterErrors"
      :class="{ 'array-methods__button_active': isPrinterErrors }"
    >
      Ошибки принтера
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span"> s="aaabbbbhaijjjm" printer_error(s) </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> "0/14" </span> <br />

      <span class="array-methods__span">s="aaaxbbbbyyhwawiwjjjwwm" printer_error(s) </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> "8/22"</span>
    </p>

    <div v-if="isPrinterErrors">
      <p class="array-methods__text">
        На заводе принтер печатает этикетки для коробок. Для одного типа коробки принтер должен
        использовать цвета, которые для простоты названы буквами от a до m. <br />
        Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошая"
        управляющая строка будет aaabbbbhaijjjm означать, что принтер использовал три раза цвет a,
        четыре раза цвет b, один раз цвет h, а затем один раз цвет a... <br />
        Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая"
        управляющая строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не от а до м. <br />
        Напишите функцию print_error, которая по заданной строке будет выводить частоту ошибок
        принтера в виде строки, представляющей рациональное число, числитель которого — количество
        ошибок, а знаменатель — длина контрольной строки. Не уменьшайте эту дробь до более простого
        выражения. <br />
        Строка имеет длину больше или равную единице и содержит только буквы от a до z.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-red"> 1-ый способ</span> <br />

        имеем <span class="array-methods__span">{{ errorPrinter }} </span> <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          ptinterError() { <br />
          return this.ptinterErrorFunc(this.errorPrinter) <br />
          },
        </span>
        } <br />

        methods: { <br />
        <span class="array-methods__span-purple">
          ptinterErrorFunc(word) { <br />
          const invalidCharacters = [...word] <br />
          .map(word => word.charCodeAt(0)) <br />
          .filter(charCode => charCode &lt; 97 || charCode > 109) <br />
          return `${invalidCharacters.length}/${word.length}` <br />
          }</span
        >

        } получаем:
        <span class="array-methods__span-green">{{ ptinterError }} </span> <br />
        Метод String.charCodeAt() возвращает числовое значение Юникода для символа по указанному
        индексу (за исключением кодовых точек Юникода, больших 0x10000).
        <br />
        <br />

        <span class="array-methods__span-red"> 2-ый способ</span> <br />
        имеем <span class="array-methods__span">{{ errorPrinter2 }} </span> <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          ptinterError2() { <br />
          return this.ptinterErrorFuncRegular(this.errorPrinter2) <br />
          },
        </span>
        } <br />

        methods: { <br />
        <span class="array-methods__span-purple">
          ptinterErrorFuncRegular(word) { <br />
          const regex = /[a-m]/g <br />
          const proper_num_of_matches = ((word || '').match(regex) || []).length <br />
          return `${word.length - proper_num_of_matches}/${word.length}` <br />
          }</span
        >
        } получаем:
        <span class="array-methods__span-green">{{ ptinterError2 }} </span> <br />
        <br />
        PrinterErrors.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrinterErrors',

  data() {
    return {
      isPrinterErrors: false,
      errorPrinter: 'aaabbbbhaijjjm',
      errorPrinter2: 'aaaxbbbbyyhwawiwjjjwwm',
    }
  },

  computed: {
    ptinterError() {
      return this.ptinterErrorFunc(this.errorPrinter)
    },
    ptinterError2() {
      return this.ptinterErrorFuncCopy(this.errorPrinter2)
    },
  },

  methods: {
    ptinterErrorFunc(word) {
      const invalidCharacters = [...word]
        .map(word => word.charCodeAt(0))
        .filter(charCode => charCode < 97 || charCode > 109)
      return `${invalidCharacters.length}/${word.length}`
      //   Метод String.charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
    },
    ptinterErrorFuncRegular(word) {
      const regex = /[a-m]/g
      const proper_num_of_matches = ((word || '').match(regex) || []).length
      return `${word.length - proper_num_of_matches}/${word.length}`
    },
    ///////////////
    ptinterErrorFuncCopy(s) {
      const invalid = [...s]
        .map(s => s.charCodeAt(0))
        .filter(charCode => charCode < 97 || charCode > 109)
      return `${invalid.length}/${s.length}`
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
