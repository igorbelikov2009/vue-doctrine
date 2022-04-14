<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isCalculator = !isCalculator"
      :class="{ 'array-methods__button_active': isCalculator }"
    >
      Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
    </button>

    <p class="array-methods__description">
      xxx
      <br />
      <span class="array-methods__span">xxx </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> xxx</span>
    </p>

    <div v-if="isCalculator">
      <p class="array-methods__text">
        <span class="array-methods__span"> сделать что-то</span> <br />

        имеем <span class="array-methods__span"></span> <br />
        <span class="array-methods__span-purple"></span>
        получаем:
        <span class="array-methods__span-green">{{ calc }}</span>
      </p>

      <p class="array-methods__text">Calculator.vue</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',

  data() {
    return {
      isCalculator: false,
      a: 6,
      b: 7,
      c: '6' + '7',
    }
  },
  computed: {
    calc() {
      return this.calculator(this.c)
    },
  },
  methods: {
    calculator() {
      this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b,
      }

      this.calculate = function(str) {
        let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN
        }

        return this.methods[op](a, b)
      }

      this.addMethod = function(name, func) {
        this.methods[name] = func
      }
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
