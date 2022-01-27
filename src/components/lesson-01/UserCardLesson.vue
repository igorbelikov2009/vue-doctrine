<template>
  <div class="card-lesson">
    <div class="card-lesson__top-block">
      <p class="card-lesson__heading">Я найду тебя!</p>

      <div class="card-lesson__search-block">
        <input
          class="card-lesson__search-input"
          type="text"
          @input="searchText = $event.target.value"
        />

        <p>Всего имен: {{ names.length }}, совпадений: {{ getFilteredNames.length }}</p>
      </div>
    </div>

    <ul class="card-lesson__list">
      <li class="card-lesson__list-item" v-for="(name, index) in getFilteredNames" :key="index">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UserCardLesson",
  data() {
    return {
      searchText: "",
      names: ["Данил", "Василий", "Дмитрий", "Григорий", "Максим"]
    };
  },

  computed: {
    getFilteredNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }
};
</script>

<style lang="scss" scoped>
.card-lesson {
  width: 100%;

  &__top-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__search-block {
    width: calc(50% - 12px);
    margin-left: 12px;
    margin-top: 20px;
  }

  &__heading {
    width: calc(50% - 12px);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    margin-top: 20px;
    margin-right: 12px;
  }

  &__search-input {
    height: 1rem;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__list-item {
    list-style: none;
    margin: 0 6px;
  }
}
</style>
