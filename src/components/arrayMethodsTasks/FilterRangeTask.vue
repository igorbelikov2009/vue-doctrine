<template>
  <div id="filterRange">
    <button
      class="array-methods__button"
      @click="isFilterRange = !isFilterRange"
      :class="{ 'array-methods__button_active': isFilterRange }"
    >
      Фильтрация по диапазону filterRange
    </button>

    <p class="array-methods__description">
      Напишите функцию filterRange(arrNumber, a, b), которая принимает массив arrNumber, ищет в нём
      элементы между a и b и отдаёт массив этих элементов. Функция должна возвращать новый массив и
      не изменять исходный.<br />
      <span class="array-methods__span"> arrNumber: {{ arrNumber }} </span>
      <span class="array-methods__span-purple">
        filterRange(arrNumber, 1, 7) =>
      </span>
      <span class="array-methods__span-green">
        arrNumber: {{ arrNumber }} (исходный массив, без изменений), filterRange:
        {{ filterRange }} (новый массив, совпадающие значения)
      </span>
    </p>

    <div v-if="isFilterRange">
      <p class="array-methods__text">
        имеем <span class="array-methods__span">arrNumber: {{ arrNumber }} </span> <br />
        <span class="array-methods__span-purple">
          filterRange() { <br />
          let a = 1 <br />
          let b = 7 <br />
          return this.arrNumber.filter(item => a &lt;= item &amp;&amp; item &lt;= b) <br />
          }
        </span>
        <br />
        // если "a" и "b" находятся в "data()", то <br />
        // return this.arrNumber.filter(item => this.a &lt;= item &amp;&amp; item &lt;= this.b)
        <br />
        получаем -
        <span class="array-methods__span-green">filterRange: {{ filterRange }} </span> <br />
        <br />
        FilterRangeTask.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterRangeTask',

  data() {
    return {
      isFilterRange: false,
      arrNumber: [5, 3, 8, 1],
    }
  },
  computed: {
    filterRange() {
      let a = 1
      let b = 7
      return this.arrNumber.filter(item => a <= item && item <= b)
      // если "a" и "b" находятся в "data()", то
      //   return this.arrNumber.filter(item => this.a <= item && item <= this.b)
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
