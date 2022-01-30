<template>
  <div id="array-methods-reverse">
    <button
      class="array-methods__button"
      @click="isArrayMethodsReverse = !isArrayMethodsReverse"
      :class="{ 'array-methods__button_active': isArrayMethodsReverse }"
    >
      array.reverse
    </button>

    <p class="array-methods__description">
      Метод arr.reverse меняет порядок элементов в arr на обратный.
    </p>

    <div v-if="isArrayMethodsReverse">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse"
        >arr.reverse</a
      >

      <p class="array-methods__text">
        имеем -
        <span class="array-methods__span"> arrayBeforeReverse: {{ arrayBeforeReverse }}</span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-purple">
          arrayAfterReverse() { <br />
          return this.arrayBeforeReverse.reverse() <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">arrayAfterReverse: {{ arrayAfterReverse }} </span>
      </p>

      <p class="array-methods__text">
        Метод возвращает массив arr с изменённым порядком элементов
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayMethodsReverse',

  data() {
    return {
      isArrayMethodsReverse: false,
      arrayBeforeReverse: [1, 2, 3, 4, 5],
    }
  },
  computed: {
    arrayAfterReverse() {
      return this.arrayBeforeReverse.reverse()
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
