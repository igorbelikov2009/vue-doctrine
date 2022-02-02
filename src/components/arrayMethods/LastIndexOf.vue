<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isLastIndexOf = !isLastIndexOf"
      :class="{ 'array-methods__button_active': isLastIndexOf }"
    >
      array.lastIndexOf()
    </button>

    <p class="array-methods__description">
      Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден
      в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с
      индекса fromIndex.
    </p>

    <div v-if="isLastIndexOf">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
        >array.lastIndexOf()</a
      >
      <p class="array-methods__text">
        <span class="array-methods__span">Синтаксис </span> <br />
        arr.lastIndexOf(searchElement[, fromIndex = arr.length])
      </p>

      <p class="array-methods__text">
        Параметры <br />
        <span class="array-methods__span">searchElement </span>
        Искомый элемент в массиве. <br />
        <span class="array-methods__span">fromIndex </span>
        Необязательный параметр. Индекс, с которого начинать поиск в обратном направлении. Если
        индекс больше или равен длине массива, просматривается весь массив. Если индекс является
        отрицательным числом, он трактуется как смещение с конца массива. Обратите внимание: если
        индекс отрицателен, массив всё равно просматривается от конца к началу. Если рассчитанный
        индекс оказывается меньше 0, массив даже не просматривается. Значение по умолчанию равно
        длине массива, что означает, что просматривается весь массив.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Описание </span><br />
        Метод lastIndexOf() сравнивает искомый элемент searchElement с элементами в массиве,
        используя строгое сравнение (en-US) (тот же метод используется оператором ===, тройное
        равно).
      </p>

      <p class="array-methods__text">
        имеем <span class="array-methods__span">arrStrings: {{ arrStrings }} </span> <br />
        <br />

        ищем в массиве индекс 'HTML': <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfHTML() { <br />
          return this.arrStrings.lastIndexOf('HTML') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfHTML }} </span> <br />
        <br />

        ищем в массиве индекс 'JavaScript': <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfJavaScript() { <br />
          return this.arrStrings.lastIndexOf('JavaScript') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfJavaScript }} </span> <br />
        <br />

        ищем в массиве индекс 'VUE.CLI': <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfVUECLI(){ <br />
          return this.arrStrings.lastIndexOf('VUE.CLI') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfVUECLI }} </span> <br />
        <br />

        ищем в массиве индекс 'Zero': <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfZero() { <br />
          return this.arrStrings.lastIndexOf('Zero') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfZero }} </span> <br />
        <br />

        ищем в массиве индекс 'HTML', начиная с 4 позиции: <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfHTML4() { <br />
          return this.arrStrings.lastIndexOf('HTML', 4) <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfHTML4 }} </span> <br />
        <br />

        имеем <span class="array-methods__span">arrStrings: {{ arrStrings }}</span> <br />
        <br />

        ищем в массиве индекс 'CSS': <br />
        <span class="array-methods__span-purple">
          arrStringsLastIndexOfCSS() { <br />
          return this.arrStrings.lastIndexOf('CSS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfCSS }} </span> <br />
        <br />

        ищем в массиве индекс 'CSS', начиная с 4 позиции: <br />
        <span class="array-methods__span-purple"
          >arrStringsLastIndexOfCSS4() { <br />
          return this.arrStrings.lastIndexOf('CSS', 4) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsLastIndexOfCSS4 }} </span> <br />
        <br />
      </p>

      <span class="array-methods__span-red">нахождение всех вхождений элемента</span>

      <p class="array-methods__text">
        имеем data() { <br />
        return { <br />
        <span class="array-methods__span"
          >arrStrings:{{ arrStrings }}, <br />
          element: {{ element }}
        </span>
        } <br />
        }
        <br />

        <span class="array-methods__span-purple">
          arrStringIndicesHTML() { <br />
          let indices = [] <br />
          let index = this.arrStrings.lastIndexOf(this.element) <br />
          while (index != -1) { <br />
          indices.push(index) <br />
          index = index > 0 ? this.arrStrings.lastIndexOf(this.element, index - 1) : -1 <br />
          } <br />
          return indices <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringIndicesHTML }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-purple">
          arrStringIndicesJavaScript() { <br />
          let indices = [] <br />
          let index = this.arrStrings.lastIndexOf('JavaScript') <br />
          while (index != -1) { <br />
          indices.push(index) <br />
          index = index > 0 ? this.arrStrings.lastIndexOf('JavaScript', index - 1) : -1 <br />
          } <br />
          return indices <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green">{{ arrStringIndicesJavaScript }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastIndexOf',

  data() {
    return {
      isLastIndexOf: false,
      arrStrings: [
        'HTML',
        'JavaScript',
        'CSS',
        'SASS',
        'VUE.CLI',
        'HTML',
        'JavaScript',
        'CSS',
        'SASS',
        'VUE.CLI',
      ],
      element: 'HTML',
    }
  },
  computed: {
    arrStringsLastIndexOfHTML() {
      return this.arrStrings.lastIndexOf('HTML')
    },
    arrStringsLastIndexOfJavaScript() {
      return this.arrStrings.lastIndexOf('JavaScript')
    },
    arrStringsLastIndexOfVUECLI() {
      return this.arrStrings.lastIndexOf('VUE.CLI')
    },
    arrStringsLastIndexOfZero() {
      return this.arrStrings.lastIndexOf('Zero')
    },
    arrStringsLastIndexOfHTML4() {
      return this.arrStrings.lastIndexOf('HTML', 4)
    },
    arrStringsLastIndexOfCSS() {
      return this.arrStrings.lastIndexOf('CSS')
    },
    arrStringsLastIndexOfCSS4() {
      return this.arrStrings.lastIndexOf('CSS', 4)
    },
    arrStringIndicesHTML() {
      let indices = []
      let index = this.arrStrings.lastIndexOf(this.element)
      while (index != -1) {
        indices.push(index)
        index = index > 0 ? this.arrStrings.lastIndexOf(this.element, index - 1) : -1
      }
      return indices
    },
    arrStringIndicesJavaScript() {
      let indices = []
      let index = this.arrStrings.lastIndexOf('JavaScript')
      while (index != -1) {
        indices.push(index)
        index = index > 0 ? this.arrStrings.lastIndexOf('JavaScript', index - 1) : -1
      }
      return indices
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
