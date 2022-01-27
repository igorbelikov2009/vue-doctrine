<template>
  <div class="root">
    <label>
      <p>ввести email</p>
      <input type="email" :value="email" @input="emailInput($event.target.value)" />
    </label>

    <label>
      <p>ввести пароль</p>
      <input type="password" :value="password" @input="passwordInput($event.target.value)" />
    </label>

    <label>
      <p>выберите количество продуктов</p>
      <div class="container">
        <button type="button" @click="decreaseNumber">-</button>

        <input
          type="number"
          :value="number"
          :min="minNumber"
          :max="maxNumber"
          @input="inputNum($event.target.value)"
        />

        <button type="button" @click="increaseNumber">+</button>
      </div>
    </label>
    <InputNumber />
  </div>
</template>

<script>
import InputNumber from './InputNumber'
export default {
  name: 'EmailPassword',
  data() {
    return {
      email: 'example@mail.ru',
      password: '123456789',
      number: 1,
      minNumber: 0,
      maxNumber: 15,
    }
  },
  methods: {
    emailInput(value) {
      this.email = value
    },
    passwordInput(value) {
      this.password = value
    },
    inputNum(value) {
      this.number = value
      console.log(this.number)
    },
    decreaseNumber() {
      if (this.number > this.minNumber) {
        this.number--
        console.log(this.number)
      }
    },
    increaseNumber() {
      if (this.number < this.maxNumber) {
        this.number++
        console.log(this.number)
      }
    },
  },
  components: {
    InputNumber,
  },
}
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
}

label {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
}

p {
  margin-bottom: 12px;
}

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

button {
  width: 24px;
  font-size: 16px;
  cursor: pointer;
}

input:last-of-type {
  height: 18px;
}
</style>
