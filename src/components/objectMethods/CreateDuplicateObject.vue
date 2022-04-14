<template>
  <div id="array-methods-task">
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
</template>

<script>
export default {
  name: 'CreateDuplicateObject',
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
