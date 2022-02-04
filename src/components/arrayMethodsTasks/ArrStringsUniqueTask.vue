<template>
  <div id="arrStringsUnique">
    <button
      class="array-methods__button"
      @click="isArrStringsUnique = !isArrStringsUnique"
      :class="{ 'array-methods__button_active': isArrStringsUnique }"
    >
      Оставить уникальные элементы массива arrStringsUnique
    </button>

    <p class="array-methods__description">
      Оставить уникальные элементы массива arrStringsUnique
      <br />
      <span class="array-methods__span">arrStrings: {{ arrStrings }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> arrStringsUnique: {{ arrStringsUnique }}</span>
    </p>

    <div v-if="isArrStringsUnique">
      имеем <span class="array-methods__span">arrStrings: {{ arrStrings }} </span> <br />
      <span class="array-methods__span-purple">
        arrStringsUnique() { <br />
        let result = [] <br />
        <br />
        for (let str of this.arrStrings) { <br />
        if (!result.includes(str)) { <br />
        result.push(str) <br />
        } <br />
        } <br />
        <br />
        return result <br />
        }
      </span>
      получаем -
      <span class="array-methods__span-green">arrStringsUnique: {{ arrStringsUnique }} </span>
      <br />
      <br />
      ArrStringsUniqueTask.vue
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrStringsUniqueTask',

  data() {
    return {
      isArrStringsUnique: false,
      arrStrings: ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'],
    }
  },
  computed: {
    arrStringsUnique() {
      let result = []

      for (let str of this.arrStrings) {
        if (!result.includes(str)) {
          result.push(str)
        }
      }

      return result
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
