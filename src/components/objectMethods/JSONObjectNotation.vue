<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isJSONObjectNotation = !isJSONObjectNotation"
      :class="{ 'array-methods__button_active': isJSONObjectNotation }"
    >
      JSON, конвертация
    </button>

    <div v-if="isJSONObjectNotation">
      <p class="array-methods__text">
        <span class="array-methods__span">
          Конвертация JSON в объект JavaScript. <br />
          JSON.stringify(JSON)
        </span>
      </p>

      <p class="array-methods__text">
        имеем объект JavaScript:
        <span class="array-methods__span"> post: {{ post }}</span>
        <br />
        конвертируем в JSON:
        <span class="array-methods__span-purple">const stringifyPost = JSON.stringify(post)</span>
        <br />
        получаем stringifyPost:
        <span class="array-methods__span-green">{{ stringifyPost }}</span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Конвертация объекта JavaScript в JSON. <br />
          JSON.parse(objectJS)
        </span>
      </p>

      <p class="array-methods__text">
        имеем JSON stringifyPost:<span class="array-methods__span">{{ stringifyPost }}</span> <br />
        конвертируем в объект JavaScript:
        <span class="array-methods__span-purple">const parsePost = JSON.parse(stringifyPost)</span>
        <br />
        получаем parsePost:
        <span class="array-methods__span-green"> {{ parsePost }} </span> <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JSONObjectNotation',

  data() {
    return {
      isJSONObjectNotation: false,
      post: { userId: 1, id: 1, title: 'Test title', status: { completed: false } },
    }
  },

  computed: {
    stringifyPost() {
      return JSON.stringify(this.post)
    },
    parsePost() {
      return JSON.parse(this.stringifyPost)
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  // array-methods__subheading
  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  // array-methods__button
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
