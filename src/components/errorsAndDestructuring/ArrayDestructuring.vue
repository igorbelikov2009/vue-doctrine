<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isArrayDestructuring = !isArrayDestructuring"
      :class="{ 'array-methods__button_active': isArrayDestructuring }"
    >
      Деструктуризация массива
    </button>

    <div v-if="isArrayDestructuring">
      <p class="array-methods__description">
        Полный синтаксис для массива: <br />
        <span class="array-methods__span">let [item1 = default, item2, ...rest] = array</span>
        <br />
        Первый элемент отправляется в item1; второй отправляется в item2, все остальные элементы
        попадают в массив rest. <br />

        Можно извлекать данные из вложенных объектов и массивов, для этого левая сторона должна
        иметь ту же структуру, что и правая.
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"> Пример 1</span> <br />

        имеем <span class="array-methods__span">fruits: {{ fruits }} </span> <br />
        <span class="array-methods__span-purple"
          >fruitsDestructuring() { <br />
          const [fruitOne, fruitTwo] = this.fruits <br />
          return [fruitOne, fruitTwo] <br />
          }</span
        >
        <br />
        получаем:
        <span class="array-methods__span-green">{{ fruitsDestructuring }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArrayDestructuring',

  data() {
    return {
      isArrayDestructuring: false,
      fruits: ['Apple', 'Banana'],
    }
  },
  computed: {
    fruitsDestructuring() {
      const [fruitOne, fruitTwo] = this.fruits
      return [fruitOne, fruitTwo]
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  width: calc(100% - 48px);

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
    cursor: pointer;
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
