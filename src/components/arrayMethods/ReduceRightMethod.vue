<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isReduceRightMethod = !isReduceRightMethod"
      :class="{ 'array-methods__button_active': isReduceRightMethod }"
    >
      array.reduceRight()
    </button>

    <p class="array-methods__description">
      Метод arr.reduceRight работает аналогично reduce(), но проходит по массиву справа налево.
      <br />
      Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива
      (справа-налево), сводя его к одному значению.
    </p>

    <div v-if="isReduceRightMethod">
      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight"
        >array.reduceRight()
      </a>

      <p class="array-methods__text">
        <span class="array-methods__span">Разворачивание массива массивов справа налево</span>
        <br />

        имеем <span class="array-methods__span">flattened: {{ flattened }} </span> <br />
        <span class="array-methods__span-purple"
          >flattenedDeployedRight() { <br />
          return this.flattened.reduceRight((a, b) => a.concat(b)) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ flattenedDeployedRight }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReduceRightMethod',

  data() {
    return {
      isReduceRightMethod: false,
      flattened: [
        [0, 1],
        [2, 3],
        [4, 5],
      ],
    }
  },

  computed: {
    flattenedDeployedRight() {
      return this.flattened.reduceRight((a, b) => a.concat(b))
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
