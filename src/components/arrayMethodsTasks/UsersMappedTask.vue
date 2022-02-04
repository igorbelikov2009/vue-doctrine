<template>
  <div id="usersMapped">
    <button
      class="array-methods__button"
      @click="isUsersMapped = !isUsersMapped"
      :class="{ 'array-methods__button_active': isUsersMapped }"
    >
      Трансформировать объекты в массив.
    </button>

    <p class="array-methods__description">
      Трансформировать объекты в массив пользователей "users". Из этого массива создать массивы
      элементов "names", "ages", "surnames", "ids" и массив "объектов usersMapped".
      <br />
      <span class="array-methods__span">Имеем объекты: {{ vasya }} {{ petya }} {{ masha }} </span>
      <br />
      <span class="array-methods__span-purple">
        => из этих объектов необходимо получить массив пользователей</span
      >
      <br />
      <span class="array-methods__span-green"> users: {{ users }} </span> <br />
      <span class="array-methods__span-purple">
        => из массива пользователей users необходимо получить следующие массивы
      </span>
      <br />
      <span class="array-methods__span-green">
        names: {{ names }}, <br />
        ages: {{ ages }}, <br />
        surnames: {{ surnames }}, <br />
        ids: {{ ids }}, <br />
        usersMapped: {{ usersMapped }}
      </span>
    </p>

    <div v-if="isUsersMapped">
      <p class="array-methods__text">
        имеем <span class="array-methods__span">объекты: {{ vasya }} {{ petya }} {{ masha }}</span>
        <br />
        <span class="array-methods__span-purple">
          users() { <br />
          return [this.vasya, this.petya, this.masha] <br />
          }
        </span>
        получаем массив пользователей -
        <span class="array-methods__span-green">users: {{ users }} </span>
      </p>

      <p class="array-methods__text">Из массива пользователей получаем:</p>

      <p class="array-methods__text">
        <span class="array-methods__span">массив имён пользователей</span> <br />
        <span class="array-methods__span-purple">
          names() { <br />
          return this.users.map(item => item.name) <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">names: {{ names }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">массив возраста пользователей</span> <br />
        <span class="array-methods__span-purple">
          ages() { <br />
          return this.users.map(item => item.age) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">ages: {{ ages }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">массив отчеств пользователей</span> <br />
        <span class="array-methods__span-purple">
          surnames() { <br />
          return this.users.map(item => item.surname) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">surnames: {{ surnames }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">массив id пользователей</span> <br />
        <span class="array-methods__span-purple">
          ids() { <br />
          return this.users.map(item => item.id) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">ids: {{ ids }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">массив объектов пользователей</span> <br />
        <span class="array-methods__span-purple">
          usersMapped() { <br />
          return this.users.map(user => ({ <br />
          fullName: `${user.name} ${user.surname}`, <br />
          id: user.id, <br />
          age: user.age, <br />
          })) <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">usersMapped: {{ usersMapped }} </span> <br />
        <br />
        UsersMappedTask.vue
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersMappedTask',

  data() {
    return {
      isUsersMapped: false,
    }
  },
  props: {
    vasya: { type: Object },
    petya: { type: Object },
    masha: { type: Object },
    users: { type: Array },
    names: { type: Array },
    ages: { type: Array },
    surnames: { type: Array },
    ids: { type: Array },
    usersMapped: { type: Array },
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
