<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isForEach = !isForEach"
      :class="{ 'array-methods__button_active': isForEach }"
    >
      array.forEach()
    </button>

    <p class="array-methods__description">
      Метод array.forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
      <br />
      Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.
    </p>

    <div v-if="isForEach">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
      >
        array.forEach()</a
      >

      <p class="array-methods__text">
        Синтаксис <br />
        arr.forEach(function callback(item, index, array) { <br />
        // ... сделать что-то с item, your iterator <br />
        }[, thisArg]);
      </p>

      <p
        class="array-methods__text-cursor"
        @mouseover="arrayConcoleLog"
        @mouseout="isArrayVisible = false"
      >
        Например, этот код (если навести на него мышку) выведет в консоль (в нашем случае и на
        экран) каждый элемент массива: <br />
        имеем <span class="array-methods__span">array: {{ array }} </span>
        <br />
        <span class="array-methods__span-purple">
          arrayConcoleLog() { <br />
          this.array.forEach(element => console.log(element)) <br />
          }
        </span>
        <span v-if="isArrayVisible" class="array-methods__span-green">Bilbo, </span>
        <span v-if="isArrayVisible" class="array-methods__span-green">Gandalf, </span>
        <span v-if="isArrayVisible" class="array-methods__span-green">Nazgul</span>
      </p>

      <p
        class="array-methods__text-cursor"
        @mouseover="arrayInfoConsoleLog"
        @mouseout="isArrayInfoVisible = false"
      >
        А этот вдобавок расскажет и о своей позиции в массиве: (если навести на него мышку) <br />
        имеем <span class="array-methods__span">array: {{ array }} </span>
        <br />
        <span class="array-methods__span-purple">
          arrayInfoConsoleLog() { <br />
          this.array.forEach((item, index, array) => { <br />
          console.log(`${item} имеет позицию ${index} в ${array}`) }) <br />
          }
        </span>
        <span v-if="isArrayInfoVisible" class="array-methods__span-green"
          >Bilbo имеет позицию 0 в Bilbo,Gandalf,Nazgul
        </span>
        <br />
        <span v-if="isArrayInfoVisible" class="array-methods__span-green"
          >Gandalf имеет позицию 1 в Bilbo,Gandalf,Nazgul
        </span>
        <br />
        <span v-if="isArrayInfoVisible" class="array-methods__span-green"
          >Nazgul имеет позицию 2 в Bilbo,Gandalf,Nazgul</span
        >
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Параметры </span>
        <br />
        <span class="array-methods__span">callback </span>
        Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх
        аргументов: <br />
        <span class="array-methods__span">item </span>
        Текущий обрабатываемый элемент в массиве. <br />
        <span class="array-methods__span">index </span>
        необязательный Индекс текущего обрабатываемого элемента в массиве. <br />
        <span class="array-methods__span">array </span>
        необязательный Массив, по которому осуществляется проход. <br />
        <span class="array-methods__span">thisArg </span>
        необязательный параметр. Значение, используемое в качестве this при вызове функции callback.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Описание</span> <br />
        Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в
        массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов
        массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют
        значение undefined.
      </p>

      <p class="array-methods__text">
        Функция <span class="array-methods__span">callback</span> будет вызвана с тремя аргументами:
        <br />
        значение элемента <span class="array-methods__span">(value)</span> <br />
        индекс элемента <span class="array-methods__span">(index)</span> <br />
        массив, по которому осуществляется проход <span class="array-methods__span">(array)</span>
      </p>

      <p class="array-methods__text">
        Если в метод <span class="array-methods__span">forEach() </span> был передан параметр
        <span class="array-methods__span">thisArg</span>, при вызове
        <span class="array-methods__span">callback</span> он будет использоваться в качестве
        значения <span class="array-methods__span">this</span>. В противном случае, в качестве
        значения <span class="array-methods__span">this</span> будет использоваться значение
        undefined. В конечном итоге, значение <span class="array-methods__span">this</span>,
        наблюдаемое из функции <span class="array-methods__span">callback</span>, определяется
        согласно обычным правилам определения <span class="array-methods__span">this</span>,
        видимого из функции.
      </p>

      <p class="array-methods__text">
        Диапазон элементов, обрабатываемых методом forEach(), устанавливается до первого вызова
        функции callback. Элементы, добавленные в массив после начала выполнения метода forEach(),
        не будут посещены функцией callback. Если существующие элементы массива изменятся, значения,
        переданные в функцию callback, будут значениями на тот момент времени, когда метод forEach()
        посетит их; удалённые элементы посещены не будут. Если уже посещённые элементы удаляются во
        время итерации (например, с помощью shift()), последующие элементы будут пропущены.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Примечание: </span> Не существует способа остановить или
        прервать цикл forEach() кроме как выбрасыванием исключения. Если вам необходимо такое
        поведение, метод forEach() неправильный выбор. <br />
        Досрочное прекращение может быть достигнуто с: <br />
        Простой цикл for <br />
        Циклы for...of / for...in <br />
        Array.prototype.every() <br />
        Array.prototype.some() <br />
        Array.prototype.find() <br />
        Array.prototype.findIndex() <br />
        Если нужно протестировать элементы массива на условие и нужно вернуть булево значение, вы
        можете воспользоваться методами every(), some(), find() или findIndex(). <br />

        Метод forEach() выполняет функцию callback один раз для каждого элемента массива; в отличие
        от методов every() и some(), он всегда возвращает значение undefined.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForEach',

  data() {
    return {
      isForEach: false,
      array: ['Bilbo', 'Gandalf', 'Nazgul'],
      isArrayVisible: false,
      isArrayInfoVisible: false,
    }
  },
  methods: {
    arrayConcoleLog() {
      this.array.forEach(element => console.log(element))
      this.isArrayVisible = true
    },
    arrayInfoConsoleLog() {
      this.array.forEach((item, index, array) => {
        console.log(`${item} имеет позицию ${index} в ${array}`)
      })
      this.isArrayInfoVisible = true
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  &__button {
    // display: block;
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

  &__text-cursor {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #413d3d;
    }
  }
}
</style>
