<template>
  <div id="toCamelCase">
    <button
      class="array-methods__button"
      @click="isToCamelCase = !isToCamelCase"
      :class="{ 'array-methods__button_active': isToCamelCase }"
    >
      Переведите текст в toCamelCase
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">border-left-width </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> borderLeftWidth</span>
    </p>

    <div v-if="isToCamelCase">
      <p class="array-methods__text">
        имеем
        <span class="array-methods__span">textForCamelCase: {{ textForCamelCase }}</span>
        <br />
        <span class="array-methods__span-purple">
          toCamelCase() { <br />
          return this.textForCamelCase <br />
          .split('-') <br />
          .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1))) <br />
          .join('') <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">"toCamelCase": {{ toCamelCase }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToCamelCaseTask',

  data() {
    return {
      isToCamelCase: false,
      textForCamelCase: 'border-left-width',
    }
  },
  computed: {
    toCamelCase() {
      return this.textForCamelCase
        .split('-')
        .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join('')
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
