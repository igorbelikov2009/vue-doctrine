<template>
  <div>
    <button
      class="general-issues__button"
      @click="isCSSQuestions = !isCSSQuestions"
      :class="{ 'general-issues__button_active': isCSSQuestions }"
    >
      Вопросы по CSS
    </button>

    <div v-if="isCSSQuestions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion56 = !isQuestion56"
          :class="{ 'general-issues__question_active': isQuestion56 }"
        >
          Все для веб-дизайнера, стилизация разных вещей
        </button>

        <div class="general-issues__answer" v-if="isQuestion56">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.rudebox.org.ua/category/css/"
            >В данной рубрике вы можете найти интересные стилизации разных вещей «CSS».
          </a>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion57 = !isQuestion57"
          :class="{ 'general-issues__question_active': isQuestion57 }"
        >
          jQuery.Maskedinput js - документация на русском с примерами
        </button>

        <div class="general-issues__answer" v-if="isQuestion57">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://webstool.ru/jquery.maskedinput.html"
            >jQuery.Maskedinput js - маска для телефона</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion59 = !isQuestion59"
          :class="{ 'general-issues__question_active': isQuestion59 }"
        >
          Селекторы CSS
        </button>

        <div class="general-issues__answer" v-if="isQuestion59">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
            >Селекторы CSS</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion59 = !isQuestion59"
          :class="{ 'general-issues__question_active': isQuestion59 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion59">
          <a class="general-issues__link" target="_blank" href="">xxx</a>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Специфичность CSS-селекторов и как она работает?
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          Если одному и тому же элементу определенно сразу несколько CSS-правил с разными
          селекторами, то браузер применит тот стиль, который определён по специфичности
          CSS-селекторов. <br />
          <span class="general-issues__span-green">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/ru/docs/Web/CSS/Specificity"
              >Специфичность CSS-селекторов
            </a>
            - это алгоритм, основанный на правилах соответствия селекторов CSS, который определяет,
            какие стили будут примены к данному элементу.
          </span>
          <br />

          <br />
          Специфичность селекторов по возрастанию: <br />
          - тег и псевдоэлемент имеют специфичность 0001 <br />
          - класс, псевдокласс, атрибут - 0010 <br />
          - id имеет специфичность 0100 <br />
          - инлайновый стиль (style="...") указанный в HTML-коде имеет приоритет 1000 <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          reset - «сброс», Normalize - «нормализация». В чем разница между ними?
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <span class="general-issues__span-green">
            Сброс (reset) сбрасывает все дефолтно-браузерные стили HTML-элементов. <br />

            Normalize приводит стили к единому виду во всех браузерах.
          </span>
          <br />
          <br />

          Цели normalize.css: <br />

          - сохранять полезные настройки браузера, а не стирать их; <br />
          - нормализовать стили для широкого круга HTML-элементов; <br />
          - корректировать ошибки и несоответствия браузера; <br />
          - совершенствовать юзабилити незаметными улучшениями; <br />
          - объяснять код, используя комментарии и детальную документацию. <br />
          <br />
          Я бы выбрал Normalize из-за кроссбраузерности. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Как вы решаете стилевые проблемы, связанные с особенностями браузеров?
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          - Использую normalize или reset CSS <br />
          - Использую автопрефиксы (autoprefixer)
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          floats, как они работают
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          При применении этого свойства происходит следующее: <br />

          1. Элемент позиционируется как обычно, а затем вынимается из потока документа и сдвигается
          влево (для left) или вправо (для right) до того как коснётся либо границы родителя, либо
          другого элемента с float. <br />
          2. Если пространства по горизонтали не хватает для того, чтобы вместить элемент, то он
          сдвигается вниз до тех пор, пока не начнёт помещаться. <br />
          3. Другие непозиционированные блочные элементы без float ведут себя так, как будто
          элемента с float нет, так как он убран из потока. <br />
          4. Строки (inline-элементы), напротив, «знают» о float и обтекают элемент по сторонам.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          свойтсво z-index
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          Позиционированные элементы на веб-странице могут накладываться друг на друга в
          определенном порядке, имитируя тем самым третье измерение, перпендикулярное экрану. Каждый
          элемент может находиться как ниже, так и выше других объектов веб-страницы. Их размещением
          по z-оси и управляет z-index. Это свойство работает только для элементов, у которых
          значение position задано как absolute, fixed или relative (абсолютное, фиксированное или
          относительное). <br />
          <span class="general-issues__span-green">
            Элементы с большим z-index перекрывают элементы с меньшим.</span
          >
          При равном значении z-index, на переднем плане находится тот элемент, который в коде HTML
          написан ниже.
          <br />
          Если свойства z-index и позиционирование не заданы явно, то порядок наложения равен
          порядку следования элементов в HTML. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          Объясните, что такое блочный контекст форматирования.
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          Блочный контекст форматирования — это отображение и взаимодействие компонентов
          веб-страницы в привычном для блоков порядке. <br />

          Блочный контекст форматирования могут создать: <br />
          <br />
          - блочные HTML-элементы <br />
          - float-элементы, флекс-элементы, грид-элементы <br />
          - позиционированные элементы <br />
          - «строчные блоки» (элементы с display: inline-block) <br />
          - ячейки, анонимные ячейки, заголовки таблицы <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Эффективый CSS, на что обратить внимание?
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          Для написания эффективного CSS должна быть система. Я использую модификацию БЭМ и
          препроцессор SASS. Код можно переиспользовать.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Какими способами можно визуально скрыть элемент?
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://habr.com/ru/company/ruvds/blog/485640/"
            >Какими способами можно визуально скрыть элемент?</a
          >

          Элементы, невидимые на странице, могут пребывать в различных состояниях: <br />
          - Некий элемент совершенно невидим и, более того, удалён из потока документа. <br />
          - Глазами элемент не увидеть, но он присутствует в документе и доступен для ассистивных
          технологий наподобие средств для чтения с экрана. <br />
          - Элемент видим, но скрыт от средств для чтения с экрана. <br />
          <h4>1. HTML5-атрибут hidden</h4>
          Hidden — это логический HTML-атрибут, скрывающий элементы, которым он назначен. Когда
          браузер загружает страницу, он не выведет элементы с атрибутом hidden, за исключением тех
          случаев, когда видимость элементов будет включена вручную средствами CSS. <br />

          <span class="general-issues__span-purple"
            >&lt; img hidden src="landscape.jpg" alt=""&gt; <br />
            Вот CSS-код, который здесь использован: <br />
            img[hidden] { <br />
            display: none; <br />
            } <br />

            @media (min-width: 400px) { <br />
            img[hidden] { <br />
            display: block; <br />
            } }
          </span>
          <br />
          <span class="general-issues__span-green"
            >Если рассмотреть атрибут hidden с точки зрения доступности контента, то окажется, что
            этот атрибут полностью скрывает элемент. В результате с этим элементом не смогут
            работать средства для чтения с экрана. Не используйте этот атрибут в тех случаях, когда
            некие элементы страниц нужно делать невидимыми для человека, но не для программ для
            чтения с экрана.</span
          >

          <h4>2. CSS-свойство display</h4>
          img { <br />
          display: none; <br />
          } <br />

          @media (min-width: 400px) { <br />
          img { display: block; <br />
          } <br />

          <br />
          <span class="general-issues__span-green"
            >При использовании свойства display: none элемент становится невидимым и, кроме того,
            недоступным для средств чтения с экрана.</span
          >
          <h4>3. CSS-свойство opacity</h4>

          img { <br />
          opacity: 0; <br />
          } <br />

          <br />
          <span class="general-issues__span-green"
            >Элемент, скрытый с помощью opacity: 0, остаётся доступным для средств чтения с экрана.
            Такой элемент может получить фокус при работе со страницей с помощью клавиатуры.</span
          >
          <h4>4. CSS-свойство visibility</h4>

          article { <br />
          visibility: hidden; <br />
          } <br />
          <br />
          img { <br />
          visibility: visible; <br />
          } <br />

          <br />
          <span class="general-issues__span-green"
            >При применении свойства visibility: hidden элемент оказывается скрытым. Он, кроме того,
            удаляется из дерева доступности и, в результате, его не замечают средства для чтения с
            экрана.</span
          >
          <h4>5.Скрытие элементов и позиционирование</h4>
          .skip-link { <br />
          position: absolute; <br />
          top: -100%; <br />
          (left: -100%); <br />
          (right: -100%); <br />
          } <br />

          .skip-link:focus { <br />
          position: absolute; <br />
          top: 0; <br />
          (left: 0); <br />
          (right: 0); <br />
          } <br />

          <span class="general-issues__span-green"
            >Элемент, выведенный за пределы области просмотра, доступен для средств чтения с экрана,
            добраться до него можно и с помощью клавиатуры. Он лишь оказывается невидимым при
            обычной работе со страницей.</span
          >
          <h4>6. Размеры компонента</h4>
          width: 0px; height: 0px;
          <br />
          <h4>CSS-свойство clip-path</h4>
          Если к элементу применяется CSS-свойство clip-path — оно позволяет описать область,
          определяющую то, какая часть элемента должна быть скрытой, а какая — видимой. <br />

          <span>
            img { <br />
            clip-path: circle(0 at 50% 50%); <br />
            }
          </span>
          <br />
          <span class="general-issues__span-green"
            >Элемент, к которому применено свойство clip-path, скрыт лишь визуально. До него можно
            добраться с помощью клавиатуры, он доступен для программ чтения с экрана.</span
          >
          <h4>Манипуляции с цветом текста и с размером шрифта</h4>
          Хотя скрытие текста путём изменения его цвета или размеров шрифта распространено не так
          широко, как ранее рассмотренные методики скрытия элементов, в некоторых случаях это может
          пригодиться.
          <h4>Настройка прозрачности цвета</h4>
          Если использовать для текста прозрачный цвет, то этот текст окажется невидимым. Это может
          оказаться полезным при создании кнопок, на которых используются только значки.
          <h4>Настройка размера шрифта</h4>
          Кроме того, если установить размер шрифта в значение 0, это тоже позволит скрыть текст.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          Использовали ли вы систему сеток, и если да, то какую вы предпочитаете?
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          Использовал сетку Bootstrap, CSS grid, флекс. Предпочитаю флекс.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          медиазапросы @media
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          Медиа-запросы @media позволяют задавать различные стили элементам, компонентам
          вэб-приложения для определенного размера экрана, типа устройства, где данное
          вэб-приложение просматривается или используется. Все медиа-запросы начинаются с @media, а
          далее следует условие.
          <br />

          С помощью медиа-запросов можно задать стили для следующих типов устройств: <br />
          - all — все типы (значение используется по умолчанию) <br />
          - braille — устройства, основанные на системе Брайля, которые предназначены для чтения
          слепыми людьми <br />
          - embossed — принтеры, использующие для печати систему Брайля <br />
          - handheld — смартфоны и аналогичные им аппараты <br />
          - print — принтеры и другие печатающие устройства <br />
          - projection — проекторы <br />
          - screen — экран монитора <br />
          - speech — речевые синтезаторы, а также программы для воспроизведения текста вслух <br />
          - tty — устройства с фиксированным размером символов <br />
          - tv — телевизоры.
        </div>
      </div>

      <!-- 11 -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          Использование CSS препроцессоров? Опишите, что вам нравится и не нравится в CSS
          препроцессорах, которыми вы пользовались.
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          Преимущества: <br />
          - Вложенность. Удобно писать по БЭМу. <br />
          - Переменные. <br />
          - Миксины. <br />
          Недостатки: <br />
          - Можно увлечься и начать "программировать на CSS". Код становится сложно понять и
          поддерживать другим разработчикам.
        </div>
      </div>
      <!-- 11 -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          Псевдоэлементы ::after, ::before и другие
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements"
            >Псевдоэлемент в CSS</a
          >
          — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую
          часть выбранного элемента. Например, псевдоэлемент ::first-line может быть использован для
          изменения шрифта первой строки абзаца. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Псевдоклассы
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes"
            >Псевдокласс в CSS
          </a>
          — это ключевое слово, добавленное к селектору, которое позволяет стилизовать элемент на
          основе отношений в DOM-дереве, истории посещений (например, :visited), состояние
          содержимого (вроде :checked у некоторых элементов формы) или позиции курсора мыши
          (например, :hover определяет, находится ли курсор мыши над элементом).. Например, :hover
          может быть использован для изменения цвета кнопки при наведении курсора на неё. <br />

          div:hover { <br />
          background-color: #F89B4D; <br />
          } <br />
          Copy to Clipboard <br />
          Псевдоклассы дают возможность <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion58 = !isQuestion58"
          :class="{ 'general-issues__question_active': isQuestion58 }"
        >
          Как задать элементу определенные стили при наведении, при нажатии, при фокусе?
        </button>

        <div class="general-issues__answer" v-if="isQuestion58">
          при наведении - C помощью псевдокласса hover <br />
          при нажатии - C помощью псевдокласса active <br />
          при фокусе - C помощью псевдокласса focus <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion60 = !isQuestion60"
          :class="{ 'general-issues__question_active': isQuestion60 }"
        >
          У вас есть список покупок. Каждому второму элементу списка необходимо задать синий фон.
          Как это можно сделать используя псевдоселекторы
        </button>

        <div class="general-issues__answer" v-if="isQuestion60">
          С помощью псевдокласса tr:nth-child(even) или tr:nth-child(2n) <br />
          (чётные строки HTML)
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Что такое блочная модель
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          Блочным называется элемент, который отображается на веб-странице в виде прямоугольника.
          <br />
          <span class="general-issues__span-green">
            Такой элемент занимает всю доступную ширину, высота элемента определяется его
            содержимым, и он всегда начинается с новой строки.</span
          >
          <br />
          К блочным элементам относятся контейнеры div, h1, p и др <br />

          Блочная модель отвечает за определение того, сколько места займет блочный элемент,
          схлопнутся или нет border или margin, размеры блока. <br />

          Правила
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/HTML/Block-level_elements"
            >блочной модели:</a
          >
          <br />
          Размеры блочного элемента складываются из width, height, padding, border, and margin.
          <br />

          Если высота (height) блока не задана, то высота блока равна: высота контента этого блока +
          padding'и. <br />

          Если ширина блока не задана, то блоки, для которых не задано float, будут иметь ширину:
          ширина родителя - padding'и родителя. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Строчная модель
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          В HTML (Языке Гипертекстовой Разметки),
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/HTML/Inline_elements"
            >строчные элементы</a
          >
          это те, которые занимают только то пространство, которое ограничено тегами, определяющими
          строчный элемент (необходимое для отображения их содержимого) и не нарушая потока
          содержимого (не требующее новой строки после каждого элемента). <br />
          <span class="general-issues__span-green">
            Строчный элемент не начинается с новой строки и в ширину занимает столько места, сколько
            это необходимо для его отображения.</span
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          В чём разница между строчным и блочно-строчным элементом?
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          Для лучшего сравнения я добавил блочный элемент. <br />

          block <br />

          - Начинается с новой строки родительского элемента и занимает всю строку. <br />
          - Можно задавать ширину и высоту. <br />
          - Можно выровнять с помощью vertical-align. <br />
          - Margins и paddings работают со всех сторон. <br />
          <br />
          inline-block <br />

          - Размер зависит от контента. <br />
          - Можно задавать ширину и высоту. <br />
          - Можно выровнять с помощью vertical-align. <br />
          - Margins и paddings работают со всех сторон. <br />
          <br />
          inline <br />

          - Размер зависит от контента. <br />
          - Ширину и высоту задавать нельзя. <br />
          - Можно выровнять только по горизонтали. Место, которое занимает элемент по вертикали,
          зависит - от line-height. <br />
          - Ведёт себя как блочный элемент, если задать вертикальные margins и paddings.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          Что делает * { box-sizing: border-box; }? В чём его преимущества?
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          Свойство box-sizing определяет как вычисляется общая ширина и высота элемента. По
          умолчанию все элементы имеют box-sizing: content-box. - `content-box`. Если мы задаём
          элементу ширину 100 пикселей, то ширина его контента будет 100 пикселей, а финальная
          ширина элемента, в этом случае, увеличится на сумму отступов и толщину бордера. <br />

          - `border-box` говорит браузеру учитывать любые границы и внутренние отступы в значениях,
          которые вы указываете в ширине и высоте элемента. Если вы выставите элементу ширину 100
          пикселей, то эти 100 пикселей будут включать в себя границы и внутренние отступы, а
          контент сожмётся, чтобы выделить для них место.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          Свойство display.
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">
          <a class="general-issues__link" target="_blank" href="http://htmlbook.ru/css/display"
            >display</a
          >
          определяет тип отображения элемента, как элемент должен быть показан в документе. <br />

          1. none - элемент не показывается. <br />
          2. block - блочные элементы располагаются вертикально один над другим. Блок стремится
          расшириться на всю доступную ширину. Можно указать ширину и высоту явно. Это
          значение`display`многие элементы имеют по умолчанию:`div` , заголовок`h1,`параграф`p.`
          <br />
          3. Inline-элементы располагаются на одной строке, последовательно. Ширина и высота
          элемента определяются по содержимому. Поменять их нельзя. <br />
          4. Inline-block - элемент продолжает находиться в строке (`inline`), но при этом может
          иметь важные свойства блока, ему можно указать ширину и высоту явно <br />
          5. Flex - это свойство, при котором элемент растягивается или сжимается для заполнения
          собой свободного пространства. <br />
          6. Inline-flex - похоже на флекс, только элементы будут растягиваться или сжиматься
          инлайново (в строку) для заполнения собой свободного пространства. <br />
          7. Table - Для таблицы целиком`table`, для строки –`table-row`, для ячейки –`table-cell`и
          т.д.
        </div>
      </div>

      <!-- 21 -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          Какими CSS-фреймворками вы пользовались? Что бы вы хотели в них изменить/улучшить?
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">
          Использовал Bootstrap. CSS-фреймворки накладывают ограничения и добавляют работы по
          переопределению дефолтных свойств элементов. Если нет чётких требования использования
          фреймворков, стараюсь их избегать.
        </div>
      </div>
      <!-- 21 -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          Пользовались ли вы Flexbox или Grid?
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">
          Да. Использую flexbox. У grid всё ещё не такая широкая поддержка браузеров.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          Можете ли вы объяснить разницу между отзывчивым (responsive) сайтом и сайтом, сделанным по
          принципу mobile-first?
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          Отзывчивая и mobile-first верстки служат для того, чтобы пользователь мог пользоваться
          сайтом с разных устройств. Верстка подстраивается под различные размеры экрана,
          разрешения, контекст использования, механизмы контроля и т.д. <br />

          Отзывчивая верстка начинается с верстки десктопной версии сайта. Затем она адаптируется
          для меньших экранов. <br />

          Mobile-first начинается с верстки версии сайта для мобильных устройств. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          В чём разница между относительным, фиксированным, абсолютным и статически
          позиционированным элементом?
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          <span class="general-issues__span-green"> - static - </span> значение по умолчанию,
          позволяет элементу находиться в обычном его состоянии. Свойства top, right, bottom, left и
          z-index не применяются. <br />
          <span class="general-issues__span-green"> - relative - </span> элемент позиционируется в
          соответствии с потоком документа, а затем смещается относительно себя на основе значений
          top, right, bottom и left. Смещение не влияет на положение любых других элементов. <br />
          <span class="general-issues__span-green"> - absolute - </span> элемент выдёргивается из
          потока и выстраивается относительно ближайшего элемента-предка с position: relative. Если
          его нет, то относительно body (страницы). Абсолютно спозиционированные элементы могут
          иметь margin и padding и не схлопываются с margin и padding других элементов. Никак не
          влияют на другие элементы. <br />
          <span class="general-issues__span-green"> - fixed - </span> элемент выбивается из обычного
          потока документа, и для элемента в макете страницы не создаётся пространство. С помощью
          top, bottom и т.д. его можно прибить соответственно сверху, снизу и т.п.. Остаётся на
          позиции относительно окна документа и не меняет положение при скроле.
          <br />
          <span class="general-issues__span-green"> - sticky - </span> смесь relative и fixed.
          Элемент ведёт себя как относительно спозиционированный, пока не достигнет заданной
          позиции, после которой ведёт себя как fixed элемент. <br />
          Элемент позиционируется в соответствии с нормальным потоком документа, а затем смещается
          относительно его ближайшего прокручивающего предка и содержащего блока (ближайший
          родительский уровень блока). Липкий элемент «прилипает» к его ближайшему предшественнику,
          имеющему «механизм прокрутки» (созданный при помощи overflow)
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          Центрирование блочного элемента
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">
          1.Задать контейнеру-родителю раскладку флексбокса (display: flex), а дочернему
          флекс-элементу margin: auto. <br />
          <span class="general-issues__span-purple">
            .container { <br />
            display: flex; <br />
            } <br
          /></span>

          <span class="general-issues__span-purple"
            >.child { <br />
            margin: auto <br />
            } <br
          /></span>

          2. Задать контейнеру-родителю: <br />
          <span class="general-issues__span-purple"
            >.container { <br />
            display: flex; <br />
            align-items: center; <br />
            justify-content: center; <br />
            }</span
          >
          <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          Центрирования инлайновых элементов
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">
          Для центрирования инлайновых элементов
          <a
            class="general-issues__link"
            target="_blank"
            href="https://learn.javascript.ru/css-center#gorizontalnoe"
          >
            по горизонтали</a
          >
          – достаточно поставить родителю
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS/text-align"
            >text-align: center;</a
          >
          <br />
          <br />
          Центрирование инлайновых элементов
          <a
            class="general-issues__link"
            target="_blank"
            href="https://habr.com/ru/company/netcracker/blog/277433/"
            >по вертикали
          </a>
          для потомка устанавливаем значение относительно родительского элемента
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS/vertical-align"
            >vertical-align: middle;</a
          >

          <h3>Выравнивание с помощью line-height</h3>
          Если известно, что внутренний блок должен занимать не более одной строки текста, то можно
          воспользоваться свойством line-height и задать его равным высоте внешнего блока. Поскольку
          контент внутреннего блока не должен переноситься на вторую строку, рекомендуется также
          добавить правила white-space: nowrap и overflow: hidden. <br />

          <span class="general-issues__span-purple">
            .container { <br />
            height: 200px; <br />
            line-height: 200px; <br />
            } <br />

            .child { <br />
            white-space: nowrap; <br />
            overflow: hidden; <br />
            }
          </span>

          <h3>Выравнивание многострочного текста</h3>

          <span class="general-issues__span-purple">
            .container { <br />
            height: 200px; <br />
            line-height: 200px; <br />
            } <br />

            .child { <br />
            line-height: normal; <br />
            display: inline-block; <br />
            vertical-align: middle; <br />
            }
          </span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          Центрирование абсолютно позиционированных или фиксированных элементов
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">
          <h4>Выравнивание с помощью "растягивания"</h4>

          Данный способ можно применять, когда высота внешнего блока неизвестна, но известна высота
          внутреннего. <br />

          Для этого нужно: <br />

          1. задать внешнему блоку относительное позиционирование, а внутреннему - абсолютное;
          <br />
          2. добавить внутреннему блоку правила top: 0 и bottom: 0, в результате чего он растянется
          на всю высоту внешнего блока; <br />
          3. установить значение auto для вертикальных отступов внутреннего блока. <br />

          <span class="general-issues__span-purple">
            .container { <br />
            position: relative; <br />
            } <br />

            .child { <br />
            height: 100px; <br />
            position: absolute; <br />
            или <br />
            position: fixed; <br />
            top: 0; <br />
            bottom: 0; <br />
            margin: auto 0; <br />
            }
          </span>
          <br />
          Минус данного способа — должна быть известна высота внутреннего блока.

          <h4>Выравнивание с помощью отрицательного margin-top</h4>
          Этот способ получил широкую известность и применяется очень часто. Как и предыдущий, он
          применяется, когда высота внешнего блока неизвестна, но известна высота внутреннего.
          <br />
          Нужно задать внешнему блоку относительное позиционирование, а внутреннему - абсолютное.
          Затем необходимо сдвинуть внутренний блок вниз на половину высоты внешнего блока top: 50%
          и поднять вверх на половину собственной высоты margin-top: (H .child / 2). <br />

          <span class="general-issues__span-purple">
            .container { <br />
            position: relative; <br />
            } <br />

            .child { <br />
            height: 100px; <br />
            position: absolute; <br />
            top: 50%; <br />
            margin-top: -50px; <br />
            }
          </span>
          <br />
          <h4>Выравнивание с помощью transform</h4>
          Данный способ похож на предыдущий, но он может быть применен, когда высота внутреннего
          блока неизвестна. <br />

          Можно использовать top: 50%, left: 50% в сочетании с translateX(-50%) translateY(-50%) для
          динамического горизонтального/вертикального центрирования элемента: <br />
          <span class="general-issues__span-purple">
            .container { <br />
            position:relative; <br />
            } <br />
            .child { <br />
            position: absolute; <br />
            или <br />
            position: fixed; <br />
            top: 50%; <br />
            left: 50%; <br />
            transform: translateX(-50%) translateY(-50%); <br />
            }</span
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          Выравнивание с помощью псевдоэлемента
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">
          Это наиболее универсальный способ, который может применяться, когда неизвестны высоты
          обоих блоков. <br />

          Суть способа в добавлении внутри внешнего блока строчного блока inline-block высотой в
          100% и задания ему вертикального выравнивания. В этом случае высота добавленного блока
          будет равна высоте внешнего блока. Внутренний блок выровняется по вертикали относительно
          добавленного, а значит, и внешнего блока. <br />

          Чтобы не нарушать семантику, строчный блок рекомендуется добавить с помощью псевдоэлемента
          before или after. <br />
          <span class="general-issues__span-purple">
            .container:before { <br />
            display: inline-block; <br />
            height: 100%; <br />
            vertical-align: middle; <br />
            content: ""; <br />
            } <br />

            .child { <br />
            display: inline-block; <br />
            vertical-align: middle; <br />
            }
          </span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          Запретить - разрешить прокрутку страницы
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://learn.javascript.ru/size-and-scroll-window#zapretit-prokrutku"
            >Запретить прокрутку</a
          >

          <p>
            запретить: <br />
            <span class="general-issues__span-purple">
              document.body.style.overflow = 'hidden' ;
            </span>
          </p>

          <p>
            разрешить: <br />
            <span class="general-issues__span-purple"> document.body.style.overflow = '' ; </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          Убрать полосу прокрутки
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://active-vision.ru/blog/polosa-prokrutki-css/"
            >Как стилизовать или убрать полосу прокрутки — CSS скроллбар</a
          >

          <p>
            <span class="general-issues__span-green"> /*Убрать полосу прокрутки у элемента*/</span>
            <br />
            <span class="general-issues__span-purple">
              .element::-webkit-scrollbar { width: 0; }</span
            >
          </p>

          <p>
            <span class="general-issues__span-green"
              >/*Убрать полосу прокрутки для всей страницы*/
            </span>
            <br />
            <span class="general-issues__span-purple"> ::-webkit-scrollbar { width: 0; }</span>
          </p>

          <p>
            <span class="general-issues__span-purple">
              .element { <br />
              width: 1280px; <br />
              display: flex; <br />
              overflow-x: scroll; <br />
              <br />
              @media screen and (min-width: 1280px) { <br />
              overflow-x: hidden; <br />
              <br />
              <span class="general-issues__span-green"
                >/*Убрать полосу прокрутки для всей страницы*/
              </span>
              <br />
              .element::-webkit-scrollbar { <br />
              width: 0; <br />
              } <br />
              } <br />
              } <br />
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          Убрать стрелочки с "input type='number'"
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://ru.stackoverflow.com/questions/431590/%D0%A3%D0%B1%D1%80%D0%B0%D1%82%D1%8C-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BE%D1%87%D0%BA%D0%B8-%D1%81-input-type-number"
          >
            Убрать стрелочки с "input type='number'"</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          Как сделать тень блока с помощью свойства box-shadow
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://html5book.ru/css3-ten-bloka/"
            >Как сделать тень блока с помощью свойства box-shadow</a
          >
        </div>
      </div>
      <!-- 31 -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          transform Интерактивный пример
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/CSS/transform"
            >transform Интерактивный пример</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          transition-timing-function
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">
          <a
            class="general-issues__link"
            target="_blank"
            href="http://htmlbook.ru/index.php/css/transition-timing-function"
            >transition-timing-function</a
          >
        </div>
      </div>

      <a class="general-issues__link" target="_blank" href="">xx</a>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion32 = !isQuestion32"
          :class="{ 'general-issues__question_active': isQuestion32 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion32">XXX</div>
      </div>

      <span class="general-issues__span-purple"></span>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion34 = !isQuestion34"
          :class="{ 'general-issues__question_active': isQuestion34 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion34">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion36 = !isQuestion36"
          :class="{ 'general-issues__question_active': isQuestion36 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion36">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion37 = !isQuestion37"
          :class="{ 'general-issues__question_active': isQuestion37 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion37">XXX</div>
      </div>

      <!-- 41 -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion38 = !isQuestion38"
          :class="{ 'general-issues__question_active': isQuestion38 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion38">XXX</div>
      </div>
      <!-- 41 -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion39 = !isQuestion39"
          :class="{ 'general-issues__question_active': isQuestion39 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion39">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion40 = !isQuestion40"
          :class="{ 'general-issues__question_active': isQuestion40 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion40">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion41 = !isQuestion41"
          :class="{ 'general-issues__question_active': isQuestion41 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion41">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion42 = !isQuestion42"
          :class="{ 'general-issues__question_active': isQuestion42 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion42">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion43 = !isQuestion43"
          :class="{ 'general-issues__question_active': isQuestion43 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion43">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion44 = !isQuestion44"
          :class="{ 'general-issues__question_active': isQuestion44 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion44">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion45 = !isQuestion45"
          :class="{ 'general-issues__question_active': isQuestion45 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion45">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion46 = !isQuestion46"
          :class="{ 'general-issues__question_active': isQuestion46 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion46">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion47 = !isQuestion47"
          :class="{ 'general-issues__question_active': isQuestion47 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion47">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion48 = !isQuestion48"
          :class="{ 'general-issues__question_active': isQuestion48 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion48">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion49 = !isQuestion49"
          :class="{ 'general-issues__question_active': isQuestion49 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion49">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion50 = !isQuestion50"
          :class="{ 'general-issues__question_active': isQuestion50 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion50">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion51 = !isQuestion51"
          :class="{ 'general-issues__question_active': isQuestion51 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion51">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion52 = !isQuestion52"
          :class="{ 'general-issues__question_active': isQuestion52 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion52">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion53 = !isQuestion53"
          :class="{ 'general-issues__question_active': isQuestion53 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion53">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion54 = !isQuestion54"
          :class="{ 'general-issues__question_active': isQuestion54 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion54">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion55 = !isQuestion55"
          :class="{ 'general-issues__question_active': isQuestion55 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion55">XXX</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSSQuestions',

  data() {
    return {
      isCSSQuestions: false,
      isQuestion01: false,
      isQuestion02: false,
      isQuestion03: false,
      isQuestion04: false,
      isQuestion05: false,
      isQuestion06: false,
      isQuestion07: false,
      isQuestion08: false,
      isQuestion09: false,
      isQuestion10: false,
      isQuestion11: false,
      isQuestion12: false,
      isQuestion13: false,
      isQuestion14: false,
      isQuestion15: false,
      isQuestion16: false,
      isQuestion17: false,
      isQuestion18: false,
      isQuestion19: false,
      isQuestion20: false,
      isQuestion21: false,
      isQuestion22: false,
      isQuestion23: false,
      isQuestion24: false,
      isQuestion25: false,
      isQuestion26: false,
      isQuestion27: false,
      isQuestion28: false,
      isQuestion29: false,
      isQuestion30: false,
      isQuestion31: false,
      isQuestion32: false,
      isQuestion33: false,
      isQuestion34: false,
      isQuestion35: false,
      isQuestion36: false,
      isQuestion37: false,
      isQuestion38: false,
      isQuestion39: false,
      isQuestion40: false,
      isQuestion41: false,
      isQuestion42: false,
      isQuestion43: false,
      isQuestion44: false,
      isQuestion45: false,
      isQuestion46: false,
      isQuestion47: false,
      isQuestion48: false,
      isQuestion49: false,
      isQuestion50: false,
      isQuestion51: false,
      isQuestion52: false,
      isQuestion53: false,
      isQuestion54: false,
      isQuestion55: false,
      isQuestion56: false,
      isQuestion57: false,
      isQuestion58: false,
      isQuestion59: false,
      isQuestion60: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.general-issues {
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

    // general-issues__button_active
    &_active {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }
  }

  &__question {
    display: block;
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 24px;
    color: black;
    color: blue;
    border: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }

    // general-issues__question_active
    &_active {
      color: blue;
    }
  }

  &__answer {
    font-size: 19px;
    line-height: 24px;
    margin-left: 24px;
  }

  // general-issues__span-green
  &__span-green {
    color: green;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-purple
  &__span-purple {
    color: purple;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__link
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
}
</style>
