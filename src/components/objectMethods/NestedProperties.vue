<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isNestedProperties = !isNestedProperties"
      :class="{ 'array-methods__button_active': isNestedProperties }"
    >
      Доступ к вложенным свойствам объекта
    </button>

    <div v-if="isNestedProperties">
      <p class="array-methods__description">
        имеем вложенные свойства "info" в объекте myCity: { <br />
        city: 'New York', <br />
        info: { <br />
        isPopular: true, <br />
        country: 'USA', <br />
        }, <br />
        } <br />

        <span class="array-methods__span"
          >Доступ к вложенным свойствам объекта точечным способом
        </span>
        <br />
        <span class="array-methods__span-purple">console.log(myCity.info.isPopular) </span>
        <span class="array-methods__span-green"> // {{ nestedPropertiesIsPopular }} </span> <br />

        <span class="array-methods__span">Доступ к вложенным свойствам объекта через скобки </span>
        <br />
        <span class="array-methods__span-purple"> console.log(myCity['info']['country']) </span>

        <span class="array-methods__span-green"> // {{ nestedPropertiesCountry }} </span> <br />

        <span class="array-methods__span"
          >Точно так же можно менять - удалять вложенные свойства объекта: через точки, скобки или
          их комбинацию. <br />
          Однако, доступ через скобки считается правильным только тогда, когда в скобках записано
          выражение JavaScript, переменная.
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedProperties',

  data() {
    return {
      isNestedProperties: false,
      myCity: {
        city: 'New York',
        info: {
          isPopular: true,
          country: 'USA',
        },
      },
    }
  },
  computed: {
    nestedPropertiesIsPopular() {
      return this.myCity.info.isPopular
    },
    nestedPropertiesCountry() {
      return this.myCity['info']['country']
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
