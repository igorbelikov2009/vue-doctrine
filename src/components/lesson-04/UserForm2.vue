<template>
  <div class="user-from">
    <h1>
      Урок 4-2 реактивность и решение ее основных проблем, $set().
    </h1>
    <div class="user-from__container">
      <div class="user-from__block">
        <h2>Информация о себе:</h2>

        <div
          class="user-from__field"
          v-for="(fieldValue, fieldLabel, index) in formFields"
          :key="index"
        >
          <label class="user-from__title">{{ fieldLabel }}:</label>
          <!-- :for="fieldLabel" -->

          <input class="form-control" v-model="formFields[fieldLabel]" />
          <!-- :id="fieldLabel"  -->
        </div>

        <button type="submit" class="user-from__button">Сохранить</button>
      </div>

      <div class="user-from__block">
        <h2 class="user-from__subheading">Предпросмотр:</h2>

        <p
          class="user-from__subtitle"
          v-for="(fieldValue, fieldLabel, index) in formFields"
          :key="index"
        >
          {{ `${fieldLabel}: ${fieldValue}` }}
        </p>
      </div>
    </div>

    <div class="user-from__block">
      <div class="user-from__field">
        <label for="additionalField">Дополнительное поле:</label>
        <input class="form-control" id="additionalField" v-model="additionalField" />
      </div>

      <button type="button" class="btn btn-success" @click="addNewField">
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm2',

  data() {
    return {
      formFields: {
        firstName: '',
        secondName: '',
        lastName: '',
      },
      additionalField: '',
    }
  },
  methods: {
    addNewField() {
      this.$set(this.formFields, this.additionalField, '')
    },
  },
}
</script>

<style lang="scss" scoped>
.user-from {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 72px;

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
  }

  &__block {
    width: calc(50% - 12px);

    &:first-of-type {
      margin-right: 24px;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    margin: 12px 0;
  }

  &__title {
    font-size: 16px;
  }

  &__subheading {
    margin-bottom: 36px;
  }

  &__subtitle {
    margin-top: 36px;
  }

  &__button {
    margin: 12px 0;
  }
}

input {
  width: 400px;
}
</style>
