<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isArrayIsArray = !isArrayIsArray"
      :class="{ 'array-methods__button_active': isArrayIsArray }"
    >
      Array.isArray()
    </button>

    <p class="array-methods__description">
      Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом
      не является.
    </p>

    <div v-if="isArrayIsArray">
      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
        >Array.isArray()</a
      >

      <p class="array-methods__text">
        Массивы не образуют отдельный тип языка. Они основаны на объектах. Поэтому typeof не может
        отличить простой объект от массива. Проверка покажет, что <br />
        typeof {} == object, typeof [] == object <br />
        <br />

        имеем <span class="array-methods__span"> arrStrings: {{ arrStrings }} </span> <br />
        <span class="array-methods__span-purple"
          >typeOfArrStrings() { <br />
          return typeof this.arrStrings <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ typeOfArrStrings }} </span>
      </p>

      <p class="array-methods__text">
        …Но массивы используются настолько часто, что для этого придумали специальный метод
      </p>

      <p class="array-methods__text">
        alert(Array.isArray({})); // false <br />

        alert(Array.isArray([])); // true
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Проверить что-то, является ли оно массивом</span> <br />

        имеем <span class="array-methods__span"> arrStrings: {{ arrStrings }} </span> <br />
        <span class="array-methods__span-purple">
          arrStringsIsArray() { <br />
          return Array.isArray(this.arrStrings) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrStringsIsArray }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayIsArray',

  data() {
    return {
      isArrayIsArray: false,
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
    arrStringsIsArray() {
      return Array.isArray(this.arrStrings)
    },
    typeOfArrStrings() {
      return typeof this.arrStrings
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
