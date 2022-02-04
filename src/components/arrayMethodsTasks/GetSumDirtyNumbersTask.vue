<template>
  <div id="getSumDirtyNumbersTask">
    <button
      class="array-methods__button"
      @click="isGetSumDirtyNumbersTask = !isGetSumDirtyNumbersTask"
      :class="{ 'array-methods__button_active': isGetSumDirtyNumbersTask }"
    >
      получить сумму грязных чисел
    </button>

    <p class="array-methods__description">
      GetSumDirtyNumbersTask.vue <br />
      <span class="array-methods__span"> {{ dirtyNumbers }}</span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">{{ sumDirtyNumbers }} </span>
    </p>

    <div v-if="isGetSumDirtyNumbersTask">
      <p class="array-methods__text">
        <!-- <span class="array-methods__span"> сделать что-то</span> <br /> -->

        имеем <span class="array-methods__span">dirtyNumbers: {{ dirtyNumbers }} </span> <br />
        <span class="array-methods__span-purple">
          sumDirtyNumbers() { <br />
          return this.dirtyNumbers <br />
          .split('^') <br />
          .map(function(item) { <br />
          return Number(item) <br />
          }) <br />
          .reduce((a, b) => a + b) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ sumDirtyNumbers }} </span> <br />
        <br />
        GetSumDirtyNumbersTask.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetSumDirtyNumbersTask',

  data() {
    return {
      isGetSumDirtyNumbersTask: false,
      dirtyNumbers: '11^23^145^3^123^33',
    }
  },
  computed: {
    sumDirtyNumbers() {
      return this.dirtyNumbers
        .split('^')
        .map(function(item) {
          return Number(item)
        })
        .reduce((a, b) => a + b)
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
