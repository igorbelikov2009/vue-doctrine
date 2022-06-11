<template>
  <div class="github">
    <h1 class="github__heading">Git</h1>

    <div class="github__new-theme">
      <a class="github__link" target="_blank" href="https://htmlacademy.ru/blog/best/git-console"
        >Работа с Git через консоль</a
      >

      <span class="github__text">htmlacademy</span>
    </div>

    <div class="github__new-theme">
      <a
        class="github__link"
        target="_blank"
        href="https://htmlacademy.ru/blog/articles/version-control-system"
        >Введение в системы контроля версий</a
      >

      <span class="github__text">htmlacademy</span>
    </div>

    <div class="github__new-theme">
      <a
        class="github__link"
        target="_blank"
        href="https://htmlacademy.ru/blog/articles/first-aid-git"
        >Шпаргалка по Git. Решение основных проблем</a
      >

      <span class="github__text">htmlacademy</span>
    </div>

    <div class="github__new-theme">
      <a
        class="github__link"
        target="_blank"
        href="https://htmlacademy.ru/blog/articles/useful-commands-for-working-with-git"
        >Полезные команды для работы с Git</a
      >

      <span class="github__text">htmlacademy</span>
    </div>

    <div class="github__new-theme">
      <a
        class="github__link"
        target="_blank"
        href="https://www.shellhacks.com/git-config-username-password-store-credentials/"
        >Git — Config Имя пользователя и пароль — Хранить учетные данные</a
      >

      <span class="github__text"
        >Git — Config Настройка имени пользователя и пароля для разных репозиториев</span
      >
    </div>

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

          <strong>git branch branch-name </strong> — создает новую ветку. <br />

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

        <blockquote class="github__blockquote">
          <strong>git merge branch-name</strong> — совмещает текущую ветку с branch-name
        </blockquote>
      </div>

      <div>
        <h1 class="github__subheading">Создать новый репозиторий в командной строке</h1>

        <blockquote class="github__blockquote">
          <p class="github__paradraph">
            <strong>git init</strong>
          </p>

          <p class="github__paradraph">
            <strong>git add README.md</strong>
          </p>

          <p class="github__paradraph">
            <strong>git commit -m "first commit"</strong>
          </p>

          <p class="github__paradraph">
            <strong>git branch -M main</strong>
          </p>

          <p class="github__paradraph">
            <strong
              >git remote add origin https://github.com/igorbelikov2009/name-project.git</strong
            >
          </p>

          <p class="github__paradraph">
            <strong>git push -u origin main</strong>
          </p>
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git config</h3>

        <p class="github__paradraph">- Конфигурация и параметры git</p>

        <blockquote class="github__blockquote">
          <strong>git config --global user.name </strong> — Показывает имя пользователя <br />
          <strong>git config --global user.name 'new user' </strong> — Изменяет имя пользователя
          <br />
          <strong>git config --global user.email </strong> — Показывает email пользователя <br />
          <strong>git config --global user.email 'test@mail.ru' </strong> — Изменяет email
          пользователя <br />
        </blockquote>

        <p class="github__paradraph">
          Если выходит ошибка: <br />
          <span class="github__span-red">
            warning: user.name has multiple values <br />
            error: cannot overwrite multiple values with a single value <br />
            Use a regexp, --add or --replace-all to change user.name.</span
          >
          <br />
          Значит: каким-то образом появилось несколько имен пользователя в глобальном конфиге
          гита,<br />
          что можно исправить так:
          <span class="github__span-red"> </span>
        </p>

        <blockquote class="github__blockquote">
          <strong>git config --global --replace-all user.name "Igor Belikov"</strong> <br />
        </blockquote>

        <p class="github__paradraph">
          Либо, если вам нужны несколько имен, то можно добавить еще одно:
        </p>

        <blockquote class="github__blockquote">
          <strong> git config --global --add user.name "igorbelikov2009" </strong>
        </blockquote>
      </div>

      <div>
        <h3 class="github__subheading">git push</h3>

        <p class="github__paradraph">
          - Заливает текущие локальные коммиты в удаленный репозиторий
        </p>
      </div>

      <div>
        <h3 class="github__subheading">git pull</h3>

        <p class="github__paradraph">
          - Забирает изменения других веток с удаленного репозитория в локальный
        </p>
      </div>

      <div>
        <h3 class="github__subheading">git clone</h3>

        <p class="github__paradraph">- Клонирует проект с удаленного репозитория</p>

        <blockquote class="github__blockquote">
          <strong>git clone </strong> https://github.com/igorbelikov2009/vue-doctrine.git
        </blockquote>

        <p class="github__paradraph">
          Необходимую адресную строчку
          <strong> https://github.com/igorbelikov2009/vue-doctrine.git</strong> берём из данного
          репозитория из <strong> CODE </strong> зелёного цвета
        </p>
      </div>

      <div>
        <h3 class="github__subheading">
          Создаём новую папку через терминал, клонируем проект с удаленного репозитория
        </h3>

        <p class="github__paradraph">
          <strong> нажимаем "Ctrl" + "c"</strong> получаем в терминале: "Завершить выполнение
          пакетного файла [Y(да)/N(нет)]?"
        </p>

        <p class="github__paradraph">
          <strong> нажимаем "y"</strong> получаем в терминале: "C:\Projects\name-project>"
        </p>

        <p class="github__paradraph">
          <strong>набираем "cd.." (C:\Projects\name-project>cd..) </strong> этим мы выходим из
          текущего проекта в папку проектов C:\Projects>
        </p>

        <p class="github__paradraph">
          <strong> C:\Projects>mkdir new-git-project </strong> создали в папке Projects новую папку
          "new-git-project"
        </p>

        <p class="github__paradraph">
          <strong>C:\Projects>cd new-git-project</strong> переходим в папку new-git-project
        </p>

        <p class="github__paradraph">
          <strong>git clone https://github.com/igorbelikov2009/vue-doctrine.git</strong> клонируем
          vue-doctrine в папке new-git-project
        </p>

        <p class="github__paradraph">
          <strong></strong>
        </p>

        <p class="github__paradraph">
          <strong></strong>
        </p>
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

  &__new-theme {
    border-left: 2px solid #000;
    padding-left: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
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
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
  }

  // &__text {
  //   display: block;
  //   font-size: 16px;
  //   line-height: 24px;
  //   color: #978d8d;
  //   font-weight: 500;
  // }

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
