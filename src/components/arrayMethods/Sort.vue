<template>
  <div id="array-methods-sort">
    <button
      class="array-methods__button"
      @click="isSort = !isSort"
      :class="{ 'array-methods__button_active': isSort }"
    >
      array.sort(fn)
    </button>

    <p class="array-methods__description">
      Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.
    </p>

    <div v-if="isSort">
      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
        >arr.sort()</a
      >

      <p class="array-methods__text">
        По умолчанию элементы сортируются как
        <span class="array-methods__span"> строки. <br /></span
        ><span class="array-methods__span">
          Скопировать arrStrings в массив arrStringsSorted и отсортировать последний</span
        >
        <br />
        исходник - <span class="array-methods__span"> arrStrings: {{ arrStrings }}</span> <br />

        <span class="array-methods__span-purple">
          arrStringsSorted() { <br />
          return this.arrStrings.slice().sort() <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">arrStringsSorted: {{ arrStringsSorted }}</span>
        <br />
        <span class="array-methods__span-green">
          // метод slice() копирует arrStrings в arrStringsSorted и сортируем (меняем) уже
          arrStringsSorted. Без метода slice() изменится исходный массив arrStrings.
        </span>
      </p>

      <p class="array-methods__text">
        Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в
        качестве аргумента
        <span class="array-methods__span"> arr.sort().</span>
        Функция должна для пары значений возвращать:
        <br />
        <span class="array-methods__span-purple">
          function compare(a, b) { <br />
          if (a > b) return 1; // если первое значение больше второго <br />
          if (a == b) return 0; // если равны <br />
          if (a меньше b) return -1; // если первое значение меньше второго <br />
          }</span
        >
      </p>

      <p class="array-methods__text">
        На самом деле от функции сравнения требуется
        <span class="array-methods__span">
          любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать
          «меньше».</span
        >
        Это позволяет писать более короткие функции: <br />
        <span class="array-methods__span">arrNumber: {{ arrNumber }} ; </span> <br />
      </p>

      <p class="array-methods__text">
        Сортировать по увеличению <br />
        <span class="array-methods__span-purple">
          arrNumberSorted() { <br />
          return this.arrNumber.slice().sort((a, b) => a - b) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> arrNumberSorted: {{ arrNumberSorted }} </span>
        <br />
      </p>

      <p class="array-methods__text">
        Сортировать по убыванию <br />
        <span class="array-methods__span-purple">
          arrNumberSortedDescending() { <br />
          return this.arrNumber.slice().sort((a, b) => b - a) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"
          >arrNumberSortedDescending: {{ arrNumberSortedDescending }}
        </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"> Лучше использовать стрелочные функции <br /> </span>
        <span class="array-methods__span-purple"> arr.sort( (a, b) => a - b );</span> <br />
        <span class="array-methods__span">
          Скопировать arrSort в массив arrSorted и отсортировать последний. Сортировать в порядке по
          убыванию [5, 2, 1, -10, 8] arrSort</span
        >
        <span class="array-methods__span"> arrSort: {{ arrSort }} </span> <br />
        <span class="array-methods__span-purple">
          arrSorted() { <br />
          return this.arrSort.slice().sort((a, b) => b - a) <br />
          },
        </span>
        получаем - <span class="array-methods__span-green"> arrSorted: {{ arrSorted }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Имеем массив пользователей users. Создать новые массивы и отсортировать их по возрасту,
          имени, отчеству, их id. (sortByAge, sortByName, sortBySurname, sortById)</span
        >
        <span class="array-methods__span"> массив имён </span>users: {{ users }} <br />
      </p>

      <p class="array-methods__text">
        Сортировать по возрасту
        <span class="array-methods__span-purple">
          sortByAge() { <br />
          return this.users.slice().sort((a, b) => (a.age > b.age ? 1 : -1)) <br />

          }
        </span>
        получаем - <span class="array-methods__span-green">sortByAge: {{ sortByAge }}</span>
        <span class="array-methods__span-green">
          // без slice() исходный массив изменится на месте
        </span>
      </p>

      <p class="array-methods__text">
        Сортировать по именю
        <span class="array-methods__span-purple">
          sortByName() { <br />
          return this.users.slice().sort((a, b) => (a.name > b.name ? 1 : -1)) <br />
          }
        </span>

        получаем - <span class="array-methods__span-green"> sortByName: {{ sortByName }} </span>
      </p>

      <p class="array-methods__text">
        Сортировать по отчеству
        <span class="array-methods__span-purple">
          sortBySurname() { <br />
          return this.users.slice().sort((a, b) => (a.surname > b.surname ? 1 : -1)) <br />
          }
        </span>
        получаем - sortBySurname:
        <span class="array-methods__span-green"> {{ sortBySurname }}</span>
      </p>

      <p class="array-methods__text">
        Сортировать по id
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
  name: 'Sort',

  data() {
    return {
      isSort: false,
      // arrSort: [5, 2, 1, -10, 8],
      // arrStrings: ['HTML', 'JavaScript', 'CSS'],
      // arrNumber: [1, 15, 2],
      // vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      // petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      // masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    }
  },
  props: {
    arrSort: { type: Array },
    arrStrings: { type: Array },
    arrNumber: { type: Array },
    vasya: { type: Object },
    petya: { type: Object },
    masha: { type: Object },
    users: { type: Array },
    arrSorted: { type: Array },
    arrStringsSorted: { type: Array },
    arrNumberSorted: { type: Array },
    arrNumberSortedDescending: { type: Array },
    sortByAge: { type: Array },
    sortByName: { type: Array },
    sortBySurname: { type: Array },
    sortById: { type: Array },
  },
  // computed: {
  //   users() {
  //     return [this.vasya, this.petya, this.masha]
  //   },
  //   arrSorted() {
  //     // let arrSorted = this.arrSort.sort((a, b) => b - a)
  //     // так массив arrSort меняем на месте в arrSorted

  //     // а так массив arrSort копируем в arrSorted и меняем уже arrSorted
  //     return this.arrSort.slice().sort((a, b) => b - a)
  //     // метод slice()

  //     // console.log(arrSorted)
  //   },
  //   arrStringsSorted() {
  //     return this.arrStrings.slice().sort()
  //   },
  //   arrNumberSorted() {
  //     return this.arrNumber.slice().sort((a, b) => a - b)
  //   },
  //   arrNumberSortedDescending() {
  //     return this.arrNumber.slice().sort((a, b) => b - a)
  //   },

  //   sortByAge() {
  //     return this.users.slice().sort((a, b) => (a.age > b.age ? 1 : -1))
  //     //  без slice() исходный массив измениться на месте
  //   },
  //   sortByName() {
  //     return this.users.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
  //   },
  //   sortBySurname() {
  //     return this.users.slice().sort((a, b) => (a.surname > b.surname ? 1 : -1))
  //   },
  //   sortById() {
  //     return this.users.slice().sort((a, b) => (a.id > b.id ? 1 : -1))
  //   },
  // },
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
