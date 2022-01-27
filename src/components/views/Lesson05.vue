<template>
  <div>
    <form v-if="!registrationPassed" class="sign-up" @submit.prevent="checkForm">
      <h1>Урок 5 - работа с формами, валидация с Vuelidate</h1>

      <div class="form-group">
        <label class="form-group__label">Логин: </label>

        <input
          class="form-control"
          :class="$v.form.login.$error ? 'is-invalid' : ''"
          v-model.trim="form.login"
        />

        <p v-if="$v.form.login.$dirty && !$v.form.login.required" class="invalid-feedback">
          Обязательное поле
        </p>

        <p v-if="$v.form.login.$dirty && !$v.form.login.minLength" class="invalid-feedback">
          Здесь должно быть больше 5-и символов
        </p>
      </div>

      <div class="form-group">
        <label class="form-group__label">Почта:</label>

        <input
          type="email"
          class="form-control"
          :class="$v.form.email.$error ? 'is-invalid' : ''"
          v-model.trim="form.email"
        />

        <p v-if="$v.form.email.$dirty && !$v.form.email.required" class="invalid-feedback">
          Обязательное поле
        </p>

        <p v-if="$v.form.email.$dirty && !$v.form.email.email" class="invalid-feedback">
          Email неккоректный
        </p>
      </div>

      <div class="form-group">
        <label class="form-group__label">Пароль:</label>

        <input
          type="current-password"
          class="form-control"
          :class="$v.form.password.$error ? 'is-invalid' : ''"
          v-model.trim="form.password"
        />

        <p v-if="$v.form.password.$dirty && !$v.form.password.required" class="invalid-feedback">
          Обязательное поле
        </p>
      </div>

      <div class="form-group">
        <label class="form-group__label">Страна проживания:</label>

        <select class="form-control" v-model="form.nameCountry">
          <option v-for="(country, index) in countries" :value="country.value" :key="index"
            >{{ country.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-group__label">Любимые темы:</label>

        <select
          class="form-control"
          :class="$v.form.favouriteThemes.$error ? 'is-invalid' : ''"
          v-model="form.favouriteThemes"
          multiple
        >
          <option v-for="(theme, index) in themes" :value="theme.value" :key="index"
            >{{ theme.name }}
          </option>
        </select>

        <p
          v-if="$v.form.favouriteThemes.$dirty && !$v.form.favouriteThemes.maxCount"
          class="invalid-feedback"
        >
          Не больше 3-х тем
        </p>
      </div>

      <hr />

      <div class="form-group form-group__inline">
        <input type="checkbox" class="form-check-input" v-model="form.agreeWithSendEmail" />

        <label class="form-group__label-check">Выбрать значение: true или false</label>
      </div>

      <hr />

      <div class="form-group__inline">
        <div class="form-group form-group__inline">
          <input type="checkbox" class="form-check-input" v-model="form.agreeWithRules" />

          <label
            class="form-group__label-check"
            :class="$v.form.agreeWithRules.$error ? 'is-invalid' : ''"
            >Ознакомлен(а) с правилами</label
          >
        </div>

        <p
          v-if="$v.form.agreeWithRules.$dirty && !$v.form.agreeWithRules.mustBeTrue"
          class="invalid-feedback"
        >
          Прочтите правила !
        </p>
      </div>

      <hr />

      <div class="form-group__inline">
        <div class="form-group form-group__inline">
          <input type="checkbox" class="form-check-input" value="1" v-model="form.selectCheckbox" />

          <label class="form-group__label-check">Выбрать один чекбокс </label>
        </div>

        <div class="form-group form-group__inline">
          <input type="checkbox" class="form-check-input" value="2" v-model="form.selectCheckbox" />

          <label class="form-group__label-check">или другой, или выбрать оба</label>
        </div>
      </div>

      <hr />

      <div class="form-group form-group__inline">
        <div class="form-check">
          <input class="form-check-input" type="radio" value="65" v-model="form.gender" />

          <label class="form-group__label-check">Мужчина</label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            value="60"
            name="female"
            v-model="form.gender"
          />

          <label class="form-group__label-check">Женщина</label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>

    <div v-else>
      <h1>
        {{ `${form.login}, поздравляем вы успешно зарегистрированы!` }}
      </h1>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email, minValue, maxValue } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  name: 'Lesson05',

  data() {
    return {
      registrationPassed: false,
      form: {
        login: '',
        email: '',
        password: '',
        nameCountry: 'Russia',
        favouriteThemes: ['IT'],
        agreeWithSendEmail: false,
        agreeWithRules: false,
        selectCheckbox: [],
        gender: '65',
      },

      countries: [
        { name: 'Россия', value: 'Russia' },
        { name: 'Белоруссия', value: 'Byelorussia' },
        { name: 'Германия', value: 'Germany' },
      ],
      themes: [
        { name: 'Технологии', value: 'IT' },
        { name: 'Языки', value: 'Languages' },
        { name: 'Математика', value: 'mathematics' },
        { name: 'История', value: 'history' },
      ],
    }
  },

  validations: {
    form: {
      login: { required, minLength: minLength(5) },
      email: { required, email },
      password: { required },
      gender: { minValue: minValue(65), maxValue: maxValue(65) },
      agreeWithRules: {
        mustBeTrue(value) {
          return value
        },
      },
      favouriteThemes: {
        maxCount(value) {
          return value.length <= 3
        },
      },
    },
  },

  methods: {
    checkForm() {
      console.log('ok')
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.registrationPassed = true
        console.log('Валидация прошла успешно')
      }
    },
  },
  // methods: {
  //   checkForm() {
  //     if (!this.$v.form.$error) {
  //       console.log("Валидация прошла успешно");
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.sign-up {
  width: 100%;
  max-width: 1160px;
  margin: 96px auto;
}

.form-group {
  width: 100%;
  max-width: 400px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

  &__inline {
    display: flex;
    flex-direction: row;
  }

  &__label {
    margin-bottom: 12px;
  }

  &__label-check {
    margin-left: 12px;
  }
}

.form-control {
  width: 100%;
  border: 1px solid green;
}

.is-invalid {
  border: 1px solid red;
}

.invalid-feedback {
  color: red;
}

.form-check {
  display: flex;
  align-items: center;

  &:first-of-type {
    margin-right: 24px;
  }
}

button {
  margin-top: 15px;
}
</style>
