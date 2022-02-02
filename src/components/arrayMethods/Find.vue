<template>
  <div id="array-methods-find">
    <button
      class="array-methods__button"
      @click="isFind = !isFind"
      :class="{ 'array-methods__button_active': isFind }"
    >
      array.find()
    </button>

    <p class="array-methods__description">
      У нас есть массив объектов. Нам необходимо
      <span class="array-methods__span">найти объект </span>с определённым условием.
      <br />

      Метод find()
      <span class="array-methods__span"
        >возвращает значение первого найденного в массиве элемента</span
      >, которое удовлетворяет условию переданному в callback функции. В противном случае
      возвращается undefined. <br />
      Метод find() <span class="array-methods__span">не изменяет массив</span>, для которого он был
      вызван.
    </p>

    <div v-if="isFind">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
        >array.find()</a
      >
      <p class="array-methods__text">
        Его синтаксис таков: <br />

        let result = arr.find(function(item, index, array) { <br />
        // если true - возвращается текущий элемент и перебор прерывается <br />
        // если все итерации оказались ложными, возвращается undefined <br />
        });
      </p>

      <p class="array-methods__text">
        Метод find() вызывает переданную <span class="array-methods__span">функцию </span> callback
        один раз, по очереди, для каждого элемента, присутствующего в массиве, до тех пор, пока она
        не вернёт true. Если такой элемент найден, метод find() немедленно вернёт значение этого
        элемента. В противном случае, метод find() вернёт undefined.
        <br />

        <span class="array-methods__span">item </span> – очередной, текущий обрабатываемый элемент в
        массиве. <br />
        <span class="array-methods__span">index </span> – его индекс. <br />
        <span class="array-methods__span">array </span> – сам массив, по которому осуществляется
        проход. <br />
        <span class="array-methods__span">thisArg </span> - необязательный параметр. Значение,
        используемое в качестве this при выполнении функции callback. <br />
        Если в метод find был передан параметр thisArg, при вызове callback он будет использоваться
        в качестве значения this. В противном случае в качестве значения this будет использоваться
        значение undefined.
      </p>

      <p class="array-methods__text">
        У нас есть массив объектов пользователей, каждый из которых имеет поля id и name <br />
        <span class="array-methods__span">users: {{ users }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого id == 1:</span> <br />
        <span class="array-methods__span-purple">
          usersFindId1() { <br />
          return this.users.find(item => item.id = = 1) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ usersFindId1 }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого name: 'Маша':</span> <br />
        <span class="array-methods__span-purple"
          >usersFindNameMasha() { <br />
          return this.users.find(item => item.name = = 'Маша') <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ usersFindNameMasha }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого surname: 'Иванов':</span>
        <br />
        <span class="array-methods__span-purple">
          usersFindSurnameIvanov() { <br />
          return this.users.find(item => item.surname = = 'Иванов') <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersFindSurnameIvanov }} </span> <br />
        <br />

        <span class="array-methods__span"> Ищем объект, у которого age: 25 :</span> <br />
        <span class="array-methods__span-purple"
          >usersFindAge25() { <br />
          return this.users.find(item => item.age = = 25) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ usersFindAge25 }} </span> <br />
        <br />

        <span class="array-methods__span">
          Ищем объект, у которого age: 40.
          <span class="array-methods__span-red">Такого объекта нет:</span></span
        >
        <br />
        <span class="array-methods__span-purple"
          >usersFindAge40() { <br />
          return this.users.find(item => item.age = = 40) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">
          {{ usersFindAge40 }} пусто, ничего не получаем.</span
        >
        <br />
        если зададим
        <span class="array-methods__span-purple">
          console.log(this.users.find(item => item.age = = 40))
        </span>
        <br />
        то в консоли увидим: <span class="array-methods__span-green"> undefined</span>
        <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-red">поиск простого числа в массиве</span> <br />

        имеем <span class="array-methods__span">numeric: {{ numeric }} </span> <br />
        <span class="array-methods__span-purple"
          >computed: { <br />
          numericFindPrimeNumber() { <br />
          return this.numeric.find(this.isPrime) <br />
          } }</span
        >
        <br />
        <br />

        <span class="array-methods__span-purple"
          >methods: { <br />
          isPrime(element, index, array) { <br />
          var start = 2 <br />
          while (start &lt;= Math.sqrt(element)) { <br />
          if (element % start++ &lt; 1) { <br />
          return false } <br />
          } return element > 1 <br />
          }, }</span
        >
        получаем:
        <span class="array-methods__span-green"
          >{{ numericFindPrimeNumber }} пусто, ничего не получаем.</span
        >

        <br />
        если зададим
        <span class="array-methods__span-purple">
          console.log(this.numeric.find(this.isPrime))
        </span>
        <br />
        то в консоли увидим: <span class="array-methods__span-green"> undefined</span>
        <br />
        <br />

        имеем <span class="array-methods__span">numeric2: {{ numeric2 }} </span> <br />
        <span class="array-methods__span-purple"
          >computed: { <br />
          numeric2FindPrimeNumber() { <br />
          return this.numeric2.find(this.isPrime) <br />
          } }
        </span>
        <br />
        <br />

        <span class="array-methods__span-purple"
          >methods: { <br />
          isPrime(element, index, array) { <br />
          var start = 2 <br />
          while (start &lt;= Math.sqrt(element)) { <br />
          if (element % start++ &lt; 1) { <br />
          return false } <br />
          } return element > 1 <br />
          }, }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ numeric2FindPrimeNumber }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',

  data() {
    return {
      isFind: false,
      vasya: { name: 'Вася', surname: 'Пупкин', id: 1, age: 25 },
      petya: { name: 'Петя', surname: 'Иванов', id: 2, age: 30 },
      masha: { name: 'Маша', surname: 'Петрова', id: 3, age: 28 },
      numeric: [4, 6, 8, 12],
      numeric2: [4, 5, 8, 12],
    }
  },
  computed: {
    users() {
      return [this.vasya, this.petya, this.masha]
    },
    usersFindId1() {
      return this.users.find(item => item.id == 1)
    },
    usersFindNameMasha() {
      return this.users.find(item => item.name == 'Маша')
    },
    usersFindSurnameIvanov() {
      return this.users.find(item => item.surname == 'Иванов')
    },
    usersFindAge25() {
      return this.users.find(item => item.age == 25)
    },
    usersFindAge40() {
      return this.users.find(item => item.age == 40)
      // console.log(this.users.find(item => item.age == 40))
    },
    numericFindPrimeNumber() {
      return this.numeric.find(this.isPrime)
      //  console.log(this.numeric.find(this.isPrime))
    },
    numeric2FindPrimeNumber() {
      return this.numeric2.find(this.isPrime)
    },
  },
  methods: {
    isPrime(element, index, array) {
      var start = 2
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false
        }
      }
      return element > 1
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
