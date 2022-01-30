<template>
  <div id="array-methods-map">
    <button
      class="array-methods__button"
      @click="isArrayMethodsMap = !isArrayMethodsMap"
      :class="{ 'array-methods__button_active': isArrayMethodsMap }"
    >
      array.map()
    </button>

    <p class="array-methods__description">
      Метод map() создаёт новый массив. Он вызывает функцию для каждого элемента массива и
      возвращает массив результатов выполнения этой функции.
    </p>

    <div v-if="isArrayMethodsMap">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
        >arr.map
      </a>

      <p class="array-methods__text">
        let result = arr.map(function(item, index, array) { <br />
        // возвращается новое значение вместо элемента <br />
        });
      </p>

      <p class="array-methods__text">
        Например, имеем массив
        <span class="array-methods__span">arrayUpperCase: {{ arrayUpperCase }}</span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Здесь мы преобразуем каждый элемент этого массива в его длину:
        </span>
        <br />
        <span class="array-methods__span-purple">
          arrayUpperCaseLength() { <br />
          return this.arrayUpperCase.map(word => word.length) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">
          arrayUpperCaseLength: {{ arrayUpperCaseLength }}</span
        >
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"> Здесь меняем регистр первой буквы каждого слова</span>
        <br />
        <span class="array-methods__span-purple">
          toLowerCase() {<br />
          return this.arrayUpperCase.map(word => word[0].toLowerCase() + word.slice(1))<br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> toLowerCase: {{ toLowerCase }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsMap',
  data() {
    return {
      isArrayMethodsMap: false,
      arrayUpperCase: ['Bilbo', 'Gandalf', 'Nazgul'],
    }
  },
  computed: {
    arrayUpperCaseLength() {
      return this.arrayUpperCase.map(word => word.length)
    },
    toLowerCase() {
      return this.arrayUpperCase.map(word => word[0].toLowerCase() + word.slice(1))
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
