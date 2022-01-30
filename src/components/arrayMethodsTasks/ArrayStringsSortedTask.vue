<template>
  <div id="arrStringsSorted">
    <button
      class="array-methods__button"
      @click="isArrStrings = !isArrStrings"
      :class="{ 'array-methods__button_active': isArrStrings }"
    >
      Скопировать массив в другой массив. Отсортировать, развернуть последний.
    </button>

    <p class="array-methods__description">
      Скопировать arrStrings в массив arrStringsSorted и отсортировать последний
      <br />
      <span class="array-methods__span">arrStrings: {{ arrStrings }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> arrStringsSorted: {{ arrStringsSorted }}</span>
      <br />
      Потом развернуть в обратный порядок <br />
      <span class="array-methods__span">arrStringsSorted: {{ arrStringsSorted }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">
        arrStringsSortedReverse: {{ arrStringsSortedReverse }}</span
      >
    </p>

    <div v-if="isArrStrings">
      <p class="array-methods__text">
        имеем <span class="array-methods__span">arrStrings: {{ arrStrings }}</span> <br />
        <span class="array-methods__span-purple">
          arrStringsSorted() { <br />
          return this.arrStrings.slice().sort() <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> arrStringsSorted: {{ arrStringsSorted }}</span>
        <br />
        разворачиваем в обратный порядок <br />
        <span class="array-methods__span-purple">
          arrStringsSortedReverse() { <br />
          return this.arrStrings <br />
          .slice() <br />
          .sort() <br />
          .reverse() <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrStringsSortedReverse: {{ arrStringsSortedReverse }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import ArrStringsUniqueTaskVue from './ArrStringsUniqueTask.vue'
export default {
  name: 'ArrayStringsSortedTask',

  data() {
    return {
      isArrStrings: false,
    }
  },
  props: {
    arrStrings: { type: Array },
  },

  computed: {
    arrStringsSorted() {
      return this.arrStrings.slice().sort()
    },
    arrStringsSortedReverse() {
      return this.arrStrings
        .slice()
        .sort()
        .reverse()
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
