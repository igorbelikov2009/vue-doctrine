<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isCreateArray = !isCreateArray"
      :class="{ 'array-methods__button_active': isCreateArray }"
    >
      Создать массив возраста из массива объектов пользователей, вычислить общий и средний возраст
      пользователей, округлить число до второго знака после запятой.
    </button>

    <p class="array-methods__description">
      <span class="array-methods__span"> {{ users }} </span> <br />
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> {{ usersAge }}</span> <br />

      <span class="array-methods__span-purple"> => [ 25 + 30 + 28 ] </span>
      <span class="array-methods__span-green"> = {{ usersAgeSum }}</span> <br />

      <span class="array-methods__span-purple"> => 83/3 </span>
      <span class="array-methods__span-green"> = {{ usersAgeAverage }} </span> <br />

      <span class="array-methods__span-purple"> => 27.666666666666668 </span>
      <span class="array-methods__span-green"> = {{ usersAgeAverageToFixed }} </span> <br />
    </p>

    <div v-if="isCreateArray">
      <p class="array-methods__text">
        <span class="array-methods__span">
          Создать массив возраста из массива объектов пользователей.</span
        >
        <br />

        имеем <span class="array-methods__span">{{ users }}</span> <br />
        <span class="array-methods__span-purple">
          usersAge() { <br />
          return this.users.map(item => item.age) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersAge }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Создать массив возраста из массива объектов пользователей, вычислить общий возраст.</span
        >
        <br />

        имеем <span class="array-methods__span">{{ users }}</span> <br />
        <span class="array-methods__span-purple">
          usersAgeSum() { <br />
          return this.users.map(item => item.age).reduce((a, b) => a + b) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersAgeSum }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Создать массив возраста из массива объектов пользователей, вычислить средний возраст
          пользователей.</span
        >
        <br />

        имеем <span class="array-methods__span">{{ users }}</span> <br />
        <span class="array-methods__span-purple">
          usersAgeAverage() { <br />
          return this.users.map(item => item.age).reduce((a, b) => a + b) / this.users.length <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersAgeAverage }} </span> <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">
          Создать массив возраста из массива объектов пользователей, вычислить общий и средний
          возраст пользователей, округлить число до второго знака после запятой.</span
        >
        <br />

        имеем <span class="array-methods__span">{{ users }}</span> <br />
        <span class="array-methods__span-purple">
          usersAgeAverageToFixed() { <br />
          return (this.users.map(item => item.age).reduce((a, b) => a + b) /
          this.users.length).toFixed( <br />
          2 <br />
          ) }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersAgeAverageToFixed }} </span> <br />
        <br />
      </p>

      CreateArrayFromArrayOfObjects.vue
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateArrayFromArrayOfObjects',

  data() {
    return {
      isCreateArray: false,
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    }
  },
  computed: {
    users() {
      return [this.vasya, this.petya, this.masha]
    },
    usersAge() {
      return this.users.map(item => item.age)
    },
    usersAgeSum() {
      return this.users.map(item => item.age).reduce((a, b) => a + b)
    },
    usersAgeAverage() {
      return this.users.map(item => item.age).reduce((a, b) => a + b) / this.users.length
    },
    usersAgeAverageToFixed() {
      return (this.users.map(item => item.age).reduce((a, b) => a + b) / this.users.length).toFixed(
        2
      )
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
    color: #c328c3;
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
