<template>
  <div id="array-methods-xx">
    <button
      class="array-methods__button"
      @click="isReduceMethod = !isReduceMethod"
      :class="{ 'array-methods__button_active': isReduceMethod }"
    >
      array.reduce()
    </button>

    <p class="array-methods__description">
      Метод array.reduce() используются для
      <span class="array-methods__span"
        >вычисления какого-нибудь единого значения на основе всего массива
      </span>
      (суммирование всех элементов, умножение друг на друга и другое). <br />
      Значение, возвращённое методом reduce() будет равным последнему результату выполнения
      колбэк-функции. <br />
      Метод reduce() применяет функцию reducer к каждому элементу массива
      <span class="array-methods__span">(слева-направо)</span>, возвращая одно результирующее
      значение. <br />
      Массив, к которому применяется метод, остаётся неизменным.
    </p>

    <div v-if="isReduceMethod">
      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
        >array.reduce()</a
      >

      <p class="array-methods__text">
        Синтаксис: <br />

        let value = arr.reduce(function(previousValue, item, index, array) { // ... },
        [initialValue])
        <br /><span class="array-methods__span">Функция </span> применяется по очереди ко всем
        элементам массива и «переносит» свой результат на следующий вызов, принимает четыре
        аргумента:
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">Аргументы:</span>
        <br />

        <span class="array-methods__span">previousValue </span> – результат предыдущего вызова этой
        функции, равен initialValue при первом вызове (если передан initialValue). Аккумулятор,
        аккумулирующий значение, которое возвращает функция callback после посещения очередного
        элемента, либо значение initialValue, если оно предоставлено.
        <br />
        <span class="array-methods__span">item (currentValue) </span> – очередной, текущий
        обрабатываемый элемент массива, <br />
        <span class="array-methods__span">index </span> – его индекс, <br />
        <span class="array-methods__span">array </span> – сам массив, для которого была вызвана
        функция reduce. <br />
        <span class="array-methods__span">initialValue (исходное значение) </span> - необязательный
        параметр. Объект, используемый в качестве первого аргумента при первом вызове функции
        callback.
      </p>

      <p class="array-methods__text">
        Описание <br />
        Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в
        массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение
        от предыдущего вызова callback), значение текущего элемента, текущий индекс и массив, по
        которому происходит итерация
      </p>

      <a
        class="array-methods__link"
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
        >смотри пример =></a
      >

      <p class="array-methods__text">
        <span class="array-methods__span-red">Суммирование всех значений в массиве</span> <br />
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 0.</span>
        <br />

        имеем <span class="array-methods__span">array1: {{ array1 }} </span> <br />
        <span class="array-methods__span-purple">
          array1Reduce() { <br />
          const reducer = (previousValue, currentValue) => previousValue + currentValue <br />
          return this.array1.reduce(reducer) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1Reduce }} </span>
      </p>

      <p class="array-methods__text">
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 0.</span> <br />
        <span class="array-methods__span-red">другой способ</span> <br />
        имеем <span class="array-methods__span">array1: {{ array1 }}</span> <br />
        <span class="array-methods__span-purple">
          array1ReduceAnotherIV0() { <br />
          var total = this.array1.reduce(function(a, b) {<br />
          return a + b <br />
          }) <br />
          return total <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1ReduceAnotherIV0 }}</span>
      </p>

      <p class="array-methods__text">
        Необходимо сложить все элементы массива в одну сумму,
        <span class="array-methods__span"> initialValue = 10.</span> <br />

        имеем <span class="array-methods__span">array1: {{ array1 }}</span> <br />
        <span class="array-methods__span-purple">
          array1ReduceIV10() { <br />
          const reducer = (previousValue, currentValue) => previousValue + currentValue <br />
          return this.array1.reduce(reducer, 10) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ array1ReduceIV10 }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-red">Суммирование значений в массиве объектов</span> <br />
        Чтобы суммировать значения, содержащиеся в массиве объектов, вы должны указать
        <span class="array-methods__span"> initialValue,</span> чтобы каждый элемент смог пройти
        через callback.
        <br />

        имеем <span class="array-methods__span">array2: {{ array2 }} </span> <br />

        <span class="array-methods__span-purple">
          array2ReduceIV0() { <br />
          var initialValue = 0 <br />
          var sum = this.array2.reduce(function(accumulator, currentValue) { <br />
          return accumulator + currentValue.x <br />
          }, initialValue) <br />
          return sum <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ array2ReduceIV0 }} </span> <br />
        <br />
        Тоже самое, но
        <span class="array-methods__span">со стрелочной функцией: </span> <br />
        <span class="array-methods__span-purple"
          >array2ReduceIV0Arrow() { <br />
          var initialValue = 0 <br />
          var sum = this.array2.reduce((a, b) => a + b.x, initialValue) <br />
          return sum <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green"> {{ array2ReduceIV0Arrow }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-red">Разворачивание массива массивов</span> <br />
        <span class="array-methods__span">Разворачивание массива массивов</span> <br />

        имеем <span class="array-methods__span">flattened: {{ flattened }} </span> <br />
        <span class="array-methods__span-purple">
          flattenedDeployed() { <br />
          var deployed = this.flattened.reduce(function(a, b) { <br />
          return a.concat(b) <br />
          }) <br />
          return deployed <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ flattenedDeployed }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span-red">
          склеивание массивов, содержащихся в объектах массива,
        </span>
        с использованием оператора расширения и initialValue
        <br />

        имеем <span class="array-methods__span">friends: {{ friends }} </span> <br />
        // friends - список из объектов(друзей) <br />
        // где поле "books" - список любимых книг друга <br />
        <br />

        <span class="array-methods__span">
          Получить список, который будет содержать все книги друзей friendsBooks: список +
          дополнительный список указанный в initialValue
        </span>
        <br />
        <span class="array-methods__span-purple">
          friendsBooks() { <br />
          var allbooks = this.friends.reduce( <br />
          function(prev, curr) { <br />
          return [...prev, ...curr.books] <br />
          }, <br />
          ['Alphabet'] <br />
          ) <br />
          return allbooks <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ friendsBooks }} </span> <br />
        <br />

        <span class="array-methods__span"> Стрелочные функции </span>
        <br />
        <span class="array-methods__span-purple"
          >friendsBooksArrow() { <br />
          return this.friends.reduce((a, b) => [...a, ...b.books], ['Alphabet']) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ friendsBooksArrow }} </span>
        <br />
        <br />
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Получить список, который будет содержать все имена друзей: friendsNames
        </span>
        <br />

        имеем <span class="array-methods__span"></span> <br />
        <span class="array-methods__span-purple">
          friendsNames() { <br />
          return this.friends.map(item => item.name) <br />
          }</span
        >
        получаем:
        <span class="array-methods__span-green">{{ friendsNames }}</span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Получить список, который будет содержать возраст друзей</span
        >
        <br />

        имеем <span class="array-methods__span"></span> <br />
        <span class="array-methods__span-purple"
          >friendsAge() { <br />
          return this.friends.map(item => item.age) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ friendsAge }}</span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span"
          >Получить список, который будет суммарный возраст друзей</span
        >
        <br />

        имеем <span class="array-methods__span"></span> <br />
        <span class="array-methods__span-purple">
          friendsAgeSum() { <br />
          return this.friends.map(item => item.age).reduce((a, b) => a + b) <br />
          }
        </span>
        получаем:
        <span class="array-methods__span-green">{{ friendsAgeSum }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReduceMethod',

  data() {
    return {
      isReduceMethod: false,
      array1: [1, 2, 3, 4],
      array2: [{ x: 1 }, { x: 2 }, { x: 3 }],
      flattened: [
        [0, 1],
        [2, 3],
        [4, 5],
      ],
      friends: [
        { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
        { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
        { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 },
      ],
    }
  },
  computed: {
    array1Reduce() {
      const reducer = (previousValue, currentValue) => previousValue + currentValue
      return this.array1.reduce(reducer)
    },
    // по другому
    array1ReduceAnotherIV0() {
      var total = this.array1.reduce(function(a, b) {
        return a + b
      })
      return total
    },
    array1ReduceIV10() {
      const reducer = (previousValue, currentValue) => previousValue + currentValue
      return this.array1.reduce(reducer, 10)
    },
    array2ReduceIV0() {
      var initialValue = 0
      var sum = this.array2.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.x
      }, initialValue)
      return sum
    },
    // Тоже самое, но со стрелочной функцией:
    array2ReduceIV0Arrow() {
      var initialValue = 0
      var sum = this.array2.reduce((a, b) => a + b.x, initialValue)
      //  var sum = this.array2.reduce(
      //   (accumulator, currentValue) => accumulator + currentValue.x,
      //   initialValue)
      return sum
    },
    flattenedDeployed() {
      var deployed = this.flattened.reduce(function(a, b) {
        return a.concat(b)
      })
      return deployed
    },
    friendsBooks() {
      var allbooks = this.friends.reduce(
        function(prev, curr) {
          return [...prev, ...curr.books]
        },
        ['Alphabet']
      )
      return allbooks
    },
    // Тоже самое, но со стрелочной функцией:
    friendsBooksArrow() {
      return this.friends.reduce((a, b) => [...a, ...b.books], ['Alphabet'])
    },
    friendsNames() {
      return this.friends.map(item => item.name)
    },
    friendsAge() {
      return this.friends.map(item => item.age)
    },
    friendsAgeSum() {
      return this.friends.map(item => item.age).reduce((a, b) => a + b)
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
    color: #c328c3;
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
