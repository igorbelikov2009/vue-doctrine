<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isCopyingObjects = !isCopyingObjects"
      :class="{ 'array-methods__button_active': isCopyingObjects }"
    >
      Мутация объектов и ссылки
    </button>

    <div v-if="isCopyingObjects">
      <p class="array-methods__description">
        имеем объект с переменной (ссылкой)
        <span class="array-methods__span"> objectA: { name: 'Bob', age: 21, }</span> <br />
        копируем

        <span class="array-methods__span-purple"> const objectCopyA = objectA</span> <br />
        получаем
        <span class="array-methods__span"> не новый объект</span>, а ещё одну переменную (ссылку)
        для того же объекта
        <span class="array-methods__span-green"> objectCopyA: { name: 'Bob', age: 21, } </span>
      </p>

      <p class="array-methods__text">
        меняем свойство "name" у объекта с переменной (ссылкой) objectCopyA
        <br />

        <span class="array-methods__span-purple">objectCopyA.name = 'Alice'</span> <br />

        получаем: <br />
        objectCopyA.name = <span class="array-methods__span-green">{{ propertyNameCopy }}</span>
        <br />
        и objectA.name =
        <span class="array-methods__span-green">{{ propertyName }}</span> <br />
        то есть,
        <span class="array-methods__span"
          >менять свойства у объекта мы можем с любой переменной (ссылкой), которые ссылаются на
          этот объект. <br />
          <span class="array-methods__span-red">
            Mеняя копию, мы меняем исходный объект.
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CopyingObjects',

  data() {
    return {
      isCopyingObjects: false,
      objectA: {
        name: 'Bob',
        age: 21,
      },
    }
  },
  computed: {
    objectCopyA() {
      const objectCopyA = this.objectA
      return objectCopyA
    },
    propertyNameCopy() {
      this.objectCopyA.name = 'Alice'
      return this.objectCopyA.name
    },
    propertyName() {
      return this.objectA.name
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
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
