<template>
  <div class="links-to">
    <h1 class="links-to__heading">Ссылки для JavaScript</h1>

    <h2 class="links-to__subheading">Учебник по JavaScript (основной)</h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="https://learn.javascript.ru/"
        >Учебник по JavaScript (основной)</a
      >
    </div>

    <h2 class="links-to__subheading">Учебник по JavaScript</h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="https://itchief.ru/javascript/"
        >Учебник по JavaScript "ИТШЕФ"</a
      >
    </div>

    <h2 class="links-to__subheading">
      Учебник по JavaScript. Подробное руководство, обработка событий
    </h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="https://wm-help.net/lib/b/book/1117838843/384"
        >Книга: JavaScript. Подробное руководство, 6-е издание 17 Обработка событий</a
      >
    </div>

    <h2 class="links-to__subheading">w3schools Учебник по JavaScript с наглядными примерами</h2>
    <div class="links-to__new-theme">
      <a
        class="links-to__link"
        target="_blank"
        href="https://www.w3schools.com/jsref/met_win_scrollby.asp"
        >w3schools Учебник по JavaScript с наглядными примерами</a
      >
    </div>

    <h2 class="links-to__subheading">
      Как рисовать диаграммы с использованием JavaScript и HTML5 Canvas
    </h2>
    <div class="links-to__new-theme">
      <a
        class="links-to__link"
        target="_blank"
        href="https://code.tutsplus.com/ru/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197"
        >Как рисовать диаграммы с использованием JavaScript и HTML5 Canvas</a
      >
    </div>

    <h2 class="links-to__subheading">HTML5CSS.ru</h2>
    <div class="links-to__new-theme">
      <a
        class="links-to__link"
        target="_blank"
        href="https://html5css.ru/howto/howto_js_rangeslider.php"
        >HTML5CSS.ru. Как сделать - пользовательские ползунки</a
      >
    </div>

    <h2 class="links-to__subheading">Дипломные проекты на JavaScript</h2>
    <div class="links-to__new-theme">
      <a
        class="links-to__link"
        target="_blank"
        href="http://old.code.mu/tasks/javascript/practice/diplomnye-proekty-na-javascript.html"
        >Дипломные проекты на JavaScript</a
      >
    </div>

    <h2 class="links-to__subheading">Практические задачи по JavaScript</h2>
    <div class="links-to__new-theme">
      <a
        class="links-to__link"
        target="_blank"
        href="https://www.webpupil.ru/javascript_home.php?page=5"
      >
        Практические задачи по JavaScript</a
      >
    </div>

    <h2 class="links-to__subheading">Изучение регулярных выражений.</h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="https://www.codingem.com/regex/"
        >Изучение регулярных выражений: подробное руководство</a
      >
    </div>

    <h2 class="links-to__subheading">TypeScript</h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="https://www.typescriptlang.org/"
        >TypeScript</a
      >
    </div>

    <!-- <h2 class="links-to__subheading">xxx</h2>
    <div class="links-to__new-theme">
      <a class="links-to__link" target="_blank" href="">xxx</a>

      <p class="links-to__paradraph">
        <a class="links-to__link" target="_blank" href="">xxx</a>
      </p>

      <p class="links-to__paradraph">
        <strong>xxx: </strong> <br />

        <span class="links-to__span-red">xxx </span> <br />
      </p>
    </div>   -->
  </div>
</template>

<script>
export default {
  name: 'LinksJavaScript',
}
</script>

<style lang="scss" scoped>
.links-to {
  width: calc(100% - 48px);

  margin: 0 auto;
  margin-top: 76px;
  padding: 24px;

  @media screen and (min-width: 576px) {
    width: calc(100% - 56px);
    padding: 24px 28px;
  }

  &__heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: black;
    margin-bottom: 24px;
  }

  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #0d8f0d;
  }

  &__button {
    display: block;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    border: none;
    cursor: pointer;

    &:hover {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }

    // links-to__button_active
    &_active {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }
  }

  &__paradraph {
    display: block;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
    margin-top: 24px;
  }

  &__description {
    display: block;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
    font-weight: 500;
    margin-bottom: 36px;
  }

  &__blockquote {
    // margin-top: -21px;
    padding: 0 30px 0 70px;
    border-left: 2px solid #000;
    padding-left: 18px;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
  }

  &__new-theme {
    border-left: 2px solid #000;
    padding-left: 24px;
    margin-top: 36px;
    margin-bottom: 36px;
    margin-left: 24px;
  }

  &__link {
    display: block;
    font-size: 19px;
    line-height: 1.5em;
    color: #2a5885;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }

  &__text {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
  }

  // links-to__span
  &__span {
    display: block;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    margin-top: 24px;
  }

  // links-to__span-bold
  &__span-bold {
    font-size: inherit;
    line-height: inherit;
    font-weight: 900;
    color: black;
  }

  // links-to__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #ff3b0e;
    cursor: pointer;
  }

  // links-to__span-green
  &__span-green {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: green;
  }

  // links-to__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
