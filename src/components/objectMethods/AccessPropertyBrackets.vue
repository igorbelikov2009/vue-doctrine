<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isAccessPropertyBrackets = !isAccessPropertyBrackets"
      :class="{ 'array-methods__button_active': isAccessPropertyBrackets }"
    >
      Доступ к свойствам объекта через квадратные скобки
    </button>

    <div v-if="isAccessPropertyBrackets">
      <p class="array-methods__description">
        myCity: { city: 'New York', country: 'USA', } <br />

        <span class="array-methods__span">Получаем значение свойств объекта</span> <br />

        <span class="array-methods__span-purple">console.log(myCity['city'])</span>

        <span class="array-methods__span-green">// {{ propertyBracketsCity }} </span> <br />

        <span class="array-methods__span-purple">console.log(myCity['country'])</span>

        <span class="array-methods__span-green">// {{ propertyBracketsCountry }} </span> <br />
        <br />

        <span class="array-methods__span"> Добавляем свойства </span>
        <br />

        <span class="array-methods__span-purple">
          myCity['popular'] = true; <br />
          myCity['peopleQty'] = 2000000 <br />
        </span>
        <span class="array-methods__span-green">myCity: {{ propertyPopular }} </span> <br />
        <br />

        <span class="array-methods__span">Меняем свойства </span>
        <br />
        <span class="array-methods__span-purple">myCity['popular'] = false </span> <br />
        <span class="array-methods__span-green">// {{ changeProperty }} </span>
        <br />
        <br />

        <span class="array-methods__span">Удаляем (delete) свойства </span>
        <br />
        <span class="array-methods__span-purple">
          delete myCity['peopleQty']; <br />
          delete myCity['country']</span
        >
        <br />
        <span class="array-methods__span-green">// {{ deleteProperty }} </span> <br />
        <br />

        <span class="array-methods__span-red"
          >С помощью квадратных скобок мы можем добавлять свойства, используя переменные. Через
          переменные можем указать имя и значения.
        </span>
        <br />
        <br />
        имеем myCity: {{ myCity2 }} <br />

        <span class="array-methods__span"> Добавляем свойство 'country' через переменную</span>
        <br />

        <span class="array-methods__span-purple"
          >const countryPropertyName = 'country' <br />
          myCity[countryPropertyName] = 'USA' <br />
        </span>

        получаем:
        <span class="array-methods__span-green">{{ addingProperties }} </span>
      </p>

      <p class="array-methods__text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessPropertyBrackets',

  data() {
    return {
      isAccessPropertyBrackets: false,
      myCity: {
        city: 'New York',
        country: 'USA',
      },
      myCity2: {
        city: 'New York',
        country: 'USA',
        popular: true,
        peopleQty: 2000000,
      },
      myCity3: {
        city: 'Paris',
      },
    }
  },

  computed: {
    propertyPopular() {
      this.myCity['popular'] = true
      this.myCity['peopleQty'] = 2000000
      return this.myCity
    },
    propertyBracketsCity() {
      return this.myCity['city']
    },
    propertyBracketsCountry() {
      return this.myCity['country']
    },
    changeProperty() {
      this.myCity2['popular'] = false
      return this.myCity2
    },
    deleteProperty() {
      delete this.myCity2['peopleQty']
      delete this.myCity2['country']
      return this.myCity2
    },
    addingProperties() {
      const countryPropertyName = 'country'
      this.myCity2[countryPropertyName] = 'USA'
      return this.myCity2
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
