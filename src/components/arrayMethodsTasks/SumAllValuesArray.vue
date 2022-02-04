<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isSumAllValuesArray = !isSumAllValuesArray"
      :class="{ 'array-methods__button_active': isSumAllValuesArray }"
    >
      Суммирование всех значений в массиве
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">{{ array1 }} </span>
      <span class="array-methods__span-purple"> => [1 + 2 + 3 + 4] </span>
      <span class="array-methods__span-green"> = {{ array1Reduce }} </span>
    </p>

    <div v-if="isSumAllValuesArray">
      <p class="array-methods__text">
        <span class="array-methods__span-red">Суммирование всех значений в массиве</span> <br />
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 0.</span>
        <br />

        имеем <span class="array-methods__span">array1: {{ array1 }} </span> <br />
        <span class="array-methods__span-purple">
          array1Reduce() { <br />
          const reducer = (previousValue, currentValue) => previousValue + currentValue <br />
          return this.array1.reduce(reducer) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1Reduce }} </span>
      </p>

      <p class="array-methods__text">
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 0.</span> <br />
        <span class="array-methods__span-red">другой способ</span> <br />
        имеем <span class="array-methods__span">array1: {{ array1 }}</span> <br />
        <span class="array-methods__span-purple">
          array1ReduceAnotherIV0() { <br />
          var total = this.array1.reduce(function(a, b) {<br />
          return a + b <br />
          }) <br />
          return total <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1ReduceAnotherIV0 }}</span>
      </p>

      <p class="array-methods__text">
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 10.</span> <br />

        имеем <span class="array-methods__span">array1: {{ array1 }}</span> <br />
        <span class="array-methods__span-purple">
          array1ReduceIV10() { <br />
          const reducer = (previousValue, currentValue) => previousValue + currentValue <br />
          return this.array1.reduce(reducer, 10) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1ReduceIV10 }} </span>
        <br />
        <br />
        SumAllValuesArray.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SumAllValuesArray',

  data() {
    return {
      isSumAllValuesArray: false,
      array1: [1, 2, 3, 4],
    }
  },
  computed: {
    array1Reduce() {
      const reducer = (previousValue, currentValue) => previousValue + currentValue
      return this.array1.reduce(reducer)
    },
    // по другому
    array1ReduceAnotherIV0() {
      var total = this.array1.reduce(function(a, b) {
        return a + b
      })
      return total
    },
    array1ReduceIV10() {
      const reducer = (previousValue, currentValue) => previousValue + currentValue
      return this.array1.reduce(reducer, 10)
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
