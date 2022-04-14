<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isObjectDestructuring = !isObjectDestructuring"
      :class="{ 'array-methods__button_active': isObjectDestructuring }"
    >
      Деструктуризация объекта
    </button>

    <p class="array-methods__text">
      Деструктуризация объекта - присвоение значениям свойств объекта некоторых переменных. <br />
      Деструктуризация позволяет разбивать объект или массив на переменные при присвоении. Свойства,
      которые не были упомянуты, копируются в объект (или массив) rest.
    </p>

    <div v-if="isObjectDestructuring">
      <p class="array-methods__description">
        Полный синтаксис для объекта: <br />
        <span class="array-methods__span-purple"
          >let {prop : varName = default, ...rest} = object
        </span>

        <br />
        <span class="array-methods__span"> Пример 1</span> <br />
        имеем user: { <br />
        name: 'John', <br />
        surname: 'Smith', <br />
        years: 30, <br />
        country: 'USA', <br />
        city: 'York', <br />
        } <br />
        Напишите деструктурирующее присваивание, которое: <br />

        свойство name присвоит в переменную name. <br />
        свойство years присвоит в переменную age. <br />
        свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства) <br />
        <span class="array-methods__span-purple"
          >userDestructuring() { <br />
          let { name, years: age, isAdmin = false, ...rest } = this.user <br />
          return { name, age, isAdmin } <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green"> {{ userDestructuring }} </span> <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"> Пример 2</span> <br />
        Создайте функцию , которая возвращает имя самого высокооплачиваемого сотрудника. <br />
        Если объект salaries пустой, то нужно вернуть null. <br />
        Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
        <br />

        имеем
        <span class="array-methods__span"> salaries: { John: 100, Pete: 300, Mary: 250, }</span>
        <br />
        methods: { <br />
        <span class="array-methods__span-purple">
          topSalary(salaries) { <br />
          let max = 0 <br />
          let maxName = null <br />
          <br />
          for (const [name, salary] of Object.entries(salaries)) { <br />
          if (max &lt; salary) { <br />
          max = salary <br />
          maxName = name <br />
          } } <br />

          return maxName <br />
          }</span
        >} <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          topNameSalary() { <br />
          return this.topSalary(this.salaries) <br />
          }</span
        >} <br />
        получаем:
        <span class="array-methods__span-green"> {{ topNameSalary }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjectDestructuring',

  data() {
    return {
      isObjectDestructuring: false,
      user: {
        name: 'John',
        surname: 'Smith',
        years: 30,
        country: 'USA',
        city: 'York',
      },
      salaries: {
        John: 100,
        Pete: 300,
        Mary: 250,
      },
    }
  },
  computed: {
    userDestructuring() {
      let { name, years: age, isAdmin = false, ...rest } = this.user
      return { name, age, isAdmin, rest }
    },
    topNameSalary() {
      return this.topSalary(this.salaries)
    },
  },
  methods: {
    topSalary(salaries) {
      let max = 0
      let maxName = null

      for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
          max = salary
          maxName = name
        }
      }

      return maxName
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
