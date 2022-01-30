<template>
  <div id="filterRangeInPlace">
    <button
      class="array-methods__button"
      @click="isFilterRangeInPlace = !isFilterRangeInPlace"
      :class="{ 'array-methods__button_active': isFilterRangeInPlace }"
    >
      Фильтрация по диапазону "на месте" filterRangeInPlace
    </button>

    <!--  -->
    <p class="array-methods__description">
      Напишите функцию filterRangeInPlace(arrNumber, a, b), которая принимает массив arrNumber и
      удаляет из него все значения кроме тех, которые находятся между a и b. <br />
      <span class="array-methods__span"> arrNumber: [5, 3, 8, 1] </span>
      <span class="array-methods__span-purple"> filterRangeInPlace(arrNumber, 1, 4) => </span>
      <span class="array-methods__span-green">
        arrNumber: {{ arrNumber }} (с изменениями) , filterRangeInPlace:
        {{ filterRangeInPlace }} (совпадающие значения)
      </span>
    </p>
    <!--  -->

    <div v-if="isFilterRangeInPlace">
      <p class="array-methods__text">
        имеем <span class="array-methods__span">arrNumber: {{ arrNumber }} </span> <br />
        <span class="array-methods__span-purple">
          filterRangeInPlace() { <br />
          for (let i = 0; i &lt; this.arrNumber.length; i++) { <br />
          let val = this.arrNumber[i] <br />
          // удалить, если за пределами интервала <br />
          if (val &lt; this.a || val > this.b) { <br />
          return this.arrNumber.splice(i, 1) <br />
          i-- <br />
          } } },
        </span>
        получаем -
        <span class="array-methods__span-green">filterRangeInPlace: {{ filterRangeInPlace }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterRangeInPlaceTask',

  data() {
    return {
      isFilterRangeInPlace: false,
      arrNumber: [5, 3, 8, 1],
      a: 1,
      b: 4,
    }
  },
  computed: {
    filterRangeInPlace() {
      for (let i = 0; i < this.arrNumber.length; i++) {
        let val = this.arrNumber[i]
        // удалить, если за пределами интервала
        if (val < this.a || val > this.b) {
          return this.arrNumber.splice(i, 1)
          i--
        }
      }
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
