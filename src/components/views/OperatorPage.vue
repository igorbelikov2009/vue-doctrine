<template>
  <div class="array-methods">
    <h1 class="array-methods__heading">
      Операторы
    </h1>

    <div id="array-methods-task">
      <button
        class="array-methods__button"
        @click="isTextOperator = !isTextOperator"
        :class="{ 'array-methods__button_active': isTextOperator }"
      >
        Текстовые операторы: delete, typeof, instanseof, new
      </button>

      <div v-if="isTextOperator">
        <p class="array-methods__description">
          <span class="array-methods__span-purple">
            delete <span class="array-methods__span">obj.a </span>
          </span>
          <br />

          <span class="array-methods__span-purple">
            typeof <span class="array-methods__span">a </span>
          </span>
          <br />
          пример использования

          <span class="array-methods__span-purple">typeof 10 = = = 'number'</span>

          <span class="array-methods__span-green">true</span> <br />

          <span class="array-methods__span-purple">
            instanseof <span class="array-methods__span">a </span>
          </span>
          <br />

          <span class="array-methods__span-purple">
            new <span class="array-methods__span"> Object() </span>
          </span>
          <br />
        </p>
      </div>
    </div>

    <div id="array-methods-task">
      <button
        class="array-methods__button"
        @click="isLogicalOperator = !isLogicalOperator"
        :class="{ 'array-methods__button_active': isLogicalOperator }"
      >
        Логические операторы
      </button>

      <div v-if="isLogicalOperator">
        <p class="array-methods__description">
          <span class="array-methods__span">! </span>
          <span class="array-methods__span-purple"> оператор "не" </span>
          <span class="array-methods__span-green"> возвращает true или false </span>
        </p>

        <p class="array-methods__description">
          <span class="array-methods__span"> &amp;&amp; </span>
          <span class="array-methods__span-purple"> оператор "и" </span>
          <span class="array-methods__span-green">
            возвращает значение одного из операторов. Не возвращает true или false.</span
          >
          <br />
          <span class="array-methods__span">
            оператор короткого замыкания: ищем первое ложное значение <br />
          </span>

          <span class="array-methods__span-purple">Выражение 1 &amp;&amp; Выражение 2 </span> <br />
          возвращается первое ложное выражение. Если такого нет, то возвращается последнее выражение
        </p>

        <p class="array-methods__description">
          <span class="array-methods__span"> || </span>
          <span class="array-methods__span-purple"> оператор "или" </span>
          <span class="array-methods__span-green">
            возвращает значение одного из операторов. Не возвращает true или false.</span
          >
          <br />

          <span class="array-methods__span-purple">Выражение 1 || Выражение 2 </span> <br />

          возвращается первое истинное выражение. Если такого нет, то возвращается последнее
          выражение
          <br />
          <br />

          Логические операторы можно объединять в цепочку
        </p>

        <p class="array-methods__text">
          <span class="array-methods__span"> Ложные значения в JavaScript</span> <br />

          <span class="array-methods__span-purple">Boolen(value) -> false</span> <br />

          <span class="array-methods__span-green"> false </span> <br />
          цифра
          <span class="array-methods__span-green"> 0 </span> <br />
          пустая строка
          <span class="array-methods__span-green"> '' </span> <br />
          отсутствие значения
          <span class="array-methods__span-green"> null </span> <br />
          значение не определено
          <span class="array-methods__span-green"> undefined </span> <br />

          пробел - не пустая строка ' ' не является ложным значением
        </p>
      </div>
    </div>

    <OperatorSeparation />

    <!--  -->
    <div id="array-methods-task">
      <button
        class="array-methods__button"
        @click="isButton = !isButton"
        :class="{ 'array-methods__button_active': isButton }"
      >
        xxx
      </button>

      <p class="array-methods__description">
        <span class="array-methods__span">xxx </span>
        <span class="array-methods__span-purple"> => </span>
        <span class="array-methods__span-green"> xxx</span>
      </p>

      <div v-if="isButton">
        <p class="array-methods__text">
          <span class="array-methods__span"> сделать что-то</span> <br />

          имеем <span class="array-methods__span"></span> <br />
          <span class="array-methods__span-purple"></span>
          получаем:
          <span class="array-methods__span-green"></span>
        </p>

        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
        <p class="array-methods__text"></p>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import OperatorSeparation from '@/components/operators/OperatorSeparation.vue'

export default {
  name: 'OperatorPage',

  data() {
    return {
      isButton: false,
      isTextOperator: false,
      isLogicalOperator: false,
    }
  },
  components: {
    OperatorSeparation,
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
