<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isAccessProperty = !isAccessProperty"
      :class="{ 'array-methods__button_active': isAccessProperty }"
    >
      Доступ к свойствам объекта точечным способом
    </button>

    <div v-if="isAccessProperty">
      <p class="array-methods__description">
        <br />

        myCity: { city: 'New York', popular: true, country: 'USA', }

        <br />
        <span class="array-methods__span">Получаем значение свойства объекта</span> <br />
        <span class="array-methods__span-purple">console.log(myCity.city) </span>
        <span class="array-methods__span-green">// New York</span> <br />
        <span class="array-methods__span-purple">console.log(myCity.popular)</span>
        <span class="array-methods__span-green">// {{ myCityPopular }} </span> <br />
        <span class="array-methods__span-purple">console.log(myCity.country)</span>
        <span class="array-methods__span-green">// {{ myCityCountry }}</span> <br />
        <br />

        <span class="array-methods__span">Меняем значение свойства объекта</span> <br />
        <span class="array-methods__span-purple"
          >myCity.city = "Paris" <br />
          console.log(myCity.city)
        </span>
        <span class="array-methods__span-green">// {{ changeMyCity }} </span> <br />
        <br />

        <span class="array-methods__span">Добавляем свойство объекту</span> <br />
        <span class="array-methods__span-purple"
          >myCity.cultural = true <br />
          console.log(myCity)
        </span>
        <span class="array-methods__span-green">// {{ addPropertyCity }} </span> <br />
        <br />

        <span class="array-methods__span"> Удаляем свойства объекта</span> <br />

        имеем
        <span class="array-methods__span">
          myCity2: { city: 'Paris', popular: true, country: 'France', cultural: true, }
        </span>
        <br />
        удаляем (delete) свойство "cultural"
        <span class="array-methods__span-purple"> delete myCity2.cultural</span> <br />
        получаем:
        <span class="array-methods__span-green"> myCity2: {{ myCity2 }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessProperty',

  data() {
    return {
      isAccessProperty: false,
      myCity: {
        city: 'New York',
        popular: true,
        country: 'USA',
      },
      myCity2: {
        city: 'Paris',
        popular: true,
        country: 'France',
        cultural: true,
      },
    }
  },
  computed: {
    myCityCity() {
      return this.myCity.city
    },
    myCityPopular() {
      return this.myCity.popular
    },
    myCityCountry() {
      return this.myCity.country
    },
    changeMyCity() {
      return (this.myCity.city = 'Paris')
    },
    addPropertyCity() {
      this.myCity.cultural = true
      return this.myCity
    },
    deletePropertyCity2() {
      delete this.myCity2.cultural
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
