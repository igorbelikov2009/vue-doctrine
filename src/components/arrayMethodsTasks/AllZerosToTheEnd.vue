<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isAllZerosToTheEnd = !isAllZerosToTheEnd"
      :class="{ 'array-methods__button_active': isAllZerosToTheEnd }"
    >
      Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок
      остальных элементов.
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">[false, 1, 0, 1, 2, 0, 1, 3, 'a'] </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ moveZeros1 }} </span> <br />

      <span class="array-methods__span">[1, 2, 0, 1, 0, 1, 0, 3, 0, 1] </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ moveZeros2 }}</span>
    </p>

    <div v-if="isAllZerosToTheEnd">
      <p class="array-methods__text">
        <span class="array-methods__span">
          Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок
          остальных элементов.</span
        >
        <br />

        methods: { <br />
        <span class="array-methods__span-purple">
          moveZerosFanc(arr) { <br />
          let i = arr.length - 1 <br />
          while (i--) { <br />
          if (arr[i] === 0) { <br />
          arr.push(arr.splice(i, 1)[0]) <br />
          } } <br />
          return arr <br />
          }</span
        >
        <br />
        имеем <span class="array-methods__span">[false, 1, 0, 1, 2, 0, 1, 3, 'a'] </span> <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >moveZeros1() { <br />
          return this.moveZerosFanc(this.arrayZeros1) <br />
          }</span
        >
        } <br />

        } получаем:
        <span class="array-methods__span-green"> {{ moveZeros1 }} </span> <br />
        <br />

        имеем <span class="array-methods__span">[1, 2, 0, 1, 0, 1, 0, 3, 0, 1] </span> <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >moveZeros2() { <br />
          return this.moveZerosFanc(this.arrayZeros2) <br />
          }</span
        >
        } <br />

        } получаем:
        <span class="array-methods__span-green"> {{ moveZeros2 }} </span>
      </p>

      <p class="array-methods__text">AllZerosToTheEnd.vue</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllZerosToTheEnd',

  data() {
    return {
      isAllZerosToTheEnd: false,
      //   arrayZeros: [false, 1, 0, 1, 2, 0, 1, 3, 'a'],
      // arrayZeros: [1, 2, 0, 1, 0, 1, 0, 3, 0, 1],
    }
  },

  computed: {
    arrayZeros1() {
      return this.$store.state.allZerosToTheEnd.arrayZeros1
    },
    arrayZeros2() {
      return this.$store.state.allZerosToTheEnd.arrayZeros2
    },
    moveZeros1() {
      return this.moveZerosFanc(this.arrayZeros1)
      // return this.$store.getters['allZerosToTheEnd/moveZerosFanc']
    },

    moveZeros2() {
      return this.moveZerosFanc(this.arrayZeros2)
    },
  },
  methods: {
    moveZerosFanc() {
      // return this.$store.getters['allZerosToTheEnd/moveZerosFanc']
    },

    moveZerosFanc(arr) {
      let i = arr.length - 1
      while (i--) {
        if (arr[i] === 0) {
          arr.push(arr.splice(i, 1)[0])
          // unshift
        }
      }
      return arr
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
