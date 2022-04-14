<template>
  <section class="array-methods">
    <div>
      <h1 class="array-methods__heading">
        Объекты
      </h1>

      <p class="array-methods__text">
        Объект - набор свойств: имя-значение, имя-значение. Объект - это ссылочный тип и его
        переменная содержит только ссылку на него. Объекты хранятся и копируются «по ссылке».
        Переменная хранит не сам объект, а его «адрес в памяти», другими словами «ссылку» на него.
        Сам объект хранится где-то в памяти, а в переменной лежит «ссылка» на эту область памяти.
        Когда переменная объекта копируется – копируется ссылка, сам же объект не дублируется. Если
        мы представляем объект как ящик, то переменная – это ключ к нему. Копирование переменной
        дублирует ключ, но не сам ящик. После копирования переменной получаем две переменные, каждая
        из которых содержит ссылку на один и тот же объект: Мы можем использовать любую из
        переменных для доступа к ящику и изменения его содержимого: Таким образом, при копировании
        переменной с объектом создаётся ещё одна ссылка на тот же самый объект.
      </p>

      <AccessProperty />

      <AccessPropertyBrackets />

      <NestedProperties />

      <UseOfVariables />

      <ObjectMethod />

      <JSONObjectNotation />

      <CopyingObjects />

      <MutationObject />

      <CreateDuplicateObject />

      <!--  -->
      <div id="array-methods-task">
        <button
          class="array-methods__button"
          @click="isButton = !isButton"
          :class="{ 'array-methods__button_active': isButton }"
        >
          xxx
        </button>

        <div v-if="isButton">
          <p class="array-methods__description">
            <span class="array-methods__span">xxx </span>
            <span class="array-methods__span-purple"> => </span>
            <span class="array-methods__span-green"> xxx</span>
          </p>

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
  </section>
</template>

<script>
import CopyingObjects from '@/components/objectMethods/CopyingObjects.vue'
import CreateDuplicateObject from '@/components/objectMethods/CreateDuplicateObject.vue'
import AccessProperty from '@/components/objectMethods/AccessProperty.vue'
import AccessPropertyBrackets from '@/components/objectMethods/AccessPropertyBrackets.vue'
import NestedProperties from '@/components/objectMethods/NestedProperties.vue'
import UseOfVariables from '@/components/objectMethods/UseOfVariables.vue'
import ObjectMethod from '@/components/objectMethods/ObjectMethod.vue'
import JSONObjectNotation from '@/components/objectMethods/JSONObjectNotation.vue'
import MutationObject from '@/components/objectMethods/MutationObject.vue'

export default {
  name: 'ObjectMethodsPage',

  data() {
    return {
      isButton: false,
    }
  },

  components: {
    CopyingObjects,
    CreateDuplicateObject,
    AccessProperty,
    AccessPropertyBrackets,
    NestedProperties,
    UseOfVariables,
    ObjectMethod,
    JSONObjectNotation,
    MutationObject,
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
