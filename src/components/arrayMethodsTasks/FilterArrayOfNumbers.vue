<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isFilterArrayOfNumbers = !isFilterArrayOfNumbers"
      :class="{ 'array-methods__button_active': isFilterArrayOfNumbers }"
    >
      Отфильтровать массив, оставить только цифры
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">{{ filterList }}</span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">{{ filterListNumber }} </span>
    </p>

    <div v-if="isFilterArrayOfNumbers">
      <p class="array-methods__text">
        <span class="array-methods__span"> Отфильтровать массив, оставить только цифры</span> <br />

        имеем <span class="array-methods__span">{{ filterList }} </span> <br />
        <span class="array-methods__span-purple">
          filterListNumber() { <br />
          let listNumber = [] <br />
          for (let i = 0; i &lt; this.filterList.length; i++) { <br />
          let val = this.filterList[i] <br />
          if (typeof val === 'number') { <br />
          listNumber.push(val) <br />
          } } <br />
          return listNumber <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ filterListNumber }}</span> <br />
        <br />
        FilterArrayOfNumbers.vue <br />
        <!-- sortedByIncrease: {{ sortedByIncrease }} -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterArrayOfNumbers',

  data() {
    return {
      isFilterArrayOfNumbers: false,
      // filterList: [1, 2, 3, 4, 'a', 'b', 'c', 'd'],
    }
  },
  props: {
    filterList: { type: Array },
  },
  computed: {
    //
    // filterListNumber() {
    //   let listNumber = []
    //   for (let i = 0; i < this.filterList.length; i++) {
    //     let val = this.filterList[i]

    //     if (typeof val === 'number') {
    //       listNumber.push(val)
    //     }
    //   }
    //   return listNumber
    // },
    filterListNumber() {
      return this.$store.getters['filterList/filterListNumber']
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
