<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isUseOfVariables = !isUseOfVariables"
      :class="{ 'array-methods__button_active': isUseOfVariables }"
    >
      Использование переменных в объекте
    </button>

    <div v-if="isUseOfVariables">
      <p class="array-methods__description">
        <span class="array-methods__span">Имеем переменные </span> <br />
        <span class="array-methods__span-purple">const name = 'Bogdan' </span> <br />
        <span class="array-methods__span-purple">const postsQty = 23 </span> <br />
        <span class="array-methods__span"
          >Необходимо создать объект используя данные переменные
        </span>
        <br />
        <span class="array-methods__span-purple"
          >const usersProfile = { <br />
          name: name, <br />
          postsQty: postsQty, <br />
          hasSignedAgreement: false }
        </span>
        <br />

        получаем: <span class="array-methods__span-green">usersProfile: {{ usersProfile }} </span>
        <br />
        <br />

        <span class="array-methods__span-red">Сокращённый формат записи свойств объекта </span>
        <br />
        Если названия свойства и значения совпадают, как в нашем случае:
        <span class="array-methods__span-green">
          <br />
          name: name,
          <br />
          postsQty: postsQty, <br />
        </span>
        <br />
        записать свойства объекта можно в сокращённом виде

        <br />
        <span class="array-methods__span-purple"
          >const usersProfile = { <br />
          name, <br />
          postsQty, <br />hasSignedAgreement: false }
        </span>
        <br />
        сокращённые свойства объекта, для читабельности, пишут в верху объекта
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UseOfVariables',

  data() {
    return {
      isUseOfVariables: false,
      name: 'Bogdan',
      postsQty: 23,
    }
  },
  computed: {
    usersProfile() {
      // создаём объект "usersProfile"
      return { name: this.name, postsQty: this.postsQty, hasSignedAgreement: false }
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
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
