<template>
  <div id="arrSortedDescending">
    <button
      class="array-methods__button"
      @click="isArrSort = !isArrSort"
      :class="{ 'array-methods__button_active': isArrSort }"
    >
      Скопировать arrSort в массивы arrSortedDescending (arrSortedDByIncrease) и отсортировать
      последние.
    </button>

    <p class="array-methods__description">
      Сортировать в порядок по убыванию
      <br />
      <span class="array-methods__span">arrSort: {{ arrSort }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">
        arrSortedDescending: {{ arrSortedDescending }}
      </span>
      <br />
      Сортировать в порядок по увеличению
      <br />
      <span class="array-methods__span">arrSort: {{ arrSort }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green">
        arrSortedDByIncrease: {{ arrSortedDByIncrease }}
      </span>
    </p>

    <div v-if="isArrSort">
      <p class="array-methods__text">
        Сортировать в порядок по убыванию
        <span class="array-methods__span">arrSort: {{ arrSort }}</span> <br />
        <span class="array-methods__span-purple">
          arrSortedDescending() { <br />
          return this.arrSort.slice().sort((a, b) => b - a) <br />
          },</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrSortedDescending: {{ arrSortedDescending }}</span
        >
      </p>

      <p class="array-methods__text">
        Сортировать в порядок по увеличению
        <span class="array-methods__span">arrSort: {{ arrSort }} </span> <br />
        <span class="array-methods__span-purple">
          arrSortedDByIncrease() { <br />
          return this.arrSort.slice().sort((a, b) => a - b) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"
          >arrSortedDByIncrease: {{ arrSortedDByIncrease }}</span
        >
        <br />
        <br />
        ArrSortTask.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrSortTask',

  data() {
    return {
      isArrSort: false,
      arrSort: [5, 2, 1, -10, 8],
    }
  },
  computed: {
    arrSortedDescending() {
      // let arrSortedDescending = this.arrSort.sort((a, b) => b - a)
      // так массив arrSort меняем на месте в arrSortedDescending

      // а так массив arrSort копируем в arrSortedDescending и меняем уже arrSortedDescending
      return this.arrSort.slice().sort((a, b) => b - a)
      // метод slice()

      // console.log(arrSortedDescending)
    },
    arrSortedDByIncrease() {
      return this.arrSort.slice().sort((a, b) => a - b)
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
