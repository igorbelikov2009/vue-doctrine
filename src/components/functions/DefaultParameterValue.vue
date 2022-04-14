<template>
  <!--  -->
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isButton = !isButton"
      :class="{ 'array-methods__button_active': isButton }"
    >
      Значение параметров функции по умолчанию
    </button>

    <div v-if="isButton">
      <p class="array-methods__description">
        <span class="array-methods__span">Пример 1</span> <br />

        имеем <span class="array-methods__span">number1: 10, number2: 5</span> <br />
        methods: { <br />
        <span class="array-methods__span-purple">
          multByFactor(value, multiplier = 1) { <br />
          return value * multiplier <br />
          },</span
        >
        }
        <br />
        computed: { <br />
        <span class="array-methods__span-purple">
          multByFactorNumber1() {<br />
          return this.multByFactor(this.number1)<br />
          },</span
        >
        } получаем:
        <span class="array-methods__span-green">{{ multByFactorNumber1 }}</span> <br />
        <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >multByFactorNumber2() { <br />
          return this.multByFactor(this.number2) <br />
          },</span
        >
        } получаем:

        <span class="array-methods__span-green">{{ multByFactorNumber2 }}</span> <br />
        <br />
      </p>

      <!--  -->
      <p class="array-methods__text">
        <span class="array-methods__span">Пример 2</span> <br />

        имеем <span class="array-methods__span">firstPost: {{ firstPost }}</span>
        <br />
        methods: { <br />
        <span class="array-methods__span-purple"
          >newPosted(post, addedAt = Date()) { <br />
          const newPost = { <br />
          ...post, <br />
          addedAt, <br />
          } <br />
          return newPost <br />
          }</span
        >
        } <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          computedFirstPost() { <br />
          return this.newPosted(this.firstPost) <br />
          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">computedFirstPost: {{ computedFirstPost }} </span>
        <br />
        <br />
        получить настоящую дату (сюеминутную) <br />
        <span class="array-methods__span-purple">addedAt() { return Date() } </span>
        <br />
        получаем:
        <span class="array-methods__span-green">addedAt: {{ addedAt }}</span> <br />
        <br />
      </p>
    </div>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: 'DefaultParameterValue',

  data() {
    return {
      isButton: false,
      number1: 10,
      number2: 5,
      firstPost: {
        id: 1,
        author: 'Bogdan',
      },
    }
  },
  computed: {
    multByFactorNumber1() {
      return this.multByFactor(this.number1)
    },
    multByFactorNumber2() {
      return this.multByFactor(this.number2)
    },
    computedFirstPost() {
      return this.newPosted(this.firstPost)
    },
    addedAt() {
      return Date()
    },
  },
  methods: {
    multByFactor(value, multiplier = 1) {
      return value * multiplier
    },

    newPosted(post, addedAt = Date()) {
      const newPost = {
        ...post,
        addedAt,
        // addedAt: addedAt, можно и так
      }
      return newPost
    },
  },

  //   post
}
</script>

<style lang="scss" scoped>
.array-methods {
  width: calc(100% - 48px);

  margin: 0 auto;
  margin-top: 76px;
  padding: 24px;

  @media screen and (min-width: 576px) {
    width: calc(100% - 56px);
    padding: 24px 28px;
  }

  &__heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: black;
    margin-bottom: 24px;
  }

  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

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
    cursor: pointer;
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
