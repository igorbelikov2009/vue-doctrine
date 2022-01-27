<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal__header">
          <h5 class="modal__title">
            {{ title }}
          </h5>

          <button type="button" class="modal__close" aria-label="Close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal__body" @scroll="onScroll">
          <slot></slot>
        </div>

        <div class="modal__footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Отмена
            </button>

            <button
              type="button"
              class="btn btn-primary"
              :disabled="isRulesReaded"
              @click="consoleOk"
            >
              Принять
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// убираем mixins из компонента
// import ScrollHandler from '../../mixins/scrollHandler'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  // убираем mixins из компонента
  //   mixins: [ScrollHandler],
  data() {
    return {
      isRulesReaded: true,
    }
  },
  //  после подключения плагина в main.js, в хуке created вызываем метод
  created() {
    this.$log()
  },

  methods: {
    closeModal() {
      this.$emit('close')
    },
    // метод берём из миксина
    onScrollEnd() {
      this.isRulesReaded = false
    },
    consoleOk() {
      console.log('Ok')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  width: 70%;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid gray;
    padding: 0 24px;
  }

  &__close {
    width: 24px;
    height: 24px;
    border: none;
  }

  &__body {
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    border: 1px solid gray;
    padding: 0 24px;
  }

  &__footer {
    width: 100%;
    border: 1px solid gray;
    padding: 0 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 48px;
  }
}

.btn-secondary {
  margin-right: 12px;
}

.btn-primary {
  background-color: rgb(26, 79, 177);
  color: white;

  &:disabled {
    background-color: gray;
  }
}
</style>
