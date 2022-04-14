<template>
  <div id="array-methods-task">
    <h2>Функция может быть:</h2>

    <p class="array-methods__text">
      <span class="array-methods__span">...именованной </span> <br />
      <span class="array-methods__span">...присвоена переменной </span> <br />
      <span class="array-methods__span">...анонимной </span> <br />
      <span class="array-methods__span">...аргументом при вызове другой функции </span> <br />
      <span class="array-methods__span">...значением свойства (метода) объекта </span> <br />
    </p>

    <p class="array-methods__description">
      Чтобы увидеть в консоле структуру функции, как объекта, необходимо ввести <br />
      <span class="array-methods__span">console.dir(myFn) </span> <br />
    </p>

    <h2>return</h2>

    <p class="array-methods__text">
      Очень важный момент: для возвращения результата используется ключевое слово
      <span class="array-methods__span">return</span>, после которого функция прекращает выполнение
      дальнейших инструкций. Если после <span class="array-methods__span">return</span> написаны
      какие-то действия, они выполняться не будут. Если
      <span class="array-methods__span">return</span> не указан в функции, она выдаст indefined
    </p>

    <h2>Передача значения по ссылке</h2>

    <p class="array-methods__text">
      имеем объект <br />
      <span class="array-methods__span">personOne:</span> { <br />
      name: 'Bob', <br />
      age: 21 <br />
      } <br />

      в функции, в качестве параметра принимается объект
      <br />function increasePersonAge(<span class="array-methods__span">person</span>) {
      <span class="array-methods__span-green">
        &lt;== Функция мутирует внешний объект (исходник)</span
      >
      <br />
      <span class="array-methods__span">person.age</span> += 1 <br />
      return <span class="array-methods__span">person </span> <br />
      } <br />
      <br />

      increasePersonAge(<span class="array-methods__span">personOne </span>)
      <span class="array-methods__span-green"> &lt;== передача объекта по ссылке </span> <br />
      console.log(<span class="array-methods__span">personOne.age</span>)
      <span class="array-methods__span-green"> // 22</span>
      <span class="array-methods__span-green">
        &lt;== Функция мутирует внешний объект (исходник)</span
      >
      <br />
      <span class="array-methods__span-red"
        >Внутри функции не рекомендуется мутировать внешние объекты
      </span>
    </p>

    <h2>Создание копии объекта внутри функции</h2>

    <p class="array-methods__text">
      имеем объект personOne: { name: 'Bob', age: 21 }, <br />
      <br />
      создаём копию объекта внутри функции <br />
      <span class="array-methods__span-purple">
        function increasePersonAge(person) { <br />
        const updatedPerson = Object.assign({}, person) <br />
        updatedPerson.age += 1 <br />
        return updatedPerson <br />
        }
      </span>
      <br />
      копия объекта
      <span class="array-methods__span-green"> updatedPersonOne: {{ updatedPersonOne }} </span>
      <br />
      <br />
      достаём значение свойства "age" у внешнего объекта <br />
      <span class="array-methods__span-purple"> return this.personOne.age </span> <br />
      <span class="array-methods__span-green"> personOneAge: {{ personOneAge }} </span> объект
      personOne не изменился <br />
      <br />
      достаём значение свойства "age" у обнавлённого объекта <br />
      <span class="array-methods__span-purple"> return this.updatedPersonOne.age </span> <br />
      <span class="array-methods__span-green">
        updatedPersonOneAge: {{ updatedPersonOneAge }}
      </span>
      <br />
    </p>

    <h2>CallBack - функция, это функция, которая вызывается в теле другой функции</h2>

    <h2>Правила работы с функциями</h2>

    <p class="array-methods__text">
      <span class="array-methods__span">1. Называть функцию исходя из выполнямех задач</span> <br />

      <span class="array-methods__span">2. Одна функция должна выполнять одну задачу</span> <br />

      <span class="array-methods__span"
        >3. Не рекомендуется изменять внешниеб относительно функцииб переменноые</span
      >
      <br />
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutFunction',

  data() {
    return {
      isAboutFunction: false,
      personOne: { name: 'Bob', age: 21 },
    }
  },

  computed: {
    personOneAge() {
      return this.personOne.age
    },
    updatedPersonOne() {
      return this.increasePersonAge(this.personOne)
    },
    updatedPersonOneAge() {
      return this.updatedPersonOne.age
    },
  },
  methods: {
    increasePersonAge(person) {
      const updatedPerson = Object.assign({}, person)
      updatedPerson.age += 1
      return updatedPerson
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
  // array-methods__subheading
  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  // array-methods__button
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
