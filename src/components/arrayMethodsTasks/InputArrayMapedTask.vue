<template>
  <div id="inputArrayMaped">
    <button
      class="array-methods__button"
      @click="isInputArrayMaped = !isInputArrayMaped"
      :class="{ 'array-methods__button_active': isInputArrayMaped }"
    >
      Создать новый массив (на условиях) из данных другого массива inputArrayMaped
    </button>

    <p class="array-methods__description">
      Создать новый массив (на условиях) из данных другого массива
      <br />
      <span class="array-methods__span">inputArr: {{ inputArr }} </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> inputArrMaped: {{ inputArrMaped }}</span>
    </p>

    <div v-if="isInputArrayMaped">
      <p class="array-methods__text">
        Создать новый массив (на условиях) из данных другого массива, состоящего из объектов
        <br />
        <span class="array-methods__span">inputArray: {{ inputArray }} </span> <br />
        Где: age - возраст. Если age равно и больше 55, то записать "Senior", если age меньше 55 -
        записать "Open",
        <br />
        handicap - нарушения (инвалидность). Если 7 &lt; handicap &lt; 26 , то записать"Senior".
        Если -2 &lt; handicap &lt; 7, то записать "Open". <br />
        <span class="array-methods__span-purple"
          >inputArrayMaped() { <br />
          return this.inputArray <br />
          .slice() <br />
          .map(item => (item.age >= 55 &amp;&amp; item.handicap > 7 ? 'Senior' : 'Open')) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">inputArrayMaped: {{ inputArrayMaped }} </span>
      </p>

      <p class="array-methods__text">
        Создать новый массив (на условиях) из данных другого массива, состоящего из массивов.
        <br />
        <span class="array-methods__span">inputArr: {{ inputArr }} </span> <br />
        Где: inputArr[0] - возраст. Если inputArr[0] равно и больше 55, то записать "Senior", если
        inputArr[0] меньше 55 - записать "Open",
        <br />
        inputArr[1] - нарушения (инвалидность). Если 7 &lt; inputArr[1] &lt; 26 , то
        записать"Senior". Если -2 &lt; inputArr[1] &lt; 7, то записать "Open". <br />
        <span class="array-methods__span-purple">
          inputArrMaped() { <br />
          return this.inputArr.slice().map(item => (item[0] >= 55 &amp;&amp; item[1] > 7 ? 'Senior'
          : 'Open')) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">inputArrMaped: {{ inputArrMaped }} </span> <br />
        <br />
        InputArrayMapedTask.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputArrayMapedTask',

  data() {
    return {
      isInputArrayMaped: false,
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
    }
  },
  computed: {
    inputArrMaped() {
      return this.inputArr.slice().map(item => (item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open'))
    },
    inputArrayMaped() {
      return this.inputArray
        .slice()
        .map(item => (item.age >= 55 && item.handicap > 7 ? 'Senior' : 'Open'))
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
