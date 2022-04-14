<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isNumberIdenticElemInAarray = !isNumberIdenticElemInAarray"
      :class="{ 'array-methods__button_active': isNumberIdenticElemInAarray }"
    >
      Дан массив целых чисел, найдите уникальные элементы, их количество. Найдите то число, которое
      встречается нечетное количество раз.
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">{{ arrayElems }} </span>
      <span class="array-methods__span-purple"> уникальные элементы => </span>
      <span class="array-methods__span-green"> {{ uniqueElems }} </span>
      <br />

      <span class="array-methods__span">{{ arrayElems }} </span>
      <span class="array-methods__span-purple"> количество уникальных элементов =></span>
      <span class="array-methods__span-green">
        {{ uniqueElemsLength }}
      </span>
      <br />

      <span class="array-methods__span">{{ arrayElems }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ getOddOccurrence }} </span> <br />
      <br />
    </p>

    <div v-if="isNumberIdenticElemInAarray">
      <p class="array-methods__text">
        Дан массив целых чисел arrayElems:
        <span class="array-methods__span">{{ arrayElems }} </span> <br />

        <span class="array-methods__span"> найти уникальные элементы</span> <br />
        <span class="array-methods__span-purple">
          let result = [] <br />
          for (let str of this.arrayElems) { <br />
          if (!result.includes(str)) { <br />
          result.push(str) <br />
          } } <br />
          return result <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ uniqueElems }} </span> <br />
        <br />

        <span class="array-methods__span">найти количество уникальных элементов</span> <br />
        <span class="array-methods__span-purple">
          uniqueElemsLength() { <br />
          return this.uniqueElems.length <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ uniqueElemsLength }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Дан массив целых чисел, найдите то число, которое встречается нечетное количество
          раз.</span
        >
        <br />

        имеем arrayElems: <span class="array-methods__span">{{ arrayElems }} </span> <br />
        <span class="array-methods__span-purple">
          getOddOccurrence() { <br />
          for (let i = 0; i &lt; this.arrayElems.length; i++) { <br />
          let count = 0 <br />
          for (let j = 0; j &lt; this.arrayElems.length; j++) { <br />
          if (this.arrayElems[i] == this.arrayElems[j]) count++ <br />
          } <br />
          if (count % 2 != 0) return this.arrayElems[i] <br />
          } <br />
          return -1 <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ getOddOccurrence }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Дан массив целых чисел, найдите то число, которое встречается нечетное количество раз
          (другим способом).
        </span>
        <br />

        имеем arrayElems2: <span class="array-methods__span">{{ arrayElems2 }} </span> <br />
        <span class="array-methods__span-purple">
          getOddOccurrence2() { <br />
          let hmap = new Map() <br />
          <span class="array-methods__span-green">// Складываем все элементы в HashMap</span> <br />
          for (let i = 0; i ? &lt; this.arrayElems2.length; i++) { <br />
          if (hmap.has(this.arrayElems2[i])) { <br />
          let val = hmap.get(this.arrayElems2[i]) <br />
          <span class="array-methods__span-green">
            // Если элемент массива уже присутствует, то</span
          >
          <br />
          <span class="array-methods__span-green"> // увеличить количество этого элемента +1.</span>
          <br />
          hmap.set(this.arrayElems2[i], val + 1) <br />
          } else { <br />
          <span class="array-methods__span-green">
            // если элемент массива отсутствует, поместите
          </span>
          <br />
          <span class="array-methods__span-green">
            // элемент в HashMap и начните счет от одного.</span
          >
          <br />
          hmap.set(this.arrayElems2[i], 1) <br />
          } } <br />

          <span class="array-methods__span-green"
            >// Проверка на нечетное вхождение каждого присутствующего элемента</span
          >
          <br />
          <span class="array-methods__span-green">// в HashMap </span> <br />
          for (let [key, value] of hmap.entries()) { <br />
          if (hmap.get(key) % 2 != 0) return key <br />
          } <br />
          return -1 <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ getOddOccurrence2 }} </span> <br />
        <br />
        NumberIdenticElemInAarray.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberIdenticElemInAarray',

  data() {
    return {
      isNumberIdenticElemInAarray: false,
      arrayElems: [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1],
      arrayElems2: [2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2],
    }
  },
  computed: {
    getOddOccurrence() {
      //
      for (let i = 0; i < this.arrayElems.length; i++) {
        let count = 0
        //
        for (let j = 0; j < this.arrayElems.length; j++) {
          if (this.arrayElems[i] == this.arrayElems[j]) count++
        }
        if (count % 2 != 0) return this.arrayElems[i]
      }
      return -1
    },
    //
    uniqueElems() {
      let result = []
      for (let str of this.arrayElems) {
        if (!result.includes(str)) {
          result.push(str)
        }
      }
      return result
    },
    uniqueElemsLength() {
      return this.uniqueElems.length
    },

    // другой код
    // this.arrayElems2
    //  this.arrayElems2.length
    getOddOccurrence2() {
      let hmap = new Map()

      // Складываем все элементы в HashMap
      for (let i = 0; i < this.arrayElems2.length; i++) {
        if (hmap.has(this.arrayElems2[i])) {
          let val = hmap.get(this.arrayElems2[i])
          // Если элемент массива уже присутствует, то
          // увеличить количество этого элемента +1.
          hmap.set(this.arrayElems2[i], val + 1)
        } else {
          // если элемент массива отсутствует, поместите
          // элемент в HashMap и начните счет от одного.
          hmap.set(this.arrayElems2[i], 1)
        }
      }

      // Проверка на нечетное вхождение каждого присутствующего элемента
      // в HashMap
      for (let [key, value] of hmap.entries()) {
        if (hmap.get(key) % 2 != 0) return key
      }
      return -1
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
