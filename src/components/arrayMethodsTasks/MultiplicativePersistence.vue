<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isMultiplicativePersistence = !isMultiplicativePersistence"
      :class="{ 'array-methods__button_active': isMultiplicativePersistence }"
    >
      Напишите функцию, которая принимает положительный параметр num и возвращает его
      мультипликативную стойкость, то есть количество раз, которое вы должны умножить на num, пока
      не получите одну цифру.
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">999 </span>
      <span class="array-methods__span-purple">
        => (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)</span
      >
      <span class="array-methods__span-green"> => 4</span> <br />

      <span class="array-methods__span">444 </span>
      <span class="array-methods__span-purple">
        => (because 4*4*4 = 64, 6*4 = 24, and finally 2*4 = 8)</span
      >
      <span class="array-methods__span-green"> => 3</span> <br />

      <span class="array-methods__span">333 </span>
      <span class="array-methods__span-purple">
        => (because 3*3*3 = 27, 2*7 = 14, and finally 1*4 = 4)
      </span>
      <span class="array-methods__span-green"> => 3</span> <br />

      <span class="array-methods__span">5 </span>
      <span class="array-methods__span-purple"> => ( 0*5 = 0) </span>
      <span class="array-methods__span-green"> => 0</span>
    </p>

    <div v-if="isMultiplicativePersistence">
      <p class="array-methods__text">
        <span class="array-methods__span-red">способ 1 </span> имеем
        <span class="array-methods__span">num1: {{ num1 }} </span> <br />
        methods: {
        <span class="array-methods__span-purple">
          <br />
          persistence(n) { <br />
          const str = n.toString() <br />
          if (str.length === 1) { <br />
          return 0 <br />
          } <br />
          const nextNum = str.split('').reduce((a, b) => a * b, 1) <br />
          return 1 + this.persistence(nextNum) },
        </span>
        <br />
        }
        <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          persistenceNum1() { <br />
          return this.persistence(this.num1) <br />
          },</span
        >} <br />
        получаем:
        <span class="array-methods__span-green">{{ persistenceNum1 }} </span> <br />
        <br />

        <span class="array-methods__span-red">способ 2 </span> имеем
        <span class="array-methods__span"> {{ num2 }} </span> <br />
        methods: { <br />
        <span class="array-methods__span-purple">
          persistence2(n) { <br />
          if (n.toString().length === 1) { <br />
          return 0 <br />
          } <br />
          var mult = 1 <br />
          var splitStr = n.toString().split('') <br />
          for (var i = 0; i &lt; splitStr.length; i++) { <br />
          mult *= parseFloat(splitStr[i]) <br />
          } <br />
          return 1 + this.persistence2(parseFloat(mult)) <br />
          }</span
        >
        } <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >persistenceNum2() { <br />
          return this.persistence2(this.num2) <br />

          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">{{ persistenceNum2 }} </span> <br />
        <br />

        <span class="array-methods__span-red">способ 3 </span> имеем
        <span class="array-methods__span"> {{ num3 }} </span> <br />
        methods: { <br />
        <span class="array-methods__span-purple">
          persistence3(n) { <br />
          let splitNumArr = n.toString().split('') <br />
          let newList <br />
          let count = 0 <br />
          while (splitNumArr.length > 1) { <br />
          newList = splitNumArr.reduce((acc, curr) => { <br />
          return (acc *= curr) <br />
          }) <br />
          splitNumArr = newList.toString().split('') <br />
          count++ <br />
          } <br />
          return count <br />
          }</span
        >
        } <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >persistenceNum3() { <br />
          return this.persistence(this.num3) <br />
          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">{{ persistenceNum3 }} </span>
        <br />
        <br />

        имеем <span class="array-methods__span"> {{ num4 }} </span> <br />
        methods: { <br />
        <span class="array-methods__span-purple"> любой из выше показанный</span>
        } <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >persistenceNum4() { <br />
          return this.persistence(this.num4) <br />
          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">{{ persistenceNum4 }} </span> <br />
        <br />

        MultiplicativePersistence.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiplicativePersistence',

  data() {
    return {
      isMultiplicativePersistence: false,
      num1: 999,
      num2: 444,
      num3: 333,
      num4: 5,
    }
  },
  computed: {
    persistenceNum1() {
      return this.persistence(this.num1)
    },
    persistenceNum2() {
      return this.persistence2(this.num2)
    },
    persistenceNum3() {
      return this.persistence(this.num3)
    },
    persistenceNum4() {
      return this.persistence(this.num4)
    },
  },
  methods: {
    persistence(n) {
      const str = n.toString()
      if (str.length === 1) {
        return 0
      }
      const nextNum = str.split('').reduce((a, b) => a * b, 1)
      return 1 + this.persistence(nextNum)
    },
    persistence2(n) {
      if (n.toString().length === 1) {
        return 0
      }
      var mult = 1
      var splitStr = n.toString().split('')
      for (var i = 0; i < splitStr.length; i++) {
        mult *= parseFloat(splitStr[i])
      }
      return 1 + this.persistence2(parseFloat(mult))
    },
    persistence3(n) {
      let splitNumArr = n.toString().split('')
      let newList
      let count = 0
      while (splitNumArr.length > 1) {
        newList = splitNumArr.reduce((acc, curr) => {
          return (acc *= curr)
        })
        splitNumArr = newList.toString().split('')
        count++
      }

      return count
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
