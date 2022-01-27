<template>
  <div class="product-list">
    <h1>Урок 3 - v-model, props и пользовательские события</h1>

    <div class="product-list__top-information">
      <h2 class="product-list__description">
        button в компоненте Search.vue. <br />
        Событие кнопки "event" <br />
        передаём предку через $emit
      </h2>
      <!-- currentValue  searchText-->
      <search @search="searchProducts" />
    </div>

    <div class="product-list__top-information">
      <h2 class="product-list__description">
        связь модуля v-model="searchText2" <br />
        с родительским компонентом ProductList <br />
        и дочерним Search2
      </h2>

      <search2 v-model="searchText2" />
      <!-- этот v-model="searchText2" связанн с компонентом search2 -->
      {{ searchText2 }}

      <button type="button" @click="searchProducts2">
        Найти
      </button>
    </div>

    <ul class="product-list__list">
      <li v-for="(product, index) in products" :key="index">
        <!-- в компоненте ProductCard связываем пропсы из props ProductCard со свойствами из здешнего массива products -->
        <ProductCard
          :title="product.title"
          :price="product.price"
          :imgUrl="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from '@/components/lesson-03/ProductCard.vue'
import Search from '@/components/lesson-03/Search.vue'
import Search2 from '@/components/lesson-03/Search2.vue'

export default {
  name: 'Lesson03',
  components: { ProductCard, Search, Search2 },

  data() {
    return {
      currentValue: '',
      searchText2: '',

      products: [
        {
          title: 'Стол Jim',
          price: 19999,
          imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
          count: 30,
        },
        {
          title: 'Стол Monako',
          price: 17199,
          imgUrl: 'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count: 20,
        },
        {
          title: 'Стол Кварт MD 768',
          price: 10999,
          imgUrl: 'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23,
        },
      ],
    }
  },

  methods: {
    addToBasket(index) {
      console.log(index + 1)
    },

    searchProducts(currentValue) {
      console.log('Загрузить товары: ' + currentValue)
    },

    // не знаю почему, но в верху searchText надо загрузить
    // в параметры метода.
    // А в низу нужен this
    searchProducts2() {
      console.log('Загрузить товары: ' + this.searchText2)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  width: 100%;
  max-width: 1160px;
  margin: 96px auto;

  &__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-inline-start: 0;
  }

  &__top-information {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__description {
    display: block;
    width: 100%;
    max-width: 320px;
  }
}

li {
  display: block;
  // width: 33.33%;
  // min-width: 272px;
  // max-width: 300px;
}

h1 {
  margin-bottom: 24px;
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
