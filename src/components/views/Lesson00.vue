<template>
  <section class="top-block" :style="{ 'background-image': `url(${image})` }">
    <div class="top-block__container">
      <h1 class="top-block__heading">
        Урок 0: как использовать
        <span class="top-block__heading_span"> background image в стиле тэга</span>
      </h1>

      <a
        class="top-block__link"
        target="_blank"
        href="https://stackoverflow.com/questions/51812496/vue-cli-3-use-background-image-in-style-tag"
      >
        vue cli 3 – use background image in style tag</a
      >
    </div>
  </section>
</template>

<script>
import mainTopImage from '../../../public/images/main/mainTop.jpg'

export default {
  name: 'Lesson00',

  data() {
    return {
      image: mainTopImage,
    }
  },
}
</script>

<style lang="scss" scoped>
.top-block {
  width: calc(100% - 48px);
  margin: 0 auto;
  margin-top: 76px;
  height: 320px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media screen and (min-width: 576px) {
    height: 600px;
    width: calc(100% - 56px);
    padding: 24px 28px;
  }

  &__container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }

  &__heading {
    font-size: 26px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      font-size: 55px;
      line-height: 74px;
      margin-bottom: 24px;
    }

    &_span {
      display: block;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }
  }

  &__link {
    display: block;
    text-decoration: none;
    font-size: 13px;
    line-height: 24px;
    color: #83cbf5;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__button {
    // width: 96px;
    width: 100%;
    padding: 24px;
    // border: white 1px solid;
    // border-radius: 18px;
    background-color: rgb(175, 38, 141);
    background: linear-gradient(45deg, yellow, red, black);
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
}
</style>
