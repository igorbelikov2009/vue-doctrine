<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isConcatenatingArrays = !isConcatenatingArrays"
      :class="{ 'array-methods__button_active': isConcatenatingArrays }"
    >
      склеивание массивов, содержащихся в объектах массива, с использованием оператора расширения и
      initialValue
    </button>

    <p class="array-methods__description">
      Получить список, который будет содержать все книги друзей + дополнительный список указанный в
      initialValue <br />
      <br />
      friends: [ <br />
      { name: 'Anna', books: <span class="array-methods__span">['Bible', 'Harry Potter'] </span>,
      age: 21 }, <br />
      { name: 'Bob', books:
      <span class="array-methods__span">['War and peace', 'Romeo and Juliet'] </span>, age: 26 },
      <br />
      { name: 'Alice', books:
      <span class="array-methods__span">['The Lord of the Rings', 'The Shining'] </span>, age: 18 },
      <br />
      ],
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">{{ friendsBooks }} </span> <br />

      initialValue = <span class="array-methods__span">['Alphabet']</span>
    </p>

    <div v-if="isConcatenatingArrays">
      <p class="array-methods__text">
        <span class="array-methods__span-red">
          склеивание массивов, содержащихся в объектах массива,
        </span>
        с использованием оператора расширения и initialValue
        <br />

        имеем <span class="array-methods__span">friends: {{ friends }} </span> <br />
        // friends - список из объектов(друзей) <br />
        // где поле "books" - список любимых книг друга <br />
        <br />

        <span class="array-methods__span">
          Получить список, который будет содержать все книги друзей friendsBooks: список +
          дополнительный список указанный в initialValue
        </span>
        <br />
        <span class="array-methods__span-purple">
          friendsBooks() { <br />
          var allbooks = this.friends.reduce( <br />
          function(prev, curr) { <br />
          return [...prev, ...curr.books] <br />
          }, <br />
          ['Alphabet'] <br />
          ) <br />
          return allbooks <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ friendsBooks }} </span> <br />
        <br />

        <span class="array-methods__span"> Стрелочные функции </span>
        <br />
        <span class="array-methods__span-purple"
          >friendsBooksArrow() { <br />
          return this.friends.reduce((a, b) => [...a, ...b.books], ['Alphabet']) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ friendsBooksArrow }} </span>
        <br />
        <br />
        ConcatenatingArrays.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcatenatingArrays',

  data() {
    return {
      isConcatenatingArrays: false,
      friends: [
        { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
        { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
        { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 },
      ],
    }
  },
  computed: {
    friendsBooks() {
      var allbooks = this.friends.reduce(
        function(prev, curr) {
          return [...prev, ...curr.books]
        },
        ['Alphabet']
      )
      return allbooks
    },
    // Тоже самое, но со стрелочной функцией:
    friendsBooksArrow() {
      return this.friends.reduce((a, b) => [...a, ...b.books], ['Alphabet'])
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
