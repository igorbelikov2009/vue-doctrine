<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isArrUnique = !isArrUnique"
      :class="{ 'array-methods__button_active': isArrUnique }"
    >
      Оставить уникальные элементы
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span">{{ arrStrings2 }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ arrStringsUnique2 }}</span> <br />

      <span class="array-methods__span">{{ arrStrings3 }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ arrStringsUnique3 }}</span> <br />

      <span class="array-methods__span">{{ arrStrings4 }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ arrStringsUnique4 }}</span> <br />
    </p>

    <div v-if="isArrUnique">
      <p class="array-methods__text">
        <span class="array-methods__span"> Оставить уникальные элементы</span> <br />

        имеем <span class="array-methods__span">{{ arrStrings2 }} </span> <br />
        <span class="array-methods__span-purple">
          arrStringsUnique2() { <br />
          return this.arrStrings2 <br />
          .join(', ') <br />
          .split('') <br />
          .filter((item, index, self) => index === self.indexOf(item)) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ arrStringsUnique2 }} </span> <br />
        <br />

        имеем <span class="array-methods__span">{{ arrStrings3 }} </span> <br />
        <span class="array-methods__span-purple"
          >arrStringsUnique3() { <br />
          return this.arrStrings3 <br />
          .join(', ') <br />
          .split('') <br />
          .filter((item, index, self) => index === self.indexOf(item)) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrStringsUnique3 }} </span> <br />
        <br />

        имеем <span class="array-methods__span">{{ arrStrings4 }} </span> <br />
        <span class="array-methods__span-purple">
          arrStringsUnique4() { <br />
          return this.arrStrings4.filter((item, index, self) => index === self.indexOf(item)) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ arrStringsUnique4 }} </span> <br />
        <br />
      </p>
      ArrUnique.vue
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrUnique',

  data() {
    return {
      isArrUnique: false,
      // arrStrings2: ['AAAABBBCCDAABBB'],
      // arrStrings3: ['ABBCcAD'],
      // arrStrings4: [1, 2, 2, 3, 3],
    }
  },
  computed: {
    arrStrings2() {
      return this.$store.state.arrStrings.arrStrings2
    },
    arrStrings3() {
      return this.$store.state.arrStrings.arrStrings3
    },
    arrStrings4() {
      return this.$store.state.arrStrings.arrStrings4
    },
    // arrStringsUnique2() {
    //   return this.arrStrings2
    //     .join(', ')
    //     .split('')
    //     .filter((item, index, self) => index === self.indexOf(item))
    // },
    arrStringsUnique2() {
      return this.$store.getters['arrStrings/arrStringsUnique2']
    },
    // arrStringsUnique3() {
    //   return this.arrStrings3
    //     .join(', ')
    //     .split('')
    //     .filter((item, index, self) => index === self.indexOf(item))
    // },
    arrStringsUnique3() {
      return this.$store.getters['arrStrings/arrStringsUnique3']
    },
    // arrStringsUnique4() {
    //   return this.arrStrings4.filter((item, index, self) => index === self.indexOf(item))
    // },
    arrStringsUnique4() {
      return this.$store.getters['arrStrings/arrStringsUnique4']
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

  // array-methods__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: red;
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
