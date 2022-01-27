<template>
  <section class="array-methods">
    <div id="array-methods">
      <h1 class="array-methods__heading">Методы массивов</h1>

      <div id="array-methods-sort">
        <button
          class="array-methods__button"
          @click="isArrayMethodsSort = !isArrayMethodsSort"
          :class="{ 'array-methods__button_active': isArrayMethodsSort }"
        >
          sort(fn)
        </button>

        <div v-if="isArrayMethodsSort">
          <a
            class="array-methods__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
            >arr.sort()</a
          >

          <p class="array-methods__text">
            Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов. По умолчанию
            элементы сортируются как строки. Чтобы использовать наш собственный порядок сортировки,
            нам нужно предоставить функцию в качестве аргумента arr.sort() Функция должна для пары
            значений возвращать:
            <br />

            function compare(a, b) { <br />
            if (a > b) return 1; // если первое значение больше второго <br />
            if (a == b) return 0; // если равны <br />
            if (a меньше b) return -1; // если первое значение меньше второго <br />
            }
          </p>

          <p class="array-methods__text">
            На самом деле от функции сравнения требуется любое положительное число, чтобы сказать
            «больше», и отрицательное число, чтобы сказать «меньше». Это позволяет писать более
            короткие функции: <br />
            let arr = [ 1, 2, 15 ]; <br />
            arr.sort(function(a, b) { return a - b; }); <br />
            <span class="array-methods__span-green">
              // Лучше использовать стрелочные функции <br />
              // arr.sort( (a, b) => a - b );
            </span>
            <br />
            alert(arr); // 1, 2, 15 <br />
          </p>
        </div>
      </div>

      <div id="array-methods-sort">
        <p class="array-methods__subheading"></p>
        <a target="_blank" href=""></a>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div id="array-methods-sort">
        <p class="array-methods__subheading"></p>
        <a target="_blank" href=""></a>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>

      <div id="array-methods-sort">
        <p class="array-methods__subheading"></p>
        <a target="_blank" href=""></a>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>
    </div>

    <div id="array-methods-tasks">
      <h1 class="array-methods__heading">Задачи "Методы массивов"</h1>

      <div id="toCamelCase">
        <button
          class="array-methods__button"
          @click="isToCamelCase = !isToCamelCase"
          :class="{ 'array-methods__button_active': isToCamelCase }"
        >
          Переведите текст в toCamelCase
        </button>

        <div v-if="isToCamelCase">
          <p class="array-methods__text">textForCamelCase: {{ textForCamelCase }}</p>
          <p class="array-methods__text">Результат "toCamelCase": {{ toCamelCase }}</p>

          <p class="array-methods__subheading">
            Первые буквы текста перевести в верхний регистр.
          </p>
          <p class="array-methods__text">textForTitleCase: {{ textForTitleCase }}</p>
          <p class="array-methods__text">Результат "toTitleCase": {{ toTitleCase }}</p>
        </div>
      </div>

      <div id="filterRange">
        <button
          class="array-methods__button"
          @click="isFilterRange = !isFilterRange"
          :class="{ 'array-methods__button_active': isFilterRange }"
        >
          Фильтрация по диапазону filterRange
        </button>

        <div v-if="isFilterRange">
          <p class="array-methods__text">
            Напишите функцию filterRange(arrNumber, a, b), которая принимает массив arr, ищет в нём
            элементы между a и b и отдаёт массив этих элементов. Функция должна возвращать новый
            массив и не изменять исходный.<br />
            Например: let arrNumber = [5, 3, 8, 1]; <br />
            let filterRange = filterRange(arrNumber, 1, 7); <br />
            alert( filterRange ); // 5,3,1 (совпадающие значения) <br />
            alert( arrNumber ); // 5,3,8,1 (без изменений)
          </p>
          <p class="array-methods__text">arrNumber: {{ arrNumber }}</p>
          <p class="array-methods__text">filterRange: {{ filterRange }}</p>
        </div>
      </div>

      <div id="filterRangeInPlace">
        <button
          class="array-methods__button"
          @click="isFilterRangeInPlace = !isFilterRangeInPlace"
          :class="{ 'array-methods__button_active': isFilterRangeInPlace }"
        >
          Фильтрация по диапазону "на месте" filterRangeInPlace
        </button>

        <div v-if="isFilterRangeInPlace">
          <p class="array-methods__text">
            Напишите функцию filterRangeInPlace(arrNumber2, a, b), которая принимает массив
            arrNumber и удаляет из него все значения кроме тех, которые находятся между a и b. То
            есть, проверка имеет вид a ≤ arrNumber2[i] ≤ b. Функция должна изменять принимаемый
            массив и ничего не возвращать. Например:<br />
            let arrNumber2 = [5, 3, 8, 1]; <br />
            filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4 <br />
            alert( arrNumber2 ); // [3, 1]
          </p>
          <p class="array-methods__text">arrNumber2: {{ arrNumber2 }}</p>
          <p class="array-methods__text">filterRangeInPlace: {{ filterRangeInPlace }}</p>
        </div>
      </div>

      <div id="arrSorted">
        <button
          class="array-methods__button"
          @click="isArraySort = !isArraySort"
          :class="{ 'array-methods__button_active': isArraySort }"
        >
          Сортировать в порядке по убыванию [5, 2, 1, -10, 8] arrSort
        </button>

        <div v-if="isArraySort">
          <p class="array-methods__text">arrSort: {{ arrSort }}</p>
          <p class="array-methods__text">arrSorted: {{ arrSorted }}</p>

          <p class="array-methods__subheading">Скопировать и отсортировать массив</p>
          <p class="array-methods__text">arrSort2: {{ arrSort2 }}</p>
          <p class="array-methods__text">arrSorted2: {{ arrSorted2 }}</p>
        </div>
      </div>

      <div id="outputArray">
        <button
          class="array-methods__button"
          @click="isOutputArray = !isOutputArray"
          :class="{ 'array-methods__button_active': isOutputArray }"
        >
          Создать новый массив на условиях из данных другого массива outputArray
        </button>

        <div v-if="isOutputArray">
          <p class="array-methods__text">inputArr: {{ inputArr }}</p>
          <p class="array-methods__text">outputArr: {{ outputArr }}</p>
          <p class="array-methods__text">inputArray: {{ inputArray }}</p>
          <p class="array-methods__text">outputArray: {{ outputArray }}</p>
        </div>
      </div>

      <div id="arrStringsUnique">
        <button
          class="array-methods__button"
          @click="isArrStringsUnique = !isArrStringsUnique"
          :class="{ 'array-methods__button_active': isArrStringsUnique }"
        >
          Оставить уникальные элементы массива arrStringsUnique
        </button>

        <div v-if="isArrStringsUnique">
          <p class="array-methods__text">arrStrings: {{ arrStrings }}</p>
          <p class="array-methods__text">arrStringsUnique: {{ arrStringsUnique }}</p>
        </div>
      </div>

      <div id="usersMapped">
        <button
          class="array-methods__button"
          @click="isUsersMapped = !isUsersMapped"
          :class="{ 'array-methods__button_active': isUsersMapped }"
        >
          Трансформировать объекты в массив имён names. Из этого массива создать массивы элементов
          ages, surnames, ids и объектов usersMapped
        </button>

        <div v-if="isUsersMapped">
          <p class="array-methods__text">vasya: {{ vasya }}</p>
          <p class="array-methods__text">petya: {{ petya }}</p>
          <p class="array-methods__text">masha: {{ masha }}</p>
          <p class="array-methods__text">
            <span class="array-methods__span"> массив имён </span>users: {{ users }}
          </p>
          <p class="array-methods__text">names: {{ names }}</p>
          <p class="array-methods__text">ages: {{ ages }}</p>
          <p class="array-methods__text">surnames: {{ surnames }}</p>
          <p class="array-methods__text">ids: {{ ids }}</p>
          <p class="array-methods__text">
            <span class="array-methods__span"> объект </span>usersMapped: {{ usersMapped }}
          </p>
        </div>
      </div>

      <div id="sortByAge">
        <button
          class="array-methods__button"
          @click="isSortBy = !isSortBy"
          :class="{ 'array-methods__button_active': isSortBy }"
        >
          Скопировать (создать новый массив) и отсортировать в нём пользователей по возрасту
          sortByAge
        </button>
        <div v-if="isSortBy">
          <p class="array-methods__text">
            <span class="array-methods__span"> массив имён </span>users: {{ users }}
          </p>
          <p class="array-methods__text">sortByAge: {{ sortByAge }}</p>
          <p class="array-methods__text">sortByName: {{ sortByName }}</p>
          <p class="array-methods__text">sortBySurname: {{ sortBySurname }}</p>
          <p class="array-methods__text">sortById: {{ sortById }}</p>
        </div>
      </div>

      <div id="array-methods-sort">
        <p class="array-methods__subheading"></p>
        <a target="_blank" href=""></a>
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

      <div>
        <p class="array-methods__subheading"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArrayMethodsPage',

  data() {
    return {
      // Методы массивов
      isArrayMethodsSort: false,
      isToCamelCase: false,
      isFilterRange: false,
      isFilterRangeInPlace: false,
      isArraySort: false,
      isOutputArray: false,
      isArrStringsUnique: false,
      isSortBy: false,
      isUsersMapped: false,
      // Задачи "Методы массивов"
      textForCamelCase: 'border-left-width',
      textForTitleCase: 'hoW cAn mirRors bEreAl if oUr eyEs areN',
      arrNumber: [5, 3, 8, 1],
      arrNumber2: [5, 3, 8, 1],
      arrSort: [5, 2, 1, -10, 8],
      arrSort2: ['HTML', 'JavaScript', 'CSS'],
      a: 1,
      b: 7,
      c: 4,
      inputArr: [
        [18, 20],
        [45, 2],
        [61, 12],
        [37, 6],
        [21, 21],
        [78, 9],
      ],
      inputArray: [
        { age: 18, handicap: 20 },
        { age: 45, handicap: 2 },
        { age: 61, handicap: 12 },
        { age: 37, handicap: 6 },
        { age: 21, handicap: 21 },
        { age: 78, handicap: 9 },
        // age - возраст; если 55 и больше, то записать "Senior", если меньше 55 - записать "Open",
        // handicap - нарушения (инвалидность), если 7 < handicap < 26 , то записать"Senior". Если -2 < handicap < 7, то записать "Open".
      ],
      arrStrings: ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', ':-O'],
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    }
  },
  computed: {
    // Методы массивов

    // Задачи "Методы массивов"
    toCamelCase() {
      return this.textForCamelCase
        .split('-')
        .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
        .join('')
    },
    toTitleCase() {
      return this.textForTitleCase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      // word.charAt(0) = word[0]
    },
    filterRange() {
      return this.arrNumber.filter(item => this.a <= item && item <= this.b)
    },
    filterRangeInPlace() {
      for (let i = 0; i < this.arrNumber2.length; i++) {
        let val = this.arrNumber2[i]
        // console.log(val)
        // удалить, если за пределами интервала
        if (val < this.a || val > this.c) {
          return this.arrNumber2.splice(i, 1)
          // console.log(this.arrNumber2.splice(i, 1))
          i--
        }
      }
    },
    arrSorted() {
      let arrSorted = this.arrSort.sort((a, b) => b - a)
      // так массив arrSort меняем на месте в arrSorted

      // а так массив arrSort копируем в arrSorted и меняем уже arrSorted
      // let arrSorted = this.arrSort.slice().sort((a, b) => b - a)
      // метод slice()
      return arrSorted
      // console.log(arrSorted)
    },
    arrSorted2() {
      return this.arrSort2.slice().sort()
    },
    outputArr() {
      return this.inputArr.slice().map(item => (item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open'))
    },
    outputArray() {
      return this.inputArray
        .slice()
        .map(item => (item.age >= 55 && item.handicap > 7 ? 'Senior' : 'Open'))
    },
    arrStringsUnique() {
      let result = []

      for (let str of this.arrStrings) {
        if (!result.includes(str)) {
          result.push(str)
        }
      }

      return result
    },
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

  &__button {
    // text-decoration: none;
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    // border: 1px black solid;
    border: none;
    margin-bottom: 24px;
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

  &__subheading {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    // margin-bottom: 12px;
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
}
</style>
