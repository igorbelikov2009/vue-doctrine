<template>
  <div id="toTitleCase">
    <button
      class="array-methods__button"
      @click="isToTitleCase = !isToTitleCase"
      :class="{ 'array-methods__button_active': isToTitleCase }"
    >
      Первые буквы текста перевести в верхний регистр (toTitleCase).
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">hoW cAn mirRors bEreAl if oUr eyEs areN </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> How Can Mirrors Bereal If Our Eyes Aren</span>
    </p>

    <div v-if="isToTitleCase">
      <p class="array-methods__text">
        имеем <span class="array-methods__span">textForTitleCase: {{ textForTitleCase }}</span>
        <br />
        <span class="array-methods__span-purple">
          toTitleCase() { <br />
          return this.textForTitleCase <br />
          .toLowerCase() <br />
          .split(' ') <br />
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) <br />
          .join(' ') <br />
          // word.charAt(0) = word[0] <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">"toTitleCase": {{ toTitleCase }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToTitleCaseTask',

  data() {
    return {
      isToTitleCase: false,
      textForTitleCase: 'hoW cAn mirRors bEreAl if oUr eyEs areN',
    }
  },
  computed: {
    toTitleCase() {
      return this.textForTitleCase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      // word.charAt(0) = word[0]
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
