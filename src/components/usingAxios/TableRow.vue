<template>
  <div class="vtable__row">
    <div class="vtable__cell">{{ indexRow }}</div>
    <div class="vtable__cell">{{ rowData.id }}</div>
    <div class="vtable__cell">{{ rowData.title }}</div>
    <div class="vtable__cell">{{ rowData.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',

  props: {
    indexRow: { type: Number },
    rowData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.vtable {
  &__row {
    display: flex;
    justify-content: space-around;
  }

  &__cell {
    padding: 8px 16px;
    text-align: left;

    &:nth-of-type(1) {
      flex-basis: 10%;
    }

    &:nth-of-type(2) {
      flex-basis: 10%;
    }

    &:nth-of-type(3) {
      flex-basis: 20%;
    }

    &:nth-of-type(4) {
      flex-basis: 70%;
    }
  }
}
</style>
