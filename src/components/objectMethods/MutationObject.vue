<template>
  <div id="array-methods-task">
    <h1>
      Как избежать мутаций объекта, что бы, меняя объект - копию, не менять оригинальный объект.
    </h1>

    <div>
      <button
        class="array-methods__button"
        @click="isAssign = !isAssign"
        :class="{ 'array-methods__button_active': isAssign }"
      >
        Вариант 1: const person2 = Object.assign({}, person)
      </button>

      <p v-if="isAssign" class="array-methods__description">
        Вариант 1:
        <span class="array-methods__span">
          const person2 = Object.assign({}, person)
        </span>
        <br />
        <br />
        имеем <span class="array-methods__span">person: { name: 'Bob', age: 25, } </span> <br />
        создаём независимую копию - новый объект
        <span class="array-methods__span-purple">
          const person2 = Object.assign({}, person)
        </span>
        <br />
        получаем: <span class="array-methods__span-green">person2: {{ person2 }}</span> <br />
        меняем свойство "age" у объекта с ссылкой person2
        <span class="array-methods__span-purple"> person2.age = 26 </span> <br />
        {{ person2Age }} выводим в консоль <br />
        <span class="array-methods__span-purple"> console.log(person.age) </span>
        <br />
        <span class="array-methods__span-green"> 25</span> <br />
        <span class="array-methods__span-purple"> console.log(person2.age) </span> <br />
        <span class="array-methods__span-green"> 26</span> <br />
        <span class="array-methods__span"
          >То, что нам надо: поменяли свойство "age" только у объекта с ссылкой person2. <br />
        </span>
        <br />
        Если у оригинального объекта есть ссылки на вложенные свойства, то ссылки сохранятся. И
        когда мы будем менять вложенные свойства у скопированного объекта, то вложенные свойства
        будут меняться и у оригинала. <br />
        Этот вариант подходит для копирования объектаю когда у него нет вложенных свойств.
      </p>

      <button
        class="array-methods__button"
        @click="isSpred = !isSpred"
        :class="{ 'array-methods__button_active': isSpred }"
      >
        Вариант 2: const user2 = { ...user}
      </button>

      <p v-if="isSpred" class="array-methods__description">
        Вариант 2, для создания копий применяем оператор ... разделения на свойства
        <span class="array-methods__span">
          const user2 = { ...user}
        </span>
        "спрэд"
        <br />
        <br />
        имеем <span class="array-methods__span"> user: {{ user }} </span> <br />
        создаём независимую копию
        <span class="array-methods__span-purple">
          const user2 = { ...user}
        </span>
        <br />
        получаем: <span class="array-methods__span-green">user2: {{ user2 }}</span> <br />
        меняем свойство "age" по ссылке user2
        <span class="array-methods__span-purple"> user2.age = 21 </span> <br />
        {{ user2Age }} выводим в консоль <br />
        <span class="array-methods__span-purple"> console.log(user.age) </span>
        <br />
        свойство оригинального объекта не изменилось
        <span class="array-methods__span-green"> 20</span> <br />
        <span class="array-methods__span-purple"> console.log(user2.age) </span> <br />
        <span class="array-methods__span-green"> 21</span> <br />
        Если у оригинального объекта есть ссылки на вложенные свойства, то ссылки сохранятся. И
        когда мы будем менять вложенные свойства у скопированного объекта, то вложенные свойства
        будут меняться и у оригинала. <br />
        Этот вариант подходит для копирования объекта, когда у него нет вложенных свойств.
        <br />
        <br />

        <span class="array-methods__span-red"
          >Этот вариант подходит для копирования (объединения) нескольких объектов, с различными
          свойствами в один:</span
        >
        <br />

        имеем
        <span class="array-methods__span">
          woman: { name: 'Alice', age: 19, }, myCity: { city: 'Moscow', country: 'Russia', },</span
        >
        <br />
        <span class="array-methods__span-purple">const russiaWoman = { ...woman, ...myCity } </span>
        получаем:
        <span class="array-methods__span-green">russiaWoman {{ russiaWoman }}</span>
      </p>

      <button
        class="array-methods__button"
        @click="isJson = !isJson"
        :class="{ 'array-methods__button_active': isJson }"
      >
        Вариант 3: const woman2 = JSON.parse(JSON.stringify(woman))
      </button>

      <p v-if="isJson" class="array-methods__description">
        <span class="array-methods__span">
          Вариант 3, методы объекта JSON, позволяет создать копию объекта и полностью избежать
          мутаций
        </span>
        <br />
        <br />
        имеем <span class="array-methods__span">woman: { name: 'Alice', age: 19, }</span> <br />
        создаём независимую копию
        <span class="array-methods__span-purple">
          const woman2 = JSON.parse(JSON.stringify(woman))
        </span>
        <br />
        получаем: <span class="array-methods__span-green">woman2: {{ woman2 }} </span> <br />
        меняем свойство "name" по ссылке woman2
        <span class="array-methods__span-purple"> woman2.name = 'AliceMoon' </span> <br />
        {{ woman2Name }} выводим в консоль <br />
        <span class="array-methods__span-purple"> console.log(woman.name) </span>
        <br />
        <span class="array-methods__span-green"> Alice</span> <br />
        <span class="array-methods__span-purple"> console.log(woman2.name) </span> <br />
        <span class="array-methods__span-green"> AliceMoon</span> <br />
        <span class="array-methods__span"
          >Ссылки на вложенные свойства не сохранятся. Создаётся совершенно новый объект
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MutationObject',

  data() {
    return {
      isAssign: false,
      isSpred: false,
      isJson: false,
      person: {
        name: 'Bob',
        age: 25,
      },
      user: {
        name: 'Pety',
        age: 20,
      },
      woman: {
        name: 'Alice',
        age: 19,
      },
      myCity: {
        city: 'Moscow',
        country: 'Russia',
      },
    }
  },
  computed: {
    person2() {
      return Object.assign({}, this.person)
    },
    person2Age() {
      this.person2.age = 26
      // return this.person2
      console.log(this.person.age, this.person2.age)
    },
    user2() {
      return { ...this.user }
    },
    user2Age() {
      this.user2.age = 21
      console.log(this.user.age, this.user2.age)
    },
    woman2() {
      return JSON.parse(JSON.stringify(this.woman))
    },
    woman2Name() {
      this.woman2.name = 'AliceMoon'
      console.log(this.woman.name, this.woman2.name)
    },
    russiaWoman() {
      return { ...this.woman, ...this.myCity }
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
