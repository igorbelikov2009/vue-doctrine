<template>
  <div id="sortBy">
    <button
      class="array-methods__button"
      @click="isSortBy = !isSortBy"
      :class="{ 'array-methods__button_active': isSortBy }"
    >
      Имеем массив пользователей users. Создать новые массивы и отсортировать их по возрасту, имени,
      отчеству, id.
    </button>

    <p class="array-methods__description">
      <br />
      <span class="array-methods__span">users: {{ users }} </span> <br />
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> sortByAge, sortByName, sortBySurname, sortById</span>
    </p>

    <div v-if="isSortBy">
      <!-- <p class="array-methods__text">
        <span class="array-methods__span"> массив имён </span>users: {{ users }}
      </p> -->

      <p class="array-methods__text">
        Сортировать по <span class="array-methods__span"> возрасту</span> <br />
        <span class="array-methods__span-purple">
          sortByAge() { <br />
          return this.users.slice().sort((a, b) => (a.age > b.age ? 1 : -1)) <br />
          <span class="array-methods__span-green">
            // без slice() исходный массив изменится на месте
          </span>
          <br />
          }
        </span>
        получаем - <span class="array-methods__span-green"> sortByAge: {{ sortByAge }}</span>
      </p>

      <p class="array-methods__text">
        Сортировать по <span class="array-methods__span"> имени</span> <br />
        <span class="array-methods__span-purple">
          sortByName() { <br />
          return this.users.slice().sort((a, b) => (a.name > b.name ? 1 : -1)) <br />
          }
        </span>
        получаем - <span class="array-methods__span-green"> sortByName: {{ sortByName }} </span>
      </p>

      <p class="array-methods__text">
        Сортировать по <span class="array-methods__span"> отчеству</span> <br />
        <span class="array-methods__span-purple">
          sortBySurname() { <br />
          return this.users.slice().sort((a, b) => (a.surname > b.surname ? 1 : -1)) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> sortBySurname: {{ sortBySurname }} </span>
      </p>

      <p class="array-methods__text">
        Сортировать по <span class="array-methods__span"> id</span> <br />
        <span class="array-methods__span-purple">
          sortById() { <br />
          return this.users.slice().sort((a, b) => (a.id > b.id ? 1 : -1)) <br />
          }
        </span>
        получаем - <span class="array-methods__span-green"> sortById: {{ sortById }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrSortByTask',

  data() {
    return {
      isSortBy: false,
    }
  },
  props: {
    users: { type: Array },
    sortByAge: { type: Array },
    sortByName: { type: Array },
    sortBySurname: { type: Array },
    sortById: { type: Array },
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

  // array-methods__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
