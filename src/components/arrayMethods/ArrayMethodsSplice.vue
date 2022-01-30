<template>
  <div id="array-methods-splice">
    <button
      class="array-methods__button"
      @click="isArrayMethodsSplice = !isArrayMethodsSplice"
      :class="{ 'array-methods__button_active': isArrayMethodsSplice }"
    >
      array.splice()
    </button>

    <p class="array-methods__description">
      Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
      Это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и
      заменять элементы.
      <br />
    </p>

    <div v-if="isArrayMethodsSplice">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
        >splice()</a
      >
      <p class="array-methods__text">
        splice(index, deleteCount, elem1, ..., elemN). <br />
        Начиная с позиции index, удаляет количество deleteCount элементов и вставляет elem1, ...,
        elemN на их место.
        <span class="array-methods__span">Возвращает массив из удалённых элементов.</span>
      </p>

      <span class="array-methods__span-red"
        >Этот метод проще понять, рассмотрев примеры. Начнём с удаления:</span
      >

      <p class="array-methods__text">
        <span class="array-methods__span"> Задача: начиная с позиции 1, удалить 1 элемент</span>
        <br />
        имеем
        <span class="array-methods__span">arrayForSplice: ['Я', 'изучаю', 'JavaScript'] </span>
        <br />

        <span class="array-methods__span-purple">
          arrayForSpliceDeleteOneElem() { <br />
          return this.arrayForSplice.splice(1, 1) <br />
          }
        </span>
        меняется
        <span class="array-methods__span">
          исходный массив arrayForSplice: {{ arrayForSplice }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">
          arrayForSpliceDeleteOneElem: {{ arrayForSpliceDeleteOneElem }}
        </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Задача: удалить 3 первых элемента и заменить их двумя другими</span
        >
        <br />
        имеем
        <span class="array-methods__span"
          >arrayForSplice2: ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас']
        </span>
        <br />
        <span class="array-methods__span-purple">
          arrayForSplice2DeleteAndAddedElems() { <br />
          return this.arrayForSplice2.splice(0, 3, 'Давай', 'танцевать') <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice2: {{ arrayForSplice2 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice2DeleteAndAddedElems: {{ arrayForSplice2DeleteAndAddedElems }}
        </span>
      </p>

      <span class="array-methods__span-red"
        >Метод splice также может вставлять элементы без удаления, для этого достаточно установить
        deleteCount в 0:</span
      >

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Задача: с позиции 2 удалить 0 элементов; вставить "сложный", "язык"
        </span>
        <br />
        имеем
        <span class="array-methods__span">arrayForSplice3: ['Я', 'изучаю', 'JavaScript'],</span>
        <br />
        <span class="array-methods__span-purple">
          arrayForSplice3AddedElems() { <br />
          return this.arrayForSplice3.splice(2, 0, 'сложный', 'язык') <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice3: {{ arrayForSplice3 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice3AddedElems: {{ arrayForSplice3AddedElems }}
        </span>
        <span class="array-methods__span"> - пустой </span>
      </p>

      <span class="array-methods__span-red"
        >В этом и в других методах массива допускается использование отрицательного индекса. Он
        позволяет начать отсчёт элементов с конца, как тут:</span
      >

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Задача: начиная с индекса -1 (перед последним элементом) удалить 0 элементов, затем
          вставить числа 3 и 4
        </span>
        <br />
        имеем <span class="array-methods__span">arrayForSplice4: [1, 2, 5]</span> <br />
        <span class="array-methods__span-purple">
          arrayForSplice4AddedElems() { <br />
          return this.arrayForSplice4.splice(-1, 0, 3, 4) <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice4: {{ arrayForSplice4 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice4AddedElems: {{ arrayForSplice4AddedElems }}
        </span>
        <span class="array-methods__span"> - пустой </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Задача: Удалить 2 элемента начиная с индекса 2. Вычислять по длине массива (arr.length)
        </span>
        <br />
        имеем
        <span class="array-methods__span"
          >arrayForSplice5: ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']</span
        >
        <br />
        <span class="array-methods__span-purple">
          arrayForSplice5DeleteElems() { <br />
          return this.arrayForSplice5.splice(this.arrayForSplice5.length - 3, 2) <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice5: {{ arrayForSplice5 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice5DeleteElems: {{ arrayForSplice5DeleteElems }}
        </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Задача: Удалить 1 элемент по индексу -2 </span> <br />
        имеем
        <span class="array-methods__span"
          >arrayForSplice6: ['angel', 'clown', 'mandarin', 'sturgeon']</span
        >
        <br />
        <span class="array-methods__span-purple">
          arrayForSplice6DeleteElem() { <br />
          return this.arrayForSplice6.splice(-2, 1) <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice6: {{ arrayForSplice6 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice6DeleteElem: {{ arrayForSplice6DeleteElem }}
        </span>
      </p>

      <span class="array-methods__span-red"
        >Удалить все элементы после индекса 'index' (включительно)</span
      >

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Задача: Удалить все элементы после индекса 2 (включительно)
        </span>
        <br />
        имеем
        <span class="array-methods__span"
          >arrayForSplice7: ['angel', 'clown', 'mandarin', 'sturgeon']
        </span>
        <br />
        <span class="array-methods__span-purple">
          arrayForSplice7DeleteElems(){ <br />
          return this.arrayForSplice7.splice(2) <br />
          }
        </span>
        меняется
        <span class="array-methods__span"
          >исходный массив arrayForSplice7: {{ arrayForSplice7 }}
        </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"
          >arrayForSplice7DeleteElems: {{ arrayForSplice7DeleteElems }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsSplice',

  data() {
    return {
      isArrayMethodsSplice: false,
      arrayForSplice: ['Я', 'изучаю', 'JavaScript'],
      arrayForSplice2: ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'],
      arrayForSplice3: ['Я', 'изучаю', 'JavaScript'],
      arrayForSplice4: [1, 2, 5],
      arrayForSplice5: ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'],
      arrayForSplice6: ['angel', 'clown', 'mandarin', 'sturgeon'],
      arrayForSplice7: ['angel', 'clown', 'mandarin', 'sturgeon'],
    }
  },
  computed: {
    arrayForSpliceDeleteOneElem() {
      return this.arrayForSplice.splice(1, 1)
    },
    arrayForSplice2DeleteAndAddedElems() {
      return this.arrayForSplice2.splice(0, 3, 'Давай', 'танцевать')
    },
    arrayForSplice3AddedElems() {
      return this.arrayForSplice3.splice(2, 0, 'сложный', 'язык')
    },
    arrayForSplice4AddedElems() {
      return this.arrayForSplice4.splice(-1, 0, 3, 4)
    },
    arrayForSplice5DeleteElems() {
      return this.arrayForSplice5.splice(this.arrayForSplice5.length - 3, 2)
    },
    arrayForSplice6DeleteElem() {
      return this.arrayForSplice6.splice(-2, 1)
    },
    arrayForSplice7DeleteElems() {
      return this.arrayForSplice7.splice(2)
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
