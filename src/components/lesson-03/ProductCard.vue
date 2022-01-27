<template>
  <div class="product-card">
    <div class="product-card__container">
      <img class="product-card__image" :src="imgUrl" />
      <!-- width="300px"  -->

      <div class="product-card__info">
        <h2>{{ title }}</h2>

        <p class="price">{{ price }}р.</p>

        <p class="count">Доступно для доставки {{ count }}шт.</p>

        <button type="button" @click="addToBasket">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 50
      },
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default: 'https://tsum.by/images/no-photo.png',
    },
    count: {
      type: Number,
      dafault: 0,
    },
  },

  methods: {
    addToBasket() {
      this.$emit('addToBasket')
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 33.33%;
  min-width: 272px;
  max-width: 300px;
  width: 100%;

  &__container {
    // width: 100%;
    width: calc(100% - 48px);
    // min-width: 272px;
    // max-width: 327px;
    border: 1px solid rgb(211, 211, 211);
    padding: 24px 24px;
  }

  &__image {
    aspect-ratio: 300 / 200;
    // width: calc(100% - 48px);
    width: 100%;
  }
  &__info {
    margin-top: 24px;
  }
}

h2,
.price {
  font-weight: 500;
}

.count {
  color: rgb(143, 143, 143);
}

button {
  background-color: rgb(221, 56, 56);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 14px;
  display: block;
  cursor: pointer;
  margin-top: 20px;
}
</style>
