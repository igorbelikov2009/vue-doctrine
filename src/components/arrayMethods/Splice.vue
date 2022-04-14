<template>
  <div id="array-methods-splice">
    <button
      class="array-methods__button"
      @click="isSplice = !isSplice"
      :class="{ 'array-methods__button_active': isSplice }"
    >
      array.splice()
    </button>

    <p class="array-methods__description">
      Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
      <br />
    </p>

    <div v-if="isSplice">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
        >splice()</a
      >
      <p class="array-methods__text">
        splice(index, deleteCount, elem1, ..., elemN). <br />
        Начиная с позиции index, удаляет количество deleteCount элементов и вставляет elem1, ...,
        elemN на их место. Если index больше длины массива, реальный индекс будет установлен на
        длину массива. Если отрицателен, указывает индекс элемента с конца.
        <span class="array-methods__span">Возвращает массив из удалённых элементов.</span>
      </p>

      <span class="array-methods__span-red"
        >Этот метод проще понять, рассмотрев примеры. Начнём с удаления:</span
      >

      <p class="array-methods__text">
        <span class="array-methods__span"> Задача: начиная с позиции 1, удалить 1 элемент</span>
        <br />
        имеем
        <span class="array-methods__span">array1: ['Я', 'изучаю', 'JavaScript'] </span>
        <br />

        <span class="array-methods__span-purple">
          arraySplice1() { <br />
          return this.array.splice(1, 1) <br />
          }
        </span>
        меняется
        <span class="array-methods__span"> исходный массив array1: {{ array1 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green"> arraySplice1: {{ arraySplice1 }} </span>
      </p>

      <!--  -->
      <p class="array-methods__text">
        <span class="array-methods__span">
          Задача: удалить 3 первых элемента и заменить их двумя другими</span
        >
        <br />
        имеем
        <span class="array-methods__span"
          >array2: ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас']
        </span>
        <br />
        <span class="array-methods__span-purple">
          arraySplice2() { <br />
          return this.array2.splice(0, 3, 'Давай', 'танцевать') <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array2: {{ array2 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice2: {{ arraySplice2 }} </span>
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
        <span class="array-methods__span">array3: ['Я', 'изучаю', 'JavaScript'],</span>
        <br />
        <span class="array-methods__span-purple">
          arraySplice3() { <br />
          return this.array3.splice(2, 0, 'сложный', 'язык') <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array3: {{ array3 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice3: {{ arraySplice3 }} </span>
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
        имеем <span class="array-methods__span">array4: [1, 2, 5]</span> <br />
        <span class="array-methods__span-purple">
          arraySplice4() { <br />
          return this.array4.splice(-1, 0, 3, 4) <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array4: {{ array4 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice4: {{ arraySplice4 }} </span>
        <span class="array-methods__span"> - пустой </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Задача: Удалить 2 элемента начиная с индекса 2. Вычислять по длине массива (arr.length)
        </span>
        <br />
        имеем
        <span class="array-methods__span"
          >array5: ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']</span
        >
        <br />
        <span class="array-methods__span-purple">
          arraySplice5() { <br />
          return this.array5.splice(this.array5.length - 3, 2) <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array5: {{ array5 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice5: {{ arraySplice5 }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Задача: Удалить 1 элемент по индексу -2 </span> <br />
        имеем
        <span class="array-methods__span">array6: ['angel', 'clown', 'mandarin', 'sturgeon']</span>
        <br />
        <span class="array-methods__span-purple">
          arraySplice6() { <br />
          return this.array6.splice(-2, 1) <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array6: {{ array6 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice6: {{ arraySplice6 }} </span>
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
        <span class="array-methods__span">array7: ['angel', 'clown', 'mandarin', 'sturgeon'] </span>
        <br />
        <span class="array-methods__span-purple">
          arraySplice7(){ <br />
          return this.array7.splice(2) <br />
          }
        </span>
        меняется
        <span class="array-methods__span">исходный массив array7: {{ array7 }} </span>
        <br />
        возвращается (return) массив из удалённых элементов
        <span class="array-methods__span-green">arraySplice7: {{ arraySplice7 }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Splice',

  data() {
    return {
      isSplice: false,
      array1: ['Я', 'изучаю', 'JavaScript'],
      array2: ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'],
      array3: ['Я', 'изучаю', 'JavaScript'],
      array4: [1, 2, 5],
      array5: ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'],
      array6: ['angel', 'clown', 'mandarin', 'sturgeon'],
      array7: ['angel', 'clown', 'mandarin', 'sturgeon'],
    }
  },
  computed: {
    arraySplice1() {
      // return this.array1.splice(1, 1)
      return this.array1.splice(1, 1)
    },
    arraySplice2() {
      // return this.array2.splice(0, 3, 'Давай', 'танцевать')
      return this.array2.splice(0, 3, 'Давай', 'танцевать')
    },
    arraySplice3() {
      return this.array3.splice(2, 0, 'сложный', 'язык')
    },
    arraySplice4() {
      return this.array4.splice(-1, 0, 3, 4)
    },
    arraySplice5() {
      return this.array5.splice(this.array5.length - 3, 2)
      // return this.array5.splice(2, 2)
    },
    arraySplice6() {
      // return this.array6.splice(-2, 1)
      return this.array6.splice(-2, 1)
    },
    arraySplice7() {
      return this.array7.splice(2)
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
