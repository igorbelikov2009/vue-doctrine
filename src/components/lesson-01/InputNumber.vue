<template>
  <div class="inputNumber">
    <p>
      Выберите кол-во:
    </p>

    <button type="button" @click="decreaseCount">
      -
    </button>

    <input
      type="number"
      :value="count"
      :min="minCount"
      :max="maxCount"
      @input="inputNum($event.target.value)"
    />

    <button type="button" @click="increaseCount">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  data() {
    return {
      count: 1,
      maxCount: 30,
      minCount: 1
    };
  },
  methods: {
    inputNum(value) {
      this.count.value;
      this.count = value;
      console.log(this.count);
    },
    increaseCount() {
      if (this.count < this.maxCount) {
        this.count++;
        console.log(this.count);
      }
    },
    decreaseCount() {
      if (this.count > this.minCount) {
        this.count--;
        console.log(this.count);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.inputNumber {
  width: 100%;
  max-width: 200px;
}
</style>
