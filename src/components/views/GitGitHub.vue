<template>
  <div class="github">
    <h1 class="github__heading">Git</h1>
    <div>
      <p class="github__paradraph">
        Git - это система контроля версий, позволяющая эффективно управлять историей исходного кода.
      </p>

      <p class="github__paradraph">
        Любые изменения которые ты вносишь в проект могут быть сохранены с помощью Git. Ты можешь
        вернуться к любым ранее сохраненным версиям.
      </p>

      <p class="github__paradraph">
        Без Git пришлось бы создавать копии проекта, что было бы проблемой при увеличении объема
        кода в приложении.
      </p>

      <p class="github__paradraph">На текущий момент Git — стандарт для разработки.</p>
    </div>

    <h1 class="github__heading">Git и Github</h1>

    <div>
      <p class="github__paradraph">
        Для начинающих может быть непонятна разница между этими терминами.
      </p>

      <p class="github__paradraph">
        <strong>Git</strong> — система контроля версий. Технология, которую можно скачать на
        компьютер.
      </p>

      <p class="github__paradraph">
        <strong>Github</strong> — сервис, который позволяет работать с твоими Git проектами. Это
        называется репозитории. Помимо Github существуют другие сервисы (например Bitbucket,
        GitLab).
      </p>
    </div>

    <h1 class="github__heading">Как установить Git</h1>

    <div>
      <p class="github__paradraph">
        Это бесплатная технология и скачать ее можно тут:
        <a target="_blank" class="github__link" href="https://git-scm.com/downloads"
          >https://git-scm.com/downloads</a
        >
      </p>
    </div>

    <h1 class="github__heading">gitignore</h1>
    <div>
      <p class="github__paradraph">
        Игнорируемые файлы отслеживаются в специальном файле .gitignore, который регистрируется в
        корневом каталоге репозитория. В Git нет специальной команды для игнорирования отдельных
        файлов. Для этого необходимо вручную добавить в .gitignore те файлы, которые должны быть
        проигнорированы. <br />
        Например: <br />
        1. error.txt файл <br />
        2. /папка <br />
      </p>
    </div>

    <div>
      <h1 class="github__heading">Основные команды</h1>

      <h3 class="github__subheading">git init</h3>

      <p class="github__paradraph">- Позволяет проинициализировать репозиторий в текущей папке</p>

      <h3 class="github__subheading">git status</h3>

      <p class="github__paradraph">- Показывает текущий статус</p>

      <div>
        <h3 class="github__subheading">git add</h3>

        <p class="github__paradraph">- Отслеживает изменения файлов</p>

        <blockquote class="github__blockquote">
          <strong> git add index.html </strong> — добавляет файл index.html <br />
        </blockquote>

        <blockquote class="github__blockquote">
          <strong> git add . </strong> — добавляет все файлы
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git commit</h3>

        <p class="github__paradraph">- Сохраняет (фиксирует) изменения в коммит</p>

        <blockquote class="github__blockquote">
          <strong> git commit -m 'commit message' </strong> — создает коммит с сообщением
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git branch</h3>

        <p class="github__paradraph">- Работа с ветками в репозитории</p>

        <blockquote class="github__blockquote">
          <strong>git branch </strong> — показывает список веток и выделяет действующую ветку
          зелёным цветом. <br />

          <strong>git branch branch-name branch-name</strong> — создает новую ветку. <br />

          <strong>git branch -D branch-name </strong> — удаляет ветку branch-name. Для этого,
          предварительно, нужно выйти с этой ветки.
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git checkout</h3>

        <p class="github__paradraph">- Переключается на другую ветку</p>

        <blockquote class="github__blockquote">
          <strong>git checkout branch-name</strong> — переключается на последний коммит в ветке
          branch-name<br />

          <strong>git checkout -b branch-name </strong> — создает ветку branch-name и переключается
          на неё <br />
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git merge</h3>

        <p class="github__paradraph">- Совмещает текущую ветку с выбранной</p>

        <blockquote class="github__blockquote">
          <strong>git merge branch-name</strong> — совмещает текущую ветку с branch-name
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitGitHub',
}
</script>

<style lang="scss" scoped>
.github {
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

    // github__button_active
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

  &__link {
    display: block;
    font-size: 19px;
    line-height: 1.5em;
    color: #2a5885;
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

  // github__span
  &__span {
    display: block;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    margin-top: 24px;
  }

  // github__span-bold
  &__span-bold {
    font-size: inherit;
    line-height: inherit;
    font-weight: 900;
    color: black;
  }

  // github__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #ff3b0e;
    cursor: pointer;
  }

  // github__span-green
  &__span-green {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: green;
  }

  // github__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
