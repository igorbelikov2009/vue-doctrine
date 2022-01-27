<template>
  <div class="search">
    <!-- <input type="text" class="search__field" v-model="currentValue" /> -->
    <input
      type="text"
      class="search__field"
      v-bind:value="currentValue"
      v-on:input="currentValue = $event.target.value"
    />
    {{ currentValue }}
    <!-- <button type="button" @click="$emit('search', currentValue)">
      Найти
    </button> -->
    <button type="button" @click="$emit('search', currentValue)">
      Найти
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      currentValue: '',
    }
  },

  methods: {
    search() {
      this.$emit('search', this.currentValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__field {
    margin-left: 40px;
  }
}

button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  display: block;
  cursor: pointer;
  margin-left: 40px;
}
</style>
