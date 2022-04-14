<template>
  <div>
    <button
      class="general-issues__button"
      @click="isJavaScriptQuestions = !isJavaScriptQuestions"
      :class="{ 'general-issues__button_active': isJavaScriptQuestions }"
    >
      Вопросы по JavaScript
    </button>

    <div v-if="isJavaScriptQuestions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion60 = !isQuestion60"
          :class="{ 'general-issues__question_active': isQuestion60 }"
        >
          Область видимости.
        </button>

        <div class="general-issues__answer" v-if="isQuestion60">
          <span class="general-issues__span">Область видимости</span>
          — это зона доступности переменных (другого ресурса) в области твоего кода. <br />
          <br />

          <span class="general-issues__span">Глобальной областью видимости</span>
          считается область за пределами всех функций. Она доступна для любой внутренней или
          локальной области видимости. Переменные, определенные в глобальной области, могут быть
          доступны и изменены в любых других областях. <br />
          <br />

          <span class="general-issues__span">Лексическая область</span>
          означает, что дочерняя область имеет доступ к переменным, определенным в родительской
          области. Дочерние функции лексически связаны с контекстом исполнения их родителей.
          Определяется во время написания кода, заботится о том, где была объявлена функция. <br />
          <br />

          <span class="general-issues__span">Локальная область видимости.</span>
          Переменные, объявленные внутри функций, становятся локальными для функции и
          рассматриваются в соответствующей локальной области. Каждая функция имеет свою область
          видимости. Одна и та же переменная может использоваться в разных функциях, поскольку они
          связаны с соответствующими функциями и не являются взаимно видимыми. <br />
          <br />

          <span class="general-issues__span">Блочная область видимости</span>
          Это означает, что переменные объявленные с помощью let и const доступны только внутри
          блока ({ }). <br />
          <br />

          <span class="general-issues__span">Динамическая область</span>
          Определяется во время выполнения, заботится о том, откуда была вызвана функция.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion58 = !isQuestion58"
          :class="{ 'general-issues__question_active': isQuestion58 }"
        >
          отличия var let и const
        </button>

        <div class="general-issues__answer" v-if="isQuestion58">
          Переменные, объявленные с помощью ключевых слов «let» и «const» имеют блочную область
          видимости. Это означает, что они доступны только внутри блока ({ }) <br />

          Если не планируется изменять значение переменной, то объявлять её лучше через «const». Это
          позволит избежать объявление переменной дважды, случайно изменив её. Переменные,
          объявленные при помощи const, нельзя обновить или объявить заново То есть, значение
          переменной, объявленной при помощи const, остается неизменным внутри ее области видимости.
          Эту переменную нельзя объявить заново или обновить <br />
          Переменные, объявленные при помощи let, могут обновляться, но не объявляться повторно.
          <br />
          Так что этот код будет работать нормально: <br />
          <span class="general-issues__span-purple">
            let greeting = "say Hi"; <br />
            greeting = "say Hello instead"; <br />
            а этот вернет ошибку: <br />
          </span>

          <span class="general-issues__span-purple">
            let greeting = "say Hi"; <br />
            let greeting = "say Hello instead";//error: Identifier 'greeting' has already been
            declared <br />
          </span>

          Переменные, объявленные с помощью ключевого слова «var», НЕ имеют блочную область
          видимости. Переменные, объявленные при помощи var, могут как объявляться заново, так и
          обновляться То есть, мы можем сделать вот так: <br />

          <span class="general-issues__span-purple">
            var greeter = "hey hi"; <br />
            var greeter = "say Hello instead";</span
          >
          <br />
          — и это не приведет к ошибке.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion59 = !isQuestion59"
          :class="{ 'general-issues__question_active': isQuestion59 }"
        >
          Поднятие (hoisting) var
        </button>

        <div class="general-issues__answer" v-if="isQuestion59">
          В JavaScript поднятие это механизм, обеспечивающий перемещение объявлений переменных и
          функций в верх их области видимости перед выполнением кода. Это означает, что если мы
          сделаем так: <br />

          <span class="general-issues__span-purple">
            console.log (greeter); <br />
            var greeter = "say hello"
          </span>
          <br />
          интерпретироваться это будет как:

          <br />
          <br />

          <span class="general-issues__span-purple">
            var greeter; <br />
            console.log(greeter); //greeter is undefined <br />
            greeter = "say hello" <br />
          </span>
          Таким образом, переменные, объявленные при помощи var, поднимаются в верх своей области
          видимости и инициализируются присвоением какого-нибудь значения или undefined <br />

          1. Поднятие — подъем переменной или функции в глобальную или функциональную области
          видимости. <br />
          2. В фазе компиляции функциональные выражения и переменные, объявленные с помощью
          ключевого слова «var», со значением undefined поднимаются в самый верх глобальной (или
          функциональной) области видимости (как бы перемещаются в начало нашего кода. Это
          объясняет, почему мы можем вызывать функции до их объявления). <br />
          3. В фазе выполнения переменным присваиваются значения, а функции (или методы объектов)
          вызываются или выполняются. <br />
          4. Запомнить! поднимаются только функциональные выражения и переменные, объявленные с
          помощью ключевого слова «var». Обычные функции и стрелочные функции, а также переменные,
          объявленные с помощью ключевых слов «let» и «const» не поднимаются.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Что такое замыкание и как/для чего его используют?
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          Если одна функция определена внутри другой, то внутренняя имеет доступ к ОВ (области
          видимости) внешней. Это называется замыканием (а также "лексической ОВ" или "статическая".
          <br />
          При выполнении функции используется та область видимости переменных, которая существовала
          на момент объявления этой функции. Это лексическая область видимости.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Делегирование событий.
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          Всплытие событий позволяет реализовать один из самых важных приёмов разработки -
          делегирование. <br />

          Делегирование заключается в том, что если у нас есть много элементов, события на которых
          нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому -
          мы ставим один обработчик на их общего предка. Из него можно получить целевой элемент
          event.target, понять на каком потомке произошло событие и обаботать его. <br />

          Алгоритм: <br />
          - Вешаем обработчик на контейнер. <br />
          - В обработчике: получаем event.target. <br />
          - В обработчике: если event.target или один из его родителей в контейнере (this) –
          интересующий нас элемент – обрабатываем его. <br />
          Зачем использовать: <br />
          - Упрощает инициализацию и экономит память: не нужно вешать много обработчиков. <br />
          - Меньше кода: при добавлении и удалении элементов не нужно ставить или снимать
          обработчики. <br />
          - Удобство изменений: можно массово добавлять или удалять элементы путём изменения
          innerHTML.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Как this работает в JavaScript.
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          Использование this гарантирует, что функция работает именно с тем объектом, в контексте
          которого вызвана, если это не стрелочная функция. У стрелочных функций контекст this
          определяется в момент создания функции. <br />
          <br />

          Значение this называется контекстом вызова и будет определено в момент вызова функции.
          Значением this является объект перед точкой, в контексте которого вызван метод.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Как работает прототипное наследование
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          Прототипом объекта А называется объект B, свойства и методы которого доступны для объекта
          A как собственные. <br />

          У любого объекта есть прототип, на который указывает его свойство __proto__ и который
          также является объектом. <br />
          У любой функции есть ассоциированный с ней объект, на который в контексте функции
          указывает свойство prototype. В него как в контейнер обычно складывают свойства и методы
          для работы с определенным классом объектов. <br />
          Такой контейнер автоматически становится прототипом объектов, создаваемых
          функциями-конструкторами Для редактирования прототипной ссылки объекта используют метод
          Object.create() - он перезаписывает объект заново и выставляет в нем ссылку на нужный
          прототип. <br />
          Ссылки связанных друг с другом объектов образуют прототипную цепочку, которая лежит в
          основе прототипного наследования. Ярким примером такого наследования является цепочка
          узлов DOM модели. <br />
          Пример <br />
          <span class="general-issues__span-purple">
            let animal = { <br />
            eats: true <br />
            }; <br />
            let rabbit = { <br />
            jumps: true <br />
            }; <br />

            rabbit.__proto__ = animal; // (*) <br />

            // теперь мы можем найти оба свойства в rabbit: <br />
            alert( rabbit.eats ); // true (**) <br />
            alert( rabbit.jumps ); // true</span
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Типы данных в JavaScript
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          В JavaScript есть 8 основных типов. <br />
          <span class="general-issues__span-green"> - number</span> для любых чисел: целочисленных
          или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
          <br />
          <span class="general-issues__span-green"> - bigint</span> для целых чисел произвольной
          длины. <br />
          <span class="general-issues__span-green"> - string</span> для строк. Строка может
          содержать ноль или больше символов, нет отдельного символьного типа. <br />
          <span class="general-issues__span-green"> - boolean</span> для true/false. <br />
          <span class="general-issues__span-green"> - null</span> для неизвестных значений –
          отдельный тип, имеющий одно значение null. <br />
          <span class="general-issues__span-green"> - undefined</span> для неприсвоенных значений –
          отдельный тип, имеющий одно значение undefined.
          <br />
          <span class="general-issues__span-green"> - object</span> для более сложных структур
          данных. <br />
          <span class="general-issues__span-green"> - symbol</span> для уникальных идентификаторов.
          <br />
          Оператор <span class="general-issues__span-green">typeof</span> позволяет нам увидеть,
          какой тип данных сохранён в переменной. Имеет две формы:
          <span class="general-issues__span-green">typeof x или typeof(x). </span>Возвращает строку
          с именем типа. Например, <span class="general-issues__span-green">"string".</span> Для
          <span class="general-issues__span-green"> null</span> возвращается
          <span class="general-issues__span-green">"object"</span> – это ошибка в языке, на самом
          деле это не объект.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          В чём различие между переменными, значение которых: null, undefined и не объявлено?
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <span class="general-issues__span-green"> undefined - </span> это переменная, которая была
          объявлена, но у нее нет значения. <br />
          <span class="general-issues__span-green"> null - </span> отсутствие какого-либо объектного
          значения переменной. <br />
          <span class="general-issues__span-green"> undeclared - </span> переменная, объявленная без
          ключевого слова 'var'. <br />

          Для проверки можно использовать console.log() и typeof.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Ложноподобное (falsy) значение
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Glossary/Falsy"
            >Ложноподобное (falsy) значение</a
          >
          — значение, которое становится false в булевом контексте. JavaScript использует
          преобразование типов, чтобы привести значение к булевому типу, там, где это требуется
          (например, в условных конструкциях и циклах. <br />
          <span class="general-issues__span-green"> false </span>
          Ключевое слово false. <br />
          <span class="general-issues__span-green">0 </span>
          Ноль Number (к нему также относятся 0.0, 0x0 и т.д.). <br />
          <span class="general-issues__span-green">-0 </span>
          Отрицательный ноль типа Number (к нему также относятся -0.0, -0x0 и т.д.). <br />
          <span class="general-issues__span-green">0n</span>
          Ноль типа BigInt (также 0x0n). Обратите внимание, что не может быть негативного нуля типа
          BigInt — отрицательный 0n равняется 0n. <br />
          <span class="general-issues__span-green">"", '', ``</span>
          Значение, содержащее пустую строку . <br />
          <span class="general-issues__span-green">null</span>
          null — отсутствие какого-либо значения. <br />
          <span class="general-issues__span-green">undefined</span>
          undefined — примитивное значение. <br />
          <span class="general-issues__span-green">NaN</span>
          (en-US) NaN — значение, не являющиеся числом. <br />
          <span class="general-issues__span-green">document.all</span>
          Объекты считаются ложноподобными тогда и только тогда, когда у них есть внутренний слот
          [[IsHTMLDDA]]. Этот слот есть только в объекте document.all, и его задать через
          JavaScript.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Основное различие между циклом forEach и циклом .map()? И в каких случаях каждый из них
          используется?
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          forEach перебирает массив и изменяет его. <br />
          .map() создает копию массива и изменяет копию.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          В каких случаях обычно используются анонимные функции?
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          Анонимные функции часто используются для выполнения какого-то кода в коллбэках, где не
          нужно создавать отдельную именную функцию под это действие.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          В чём разница между host-объектами и нативными объектами?
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          Собственные объекты: Object (конструктор), Date, Math, parseInt, eval, строковые методы,
          такие как indexOf и replace, методы массивов и т.д. - основные предопределённые объекты,
          всегда доступные в JavaScript. <br />
          Объекты хоста (при условии среды браузера): window, document, location, history,
          XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll и т.д. - Они отличаются
          от встроенных объектов, потому что не все окружения будут иметь одни и те же объекты
          хоста.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          В чем разница между: function Person(){}, var person = Person(), и var person = new
          Person()?
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          function Person(){} - Мы создаем функцию с именем Person. <br />
          var person = Person() - Мы вызываем функцию Person и результат сохраняем в переменную
          person. <br />
          var person = new Person() - Мы создаем новый объект, используя функцию-конструктор Person.
          <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          В чем разница между .call и .apply?
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          Сходство заключается в том, что и .call, и .apply используются для вызова функций, а также
          первый параметр будет использоваться как значение this внутри функции. А разница в том,
          что .call в качестве слудующих аргументов принимает аргументы, разделенные запятыми, в то
          время как .apply в качестве следующих аргументов принимает массив аргументов. <br />
          <span class="general-issues__span-purple">
            function add(a, b) { <br />
            return a + b; <br />
            } <br />
            console.log(add.call(null, 1, 2)); // 3 <br />
            console.log(add.apply(null, [1, 2])); // 3
          </span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Что делает и для чего нужна функция Function.prototype.bind?
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          Метод bind() создает новую функцию, которая при вызове устанавливает в качестве контекста
          выполнения this предоставленное значение. В метод также передается набор аргументов,
          которые будут установлены перед переданными в привязанную функцию аргументами при ее
          вызове.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Оператор new
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          Оператор new используется для создания объектов. Операндом этого оператора должна быть
          функция. Функция, которая создаётся специально для работы с оператором new, называется
          конструктором. Конструктор используется для инициализации нового созданного объекта:
          <br />

          function Obj() { <br />
          this.x = 5; <br />
          } <br />

          var o = new Obj(); <br />
          alert(o.x); // 5 <br />
          Работает это всё (оператор new с конструктором) следующим образом: встречая оператор new
          интерпретатор создаёт новый пустой объект, затем он вызывает конструктор, и передаёт ему
          новый созданный объект в качестве значения ключевого слова this. Внутри конструктора
          происходит инициализация свойств вновь созданного объекта. После того, как объект создан и
          инициализарован, оператор new возвращает созданный объект. <br />
          Создаём новый экземпляр какого-то класса
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Что такое колбэк - функция
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          Колбэк-функция - это функция, которую мы передаём в другую функцию в качестве параметра.
          Через некоторе время колбэк вызывается с результатами работы главной функции.
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          XXX
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

        <div class="general-issues__answer" v-if="isQuestion17">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion32 = !isQuestion32"
          :class="{ 'general-issues__question_active': isQuestion32 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion32">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion34 = !isQuestion34"
          :class="{ 'general-issues__question_active': isQuestion34 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion34">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion36 = !isQuestion36"
          :class="{ 'general-issues__question_active': isQuestion36 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion36">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion37 = !isQuestion37"
          :class="{ 'general-issues__question_active': isQuestion37 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion37">
          XXX
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
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion39 = !isQuestion39"
          :class="{ 'general-issues__question_active': isQuestion39 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion39">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion40 = !isQuestion40"
          :class="{ 'general-issues__question_active': isQuestion40 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion40">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion41 = !isQuestion41"
          :class="{ 'general-issues__question_active': isQuestion41 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion41">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion42 = !isQuestion42"
          :class="{ 'general-issues__question_active': isQuestion42 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion42">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion43 = !isQuestion43"
          :class="{ 'general-issues__question_active': isQuestion43 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion43">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion44 = !isQuestion44"
          :class="{ 'general-issues__question_active': isQuestion44 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion44">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion45 = !isQuestion45"
          :class="{ 'general-issues__question_active': isQuestion45 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion45">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion46 = !isQuestion46"
          :class="{ 'general-issues__question_active': isQuestion46 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion46">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion47 = !isQuestion47"
          :class="{ 'general-issues__question_active': isQuestion47 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion47">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion48 = !isQuestion48"
          :class="{ 'general-issues__question_active': isQuestion48 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion48">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion49 = !isQuestion49"
          :class="{ 'general-issues__question_active': isQuestion49 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion49">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion50 = !isQuestion50"
          :class="{ 'general-issues__question_active': isQuestion50 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion50">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion51 = !isQuestion51"
          :class="{ 'general-issues__question_active': isQuestion51 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion51">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion52 = !isQuestion52"
          :class="{ 'general-issues__question_active': isQuestion52 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion52">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion53 = !isQuestion53"
          :class="{ 'general-issues__question_active': isQuestion53 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion53">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion54 = !isQuestion54"
          :class="{ 'general-issues__question_active': isQuestion54 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion54">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion55 = !isQuestion55"
          :class="{ 'general-issues__question_active': isQuestion55 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion55">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion56 = !isQuestion56"
          :class="{ 'general-issues__question_active': isQuestion56 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion56">
          XXX
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion57 = !isQuestion57"
          :class="{ 'general-issues__question_active': isQuestion57 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion57">
          XXX
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptQuestions',

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

  &__answer {
    font-size: 14px;
    line-height: 24px;
    margin-left: 24px;
  }

  // general-issues__span
  &__span {
    color: black;
    font-size: 18px;
    line-height: 24px;
  }

  // general-issues__span-green
  &__span-green {
    color: green;
    font-size: 14px;
    line-height: 24px;
  }

  // general-issues__span-purple
  &__span-purple {
    color: purple;
    font-size: 14px;
    line-height: 24px;
  }

  // general-issues__link
  &__link {
    text-decoration: none;
  }
}
</style>
