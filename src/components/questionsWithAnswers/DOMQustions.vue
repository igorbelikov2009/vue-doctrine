<template>
  <div>
    <button
      class="general-issues__button"
      @click="isJavaScriptQuestions = !isJavaScriptQuestions"
      :class="{ 'general-issues__button_active': isJavaScriptQuestions }"
    >
      Вопросы по DOM
    </button>

    <div v-if="isJavaScriptQuestions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Что такое DOM?
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          DOM (Document Object Model, объектная модель документа) — это программный интерфейс к
          HTML-документам, который позволяет воздействовать на документ из скриптов, меняя его
          стили, содержимое. В DOM документ представлен в виде дерева узлов. <br />
          Объект <span class="general-issues__span-green"> document </span>– основная «входная
          точка». С его помощью мы можем что-то создавать или менять на странице. <br />

          <span class="general-issues__span-purple">
            // заменим цвет фона на красный, <br />
            document.body.style.background = "red"; <br />
            <br />
            // а через секунду вернём как было <br />
            setTimeout(() => document.body.style.background = "", 1000);
          </span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Основой HTML-документа являются теги.
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          В соответствии с DOM, каждый HTML-тег является объектом. Вложенные теги являются «детьми»
          родительского элемента. Текст, который находится внутри тега, также является объектом.
          <br />

          Теги являются узлами-элементами (или просто элементами). Они образуют структуру дерева:
          html – это корневой узел, head и body его дочерние узлы и т.д. <br />

          Текст внутри элементов образует текстовые узлы, обозначенные как #text. Текстовый узел
          содержит в себе только строку текста. У него не может быть потомков, т.е. он находится
          всегда на самом нижнем уровне. <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Автоисправление
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          Если браузер сталкивается с некорректно написанным HTML-кодом, он автоматически
          корректирует его при построении DOM. <br />

          Например, в начале документа всегда должен быть тег html. Даже если его нет в документе –
          он будет в дереве DOM, браузер его создаст. То же самое касается и тега body. <br />

          Например, если HTML-файл состоит из единственного слова "Привет", браузер обернёт его в
          теги html и body, добавит необходимый тег head. <br />

          При генерации DOM браузер самостоятельно обрабатывает ошибки в документе, закрывает теги и
          так далее.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Навигация по DOM-элементам
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          Все операции с DOM начинаются с объекта document. Это главная «точка входа» в DOM. Из него
          мы можем получить доступ к любому узлу. <br />

          Самые верхние элементы дерева доступны как свойства объекта document: <br />

          Самый верхний узел документа: (html)<br />
          document.documentElement
          <br />

          document.body. <br />
          document.head.
          <p>
            Дочерние узлы (или дети) – элементы, которые являются непосредственными детьми узла.
            Другими словами, элементы, которые лежат непосредственно внутри данного. Например, head
            и body являются детьми элемента html. <br />
            Потомки – все элементы, которые лежат внутри данного, включая детей, их детей и т.д.
          </p>

          <p>
            Получив DOM-узел, мы можем перейти к его ближайшим соседям используя навигационные
            ссылки. <br />

            Есть два основных набора ссылок: <br />

            Для всех узлов: <br />
            - parentNode, <br />
            - childNodes, <br />
            - firstChild, <br />
            - lastChild, <br />
            - previousSibling, <br />
            - nextSibling. <br />
            <span class="general-issues__span-purple"> elem.childNodes</span> <br />
            Только для узлов-элементов: <br />
            - parentElement,<br />
            - children, <br />
            - firstElementChild, <br />
            - lastElementChild, <br />
            - previousElementSibling, <br />
            - nextElementSibling. <br />
            <span class="general-issues__span-purple"> elem.children </span> <br />

            Некоторые виды DOM-элементов, например таблицы, предоставляют дополнительные ссылки и
            коллекции для доступа к своему содержимому.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          Поиск элементов в DOM
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> document.getElementById или просто id </span>
            <br />
            Если у элемента есть атрибут id, то мы можем получить его вызовом
            document.getElementById(id), где бы он ни находился. <br />

            <span class="general-issues__span-purple">
              // получить элемент <br />
              let elem = document.getElementById('elem'); <br />

              // сделать его фон красным <br />
              elem.style.background = 'red'; <br />
            </span>
            Значение id должно быть уникальным. В документе может быть только один элемент с данным
            id.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> querySelectorAll(css), </span> <br />
            Самый универсальный метод поиска, он возвращает все элементы внутри elem,
            удовлетворяющие данному CSS-селектору. <br />
            <span class="general-issues__span-purple">
              let elements = document.querySelectorAll('ul > li:last-child'); <br />

              for (let elem of elements) { <br />
              alert(elem.innerHTML); // "тест", "пройден" <br />
              }
            </span>
            <br />
            Псевдоклассы тоже работают. Псевдоклассы в CSS-селекторе, в частности :hover и :active,
            также поддерживаются. Например, document.querySelectorAll(':hover') вернёт коллекцию (в
            порядке вложенности: от внешнего к внутреннему) из текущих элементов под курсором мыши.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">querySelector</span> <br />Метод
            elem.querySelector(css) возвращает первый элемент, соответствующий данному
            CSS-селектору.
            <br />
            Иначе говоря, результат такой же, как при вызове elem.querySelectorAll(css)[0], но он
            сначала найдёт все элементы, а потом возьмёт первый, в то время как elem.querySelector
            найдёт только первый и остановится. Это быстрее, кроме того, его короче писать. <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">closest(css)</span> <br />
            ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также
            включается в поиск. <br />

            Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из
            родителей. Если он соответствует селектору, поиск прекращается. Метод возвращает либо
            предка, либо null, если такой элемент не найден.
            <span class="general-issues__span-purple"
              >let chapter = document.querySelector('.chapter'); // LI <br />

              alert(chapter.closest('.book'));</span
            >
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">elem.getElementsByTagName(tag)</span> <br />
            ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно
            получить всех потомков.
            <span class="general-issues__span-purple">
              // получить все элементы div в документе <br />
              let divs = document.getElementsByTagName('div');
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">elem.getElementsByClassName(className)</span>
            <br />возвращает элементы, которые имеют данный CSS-класс.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">document.getElementsByName(name)</span> <br />
            возвращает элементы с заданным атрибутом name. Очень редко используется.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">elemA.contains(elemB)</span> <br />
            метод, который проверяет наличие отношений между предком и потомком. Вернёт true, если
            elemB находится внутри elemA (elemB потомок elemA) или когда elemA==elemB.
          </p>

          <span class="general-issues__span-purple"
            >Не забываем про букву "s"! в document.getElementsBy</span
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          HTML-атрибуты
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <p class="general-issues__paragraph">
            В HTML у тегов могут быть атрибуты. Когда браузер парсит HTML, чтобы создать DOM-объекты
            для тегов, он распознаёт стандартные атрибуты и создаёт DOM-свойства для них. <br />

            Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся
            соответствующее свойство. Но этого не происходит, если атрибут нестандартный.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> - elem.hasAttribute(name)</span> – проверяет
            наличие атрибута. <br />
            <span class="general-issues__span-red"> - elem.getAttribute(name)</span> – получает
            значение атрибута. <br />
            <span class="general-issues__span-red"> - elem.setAttribute(name, value)</span> –
            устанавливает значение атрибута. <br />
            <span class="general-issues__span-red"> - elem.removeAttribute(name)</span> – удаляет
            атрибут. <br />
            <span class="general-issues__span-red"> - elem.attributes</span> – это коллекция всех
            атрибутов.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Создание элемента
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          <p class="general-issues__paragraph">
            DOM-узел можно создать двумя методами: <br />

            <span class="general-issues__span-red">document.createElement(tag)</span> <br />
            Создаёт новый элемент с заданным тегом: <br />
            <span class="general-issues__span-purple"
              >let div = document.createElement('div');</span
            >
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">document.createTextNode(text) </span> <br />
            Создаёт новый текстовый узел с заданным текстом:<br />
            <span class="general-issues__span-purple">
              let textNode = document.createTextNode('А вот и я');</span
            >
            <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Методы
          <a
            class="general-issues__link"
            target="_blank"
            href="https://learn.javascript.ru/modifying-document#metody-vstavki"
          >
            вставки и удаления node</a
          >
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <p class="general-issues__paragraph">
            Чтобы наш div появился, нам нужно вставить его где-нибудь в document. Например, в
            document.body. <br />

            Для этого есть метод append, в нашем случае: document.body.append(div). <br />

            <span class="general-issues__span-purple">
              let div = document.createElement('div'); <br />
              div.className = "alert"; <br />
              div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение."; <br />
              document.body.append(div);</span
            >
            <br />
          </p>

          <p class="general-issues__paragraph">
            Вот методы для различных вариантов вставки: <br />

            <span class="general-issues__span-red">node.append(...nodes or strings)</span> <br />
            – добавляет узлы или строки в конец node, <br />

            <span class="general-issues__span-red">node.prepend(...nodes or strings)</span> <br />
            – вставляет узлы или строки в начало node,<br />

            <span class="general-issues__span-red">node.before(...nodes or strings)</span> <br />
            –- вставляет узлы или строки до node,<br />

            <span class="general-issues__span-red">node.after(...nodes or strings) </span> <br />
            –- вставляет узлы или строки после node,<br />

            <span class="general-issues__span-red">node.replaceWith(...nodes or strings)</span>
            <br />
            –- заменяет node заданными узлами или строками. <br />
            <span class="general-issues__span-red"> -- node.remove()</span> <br />

            – удаляет node.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>

          <p class="general-issues__paragraph"></p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          Методы вставки фрагментов HTML
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          <p class="general-issues__paragraph">
            вставить HTML именно «как html», со всеми тегами и прочим. <br />

            <span class="general-issues__span-red"> elem.insertAdjacentHTML(where, html)</span>
            <br />
            Первый параметр – это специальное слово, указывающее, куда по отношению к elem
            производить вставку. Значение должно быть одним из следующих: <br />
            <span class="general-issues__span-red">"beforebegin" </span> – вставить html
            непосредственно перед elem, <br />

            <span class="general-issues__span-red">"afterbegin"</span> – вставить html в начало
            elem, <br />

            <span class="general-issues__span-red">"beforeend" </span> – вставить html в конец elem,
            <br />

            <span class="general-issues__span-red">"afterend" </span> – вставить html
            непосредственно после elem. <br />

            <br />
            <span class="general-issues__span-purple">
              div.insertAdjacentHTML('beforebegin', '&lt;p&gt;Привет&lt;/p&gt;')
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          className, classList, Element style
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> elem.className</span> заменяет всю строку с
            классами. <br />

            <span class="general-issues__span-red">elem.classList</span> – это специальный объект с
            методами для добавления/удаления одного класса. <br />

            Методы classList: <br />
            <span class="general-issues__span-red">elem.classList.add("class")</span> – добавить
            класс. <br />

            <span class="general-issues__span-red">elem.classList.remove("class")</span> – удалить
            класс. <br />

            <span class="general-issues__span-red">elem.classList.toggle("class")</span> – добавить
            класс, если его нет, иначе удалить (переключатель) <br />

            <span class="general-issues__span-red">elem.classList.contains("class") </span>–
            проверка наличия класса, возвращает true/false. <br />

            <span class="general-issues__span-red"
              >Кроме того, classList является перебираемым, поэтому можно перечислить все классы при
              помощи for..of</span
            >
            <br />
            for (let name of document.body.classList) { <br />
            alert(name); // main, затем page <br />
            } <br />
          </p>

          <p class="general-issues__paragraph">
            Свойство <span class="general-issues__span-red">elem.style</span> – это объект, который
            соответствует тому, что написано в атрибуте "style". <br />
            Установка стиля
            <span class="general-issues__span-purple">elem.style.width="100px" </span> работает так
            же, как наличие в атрибуте style строки width:100px. <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          Сброс стилей
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          <p class="general-issues__paragraph">
            Иногда нам нужно добавить свойство стиля, а потом, позже, убрать его. <br />

            Например, чтобы скрыть элемент, мы можем задать elem.style.display = "none". <br />

            Затем мы можем удалить свойство style.display, чтобы вернуться к первоначальному
            состоянию. Вместо delete elem.style.display мы должны присвоить ему пустую строку:
            elem.style.display = "".
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          Размеры и прокрутка элементов
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">xx</span> <br />
            xx <br />
            <span class="general-issues__span-purple">xx</span> <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">xxxx</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">XXX</div>
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

        <div class="general-issues__answer" v-if="isQuestion59">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion60 = !isQuestion60"
          :class="{ 'general-issues__question_active': isQuestion60 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion60">XXX</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DOMQustions',
  data() {
    return {
      isJavaScriptQuestions: false,
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

  // general-issues__paragraph
  &__paragraph {
    font-size: 14px;
    line-height: 24px;
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
}
</style>
