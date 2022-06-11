<template>
  <div>
    <button
      class="general-issues__button"
      @click="isGeneralIssues = !isGeneralIssues"
      :class="{ 'general-issues__button_active': isGeneralIssues }"
    >
      Общие вопросы
    </button>

    <div v-if="isGeneralIssues">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion60 = !isQuestion60"
          :class="{ 'general-issues__question_active': isQuestion60 }"
        >
          Статьи по сайтостроению
        </button>

        <div class="general-issues__answer" v-if="isQuestion60">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://webformyself.com/category/javascriptajax-2/javascriptajax/"
            >Статьи по сайтостроению(много)</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion36 = !isQuestion36"
          :class="{ 'general-issues__question_active': isQuestion36 }"
        >
          HTML, CSS, JavaScript, jQuery справочник
        </button>

        <div class="general-issues__answer" v-if="isQuestion36">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://basicweb.ru/html/html_tags.php"
            >HTML, CSS, JavaScript, jQuery справочник</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion37 = !isQuestion37"
          :class="{ 'general-issues__question_active': isQuestion37 }"
        >
          htmlbook
        </button>

        <div class="general-issues__answer" v-if="isQuestion37">
          <a class="general-issues__link" target="_blank" href="http://htmlbook.ru/html/attr/hidden"
            >htmlbook</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion38 = !isQuestion38"
          :class="{ 'general-issues__question_active': isQuestion38 }"
        >
          figma.com
        </button>

        <div class="general-issues__answer" v-if="isQuestion38">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.figma.com/file/E1ctRoFLkYECcIDJgWDXK8Sv/Web-%E2%80%A2-Alpha?node-id=0%3A1"
            >Alpha</a
          >

          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.figma.com/file/1ROI5eUMFVLsyKHxRUCwE5/NPF-%E2%80%A2-Renpensions-site?node-id=0%3A1634"
            >NPF</a
          >

          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.figma.com/file/R82Jy7NiMWrP7VHVn8Paqp/%D0%A6%D0%B0%D1%80%D1%8C-%D0%BB%D0%B5%D0%BD%D0%B4%D0%BE%D1%81-1.1?node-id=216%3A468"
            >Царь-лендос</a
          >

          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.figma.com/file/8JLUz1mZDIMkE8BvTumzdd/Untitled?node-id=0%3A1"
            >Южный банк</a
          >

          <a class="general-issues__link" target="_blank" href="">xxx</a>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion38 = !isQuestion38"
          :class="{ 'general-issues__question_active': isQuestion38 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion38">
          <a class="general-issues__link" target="_blank" href="">xxx</a>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          БЭМ-методология
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <span class="general-issues__span-green"> БЭМ (Блок, Элемент, Модификатор)</span> —
          компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на
          независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и
          повторно использовать существующий код, избегая «Copy-Paste». <br />

          <span class="general-issues__span-green"> Блок</span> - функционально независимый
          компонент страницы, который может быть повторно использован. Блоки можно вкладывать друг в
          друга. Допустима любая вложенность блоков.
          <br />

          <span class="general-issues__span-green"> Элемент</span> - Составная часть блока, которая
          не может использоваться в отрыве от него. Элементы можно вкладывать друг в друга.
          Допустима любая вложенность элементов. Элемент — всегда часть блока, а не другого
          элемента. <br />

          Структура полного имени элемента соответствует схеме:
          <span class="general-issues__span-green">имя-блока__имя-элемента.</span> Имя элемента
          отделяется от имени блока двумя подчеркиваниями (__). <br />

          <span class="general-issues__span-green"> Модификатор</span> - Cущность, определяющая
          внешний вид, состояние или поведение блока либо элемента. <br />

          <br />
          Какие требования мы сформулировали: <br />
          - Разработчик должен понимать свой код (даже вернувшись к нему через год) и код любого
          программиста в команде БЭМ-проекта. <br />
          - Любой блок кода может быть использован повторно: необходимо создать общую базу знаний и
          не писать каждый раз всё с нуля, а использовать готовые наработки. <br />
          - Работая в одной команде, разработчики, менеджеры, дизайнеры и верстальщики должны
          называть одни и те же вещи одинаково. То есть говорить на одном языке. <br />
          - Команды могут обмениваться специалистами для реализации какой-то конкретной
          функциональности. <br />
          - Порог входа при переходе на новый проект должен быть снижен за счет одинаковой структуры
          организации всех БЭМ-проектов и одинаковых правил именования всех сущностей.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Семантическая вёрстка
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          Семантическая вёрстка - создание веб-страниц при использовании HTML-тегов в соответствии с
          их семантикой (предназначением), предполагающее иерархию страницы. Для оформления
          веб-страниц, написанных в соответствии с семантикой, используются каскадные таблицы стилей
          (CSS). Стандарт HTML с самого начала включал в себя ряд семантических тегов, но большую
          популярность семантическая вёрстка получила после начала работ над HTML5. <br />

          <a
            class="general-issues__link"
            target="_blank"
            href="https://htmlacademy.ru/blog/boost/frontend/semantics"
            >Семантическая вёрстка</a
          >
          — это разметка, которая опирается на смысловое предназначение каждого блока и логическую
          структуру документа.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Кроссбраузерность
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://imajor.ru/glossary/terms/krossbrauzernost.18/"
            >Кроссбраузерность
          </a>
          – это способность веб-ресурса отображаться одинаково и работать во всех популярных
          браузерах, без перебоев в функционировании и ошибок в верстке, а также с одинаково
          корректной читабельностью контента. Из-за стремительного развития технологий, сайт
          рекомендуется делать кроссбраузерным только по отношению к новейшим версиям браузеров:
          <br />
          - Google Chrome. <br />
          - Mozilla Firefox. <br />
          - Opera. <br />
          - Internet Explorer. <br />
          - Netscape. <br />
          - Safari. <br />
          <br />
          Стоит отметить, что элементы веб-ресурса не должны быть абсолютно идентичны во всех
          браузерах, которые существуют на сегодняшний день. Соответствующим можно считать сайт,
          если: <br />
          - информация на странице читабельная; <br />
          - сохранена структура; <br />
          - нет ошибок в верстке; <br />
          - текст не «накладывается» поверх другого текста и изображений, если только это не
          предусмотрено автором контента.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Фиксированная верстка
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          Фиксированная верстка (Fixed Layout) — подход создания страниц сайта, которые имеют
          заданную ширину. Ширина компонентов на странице не изменяется. На мониторах с маленьким
          разрешением появляется горизонтальная полоса прокрутки. Данный тип верстки не подходит для
          удобного отображения информации на мобильных устройствах. <br />
          Пример ниже демонстрирует строгое задание ширины для тега body: <br />
          body { <br />
          width: 1200px; <br />
          }
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          Резиновая верстка
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          Резиновая верстка (Elastic layout) подразумевает возможность компонентов сайта менять свои
          размеры в зависимости от размера окна браузера, растягиваться от и до указанных
          минимальных и максимальных размеров. Это достигается благодаря использованию относительных
          значений, max-width / min-width (максимальная / минимальная ширина), max-height /
          min-height (максимальная / минимальная высота). <br />
          Примеры использования техник резиновой верстки: <br />
          body { <br />
          width: 90%; <br />
          } <br />
          div { <br />
          min-width: 320px; <br />
          max-width: 1200px; <br />
          }
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Адаптивная верстка
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          Адаптивная верстка (Adaptive Layout) позволяет подстраиваться основному контейнеру и
          любому другому элементу сайта под разрешение экрана, делая возможным менять размер шрифта,
          расположение объектов, цвет и т. д. Происходит это динамически, например, с использованием
          медиа-запросов (@media), позволяющих автоматически определять разрешение монитора, тип
          устройства и подставлять указанные значения в автоматическом режиме. В примере ниже
          задается ширина div равная 960px для всех устройств, ширина которых меньше 1200px и 320px
          для всех устройств, ширина которых меньше 480px. <br />
          <br />

          @media all and (max-width: 1200px) { <br />
          div { <br />
          width: 960px <br />
          } <br />
          } <br />
          <br />
          @media all and (max-width: 480px) { <br />
          div { <br />
          width: 320px <br />
          } <br />
          }
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Отзывчивая верстка
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          Отзывчивая верстка (Responsive Layout) — это объединение резиновой и адаптивной вёрстки.
          При данном подходе используются как медиа-запросы, так и процентное задание ширины
          компонентов. Используя данный вид верстки можно с уверенностью сказать, что сайт
          приспособится к любому устройству. <br />
          Ниже задается ширина div равная 50% от размера родительского компонента для всех
          устройств, ширина которых меньше 1200px и 100% для всех устройств, ширина которых меньше
          480px.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Основные техники реализации сайтов под любое разрешение
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://jazzteam.org/ru/technical-articles/overview-of-approaches-and-css-frameworks-for-adaptive-web-page-layout/"
            >Адаптивная верстка сайтов: обзор подходов и CSS фреймворков</a
          >

          <h4>Относительные значения</h4>

          Использование относительных значений позволяет отобразить информацию и компоненты на
          странице без потери читабельности и удобства просмотра. <br />

          <h4>Относительные значения для размеров и отступов</h4>
          Относительные значения можно задавать для width, height, margin, padding и т. д. Самый
          известный способ задания относительного размера — указание в процентах (%). <br />
          Ниже приводится пример задания ширины равной 90% от размера родительского компонента.
          <br />
          body {
          <br />
          width: 90%
          <br />
          }
          <br />

          При этом значение высчитывается относительно родительского компонента. <br />
          Также существуют значения относительно размера экрана: <br />
          - vw — 1% ширины окна. При уменьшении ширины окна, уменьшается ширина, высота, шрифт
          элемента; <br />
          - vh — 1% высоты окна. При уменьшении высоты окна, уменьшается ширина, высота, шрифт
          элемента; <br />
          - vmin — выбирается наименьшее из vw и vh; <br />
          - vmax — выбирается наибольшее из vw и vh. <br />
          - Ниже рассмотрен пример использования vw и vh. В данном случае ширина и высота тега div
          будут равны 50% от ширины и высоты экрана соответственно. <br />
          div {
          <br />
          width: 50vw; <br />
          height: 50vh; <br />
          }
          <br />

          <h4>Относительные значения для размера шрифта</h4>
          Существуют следующие относительные значения для шрифтов: <br />

          - em — задаёт размер относительно шрифта родителя; <br />
          - rem — задаёт размер относительно шрифта html. Рассмотрим пример: <br />
          html {
          <br />
          font-size: 20px; <br />
          } <br />
          body { <br />
          font-size: 1.5em <br />
          } <br />
          <br />

          Вычислим размер шрифта для тега body. В данном примере размер шрифта для body задается
          относительно размера html. Таким образом, размер шрифта для body будет равен 30px (20px *
          1.5 = 30px). <br />

          Также относительные размеры шрифта можно задавать с помощью %, vw, vh и т. д. В следующем
          примере размер шрифта для body равен 80% от размера шрифта html — 16px. <br />

          html {
          <br />
          font-size: 20px; <br />
          } <br />
          body {
          <br />
          font-size: 80% <br />
          } <br />
          <br />

          <h4>Максимальные и минимальные размеры компонентов</h4>
          Для задания максимальных и минимальных значений ширины и высоты компонента используются
          свойства max-width / min-width и max-height / min-height соответственно. <br />

          Рассмотрим пример: <br />
          div { <br />
          width: 60%; <br />
          max-width: 500px; <br />
          } <br />

          Допустим, что родительским компонентом данного div является body. Тогда, при изменении
          ширины экрана, ширина данного компонента будет составлять 60% от ширины body. Однако он
          будет увеличиваться только до величины, определенной в max-width, это 500px. Как только
          контейнер достигнет этой ширины — он перестанет увеличиваться. <br />

          <h4>Использование медиа-запросов</h4>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          HTML - Язык программирования
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          HTML — стандартизированный язык гипертекстовой разметки документов для просмотра
          веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам
          HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который
          будет отображаться на экране монитора
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          CSS, фреймворки CSS.
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <span class="general-issues__span-green">Каскадная таблица стилей (CSS)</span>
          формально является набором команд и инструментов для работы с внешним видом веб-страницы.
          Она делает интерфейс более восприимчивым и приятным – огромное количество сайтов работает
          на основе связки HTML и CSS. Как и в случае с языками программирования, существует
          множество готовых библиотек CSS, созданных профессионалами для удобства работы со стилями.
          <br />
          <br />
          <span class="general-issues__span-green">CSS-фреймворк</span>
          — фреймворк, созданный для упрощения работы верстальщика, быстроты разработки и исключения
          максимально возможного числа ошибок вёрстки (проблемы совместимости различных версий
          браузеров и т. д.). Готовые к использованию классы являются их основными строительными
          блоками. Они позволяют применять к элементам HTML заранее определенные правила, а также
          включают в себя готовые компоненты (меню, кнопки, карточки). Данные фреймворки
          подразумевают использование различных подходов для корректного отображения сайтов на
          устройствах любого размера. Многие разработчики предпочитают использование
          CSS-фреймворков, вместо прописывания всех стилей вручную. Это обусловлено следующими
          причинами: <br />
          <br />
          - Более быстрая разработка <br />
          - Поддержка кроссбраузерности <br />
          - Поддержка различных устройств и размеров экранов <br />
          - Единообразие кода при работе в команде позволяет снизить число разногласий при
          разработке. <br />
          - Как и библиотеки скриптовых языков программирования, CSS-библиотеки, обычно имеющие вид
          внешнего CSS-файла, добавляются в заголовок веб-страницы. <br />

          Рассмотрим самые популярные CSS-фреймворки.

          <br />

          <a class="general-issues__link" target="_blank" href="https://getbootstrap.com/"
            >Bootstrap</a
          >
          <br />

          <a
            class="general-issues__link"
            target="_blank"
            href="https://mdbootstrap.com/docs/standard/"
            >Material Design for Bootstrap</a
          >
          <br />

          <a class="general-issues__link" target="_blank" href="https://materializecss.com/"
            >Materialize</a
          >
          <br />

          <a class="general-issues__link" target="_blank" href="https://bulma.io/">Bulma</a> <br />

          <a class="general-issues__link" target="_blank" href="https://purecss.io/">Pure</a> <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          Что такое DOM?
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          DOM (Document Object Model, объектная модель документа) — это программный интерфейс к
          HTML-документам, который позволяет воздействовать на документ из скриптов, меняя его
          стили, содержимое. В DOM документ представлен в виде дерева узлов.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          Какая разница между элементами span и div?
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          span — это строчный (inline) элемент. <br />
          div — это блочный (block) элемент. <br />

          Элементы div нужно использовать для оформления разделов документа. А элементы span — в
          роли контейнеров для небольших объёмов текста, для изображений и других подобных элементов
          страниц. <br />

          Надо отметить, что нельзя помещать блочные элементы в строчные.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Что такое мета-теги?
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          Мета-теги — это теги, находящиеся в теге страницы &lt; head &gt; и описывающие содержимое
          страницы. Мета-теги не выводятся на странице. Они имеются лишь в её коде. <br />

          Их основная задача заключается в том, чтобы кратко описывать содержимое страниц поисковым
          системам <br />
          &lt;head&gt; <br />
          &lt;meta charset="UTF-8"&gt; <br />
          &lt;meta name="description" content="Description search engines use"&gt; <br />
          &lt;meta name="keywords" content="Keywords, of, your, page"&gt; <br />
          &lt;meta name="author" content="Me"&gt; <br />
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; <br />
          &lt;/head&gt;
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Что такое API
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          API - Application Programming Interface. Он обеспечивает взаимодействие между двумя
          системами. Это как винтик, который связывает две детали, или как шестерёнка, при помощи
          которой приводится в движение две соседние шестерёнки. Соответственно API могут быть не
          только в ВЭБ - приложении, они могут быть и в микроконтроллерах, и в каких то десктопных
          приложениях и т.д. <br />

          <a
            class="general-issues__linl"
            target="_blank"
            href="https://www.youtube.com/watch?v=My6AyLIs-Mo"
          ></a>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Десктопные приложения
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          Десктопные приложения – это программы, логика работы которых требует наличия оператора
          (человека работающего с программой), содержащие в себе всю полную функциональность и
          способные работать отдельно на любой машине изолированно от других приложений. Microsoft
          Word, Excel, Блокнот, однопользовательские игры – всё это примеры десктопных приложений.
          Для их работы необходимы лишь достаточные аппаратные ресурсы компьютера, само приложение и
          набор библиотек, содержащих функции для работы с приложением. <br />

          Десктопные приложения могут быть также и многопользовательскими. Например, редактор файлов
          который в зависимости от логина и пароля, введенных при запуске, будет давать доступ к
          различным файлам. И программа и файлы находятся на одном компьютере, просто производится
          локальное разграничение доступа для разных пользователей.
        </div>
      </div>

      <!--   <br /> -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          Как сгенерировать новый проект во Vue
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://www.youtube.com/watch?v=c2SK1IlmYL8&t=86s"
            >Все о Vuex за 30 минут. 1 минута 57 секунда</a
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">XXX</div>
      </div>

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

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion56 = !isQuestion56"
          :class="{ 'general-issues__question_active': isQuestion56 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion56">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion57 = !isQuestion57"
          :class="{ 'general-issues__question_active': isQuestion57 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion57">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion58 = !isQuestion58"
          :class="{ 'general-issues__question_active': isQuestion58 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion58">XXX</div>
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
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeneralIssues',

  data() {
    return {
      isGeneralIssues: false,
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

  // general-issues__span
  &__span {
    color: black;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-red
  &__span-red {
    color: red;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
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

  &__paragraph {
    display: block;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
    margin-top: 24px;
  }
}
</style>
