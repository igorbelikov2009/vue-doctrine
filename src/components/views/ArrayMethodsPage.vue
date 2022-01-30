<template>
  <section class="array-methods">
    <div id="array-methods">
      <h1 class="array-methods__heading">Методы массивов</h1>

      <h2 class="array-methods__subheading">Преобразование и упорядочения массива</h2>

      <ArrayMethodsMap />

      <ArrayMethodsSort
        :arrSort="arrSort"
        :arrStrings="arrStrings"
        :arrNumber="arrNumber"
        :vasya="vasya"
        :petya="petya"
        :masha="masha"
        :users="users"
        :arrSorted="arrSorted"
        :arrNumberSorted="arrNumberSorted"
        :arrNumberSortedDescending="arrNumberSortedDescending"
        :sortByAge="sortByAge"
        :sortByName="sortByName"
        :sortBySurname="sortBySurname"
        :sortById="sortById"
        :arrStringsSorted="arrStringsSorted"
      />

      <ArrayMethodsReverse />

      <ArrayMethodsSplit />

      <ArrayMethodsJoin />

      <!--  -->
      <span class="array-methods__span"></span>
      <span class="array-methods__span-purple"></span>
      получаем -
      <span class="array-methods__span-green"></span>
      <!--  -->

      <div id="array-methods-xx">
        <button
          class="array-methods__button"
          @click="isButton = !isButton"
          :class="{ 'array-methods__button_active': isButton }"
        >
          xxx
        </button>

        <div v-if="isButton">
          <a target="_blank" href=""></a>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
        </div>
      </div>

      <div id="array-methods-xx">
        <button
          class="array-methods__button"
          @click="isButton = !isButton"
          :class="{ 'array-methods__button_active': isButton }"
        >
          xxx
        </button>

        <div v-if="isButton">
          <a target="_blank" href=""></a>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
          <p class="array-methods__text"></p>
        </div>
      </div>
    </div>

    <div id="array-methods-tasks">
      <h1 class="array-methods__heading">Задачи "Методы массивов"</h1>

      <ToCamelCaseTask />

      <ToTitleCaseTask />

      <FilterRangeTask />

      <FilterRangeInPlaceTask />

      <InputArrayMapedTask />

      <ArrStringsUniqueTask />

      <UsersMappedTask
        :vasya="vasya"
        :petya="petya"
        :masha="masha"
        :users="users"
        :names="names"
        :ages="ages"
        :surnames="surnames"
        :ids="ids"
        :usersMapped="usersMapped"
      />

      <ArrSortTask />

      <ArrayStringsSortedTask :arrStrings="arrStrings" />

      <ArrSortByTask
        :users="users"
        :sortByAge="sortByAge"
        :sortByName="sortByName"
        :sortBySurname="sortBySurname"
        :sortById="sortById"
      />

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>
    </div>

    <!--  -->
    <p class="array-methods__text">
      имеем <span class="array-methods__span"></span> <br />
      <span class="array-methods__span-purple"></span>
      получаем -
      <span class="array-methods__span-green"></span>
    </p>
    <!--  -->

    <!--  -->
    <p class="array-methods__description">
      xxx
      <br />
      <span class="array-methods__span">xxx </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> xxx</span>
    </p>
    <!--  -->
  </section>
</template>

<script>
import ArrayMethodsMap from '@/components/arrayMethods/ArrayMethodsMap.vue'
import ArrayMethodsSort from '@/components/arrayMethods/ArrayMethodsSort.vue'
import ArrayMethodsReverse from '@/components/arrayMethods/ArrayMethodsReverse.vue'
import ArrayMethodsSplit from '@/components/arrayMethods/ArrayMethodsSplit.vue'
import ArrayMethodsJoin from '@/components/arrayMethods/ArrayMethodsJoin.vue'
// tasks
import ToCamelCaseTask from '@/components/arrayMethodsTasks/ToCamelCaseTask.vue'
import ToTitleCaseTask from '@/components/arrayMethodsTasks/ToTitleCaseTask.vue'
import FilterRangeTask from '@/components/arrayMethodsTasks/FilterRangeTask.vue'
import FilterRangeInPlaceTask from '@/components/arrayMethodsTasks/FilterRangeInPlaceTask.vue'
import InputArrayMapedTask from '@/components/arrayMethodsTasks/InputArrayMapedTask.vue'
import ArrStringsUniqueTask from '@/components/arrayMethodsTasks/ArrStringsUniqueTask.vue'
import UsersMappedTask from '@/components/arrayMethodsTasks/UsersMappedTask.vue'
import ArrSortTask from '@/components/arrayMethodsTasks/ArrSortTask.vue'
import ArrayStringsSortedTask from '@/components/arrayMethodsTasks/ArrayStringsSortedTask.vue'
import ArrSortByTask from '@/components/arrayMethodsTasks/ArrSortByTask.vue'

export default {
  name: 'ArrayMethodsPage',

  data() {
    return {
      isButton: false,

      isSortBy: false,

      // isArrSort: false,
      // isarrStrings: false,
      isSortBy: false,

      arrSort: [5, 2, 1, -10, 8],
      arrStrings: ['HTML', 'JavaScript', 'CSS', 'SASS', 'VUE.CLI'],
      arrNumber: [1, 15, 2],
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    }
  },
  computed: {
    users() {
      return [this.vasya, this.petya, this.masha]
    },
    names() {
      return this.users.map(item => item.name)
    },
    ages() {
      return this.users.map(item => item.age)
    },
    surnames() {
      return this.users.map(item => item.surname)
    },
    ids() {
      return this.users.map(item => item.id)
    },
    usersMapped() {
      return this.users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
        age: user.age,
      }))
    },
    arrSorted() {
      // let arrSorted = this.arrSort.sort((a, b) => b - a)
      // так массив arrSort меняем на месте в arrSorted

      // а так массив arrSort копируем в arrSorted и меняем уже arrSorted
      return this.arrSort.slice().sort((a, b) => b - a)
      // метод slice()

      // console.log(arrSorted)
    },
    arrStringsSorted() {
      return this.arrStrings.slice().sort()
    },
    arrNumberSorted() {
      return this.arrNumber.slice().sort((a, b) => a - b)
    },
    arrNumberSortedDescending() {
      return this.arrNumber.slice().sort((a, b) => b - a)
    },
    sortByAge() {
      return this.users.slice().sort((a, b) => (a.age > b.age ? 1 : -1))
      //  без slice() исходный массив измениться на месте
    },
    sortByName() {
      return this.users.slice().sort((a, b) => (a.name > b.name ? 1 : -1))
    },
    sortBySurname() {
      return this.users.slice().sort((a, b) => (a.surname > b.surname ? 1 : -1))
    },
    sortById() {
      return this.users.slice().sort((a, b) => (a.id > b.id ? 1 : -1))
    },
    /*
        .map(item => new Date(item.date).getFullYear())
        .filter((item, index, self) => index === self.indexOf(item))
        .map(item => ({ name: String(item), value: item }));
    */
  },
  components: {
    ArrayMethodsMap,
    ArrayMethodsSort,
    ArrayMethodsReverse,
    ArrayMethodsSplit,
    ArrayMethodsJoin,
    // tasks
    ToCamelCaseTask,
    ToTitleCaseTask,
    FilterRangeTask,
    FilterRangeInPlaceTask,
    InputArrayMapedTask,
    ArrStringsUniqueTask,
    UsersMappedTask,
    ArrSortTask,
    ArrayStringsSortedTask,
    ArrSortByTask,
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  width: calc(100% - 48px);
  // max-width: 1160px;
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
