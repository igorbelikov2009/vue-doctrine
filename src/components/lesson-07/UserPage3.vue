<template>
  <div class="user-page">
    <h1>Урок 7.1 миксины(примеси)</h1>

    <div class="user-page__container">
      <button type="button" class="btn btn-primary" @click="openModal">
        Подробнее
      </button>

      <modal3 v-if="isModalOpen" title="Очень важная информация" @close="isModalOpen = false">
        <div class="information">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit.
            Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas
            eos minus placeat saepe nisi nesciunt distinctio optio fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit.
            Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas
            eos minus placeat saepe nisi nesciunt distinctio optio fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit.
            Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas
            eos minus placeat saepe nisi nesciunt distinctio optio fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, repellendus fugit.
            Perferendis molestiae reiciendis magni minus, saepe voluptatem. Laborum temporibus quas
            eos minus placeat saepe nisi nesciunt distinctio optio fugit.
          </p>
        </div>
      </modal3>
    </div>
  </div>
</template>

<script>
import Modal3 from '@/components/lesson-07/Modal3.vue'

export default {
  components: { Modal3 },
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
  },
}
</script>

<style lang="scss" scoped>
.user-page {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 72px;

  &__container {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
}

.btn-primary {
  height: 24px;
}
</style>
