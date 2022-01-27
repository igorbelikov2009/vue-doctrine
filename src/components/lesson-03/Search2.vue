<template>
  <div class="search2">
    <input type="text" class="search2__field" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'Search2',

  // model: {
  //   // здесь связь модуля v-model="searchText2" с родительским компонентом ProductList
  //   prop: 'value',
  //   event: 'input',
  // },
}
</script>

<style lang="scss" scoped>
.search2 {
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__field {
    margin-left: 40px;
  }
}
</style>
