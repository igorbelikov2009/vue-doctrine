<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isFindIndex = !isFindIndex"
      :class="{ 'array-methods__button_active': isFindIndex }"
    >
      array.findIndex()
    </button>

    <p class="array-methods__description">
      Метод array.findIndex() <span class="array-methods__span">возвращает индекс в массиве</span>,
      если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
      <br />
      Метод findIndex() <span class="array-methods__span">не изменяет массив</span>, для которого он
      был вызван.
    </p>

    <div v-if="isFindIndex">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
        >array.findIndex()</a
      >
      <p class="array-methods__text">
        Его синтаксис таков: <br />
        let result = arr.find(function(item, index, array) { <br />
        // если true - возвращается текущий элемент и перебор прерывается <br />
        // если все итерации оказались ложными, возвращается undefined <br />
        });
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Функция </span> вызывается по очереди для каждого элемента
        массива: <br />

        <span class="array-methods__span">item </span> – очередной элемент. <br />
        <span class="array-methods__span">index </span> – его индекс.<br />
        <span class="array-methods__span">array </span> – сам массив.
      </p>

      <p class="array-methods__text">
        У нас есть массив объектов пользователей, каждый из которых имеет поля id и name <br />
        <span class="array-methods__span">users: {{ users }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого id: 1:</span> <br />
        <span class="array-methods__span-purple">
          usersFindIndexId3() { <br />
          return this.users.findIndex(item => item.id == 3) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ usersFindIndexId3 }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого name: 'Вася':</span> <br />
        <span class="array-methods__span-purple">
          usersFindIndexNameVasya() { <br />
          return this.users.findIndex(item => item.name == 'Вася') <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ usersFindIndexNameVasya }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого surname: 'Пупкин':</span> <br />
        <span class="array-methods__span-purple">
          usersFindIndexSurnamePupkin() { <br />
          return this.users.findIndex(item => item.surname == 'Пупкин') <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ usersFindIndexSurnamePupkin }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого age: 30:</span> <br />
        <span class="array-methods__span-purple">
          usersFindIndexAge30() { <br />
          return this.users.findIndex(item => item.age == 30) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ usersFindIndexAge30 }} </span> <br />
        <br />

        <span class="array-methods__span">
          Ищем объект, у которого age: 40.
          <span class="array-methods__span-red">Такого объекта нет:</span></span
        >
        <br />
        <span class="array-methods__span-purple">
          usersFindIndexAge40() { <br />
          return this.users.findIndex(item => item.age == 40) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green"> {{ usersFindIndexAge40 }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindIndex',

  data() {
    return {
      isFindIndex: false,
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
    }
  },
  computed: {
    users() {
      return [this.vasya, this.petya, this.masha]
    },
    usersFindIndexId3() {
      return this.users.findIndex(item => item.id == 3)
    },
    usersFindIndexNameVasya() {
      return this.users.findIndex(item => item.name == 'Вася')
    },
    usersFindIndexSurnamePupkin() {
      return this.users.findIndex(item => item.surname == 'Пупкин')
    },
    usersFindIndexAge30() {
      return this.users.findIndex(item => item.age == 30)
    },
    usersFindIndexAge40() {
      return this.users.findIndex(item => item.age == 40)
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
