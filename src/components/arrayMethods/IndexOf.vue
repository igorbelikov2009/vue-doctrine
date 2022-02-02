<template>
  <div id="array-methods-indexOf">
    <button
      class="array-methods__button"
      @click="isIndexOf = !isIndexOf"
      :class="{ 'array-methods__button_active': isIndexOf }"
    >
      array.indexOf()
    </button>

    <p class="array-methods__description">
      Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в
      массиве или -1, если такого индекса нет.
    </p>

    <div v-if="isIndexOf">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
        >array.indexOf()</a
      >
      <p class="array-methods__text">
        Синтаксис <br />
        arr.indexOf(searchElement[, fromIndex = 0])
      </p>

      <p class="array-methods__text">
        Параметры <br />
        <span class="array-methods__span">searchElement </span>
        Искомый элемент в массиве. <br />
        <span class="array-methods__span">fromIndex </span>
        Индекс, с которого начинать поиск. Если индекс больше или равен длине массива, возвращается
        -1, что означает, что массив даже не просматривается. Если индекс является отрицательным
        числом, он трактуется как смещение с конца массива. Обратите внимание: если индекс
        отрицателен, массив всё равно просматривается от начала к концу. Если рассчитанный индекс
        оказывается меньше 0, поиск ведётся по всему массиву. Значение по умолчанию
        <span class="array-methods__span"> (если fromIndex не указан) </span> равно 0, что означает,
        что просматривается весь массив.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Описание </span> <br />
        Метод indexOf() сравнивает искомый элемент searchElement с элементами в массиве, используя
        строгое сравнение (en-US) (тот же метод используется оператором ===, тройное равно).
      </p>

      <p class="array-methods__text">
        имеем <span class="array-methods__span">arrStrings:{{ arrStrings }}</span> <br />
        <br />
        ищем index "HTML". <br />
        <span class="array-methods__span-purple">
          arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('HTML') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfHTML }} </span> <br />
        <br />

        ищем index "JavaScript". <br />
        <span class="array-methods__span-purple">
          arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('JavaScript') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfJavaScript }} </span> <br />
        <br />

        ищем index "CSS". <br />
        <span class="array-methods__span-purple">
          arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('CSS') <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfCSS }} </span> <br />
        <br />

        ищем index "SASS". <br />
        <span class="array-methods__span-purple">
          arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('SASS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsIndexOfSASS }}</span> <br />
        <br />

        ищем index "VUE.CLI". <br />
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('VUE.CLI') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green">{{ arrStringsIndexOfVUECLI }}</span> <br />
        <br />

        имеем <span class="array-methods__span">arrStrings:{{ arrStrings }}</span> <br />
        <br />
        ищем index "Zero". "Zero" нет в данном массиве, поэтому получаем значение индекса
        <span class="array-methods__span-green"> -1</span> <br />
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('Zero') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfZero }} </span> <br /><br />

        ищем index 'CSS', 'SASS'.
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('CSS', 'SASS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfCSSSASS }} </span> <br /><br />

        ищем index 'SASS', 'CSS'.
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('SASS', 'CSS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfSASSCSS }} </span> <br /><br />

        ищем index 'CSS','Zero'.
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('CSS','Zero') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfCSSZero }} </span> <br /><br />

        ищем index 'Zero', 'CSS'.
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('Zero', 'CSS') <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfZeroCSS }} </span> <br /><br />

        имеем <span class="array-methods__span">arrStrings:{{ arrStrings }}</span> <br />
        <br />
        ищем index 'HTML', начиная с 3-ей позиции:
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('HTML', 3) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfHTML3 }} </span> <br /><br />

        ищем index 'JavaScript', 3, начиная с 3-ей позиции:
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('JavaScript', 3) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfJavaScript3 }} </span>
        <br /><br />

        ищем index 'CSS', 3, начиная с 3-ей позиции:
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('CSS', 3) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfCSS3 }} </span> <br /><br />

        ищем index 'SASS', 3, начиная с 3-ей позиции:
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('SASS', 3) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfSASS3 }} </span> <br /><br />

        ищем index 'VUE.CLI', 3, начиная с 3-ей позиции:
        <span class="array-methods__span-purple"
          >arrStringsIndexOf() { <br />
          return this.arrStrings.indexOf('VUE.CLI', 3) <br />
          }</span
        >
        получаем
        <span class="array-methods__span-green"> {{ arrStringsIndexOfVUECLI3 }} </span> <br /><br />
      </p>

      <span class="array-methods__span-red"
        >Пример: нахождение всех вхождений (индексов) элемента</span
      >

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
        ищем все индексы 'HTML' в массиве <br />
        <span class="array-methods__span-purple">
          indicesHTML() { <br />
          let indices = [] <br />
          let index = this.arrStrings.indexOf(this.element) <br />
          while (index != -1) { <br />
          indices.push(index) <br />
          index = this.arrStrings.indexOf(this.element, index + 1) <br />
          } <br />
          return indices <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ indicesHTML }} </span>
      </p>

      <p class="array-methods__text">
        ищем все индексы 'JavaScript' в массиве <br />
        <span class="array-methods__span-purple">
          indicesJavaScript() { <br />
          let indices = [] <br />
          let index = this.arrStrings.indexOf('JavaScript') <br />
          while (index != -1) { <br />
          indices.push(index) <br />
          index = this.arrStrings.indexOf('JavaScript', index + 1) <br />
          } <br />
          return indices <br />
          }
        </span>
        получаем
        <span class="array-methods__span-green"> {{ indicesJavaScript }} </span> <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexOf',

  data() {
    return {
      isIndexOf: false,
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
    arrStringsIndexOfHTML() {
      return this.arrStrings.indexOf('HTML')
    },
    arrStringsIndexOfJavaScript() {
      return this.arrStrings.indexOf('JavaScript')
    },
    arrStringsIndexOfCSS() {
      return this.arrStrings.indexOf('CSS')
    },
    arrStringsIndexOfSASS() {
      return this.arrStrings.indexOf('SASS')
    },
    arrStringsIndexOfVUECLI() {
      return this.arrStrings.indexOf('VUE.CLI')
    },
    arrStringsIndexOfZero() {
      return this.arrStrings.indexOf('Zero')
    },
    arrStringsIndexOfCSSSASS() {
      return this.arrStrings.indexOf('CSS', 'SASS')
    },
    arrStringsIndexOfSASSCSS() {
      return this.arrStrings.indexOf('SASS', 'CSS')
    },
    arrStringsIndexOfCSSZero() {
      return this.arrStrings.indexOf('CSS', 'Zero')
    },
    arrStringsIndexOfZeroCSS() {
      return this.arrStrings.indexOf('Zero', 'CSS')
    },
    arrStringsIndexOfHTML3() {
      return this.arrStrings.indexOf('HTML', 3)
    },
    arrStringsIndexOfJavaScript3() {
      return this.arrStrings.indexOf('JavaScript', 3)
    },
    arrStringsIndexOfCSS3() {
      return this.arrStrings.indexOf('CSS', 3)
    },
    arrStringsIndexOfSASS3() {
      return this.arrStrings.indexOf('SASS', 3)
    },
    arrStringsIndexOfVUECLI3() {
      return this.arrStrings.indexOf('VUE.CLI', 3)
    },
    indicesHTML() {
      let indices = []
      let index = this.arrStrings.indexOf(this.element)
      while (index != -1) {
        indices.push(index)
        index = this.arrStrings.indexOf(this.element, index + 1)
      }
      return indices
    },
    indicesJavaScript() {
      let indices = []
      let index = this.arrStrings.indexOf('JavaScript')
      while (index != -1) {
        indices.push(index)
        index = this.arrStrings.indexOf('JavaScript', index + 1)
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
