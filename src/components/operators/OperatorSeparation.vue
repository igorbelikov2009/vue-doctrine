<template>
  <!--  -->
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isOperatorSeparation = !isOperatorSeparation"
      :class="{ 'array-methods__button_active': isOperatorSeparation }"
    >
      Оператор ... разделения объекта на свойства
    </button>

    <div v-if="isOperatorSeparation">
      <p class="array-methods__description">
        <span class="array-methods__span"> Добавляем свойство color: 'red'</span> <br />
        <br />
        имеем <span class="array-methods__span">button: { width: 200, text: 'Buy', } </span> <br />

        <span class="array-methods__span-purple">
          redButton() { <br />
          const colorButton = { <br />
          ...this.button, <br />
          color: 'red', <br />
          } <br />
          console.table(colorButton)
          <span class="array-methods__span-green"> // смотри в консоль</span> <br />
          return colorButton <br />
          }
        </span>
        <br />
        получаем: <span class="array-methods__span-green"> redButton: {{ redButton }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Необходимо поменять значение свойства color: 'red' на color: 'black'
        </span>
        <br />
        <br />

        имеем <span class="array-methods__span">redButton: {{ redButton }}</span> <br />

        <span class="array-methods__span-purple">
          blackButton() { <br />
          const colorButton = { <br />
          ...this.redButton, <br />
          color: 'black', <br />
          } <br />
          return colorButton <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">blackButton: {{ blackButton }} </span>
      </p>

      <!--  -->
      <p class="array-methods__text">
        <span class="array-methods__span"> Не правильная запись</span> <br />
        <br />
        имеем <span class="array-methods__span">redButton: {{ redButton }}</span> <br />

        <span class="array-methods__span-purple">
          notRight() { <br />
          const colorButton = { <br />
          color: 'black', <br />
          ...this.redButton, <br />
          } <br />
          return colorButton <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">notRight: {{ notRight }} </span> <br />
        свойство не поменялось: сначала надо разделить объект на свойства
      </p>

      <!--  -->
      <p class="array-methods__text">
        <span class="array-methods__span">Объединение объектов с помощью ...</span> <br />
        <br />

        имеем <span class="array-methods__span">buttonInfo: { text: 'Buy', }</span> <br />
        и
        <span class="array-methods__span"
          >buttonStyle: { color: 'yellow', width: 200, height: 300, }</span
        >
        <br />

        <span class="array-methods__span-purple"
          >buttonInfoStyle() { <br />
          const colorButton = { <br />
          ...this.buttonInfo, <br />
          ...this.buttonStyle, <br />
          } <br />
          return colorButton <br />
          }</span
        >
        <br />
        получаем:
        <span class="array-methods__span-green">buttonInfoStyle: {{ buttonInfoStyle }} </span>
      </p>

      <!--  -->

      <p class="array-methods__text">
        <span class="array-methods__span">Контантенация шаблонных строк</span> <br />
        <br />

        имеем <span class="array-methods__span"> myName: 'Игорь', myCity: 'Москва',</span> <br />
        <span class="array-methods__span-purple"
          >whereILive() { <br />
          const words = `Меня зовут ${this.myName}. Я живу в городе ${this.myCity}` <br />
          return words <br />
          }</span
        >
        <br />
        получаем:
        <span class="array-methods__span-green"> {{ whereILive }} </span>
      </p>

      <!--  -->

      <p class="array-methods__text">
        <span class="array-methods__span"> сделать что-то</span> <br />
        <br />

        имеем <span class="array-methods__span"></span> <br />
        <span class="array-methods__span-purple"></span>
        получаем:
        <span class="array-methods__span-green"></span>
      </p>

      <p class="array-methods__text"></p>
      <p class="array-methods__text"></p>
      <p class="array-methods__text"></p>
      <p class="array-methods__text"></p>
    </div>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: 'OperatorSeparation',

  data() {
    return {
      isOperatorSeparation: false,
      button: {
        width: 200,
        text: 'Buy',
      },
      buttonInfo: {
        text: 'Buy',
      },
      buttonStyle: {
        color: 'yellow',
        width: 200,
        height: 300,
      },
      myName: 'Игорь',
      myCity: 'Москва',
    }
  },

  computed: {
    redButton() {
      const colorButton = {
        ...this.button,
        color: 'red',
      }
      console.table(colorButton)
      return colorButton
    },
    blackButton() {
      const colorButton = {
        ...this.redButton,
        color: 'black',
      }
      return colorButton
    },
    notRight() {
      const colorButton = {
        color: 'black',
        ...this.redButton,
      }
      return colorButton
    },
    buttonInfoStyle() {
      const colorButton = {
        ...this.buttonInfo,
        ...this.buttonStyle,
      }
      return colorButton
    },
    whereILive() {
      const words = `Меня зовут ${this.myName}. Я живу в городе ${this.myCity}`
      return words
    },
  },
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
