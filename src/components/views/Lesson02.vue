<template>
  <div class="photo-redactor" ref="photoRedactor" @click="loadOpicate">
    <h1>
      Урок 2 - условная отрисовка: <br />
      v-if, v-else и стили: v-bind:style
    </h1>
    <div class="photo-redactor__row">
      <div class="photo-redactor__image-wrapper">
        <img
          class="photo-redactor__image"
          src="../../../public/images/cat.jpg"
          v-if="isCatVisible"
          :class="imageFilters"
          v-bind:style="imageStyle"
        />

        <div v-else class="photo-redactor__block">
          <h1>Кот скоро вернется!!!!</h1>

          <p>
            Здесь можно применить директиву v-show. <br />
            Различия: <br />
            Первое отличие в дом-дереве: <br />
            v-if - img полностью удаляется из дерева <br />
            v-show - img получает стиль display: none; <br />
            <br />
            Второе отличие: при v-if в последующем элементее можно использовать директиву v-else
          </p>
        </div>
      </div>

      <div class="photo-redactor__controls">
        <p class="photo-redactor__heading">Шаверма-кот</p>

        <p class="photo-redactor__subheading">Фильтры</p>

        <div class="btn-group flex">
          <button
            type="button"
            :class="imageFilters.sepia ? 'active' : ''"
            @click="imageFilters.sepia = !imageFilters.sepia"
          >
            Сепия
          </button>

          <button
            type="button"
            :class="imageFilters.border ? 'active' : ''"
            @click="imageFilters.border = !imageFilters.border"
          >
            Рамка
          </button>

          <button
            type="button"
            :class="imageFilters.shadow ? 'active' : ''"
            @click="imageFilters.shadow = !imageFilters.shadow"
          >
            Тень
          </button>
        </div>

        <p class="photo-redactor__subheading">Размер</p>

        <div class="btn-group">
          <label>
            Ширина: {{ imageSize.currentWidth }}
            <input
              type="range"
              :value="imageSize.currentWidth"
              @input="imageSize.currentWidth = $event.target.value"
              :min="imageSize.minWidth"
              :max="imageSize.maxWidth"
            />
          </label>

          <label>
            Высота: {{ imageSize.currentHeight }}
            <input
              type="range"
              :value="imageSize.currentHeight"
              @input="imageSize.currentHeight = $event.target.value"
              :min="imageSize.minHeight"
              :max="imageSize.maxHeight"
            />
          </label>
        </div>

        <div class="btn-group">
          <p class="photo-redactor__subheading">Поворот</p>

          <label>
            Угол: {{ imageSize.currentDeg }}
            <input
              type="range"
              :value="imageSize.currentDeg"
              @input="imageSize.currentDeg = $event.target.value"
              :min="imageSize.minDeg"
              :max="imageSize.maxDeg"
            />
          </label>
        </div>

        <button @click="isCatVisible = !isCatVisible">
          Показать / спрятать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lesson02',

  data() {
    return {
      isCatVisible: true,

      screen: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      },

      imageFilters: {
        sepia: false,
        border: false,
        shadow: false,
      },

      imageSize: {
        minWidth: 0,
        minHeight: 0,
        minDeg: 0,
        maxWidth: 570,
        maxHeight: 402,
        maxDeg: 360,
        currentWidth: 570,
        currentHeight: 402,
        currentDeg: 360,
      },
    }
  },

  computed: {
    imageStyle() {
      return {
        width: `${this.imageSize.currentWidth}px`,
        height: `${this.imageSize.currentHeight}px`,
        transform: `rotate(${this.imageSize.currentDeg}deg)`,
      }
    },
  },

  methods: {
    loadOpicate() {
      console.log('Ok')
    },
  },
}
</script>

<style lang="scss" scoped>
.photo-redactor {
  width: 100%;
  max-width: 1160px;
  margin: 96px auto;

  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__image-wrapper {
    width: calc(50% - 12px);
    aspect-ratio: 680 / 480;
    background-color: #cecece;
    margin-right: 12px;
  }

  &__image {
    width: 100%;
    aspect-ratio: 680 / 480;
    transition: 0.2s ease;

    &.sepia {
      filter: sepia(100%);
    }

    &.border {
      border: 5px dashed #464646;
    }

    &.shadow {
      box-shadow: 9px 9px 9px 2px #857a7a;
    }
  }

  &__block {
    width: 100%;
    padding: 24px 48px;
  }

  &__controls {
    width: calc(50% - 20px);
    margin-left: 20px;
  }

  &__heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 12px;
  }

  &__subheading {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 12px;
  }
}

.container {
  margin-top: 40px;
}

button {
  margin-right: 10px;
  &.active {
    background-color: #dbdbdb;
  }
}

.btn-group {
  margin-bottom: 20px;
}

input[type='range'] {
  margin-top: 12px;
  margin-bottom: 12px;
  display: block;
}
</style>
