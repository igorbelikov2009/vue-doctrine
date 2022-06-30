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
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          Что такое <strong>JavaScript?</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">
          <p class="general-issues__paragraph">
            JavaScript — это язык программирования на стороне клиента/сервера.
          </p>

          <p class="general-issues__paragraph">
            JavaScript можно вставить в HTML, чтобы сделать веб-страницу интерактивной и обеспечить
            взаимодействие с пользователем.
          </p>

          <p class="general-issues__paragraph">
            JavaScript имеет динамическую типизацию. Это означает, что тип объектов проверяется во
            время выполнения . (В статически типизированном языке тип проверяется во время
            компиляции.) Другими словами, переменные JavaScript не связаны с типом. Это означает,
            что вы можете без проблем изменить тип данных.
          </p>

          <p class="general-issues__paragraph">
            JavaScript — это интерпретируемый язык. Интерпретатор в браузере читает код JavaScript,
            интерпретирует каждую строку и запускает ее.
          </p>

          <p class="general-issues__paragraph">JavaScript — это язык, чувствительный к регистру.</p>

          <p class="general-issues__paragraph">
            JavaScript работает с одним потоком. Это означает, что он выполняет код по порядку и
            должен завершить выполнение фрагмента кода, прежде чем перейти к следующему.
          </p>

          <p class="general-issues__paragraph">
            Это не позволяет писать код, который интерпретатор мог бы выполнять параллельно в
            нескольких потоках или процессах.
          </p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion60 = !isQuestion60"
          :class="{ 'general-issues__question_active': isQuestion60 }"
        >
          <strong>Область видимости.</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion60">
          <p class="general-issues__paragraph">
            <strong>Область видимости</strong> — это зона доступности переменных (другого ресурса) в
            области твоего кода.
          </p>

          <p class="general-issues__paragraph">
            <strong>Глобальной областью видимости</strong> считается область за пределами всех
            функций. Она доступна для любой внутренней или локальной области видимости. Переменные,
            определенные в глобальной области, могут быть доступны и изменены в любых других
            областях.
          </p>

          <p class="general-issues__paragraph">
            <strong>Лексическая область</strong> означает, что дочерняя область имеет доступ к
            переменным, определенным в родительской области. Дочерние функции лексически связаны с
            контекстом исполнения их родителей. Определяется во время написания кода, заботится о
            том, где была объявлена функция.
          </p>

          <p class="general-issues__paragraph">
            <strong>Локальная область видимости.</strong> Переменные, объявленные внутри функций,
            становятся локальными для функции и рассматриваются в соответствующей локальной области.
            Каждая функция имеет свою область видимости. Одна и та же переменная может
            использоваться в разных функциях, поскольку они связаны с соответствующими функциями и
            не являются взаимно видимыми.
          </p>

          <p class="general-issues__paragraph">
            <strong>Блочная область видимости</strong>Это означает, что переменные объявленные с
            помощью let и const доступны только внутри блока ({ }).
          </p>

          <p class="general-issues__paragraph">
            <strong>Динамическая область</strong>Определяется во время выполнения, заботится о том,
            откуда была вызвана функция.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion58 = !isQuestion58"
          :class="{ 'general-issues__question_active': isQuestion58 }"
        >
          <strong>Var, Let, Const</strong> — в чем разница?
        </button>

        <div class="general-issues__answer" v-if="isQuestion58">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blanc"
              href="https://medium.com/nuances-of-programming/var-let-const-%D0%B2-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-dc6c3beb0b12#:~:text=var%20%2D%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%BE%D0%B3%D1%83%D1%82%20%D0%B1%D1%8B%D1%82%D1%8C%20%D0%BA%D0%B0%D0%BA,%D0%BE%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%80%D1%85%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8%20%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8."
              >Var, Let, Const — в чем разница? (Подробная статья )
            </a>
          </p>

          <p class="general-issues__paragraph">
            Переменные, объявленные с помощью ключевых слов <strong> «let» и «const» </strong> имеют
            блочную область видимости. Это означает, что они доступны только внутри блока ({ })
            <br />
          </p>

          <p class="general-issues__paragraph">
            Если не планируется изменять значение переменной, то объявлять её лучше через
            <strong> «const».</strong> Это позволит избежать объявление переменной дважды, случайно
            изменив её. Переменные, объявленные при помощи <strong> «const» </strong>, нельзя
            обновить или объявить заново. То есть, значение переменной, объявленной при помощи
            <strong> «const» </strong>, остается неизменным внутри ее области видимости. Эту
            переменную нельзя объявить заново или обновить <br />
          </p>

          <p class="general-issues__paragraph">
            Переменные, объявленные при помощи <strong> let</strong>, могут обновляться, но не
            объявляться повторно.
          </p>

          <p class="general-issues__paragraph">
            Так что этот код будет работать нормально: <br />
            <span class="general-issues__span-purple">
              let greeting = "say Hi"; <br />
              greeting = "say Hello instead";
            </span>
          </p>

          <p class="general-issues__paragraph">
            а этот вернет ошибку:
            <br />

            <span class="general-issues__span-purple">
              let greeting = "say Hi"; <br />
              let greeting = "say Hello instead";//error: Identifier 'greeting' has already been
              declared <br />
            </span>
          </p>

          <p class="general-issues__paragraph">
            Переменные, объявленные с помощью ключевого слова <strong> «var»</strong>, НЕ имеют
            блочную область видимости. Переменные, объявленные при помощи <strong> «var»</strong>,
            могут как объявляться заново, так и обновляться. То есть, мы можем сделать вот так:
            <br />

            <span class="general-issues__span-purple">
              var greeter = "hey hi"; <br />
              var greeter = "say Hello instead";</span
            >
            <br />
            — и это не приведет к ошибке.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion59 = !isQuestion59"
          :class="{ 'general-issues__question_active': isQuestion59 }"
        >
          <strong>Поднятие</strong> переменных и функций (hoisting) var
        </button>

        <div class="general-issues__answer" v-if="isQuestion59">
          <p class="general-issues__paragraph">
            В JavaScript поднятие - это механизм, обеспечивающий перемещение объявлений переменных и
            функций в верх их области видимости до запуска кода. Это означает, что если мы сделаем
            так:
          </p>

          <p class="general-issues__paragraph">
            Для функций это означает, что вы можете вызывать их из любой точки области видимости,
            даже до того, как они будут определены.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
hello(); 
<span class="general-issues__span-green">// функция вызывается до объявления</span>

function hello(){ 
  console.log("Hello world! ");
}
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              console.log (greeter); <br />
              var greeter = "say hello"
            </span>
          </p>

          <p class="general-issues__paragraph">
            интерпретироваться это будет как:
            <br />

            <span class="general-issues__span-purple">
              var greeter; <br />
              console.log(greeter); //greeter is undefined <br />
              greeter = "say hello" <br />
            </span>
          </p>

          <p class="general-issues__paragraph">
            Таким образом, переменные, объявленные при помощи var, поднимаются в верх своей области
            видимости и инициализируются присвоением какого-нибудь значения или undefined.
          </p>

          <p class="general-issues__paragraph">
            1. Поднятие — подъем переменной или функции в глобальную или функциональную области
            видимости.
          </p>

          <p class="general-issues__paragraph">
            2. В фазе компиляции функциональные выражения и переменные, объявленные с помощью
            ключевого слова «var», со значением undefined поднимаются в самый верх глобальной (или
            функциональной) области видимости (как бы перемещаются в начало нашего кода. Это
            объясняет, почему мы можем вызывать функции до их объявления).
          </p>

          <p class="general-issues__paragraph">
            3. В фазе выполнения переменным присваиваются значения, а функции (или методы объектов)
            вызываются или выполняются.
          </p>

          <p class="general-issues__paragraph">
            4. Запомнить! поднимаются только функциональные выражения и переменные, объявленные с
            помощью ключевого слова «var». Обычные функции и стрелочные функции, а также переменные,
            объявленные с помощью ключевых слов «let» и «const» не поднимаются.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Что такое <strong>замыкание</strong> и как/для чего его используют?
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          <p class="general-issues__paragraph">
            Если одна функция определена внутри другой, то внутренняя имеет доступ к области
            видимости внешней. Это называется замыканием (а также "лексической ОВ" или
            "статическая".
          </p>

          <p class="general-issues__paragraph">
            При выполнении функции используется та область видимости переменных, которая
            существовала на момент объявления этой функции. Это лексическая область видимости.
          </p>

          <p class="general-issues__paragraph">
            Замыкание в JavaScript означает, что внутренняя функция имеет доступ к переменным
            внешней функции — даже после возврата внешней функции. Это возможно из-за замыкающей
            природы JavaScript: внутренняя функция имеет доступ к переменным внешней функции даже
            после возврата внешней функции.
          </p>

          <p class="general-issues__paragraph">
            Например, чтобы создать счетчик, который увеличивается на 1, вы можете использовать
            замыкание:
            <br />

            <span class="general-issues__span-purple">
              <pre>
                <code>
function createCounter() {
   let counter = 0;
   function increment() {
     counter++;
     console.log(counter);
   }
   return increment;
}
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          Что такое <strong>всплытие событий</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">
          <p class="general-issues__paragraph">
            При всплытии событий событие начинается с запуска обработчиков событий на самом
            внутреннем элементе. Затем он запускает обработчики событий родителей, пока не достигнет
            самого внешнего элемента.
          </p>

          <p class="general-issues__paragraph">
            Лучший способ увидеть это в действии — создать HTML-документ с элементами div внутри
            элементов div:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
&lt;style&gt;
  body * {
    margin: 20px;
    border: 1px solid blue;
  }
&lt;/style&gt;

&lt;div onclick="alert('Outer layer')"&gt;Outer layer
  &lt;div onclick="alert('Middle layer')"&gt;Middle layer
    &lt;div onclick="alert('Inner layer')"&gt;Inner layer

    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            В каждом div есть JavaScript alert, который
            <strong>запускается при нажатии на div</strong>.
          </p>

          <p class="general-issues__paragraph">Страница результатов выглядит так:</p>

          <p class="general-issues__images">
            <img
              class="general-issues__img-event-bubbling"
              src="../../../public/images/doctrine/event-bubbling.png"
              alt="event-bubbling"
            />
          </p>

          <p class="general-issues__paragraph">
            Если нажать Inner layer, он активирует alert назначенный этому div, а также вызовет
            <strong>alert родительских div</strong>.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          <strong>Делегирование</strong> событий.
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <p class="general-issues__paragraph">
            Всплытие событий позволяет реализовать один из самых важных приёмов разработки -
            делегирование.
          </p>

          <p class="general-issues__paragraph">
            Делегирование заключается в том, что если у нас есть много элементов, события на которых
            нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому -
            мы ставим один обработчик на их общего предка. Из него можно получить целевой элемент
            event.target, понять на каком потомке произошло событие и обаботать его.
          </p>

          <p class="general-issues__paragraph">
            Алгоритм: <br />
            - Вешаем обработчик на контейнер. <br />
            - В обработчике: получаем event.target. <br />
            - В обработчике: если event.target или один из его родителей в контейнере (this) –
            интересующий нас элемент – обрабатываем его.
          </p>

          <p class="general-issues__paragraph">
            Зачем использовать: <br />
            - Упрощает инициализацию и экономит память: не нужно вешать много обработчиков. <br />
            - Меньше кода: при добавлении и удалении элементов не нужно ставить или снимать
            обработчики. <br />
            - Удобство изменений: можно массово добавлять или удалять элементы путём изменения
            innerHTML.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Как <strong>this</strong> работает в JavaScript.
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <p class="general-issues__paragraph">
            Ключевое слово <strong> this</strong> относится к текущему объекту, внутри которого
            пишется код.
          </p>

          <p class="general-issues__paragraph">
            Использование <strong> this</strong> гарантирует, что функция работает именно с тем
            объектом, в контексте которого вызвана, если это не стрелочная функция. У стрелочных
            функций контекст <strong> this</strong>
            определяется в момент создания функции.
          </p>

          <p class="general-issues__paragraph">
            Значение <strong> this</strong> называется контекстом вызова и будет определено в момент
            вызова функции. Значением <strong> this</strong> является объект перед точкой, в
            контексте которого вызван метод.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Как работает прототипное <strong>наследование</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <p class="general-issues__paragraph">
            Прототипом объекта А называется объект B, свойства и методы которого доступны для
            объекта A как собственные.
          </p>

          <p class="general-issues__paragraph">
            У любого объекта есть прототип, на который указывает его свойство __proto__ и который
            также является объектом.
          </p>

          <p class="general-issues__paragraph">
            У любой функции есть ассоциированный с ней объект, на который в контексте функции
            указывает свойство prototype. В него как в контейнер обычно складывают свойства и методы
            для работы с определенным классом объектов.
          </p>

          <p class="general-issues__paragraph">
            Такой контейнер автоматически становится прототипом объектов, создаваемых
            функциями-конструкторами Для редактирования прототипной ссылки объекта используют метод
            Object.create() - он перезаписывает объект заново и выставляет в нем ссылку на нужный
            прототип.
          </p>

          <p class="general-issues__paragraph">
            Ссылки связанных друг с другом объектов образуют прототипную цепочку, которая лежит в
            основе прототипного наследования. Ярким примером такого наследования является цепочка
            узлов DOM модели.
          </p>

          <p class="general-issues__paragraph">
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
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          <strong>Типы данных</strong> в JavaScript
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          <p class="general-issues__paragraph">В JavaScript есть 8 основных типов.</p>

          <p class="general-issues__paragraph">
            <strong> - number </strong> для любых чисел: целочисленных или чисел с плавающей точкой;
            целочисленные значения ограничены диапазоном ±(253-1).
          </p>

          <p class="general-issues__paragraph">
            <strong> - bigint </strong> для целых чисел произвольной длины.
          </p>

          <p class="general-issues__paragraph">
            <strong> - string </strong> для строк. Строка может содержать ноль или больше символов,
            нет отдельного символьного типа.
          </p>

          <p class="general-issues__paragraph"><strong> - boolean</strong> для true/false.</p>

          <p class="general-issues__paragraph">
            <strong> - null </strong> для неизвестных значений – отдельный тип, имеющий одно
            значение null.
          </p>

          <p class="general-issues__paragraph">
            <strong> - undefined </strong> для неприсвоенных значений – отдельный тип, имеющий одно
            значение undefined.
          </p>

          <p class="general-issues__paragraph">
            <strong> - object </strong> для более сложных структур данных.
          </p>

          <p class="general-issues__paragraph">
            <strong> - symbol </strong> для уникальных идентификаторов.
          </p>

          <p class="general-issues__paragraph">
            Оператор <strong> typeof </strong> позволяет нам увидеть, какой тип данных сохранён в
            переменной.
          </p>

          <p class="general-issues__paragraph">
            Имеет две формы:
            <strong> typeof x или typeof(x).</strong>
          </p>

          <p class="general-issues__paragraph">
            Возвращает строку с именем типа. Например,
            <strong>"string".</strong>
          </p>

          <p class="general-issues__paragraph">
            Для <strong> null </strong> возвращается <strong> "object" </strong> – это ошибка в
            языке, на самом деле это не объект.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          Как <strong> проверить тип переменной (данных)</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">
          <p class="general-issues__paragraph">
            Воспользуйтесь <strong>typeof</strong> оператором.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              typeof "John Abraham" // Возвращает "string" <br />
              typeof 100 // Возвращает "number" <br />
            </span>
          </p>
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          Для чего используется оператор <strong>typeof</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">
          <p class="general-issues__paragraph">
            <strong>typeof</strong> оператор возвращает строку, указывающую тип невычисленного
            операнда.
          </p>

          <!-- <p class="general-issues__paragraph">
            <pre>
              <code>
Пример:

typeof(122) // "число" 
typeof(122.55) // "число" 
typeof("Я строка") // "string" 
typeof({ name: "James Smith"}) // "object" 
typeof (ложь) // "логическое"
              </code>
            </pre>
          </p>  -->
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          В чём различие между переменными, значение которых:
          <strong> null, undefined и не объявлено?</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <p class="general-issues__paragraph">
            <strong> undefined -</strong> это переменная, которая была объявлена, но у нее нет
            значения.
          </p>

          <p class="general-issues__paragraph">
            <strong> null - </strong> отсутствие какого-либо объектного значения переменной. <br />
            <strong> null - </strong> означает отсутствие ценности. Он подчеркивает, что переменная
            не указывает ни на какой объект. <br />
            Имеет тип <strong> object</strong>.
          </p>

          <p class="general-issues__paragraph">
            <strong> undeclared - </strong> переменная, объявленная без ключевого слова 'var'.
          </p>

          <p class="general-issues__paragraph">
            Для проверки можно использовать console.log() и typeof.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          В чем разница между <strong>NULL</strong> и <strong>undefined</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">
            <strong>NULL</strong> является значением присваивания. Его можно присвоить переменной
            как представление без значения.
          </p>

          <p class="general-issues__paragraph">
            Значение, указывающее, что переменная не указывает на объект.
          </p>

          <p class="general-issues__paragraph">Имеет тип object.</p>

          <p class="general-issues__paragraph">
            Представляет нулевую, пустую или несуществующую ссылку.
          </p>

          <p class="general-issues__paragraph">Представляет отсутствие значения переменной.</p>

          <p class="general-issues__paragraph">Преобразуется в 0с помощью примитивных операций.</p>

          <p class="general-issues__paragraph">
            <strong>undefined</strong> означает, что переменная была объявлена, но ей еще не
            присвоено значение
          </p>

          <p class="general-issues__paragraph">
            Значение, представляющее переменную, которая была объявлена, но не имеет значения
          </p>

          <p class="general-issues__paragraph">Имеет тип undefined.</p>

          <p class="general-issues__paragraph">Представляет отсутствие переменной.</p>

          <p class="general-issues__paragraph">
            Преобразуется в NaN с помощью примитивных операций.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Какие значения в JavaScript являются <strong> ложными (falsy)</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/ru/docs/Glossary/Falsy"
              >Ложное (falsy) значение</a
            >
            — значение, которое становится false в булевом контексте. JavaScript использует
            преобразование типов, чтобы привести значение к булевому типу, там, где это требуется
            (например, в условных конструкциях и циклах.
          </p>

          <p class="general-issues__paragraph"><strong> false </strong> Ключевое слово false.</p>

          <p class="general-issues__paragraph">
            <strong> 0 </strong> - Ноль Number (к нему также относятся 0.0, 0x0 и т.д.).
          </p>

          <p class="general-issues__paragraph">
            <strong> -0 </strong> - Отрицательный ноль типа Number (к нему также относятся -0.0,
            -0x0 и т.д.).
          </p>

          <p class="general-issues__paragraph">
            <strong> 0n </strong> - Ноль типа BigInt (также 0x0n). Обратите внимание, что не может
            быть негативного нуля типа BigInt — отрицательный 0n равняется 0n.
          </p>

          <p class="general-issues__paragraph">
            <strong> "", '', `` </strong> - Значение, содержащее пустую строку.
          </p>

          <p class="general-issues__paragraph">
            <strong>null</strong> - null — отсутствие какого-либо значения.
          </p>

          <p class="general-issues__paragraph">
            <strong> undefined </strong> - undefined — примитивное значение, переменная, не имеющая
            присвоенного значения.
          </p>

          <p class="general-issues__paragraph">
            <strong> NaN </strong> - (en-US) NaN — значение, не являющиеся числом.
          </p>

          <p class="general-issues__paragraph">
            <strong> document.all </strong> Объекты считаются ложноподобными тогда и только тогда,
            когда у них есть внутренний слот [[IsHTMLDDA]]. Этот слот есть только в объекте
            document.all, и его задать через JavaScript.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Основное различие между циклом <strong>forEach</strong> и циклом <strong>.map()</strong>?
          И в каких случаях каждый из них используется?
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <p class="general-issues__paragraph">forEach перебирает массив и изменяет его.</p>

          <p class="general-issues__paragraph">.map() создает копию массива и изменяет копию.</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          Назовите различные <strong>циклы</strong> в JavaScript
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">
          <p class="general-issues__paragraph">
            <strong> for- </strong>перебирает блок кода несколько раз
          </p>

          <p class="general-issues__paragraph">
            <strong>for/in-</strong> перебирает свойства объекта
          </p>

          <p class="general-issues__paragraph">
            <strong>for/of-</strong> перебирает значения итерируемого объекта
          </p>

          <p class="general-issues__paragraph">
            <strong>while- </strong>перебирает блок кода, пока заданное условие истинно
          </p>

          <p class="general-issues__paragraph">
            <strong>do/while-</strong> также перебирает блок кода, пока заданное условие выполняется
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion70 = !isQuestion70"
          :class="{ 'general-issues__question_active': isQuestion70 }"
        >
          Что такое цикл for?
        </button>

        <div class="general-issues__answer" v-if="isQuestion70">
          <p class="general-issues__paragraph">
            Цикл for…of можно использовать для перебора итерируемых объектов в JavaScript.
          </p>

          <p class="general-issues__paragraph">
            Например, вы можете распечатать содержимое массива, используя цикл for…of:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
const nums = [1,2,3];
for (const num of nums) {
    console.log(num);
}
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход:

            <br />
            <span class="general-issues__span-green">
              1 <br />
              2 <br />
              3
            </span>
          </p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion32 = !isQuestion32"
          :class="{ 'general-issues__question_active': isQuestion32 }"
        >
          Что делает оператор <strong>«break»</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion32">
          <p class="general-issues__paragraph">
            Оператор breakвыходит из цикла и продолжает выполнение кода вне цикла.
          </p>

          <p class="general-issues__paragraph">
            Например, этот цикл завершается после того, как встретит число 5:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
for (var i = 0; i &lt; 100; i++) {
  if (i === 5) {
    break;
  }
  console.log('Number is ', i);
}

console.log('Yay');
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-green">
              Number is 0 <br />
              Number is 1 <br />
              Number is 2 <br />
              Number is 3 <br />
              Number is 4 <br />
              Yay
            </span>
          </p>
          <strong></strong>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion54 = !isQuestion54"
          :class="{ 'general-issues__question_active': isQuestion54 }"
        >
          Что делает оператор <strong>continue</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion54">
          <p class="general-issues__paragraph">
            Оператор <strong>continue</strong> перескакивает через один раунд цикла.
          </p>

          <p class="general-issues__paragraph">Например, этот цикл пропускает числа 2 и 3:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
for (var i = 0; i &lt; 5; i++) {
  if (i === 2 || i === 3) {
    continue;
  }
  console.log('Number is ', i);
}
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход: <br />
            <span class="general-issues__span-green">
              0 <br />
              1 <br />
              4 <br />
            </span>
          </p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          Что такое <strong>анонимная функция</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          <p class="general-issues__paragraph">
            Анонимная функция — это функция, не имеющая имени.
          </p>

          <p class="general-issues__paragraph">
            Анонимные функции часто используются для выполнения какого-то кода в коллбэках, где не
            нужно создавать отдельную именную функцию под это действие.
          </p>

          <p class="general-issues__paragraph">
            Вот функция с именем для ссылки:
            <br />
            <span class="general-issues__span-purple">
              function example(params) { <br />
              // do something <br />
              }
            </span>
          </p>

          <p class="general-issues__paragraph">
            Вот анонимная функция, назначенная переменной:
            <br />
            <span class="general-issues__span-purple">
              const myFunction = function() { <br />
              // do something <br />
              };
            </span>
          </p>

          <p class="general-issues__paragraph">
            А вот анонимная функция, используемая в качестве обратного вызова:
            <br />
            <span class="general-issues__span-purple">
              [1, 2, 3].map(function(element) { <br />
              // do something <br />
              });
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
          В чём разница между <strong> host-объектами и нативными объектами</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <p class="general-issues__paragraph">
            Собственные объекты: Object (конструктор), Date, Math, parseInt, eval, строковые методы,
            такие как indexOf и replace, методы массивов и т.д. - основные предопределённые объекты,
            всегда доступные в JavaScript.
          </p>

          <p class="general-issues__paragraph">
            Объекты хоста (при условии среды браузера): window, document, location, history,
            XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll и т.д. - Они
            отличаются от встроенных объектов, потому что не все окружения будут иметь одни и те же
            объекты хоста.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          В чем разница между:
          <strong> function Person(){}, var person = Person(), и var person = new Person()?</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          <p class="general-issues__paragraph">
            function Person(){} - Мы создаем функцию с именем Person.
          </p>

          <p class="general-issues__paragraph">
            var person = Person() - Мы вызываем функцию Person и результат сохраняем в переменную
            person.
          </p>

          <p class="general-issues__paragraph">
            var person = new Person() - Мы создаем новый объект, используя функцию-конструктор
            Person.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion50 = !isQuestion50"
          :class="{ 'general-issues__question_active': isQuestion50 }"
        >
          Что делает метод <strong> call()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion50">
          <p class="general-issues__paragraph">
            Метод <strong>call()</strong> можно использовать для вызова метода объекта на другом
            объекте.
          </p>

          <p class="general-issues__paragraph"><strong>obj1.func.call(obj2)</strong></p>

          <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
var student = {
  name: "Matt",
  getName: function(){
    console.log(this.name);
  }
}
        
var anotherStudent = {
  name: "Sophie"
};

student.getName.call(anotherStudent);
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple">Sophie</span>
          </p>

          <p class="general-issues__paragraph">
            Метод <strong> call() </strong> также можно использовать для вызова функции, указав
            объект-владелец.
          </p>

          <!-- <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
function sayHi(){
  console.log("Hello " + this.name);
}
        
var person = {name: "Matt"};
        
sayHi.call(person);
                </code>
              </pre>
            </span>
          </p> -->

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple"> Hello Matt</span>
          </p>

          <p class="general-issues__paragraph">
            Также <strong>call()</strong> может принимать аргументы.
          </p>

          <!-- <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
function sayHi(adjective){
  console.log("Hello " + this.name + ", You are " + adjective);
}
        
var obj = {name: "Matt"};
        
sayHi.call(obj, "awesome");
                </code>
              </pre>
            </span>
          </p> -->

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple">Hello Matt, you are awesome</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion51 = !isQuestion51"
          :class="{ 'general-issues__question_active': isQuestion51 }"
        >
          Что такое метод <strong> apply()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion51">
          <p class="general-issues__paragraph">
            Метод <strong> apply()</strong> делает то же самое, что и
            <strong> call() </strong> метод. Разница в том, что <strong> apply()</strong> метод
            принимает аргументы в виде массива.
          </p>

          <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
const person = {
    name: 'John'
}

function greet(greeting, message) {
    return `${greeting} ${this.name}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple"> Hello John. How are you? </span>
          </p>

          <p class="general-issues__paragraph">
            В линии:
            <br />
            <span class="general-issues__span-purple"
              >let result = greet.apply(person, ['Hello', 'How are you?']);</span
            >
          </p>

          <p class="general-issues__paragraph">
            ‘Hello’назначается greetingи ‘How are you?’назначается messageв greet()функции.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          В чем разница между <strong> .call и .apply?</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">
            Сходство заключается в том, что и .call, и .apply используются для вызова функций, а
            также первый параметр будет использоваться как значение this внутри функции.
          </p>

          <p class="general-issues__paragraph">
            А разница в том, что .call в качестве следующих аргументов принимает аргументы,
            разделенные запятыми, в то время как .apply в качестве следующих аргументов принимает
            массив аргументов.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              function add(a, b) { <br />
              return a + b; <br />
              } <br />
              console.log(add.call(null, 1, 2)); // 3 <br />
              console.log(add.apply(null, [1, 2])); // 3
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Что такое метод <strong>bind()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <p class="general-issues__paragraph">
            Метод <strong>bind()</strong> возвращает новую функцию, <strong>this</strong> которая
            была установлена для другого объекта.
          </p>

          <p class="general-issues__paragraph">
            В отличие от <strong> apply()</strong> и <strong>call()</strong>
            <strong>bind()</strong> не выполняет функцию немедленно. Вместо этого он возвращает
            новую версию функции, для которой задано другое значение
            <strong> .call() bind() this</strong>
          </p>

          <p class="general-issues__paragraph">
            Давайте посмотрим пример:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
let person = {
    name: 'John',
    getName: function() {
        console.log(this.name);
    }
};

window.setTimeout(person.getName, 1000);
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Это не печатает имя <strong>“John”</strong>, вместо этого оно печатает
            <strong>undefined</strong>. Чтобы понять, почему это происходит, перепишите последнюю
            строку эквивалентным образом: <br />
            <span class="general-issues__span-purple">
              let func = person.getName; <br />
              setTimeout(func, 1000);
            </span>
          </p>

          <p class="general-issues__paragraph">
            setTimeout() получает функцию отдельно от person объекта, но не имеет имени person.
            Таким образом , при setTimeout() вызове .person.getName name undefined
          </p>

          <p class="general-issues__paragraph">
            Чтобы это исправить, нужно привязать getName()метод к personобъекту:
            <br />
            <span class="general-issues__span-purple">
              let func = person.getName.bind(person); <br />
              setTimeout(func, 1000);
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple">John</span>
          </p>

          <p class="general-issues__paragraph">Давайте проверим, как работает этот подход:</p>

          <p class="general-issues__paragraph">Метод person.getName привязан к person объекту.</p>

          <p class="general-issues__paragraph">
            Связанная функция func теперь имеет this значение, установленное для person объекта.
            Когда вы передаете эту новую связанную функцию setTimeout() функции, она знает, как
            получить name файл person.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Оператор <strong>new</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          <p class="general-issues__paragraph">
            Оператор <strong>new</strong> используется для создания объектов. Операндом этого
            оператора должна быть функция. Функция, которая создаётся специально для работы с
            оператором <strong>new</strong>, называется конструктором. Конструктор используется для
            инициализации нового созданного объекта:
          </p>

          <p class="general-issues__paragraph">
            function Obj() { <br />
            this.x = 5; <br />
            } <br />

            var o = new Obj(); <br />
            alert(o.x); // 5
          </p>

          <p class="general-issues__paragraph">
            Работает это всё (оператор <strong>new</strong>с конструктором) следующим образом:
            встречая оператор <strong>new</strong> интерпретатор создаёт новый пустой объект, затем
            он вызывает конструктор, и передаёт ему новый созданный объект в качестве значения
            ключевого слова this. Внутри конструктора происходит инициализация свойств вновь
            созданного объекта. После того, как объект создан и инициализарован, оператор
            <strong>new</strong> возвращает созданный объект. <br />
            Создаём новый экземпляр какого-то класса
          </p>

          <div class="</p>"></div>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Что такое <strong>колбэк-функция</strong> - функция
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          <p class="general-issues__paragraph">
            Функция обратного вызова — это функция, которая передается в качестве аргумента другой
            функции. Эта функция выполняется внутри функции, которой она передана как «обратный
            вызов», когда какое-либо действие было завершено.
          </p>

          <p class="general-issues__paragraph">
            Давайте посмотрим на пример этого:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
 function greetName(name) {
  console.log('Hello ' + name);
}

function askName(callback) {
  let name = prompt('Enter your name.');
  callback(name);
}

askName(greetName);
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Этот код предлагает вам имя, и когда вы ввели имя, он говорит «Привет» этому имени.
            Таким образом, функция обратного вызова, которой в данном случае является greetName,
            выполняется только после того, как вы ввели имя.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion55 = !isQuestion55"
          :class="{ 'general-issues__question_active': isQuestion55 }"
        >
          Зачем использовать обратные вызовы в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion55">
          <p class="general-issues__paragraph">
            Обратные вызовы полезны, потому что JavaScript — это язык, управляемый событиями.
            Другими словами, вместо того, чтобы ждать ответа, он продолжает выполняться, ожидая
            других событий.
          </p>

          <p class="general-issues__paragraph">
            Приведенный выше пример демонстрирует полезность обратных вызовов в JavaScript:
            <br />
            <span class="general-issues__span-purple">
              <pre>
               <code>
function greetName(name) {
  console.log('Hello ' + name);
}

function askName(callback) {
  let name = prompt('Enter your name.');
  callback(name);
}

askName(greetName);
               </code>
            </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          События <strong>клавиатуры</strong>.
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
              >developer.mozilla.org</a
            >
          </p>

          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code"
              >KeyboardEvent.code</a
            >
          </p>
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          Объясните разницу между
          <strong>«==» и «===».</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          <p class="general-issues__paragraph">
            <strong>«==» </strong>используется для сравнения двух значений независимо от типа данных
            переменной. (сравнивает значения)
          </p>

          <p class="general-issues__paragraph">
            <strong>«===»</strong> используется для сравнения двух значений, но это будет строгая
            проверка, поэтому будет проверяться соответствие значения и типа данных. (сравнивает как
            значение, так и тип)
          </p>

          <!-- <p class="general-issues__paragraph">
<pre>
              <code>
 Примеры:            
"50" == 50 // правда 
"50" === 50 // ложь 
 50 === 50 // правда
              </code>
            </pre>
          </p>  -->
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          Как проверить, является ли значение <strong>не числом</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          <p class="general-issues__paragraph">
            Функция <strong>isNaN()</strong> определяет, является ли значение
            <strong>не числом</strong>.
          </p>

          <!-- <p class="general-issues__paragraph">
            <pre>
              <code>
                 <span class="general-issues__span-purple">
isNaN(48) //false 
isNaN(-1.23) //false 
isNaN(5-2) //false 
isNaN('123') //false 
isNaN('Привет, я настоящая строка') //true 
isNaN('2005 /12/12') //true 
isNaN('') //false 
isNaN(undefined) //true 
                 </span>
               </code>
            </pre>
          </p>  -->

          <!-- <p class="general-issues__paragraph">
            
            <pre>
              <code>
                <span class="general-issues__span-purple">
function toPounds(kilos) {
  if (isNaN(kilos)) {
    return 'Not a Number! Cannot be a weight.';
  }
  return kilos * 2.2;
}

console.log(toPounds('this is a test'));
console.log(toPounds('100'));
                </span>
              </code>
            </pre>
          </p> -->
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          Как преобразовать строку в <strong>число</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">
          <p class="general-issues__paragraph">
            <strong>parseInt()</strong> преобразует строку в целое число
          </p>

          <!--     <p class="general-issues__paragraph">
            <pre>
              <code>
Пример:
parseInt("30", 10) // 30 
parseInt("55px", 10) // 50 
parseInt(2.55, 10) // 2
              </code>
            </pre>
          </p>

          <p class="general-issues__paragraph">
            <strong>parseFloat() </strong> преобразует строку в число точек (с десятичным числом)
          </p>

          <p class="general-issues__paragraph">
            <pre>
              <code>
Пример:
parseFloat("30") // 30 
parseFloat("55px") // 50 
parseFloat(2.55) // 2.55
              </code>
            </pre>
          </p>-->

          <p class="general-issues__paragraph">
            <strong> Number()</strong> преобразует строку в число. Это может быть целое число или
            десятичное число. Они часто могут быть менее безопасными, чем использование parseInt или
            parseFloat
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          Как проверить, является ли объект <strong>массивом</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">
          Функция <strong>isArray()</strong> определяет, является ли объект массивом.
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          Что такое <strong> параметры функции по умолчанию</strong>.
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">
          <p class="general-issues__paragraph">
            Они позволяют инициализировать именованные параметры со значениями по умолчанию, если
            значение не передается или undefined не передается.
          </p>

          <!--   <p class="general-issues__paragraph">
            <pre>
              <code>
function addTogether(x, y = 1) {
     return x + y;
}
addTogether(10, 10) // 20
addTogether(10) // 11
              </code>
            </pre>
          </p> -->
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          Что такое <strong>модули ES6</strong>? Назовите два разных <strong>экспорта ES6</strong>.
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">
          <p class="general-issues__paragraph">
            Модули — это единицы повторно используемого кода. Обычно вы можете импортировать
            полезную функцию или конструктор в свой проект из модуля.
          </p>

          <p class="general-issues__paragraph">
            Импорт функций из модулей может выглядеть так: <br />
            <span class="general-issues__span-purple"
              >импортировать {привет} из './modules/helloWorld.js';</span
            >
          </p>

          <p class="general-issues__paragraph">
            Они организуют связанный набор кода JavaScript. Модуль может содержать переменные и
            функции. Модуль — это не что иное, как фрагмент кода JavaScript, записанный в файле.
          </p>

          <p class="general-issues__paragraph">
            <strong>Экспорт по умолчанию</strong> используется, когда модулю нужно экспортировать
            только одно значение.
          </p>

          <p class="general-issues__paragraph">
            <strong>Именованные экспорты </strong>отличаются своими именами. В модуле может быть
            несколько именованных экспортов.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          Что такое <strong>async</strong>/<strong>await</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">
          <p class="general-issues__paragraph">
            <strong>async</strong> перед функцией означает одну простую вещь: функция всегда
            возвращает обещание. Другие значения автоматически оборачиваются в разрешенное обещание.
          </p>

          <p class="general-issues__paragraph">
            <strong>await</strong>
            заставляет JavaScript ждать, пока это обещание не выполнится, и после этого возвращает
            результат.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          Как вы делаете <strong> вызов API</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">
          <p class="general-issues__paragraph"><strong>1. </strong> XMLHttpRequest</p>

          <p class="general-issues__paragraph"><strong>2. </strong> fetch</p>

          <p class="general-issues__paragraph"><strong>3. </strong> Axios</p>

          <p class="general-issues__paragraph"><strong>4. </strong> jQuery</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          Назовите (типы глаголов) <strong> методы API</strong>, которые вы бы использовали в
          JavaScript.
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">
          <p class="general-issues__paragraph">
            <strong>POST</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>GET</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>PATCH</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>DELETE</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>PUT</strong>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          Назовите различные <strong> селекторы DOM</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">
          <p class="general-issues__paragraph">
            <strong>- getElementsByTagName()</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>- getElementsByClassName()</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>- getElementById()</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>- querySelector()</strong>
          </p>

          <p class="general-issues__paragraph">
            <strong>- querySelectorAll()</strong>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          Какие типы <strong>всплывающих окон</strong> есть в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">
          <p class="general-issues__paragraph">
            <strong>Alert</strong> <br />
            <span class="general-issues__span-purple"> window.alert("Hello, world!"); </span>
          </p>

          <p class="general-issues__paragraph">
            <strong>Confirm</strong> <br />
            <span class="general-issues__span-purple">
              if (window.confirm("Are you sure you want to go?")) { <br />
              window.open("exit.html", "See you again!"); <br />
              }
            </span>
          </p>

          <p class="general-issues__paragraph">
            <strong>Prompt</strong> <br />
            <span class="general-issues__span-purple">
              let person = window.prompt("Enter your name"); <br />
              if (person != null) { <br />
              console.log('Hello', person); <br />
              }
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion34 = !isQuestion34"
          :class="{ 'general-issues__question_active': isQuestion34 }"
        >
          Что такое оператор <strong>расширения</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion34">
          <p class="general-issues__paragraph">
            Оператор <strong>Spread</strong> позволяет расширять итерируемые объекты
            (массивы/объекты/строки) до отдельных аргументов/элементов. Давайте возьмем пример,
            чтобы увидеть это поведение:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              function sum(a, b, c) { <br />
              return a + b + c; <br />
              } <br />
              const nums = [15, 25, 35]; <br />
              console.log(sum(...nums)); <br />
              Output: <br />

              75
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          Что такое <strong> функции высшего порядка</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">
          <p class="general-issues__paragraph">
            Функция более высокого порядка воздействует на другую функцию (функции). Он либо
            принимает функцию в качестве аргумента, либо возвращает другую функцию.
          </p>

          <p class="general-issues__paragraph">
            Например: <br />
            <span class="general-issues__span-purple">
              function runThis(inputFunction) { <br />
              inputFunction(); <br />
              } <br />

              runThis(function() { console.log("Привет, мир") });</span
            >
            <br />
            Выход: <br />
            <span class="general-issues__span-green">Привет, мир </span>
          </p>

          <p class="general-issues__paragraph">
            Другой пример: <br />
            <span class="general-issues__span-purple">
              function giveFunction() { <br />
              return function() { <br />
              console.log("Hello world") <br />
              } <br />
              }
              <br />
              var action = giveFunction(); <br />
              action()
            </span>
            <br />
            Выход: <br />
            <span class="general-issues__span-green">Привет, мир</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion36 = !isQuestion36"
          :class="{ 'general-issues__question_active': isQuestion36 }"
        >
          Что такое <strong>Строгий режим</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion36">
          <p class="general-issues__paragraph">
            <strong>Строгий режим</strong> позволяет настроить программу для работы в строгом
            контексте. Это предотвращает выполнение определенных действий. Кроме того, возникает
            больше исключений.
          </p>

          <p class="general-issues__paragraph">
            Выражение <strong>"use strict"; </strong> указывает браузеру включить строгий режим.
          </p>

          <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple"
              >"use strict"; <br />
              number = 1000
            </span>
          </p>

          <p class="general-issues__paragraph">
            Это вызывает ошибку, поскольку строгий режим не позволяет вам присвоить значение
            необъявленной переменной.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion40 = !isQuestion40"
          :class="{ 'general-issues__question_active': isQuestion40 }"
        >
          Зачем использовать <strong>строгий режим</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion40">
          <p class="general-issues__paragraph">
            <strong>строгий режим</strong> помогает писать «безопасный» код JavaScript. Это
            означает, что плохие синтаксические практики превращаются в настоящие ошибки.
          </p>

          <p class="general-issues__paragraph">
            Например, <strong>строгий режим</strong> запрещает создание глобальных переменных.
          </p>

          <p class="general-issues__paragraph">
            Чтобы объявить <strong>строгий режим</strong>, добавьте ‘use strict’;оператор перед
            операторами, которые вы хотите использовать в строгом режиме:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple"
              >'use strict'; <br />
              const sentence = "Hello, this is very strict";</span
            >
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion37 = !isQuestion37"
          :class="{ 'general-issues__question_active': isQuestion37 }"
        >
          Что такое <strong> немедленно вызываемая функция</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion37">
          <p class="general-issues__paragraph">
            Немедленно вызываемая функция (IIFE) запускается сразу после определения.
          </p>

          <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple">
              (function(){ <br />
              // action here <br />
              })();
            </span>
          </p>

          <p class="general-issues__paragraph">
            Чтобы понять, как работает IIFE, посмотрите на круглые скобки вокруг него:
          </p>

          <p class="general-issues__paragraph">
            - Когда JavaScript видит ключевое слово function, он предполагает, что идет объявление
            функции.
          </p>

          <p class="general-issues__paragraph">
            - Но объявление выше неверно, потому что у функции нет имени.
          </p>

          <p class="general-issues__paragraph">
            - Чтобы исправить это, используется первый набор скобок вокруг объявления. Это сообщает
            интерпретатору, что это выражение функции, а не объявление.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              (function (){ <br />
              // action here; <br />
              })
            </span>
          </p>

          <p class="general-issues__paragraph">
            Затем, чтобы вызвать функцию, необходимо добавить еще один набор скобок в конце
            объявления функции. Это похоже на вызов любой другой функции:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              (function (){ <br />
              // action here; <br />
              })
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion38 = !isQuestion38"
          :class="{ 'general-issues__question_active': isQuestion38 }"
        >
          Что делает <strong>двойной восклицательный знак</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion38">
          <p class="general-issues__paragraph">
            Двойной восклицательный знак преобразует любое значение в логическое значение в
            JavaScript.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              !!true // true <br />
              !!2 // true <br />
              !![] // true <br />
              !!"Test" // true <br />
              <br />
              !!false // false <br />
              !!0 // false <br />
              !!"" // false <br />
            </span>
          </p>

          <p class="general-issues__paragraph">
            Это работает, потому что все в JavaScript по своей природе является «истинным» или
            «ложным».
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion39 = !isQuestion39"
          :class="{ 'general-issues__question_active': isQuestion39 }"
        >
          Как можно <strong> удалить свойство</strong> и его значение из объекта?
        </button>

        <div class="general-issues__answer" v-if="isQuestion39">
          <p class="general-issues__paragraph">
            Вы можете использовать ключевое слово <strong>delete</strong> для удаления свойства и
            его значения из объекта.
          </p>

          <p class="general-issues__paragraph">
            Пример: <br />
            <span class="general-issues__span-purple">
              var student = {name: "John", age:20}; <br />
              delete student.age; <br />
              console.log(student); <br />
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output: <br />
            <span class="general-issues__span-green"> {name: "John"} </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion41 = !isQuestion41"
          :class="{ 'general-issues__question_active': isQuestion41 }"
        >
          Что такое <strong>глобальная переменная?</strong>
        </button>

        <div class="general-issues__answer" v-if="isQuestion41">
          <p class="general-issues__paragraph">Глобальная переменная доступна везде в коде.</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion42 = !isQuestion42"
          :class="{ 'general-issues__question_active': isQuestion42 }"
        >
          Что такое <strong>события</strong> JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion42">
          <p class="general-issues__paragraph">
            События — это то, что происходит с элементами HTML. Когда JavaScript используется на
            HTML-странице, он может реагировать на события, такие как нажатие кнопки.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion43 = !isQuestion43"
          :class="{ 'general-issues__question_active': isQuestion43 }"
        >
          Что делает метод <strong>preventDefault()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion43">
          <p class="general-issues__paragraph">
            Название preventDefault "предотвратить дефолт" хорошо описывает поведение. Это
            предотвращает поведение события по умолчанию.
          </p>

          <p class="general-issues__paragraph">
            Например, вы можете запретить отправку формы при нажатии кнопки отправки:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              document.getElementById("link").addEventListener("click", function(event){ <br />
              event.preventDefault() <br />
              });</span
            >
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion44 = !isQuestion44"
          :class="{ 'general-issues__question_active': isQuestion44 }"
        >
          Что такое метод <strong>setTimeout()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion44">
          <p class="general-issues__paragraph">
            Метод <strong>setTimeout()</strong> вызывает функцию (один раз) через указанное
            количество миллисекунд. Например, давайте зарегистрируем сообщение через одну секунду (
            1000ms):
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              setTimeout(function() { <br />
              console.log("Good day"); <br />
              }, 1000);
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion45 = !isQuestion45"
          :class="{ 'general-issues__question_active': isQuestion45 }"
        >
          Что такое метод <strong>setInterval()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion45">
          <p class="general-issues__paragraph">
            Метод <strong>setInterval()</strong> периодически вызывает функцию с заданным
            интервалом.
          </p>

          <p class="general-issues__paragraph">
            Например, давайте периодически логировать сообщение каждую секунду:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              setInterval(function() { <br />
              console.log("Добрый день"); <br />
              }, 1000);
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion46 = !isQuestion46"
          :class="{ 'general-issues__question_active': isQuestion46 }"
        >
          Что такое <strong>ECMAScript</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion46">
          <p class="general-issues__paragraph">
            <strong>ECMAScript</strong> — это язык сценариев, лежащий в основе JavaScript.

            <strong>ECMAScript</strong> стандартизирован Международной организацией по
            стандартизации ECMA.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion47 = !isQuestion47"
          :class="{ 'general-issues__question_active': isQuestion47 }"
        >
          Как можно присвоить переменной <strong>значение по умолчанию</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion47">
          <p class="general-issues__paragraph">
            Используйте <strong>логический оператор || </strong> в назначении, чтобы указать
            значение по умолчанию:
          </p>

          <p class="general-issues__paragraph"><strong>const a = b || c;</strong></p>

          <p class="general-issues__paragraph">
            Это работает так: если <strong>b</strong> ложно, то значение <strong>c</strong> будет
            присвоено значению <strong>a</strong>.
          </p>

          <p class="general-issues__paragraph">
            (<strong>Falsy</strong> означает:
            <strong>null, false, undefined, 0, пустую строку, NaN</strong>.)
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion48 = !isQuestion48"
          :class="{ 'general-issues__question_active': isQuestion48 }"
        >
          Что такое функция <strong>eval()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion48">
          <h2 class="general-issues__subheading">Не используйте eval без необходимости!</h2>

          <p class="general-issues__paragraph">
            <strong>Warning: </strong> Выполнение кода JavaScript с текстовой строки - это
            невероятный риск для безопасности. Злоумышленнику слишком легко запустить какой угодно
            код, когда вы используете eval(). Смотрите Никогда не используйте eval()!, ниже.
          </p>

          <p class="general-issues__paragraph">
            <strong>eval()</strong> - функция глобального объекта, оценивает код внутри строки.
            Возвращает значение выполнения кода, переданного в функцию в виде строки. Если код не
            возвращает ничего - будет возвращено значение undefined.
          </p>

          <p class="general-issues__paragraph">
            <strong>Аргумент</strong> функции eval() - <strong>строка.</strong> Строка для оценки
            может быть выражением, переменной, оператором или последовательностью операторов. eval()
            исполняет содержащееся в строке выражение, один или несколько операторов JavaScript. Не
            стоит вызывать eval() для определения значения арифметического выражения; JavaScript
            вычисляет их автоматически.
          </p>

          <p class="general-issues__paragraph">
            eval() можно использовать для вычисления значения арифметического выражения, записанного
            в строковом виде, на более поздней стадии исполнения. Предположим, существует переменная
            x. Можно отложить вычисление выражения, в котором содержится х, если присвоить
            переменной это выражение в виде строки (допустим, "3 * x + 2"), а затем вызвать eval() в
            более поздней точке кода.
          </p>

          <p class="general-issues__paragraph">
            Если аргумент, переданный eval(), не является строкой, eval() возвращает его неизменным.
            В следующем примере определён конструктор String, и eval() не вычисляет значение
            выражения, записанного в строковом виде, а возвращает объект типа String.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              console.log(eval('2 + 2')); <br />
              // expected output: 4 <br />
              <br />
              console.log(eval(new String('2 + 2'))); <br />
              // expected output: 2 + 2 <br />
              <br />
              console.log(eval('2 + 2') === eval('4')); <br />
              // expected output: true <br />
              <br />

              console.log(eval('2 + 2') === eval(new String('2 + 2'))); <br />
              // expected output: false <br />
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion49 = !isQuestion49"
          :class="{ 'general-issues__question_active': isQuestion49 }"
        >
          Что такое <strong>регулярное выражение</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion49">
          <p class="general-issues__paragraph">
            <a class="general-issues__link" target="_blank" href="https://www.codingem.com/regex/"
              >Регулярное выражение</a
            >
            представляет собой группу символов, образующих шаблон поиска. Это инструмент
            сопоставления с образцом, который обычно используется в JavaScript и других языках
            программирования.
          </p>

          <p class="general-issues__paragraph">
            Например, найдем любые числа из строки с помощью регулярного выражения:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              var regex = /\d+/g; <br />
              var string = "You have 100 seconds time to run"; <br />
              <br />
              var matches = string.match(regex); <br />
              <br />
              console.log(matches);
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход представляет собой массив всех совпадений: <br />
            <span class="general-issues__span-purple">[100]</span>
          </p>

          <p class="general-issues__paragraph">
            Например, регулярное выражение можно использовать для поиска адресов электронной почты
            или телефонных номеров в большом текстовом файле.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion56 = !isQuestion56"
          :class="{ 'general-issues__question_active': isQuestion56 }"
        >
          Что такое <strong>условный оператор</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion56">
          <p class="general-issues__paragraph">
            Условный оператор — это сокращение для написания операторов if-else. Условный оператор
            иногда называют тернарным оператором.
          </p>

          <p class="general-issues__paragraph">Например:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
// Regular if-else expression:
const age = 10;
if(age &lt; 18){
  console.log("Minor");
} else {
  console.log("Adult");
}

// Conditional operator shorthand for the above if-else
age &lt; 18 ? console.log("Minor") : console.log("Adult");
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Условные операторы можно <strong>связать в цепочку</strong>. Иногда это может быть
            полезно, так как делает код более понятным.
          </p>

          <p class="general-issues__paragraph">Давайте посмотрим на пример этого:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
function example() {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

// Сокращение для вышеуказанной функции
function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion57 = !isQuestion57"
          :class="{ 'general-issues__question_active': isQuestion57 }"
        >
          Что делает метод <strong>Object.freeze()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion57">
          <p class="general-issues__paragraph">
            Метод <strong>Object.freeze()</strong> замораживает объект, делает его неизменным.
            Замороженный объект больше нельзя изменить; замораживание объекта предотвращает
            добавление к нему новых свойств, удаление существующих свойств, предотвращает изменение
            перечислимости, конфигурируемости или возможности записи существующих свойств, а также
            предотвращает изменение значений существующих свойств. Кроме того, замораживание объекта
            также предотвращает изменение его прототипа. freeze() возвращает тот же объект, который
            был передан.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Выдает ошибку в строгом режиме

console.log(obj.prop);
// результат: 42
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion53 = !isQuestion53"
          :class="{ 'general-issues__question_active': isQuestion53 }"
        >
          Как получить <strong>список ключей объекта</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion53">
          <p class="general-issues__paragraph">Используйте <strong>Object.keys()метод</strong>.</p>

          <p class="general-issues__paragraph">
            Например: <br />
            <span class="general-issues__span-purple">
              <pre>
              <code>
const student = {
  name: 'Mike',
  gender: 'male',
  age: 23
};

console.log(Object.keys(student));
            </code>
            </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output: <br />
            <span class="general-issues__span-purple">["name", "gender", "age"]</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          Какие <strong>примитивные типы данных</strong> есть в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">
          <p class="general-issues__paragraph">
            Примитивный тип данных имеет примитивное значение. В JavaScript существует семь
            различных примитивных типов данных:
          </p>

          <p class="general-issues__paragraph">
            <strong>1. string— </strong>строковые значения. Например “John”.
          </p>

          <p class="general-issues__paragraph">
            <strong>2. number— </strong>числовые значения. Например 12.
          </p>

          <p class="general-issues__paragraph">
            <strong>3. boolean- </strong> правда или ложь. Например true.
          </p>

          <p class="general-issues__paragraph">
            <strong>4. null- </strong>отсутствие значения. Например let x = null;
          </p>

          <p class="general-issues__paragraph">
            <strong>5. undefined— </strong>тип, в котором переменная объявлена, но не имеет
            значения. Например, при создании переменной x таким let x;образом xстановится undefined.
          </p>

          <p class="general-issues__paragraph">
            <strong>6. bigint— </strong>Объект, предназначенный для представления целых чисел,
            превышающих 2^53–1. НапримерBigInt(121031393454720292)
          </p>

          <p class="general-issues__paragraph">
            <strong>7. symbol— </strong>Встроенный объект для создания уникальных символов. Например
            let sym1 = Symbol(‘test’)
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion52 = !isQuestion52"
          :class="{ 'general-issues__question_active': isQuestion52 }"
        >
          Какие существуют <strong>способы доступа к свойствам объекта</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion52">
          <p class="general-issues__paragraph">
            Точечное обозначение:
            <br />
            <span class="general-issues__span-purple">obj.property</span>
          </p>

          <p class="general-issues__paragraph">
            Обозначение квадратных скобок:
            <br />
            <span class="general-issues__span-purple">obj["property"]</span>
          </p>

          <p class="general-issues__paragraph">
            Обозначение выражения:
            <br />
            <span class="general-issues__span-purple">obj[expression]</span>
          </p>
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion61 = !isQuestion61"
          :class="{ 'general-issues__question_active': isQuestion61 }"
        >
          Какова цель <strong>точки останова</strong> при отладке кода?
        </button>

        <div class="general-issues__answer" v-if="isQuestion61">
          <p class="general-issues__paragraph">
            Точки останова позволяют находить ошибки в коде JavaScript.
          </p>

          <p class="general-issues__paragraph">
            Вы можете установить точки останова в своем коде, когда оператор отладчика выполняется и
            появляется окно отладчика.
          </p>

          <p class="general-issues__paragraph">
            В точке останова JavaScript останавливает выполнение и позволяет вам проверить значения
            и область действия для решения возможных проблем.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion62 = !isQuestion62"
          :class="{ 'general-issues__question_active': isQuestion62 }"
        >
          Как выполнить код JavaScript <strong>после загрузки страницы</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion62">
          <p class="general-issues__paragraph">Это можно сделать тремя способами:</p>

          <p class="general-issues__paragraph">
            Установите свойство <strong>window.onload</strong> как функцию, которая выполняется
            после загрузки страницы: <br />
            <span class="general-issues__span-purple">window.onload = функция ...</span>
          </p>

          <p class="general-issues__paragraph">
            Установите свойство <strong>document.onload</strong> как функцию, которая выполняется
            после загрузки страницы: <br />
            <span class="general-issues__span-purple">document.onload = функция ...</span>
          </p>
          <p class="general-issues__paragraph">
            установите <strong>onload</strong> свойство атрибута HTML как функцию JS: <br />
            <span class="general-issues__span-purple"> &lt;body onload="script();"></span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion63 = !isQuestion63"
          :class="{ 'general-issues__question_active': isQuestion63 }"
        >
          Что такое <strong>объект ошибки</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion63">
          <p class="general-issues__paragraph">
            <strong>Oбъект ошибки</strong> — это встроенный объект, который предоставляет подробную
            информацию об ошибке, если она возникает.
          </p>

          <p class="general-issues__paragraph">
            Объект ошибки имеет два свойства: <br />
            <strong>name</strong> <br />
            <strong>message</strong>
          </p>

          <p class="general-issues__paragraph">
            Например, предположим, что функция <strong>sayHi()</strong> выдает ошибку. Когда это
            происходит, <strong>catch</strong> блок дает вам <strong>error объект</strong>, который
            вы можете распечатать, например, на консоли.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
try {
  sayHi("Welcome");
}
catch(error) {
  console.log(error.name + "\n" + error.message);
}
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion64 = !isQuestion64"
          :class="{ 'general-issues__question_active': isQuestion64 }"
        >
          Что делает тег <strong> NoScript</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion64">
          <p class="general-issues__paragraph">
            Тег Noscript предназначен для обнаружения и реагирования на браузеры, в которых отключен
            JavaScript.
          </p>

          <p class="general-issues__paragraph">
            Вы можете использовать тег NoScript для выполнения фрагмента кода, который уведомляет
            пользователя.
          </p>

          <p class="general-issues__paragraph">
            Например, ваша HTML-страница может иметь такой noscriptтег:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
&lt;script&gt;
  document.write("Hello World!");
&lt;/script&gt;

&lt;noscript&gt;
  Your browser does not support JavaScript!
&lt;/noscript&gt;
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion65 = !isQuestion65"
          :class="{ 'general-issues__question_active': isQuestion65 }"
        >
          Что такое <strong> входной контролируемый контур</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion65">
          <p class="general-issues__paragraph">
            В цикле, <strong>контролируемом входом</strong>, условие проверяется перед входом в тело
            цикла.
          </p>

          <p class="general-issues__paragraph">
            <br />
            <span class="general-issues__span-purple">
              <pre>
              <code>
let nums = [1,2,3];
for (let num of nums) {
    console.log(num);
}
              </code>
            </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output:
            <br />
            <span class="general-issues__span-green">
              1 <br />
              2 <br />
              3
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion66 = !isQuestion66"
          :class="{ 'general-issues__question_active': isQuestion66 }"
        >
          Что такое <strong>петля с контролируемым выходом</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion66">
          <p class="general-issues__paragraph">
            В цикле, управляемом выходом, условие оценивается в конце цикла. Это означает, что тело
            цикла выполняется по крайней мере один раз, независимо от того, было ли условие true или
            false.
          </p>

          <p class="general-issues__paragraph">
            Например, в эту категорию попадает цикл do-while:
            <br />
            <span class="general-issues__span-purple">
              <pre>
                <code>
const i = 0;
do {
  console.log('The number is', i);
} while (i !== 0);
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output:

            <br />
            <span class="general-issues__span-green">The number is 0</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion67 = !isQuestion67"
          :class="{ 'general-issues__question_active': isQuestion67 }"
        >
          Что такое <strong>итератор</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion67">
          <p class="general-issues__paragraph">
            Протокол итератора позволяет объекту генерировать последовательность значений.
          </p>

          <p class="general-issues__paragraph">
            Итератор должен реализовать <strong>next()</strong> метод получения следующего значения
            в последовательности. Этот метод возвращает объект с <br />
            <strong>- value— </strong> следующее значение в последовательности итераций <br />
            <strong>- done— </strong> если это значение является последним в последовательности, это
            true. Если нет, то это false.
          </p>

          <p class="general-issues__paragraph">
            Вот пример создания и использования итератора. Эта функция реализует итератор диапазона,
            который может быть вызван rangeIter(1,5), и выводит значения 1 2 3 4.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
// define a function that returns an iterator 
function rangeIter(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let count = 0;
    // create the actual iterator object
    const iterator = {
       // create the next() method that knows how to get the next value in the sequence
       next: function() {
           let result;
           if (nextIndex &lt; end) {
               // Return the value and set done 'false' because the iteration is not completed
               result = { value: nextIndex, done: false }
               nextIndex += step;
               count++;
               return result;
           }
           // set done 'true' when the end has been reached
           return { value: count, done: true }
       }
    };
    // return an iterator object
    return iterator;
}

// Using the iterator
const it = rangeIter(1, 5);

let result = it.next();
while (!result.done) { // prints 1 2 3 4
     console.log(result.value);
     result = it.next();
}
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion68 = !isQuestion68"
          :class="{ 'general-issues__question_active': isQuestion68 }"
        >
          Что <strong>можно повторять</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion68">
          <p class="general-issues__paragraph">
            Итерируемый протокол означает, что объект может быть итерирован, и, таким образом,
            реализует протокол итератора (предыдущий вопрос)
          </p>

          <p class="general-issues__paragraph">
            Другими словами, вы можете использовать <strong>for...of</strong> цикл для любого
            итерируемого объекта, чтобы перебирать последовательность значений, которые он
            генерирует.
          </p>

          <p class="general-issues__paragraph">
            Например, <strong>Array</strong> или <strong>Map</strong> являются итерируемыми в
            JavaScript, но <strong>Object</strong> не является.
          </p>

          <p class="general-issues__paragraph">
            Вот пример применения цикла <strong>for…of</strong> к массиву, который по своей природе
            является итерируемым:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
const nums = [1,2,3];
for (let num of nums) {
    console.log(num);
}
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход: <br />
            <span class="general-issues__span-green">
              1 <br />
              2 <br />
              3
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion69 = !isQuestion69"
          :class="{ 'general-issues__question_active': isQuestion69 }"
        >
          Что такое <strong>генератор</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion69">
          <p class="general-issues__paragraph">
            Генератор является альтернативой итераторам. Вы можете писать итеративный код с
            прерывистым выполнением. Другими словами, выполнение функции генератора может быть
            приостановлено.
          </p>

          <p class="general-issues__paragraph">
            Генераторы определяются с использованием <strong>function*</strong> синтаксиса. Вместо
            того, чтобы возвращать значения, они <strong>yield значения</strong> (значения
            доходности.)
          </p>

          <p class="general-issues__paragraph">
            При создании генераторы не выполняют свой код. Вместо этого они возвращают объект
            Generator, который по сути является итератором. Когда вы вызываете next()
            объект-генератор, он запускает код до тех пор, пока не встретит yield (доход) инструкцию
            и не остановится.
          </p>

          <p class="general-issues__paragraph">
            Например, вот генератор, который делает то же самое, что и итератор в части итератора
            выше:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
// Создайте функцию генератора, которая возвращает итератор
function* rangeIter(start = 0, end = Infinity, step = 1) {
    let count = 0;
    for (let i = start; i &lt; end; i += step) {
        count++;
        yield i;
    }
    return count;
}


// Создайте объект генератора
const it = rangeIter(1, 5);


// Используйте генератор точно так же, как вы бы использовали итератор
let result = it.next();
while (!result.done) { // prints 1 2 3 4
     console.log(result.value);
     result = it.next();
}
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Функцию <strong>rangeIter</strong> намного легче читать, чем rangeIter в примере с
            итератором. Тем не менее, оба делают одно и то же.
          </p>
        </div>
      </div>

      <!--  -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion71 = !isQuestion71"
          :class="{ 'general-issues__question_active': isQuestion71 }"
        >
          Что такое <strong>node.js</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion71">
          <p class="general-issues__paragraph">
            Node.js — популярная платформа для разработки с открытым исходным кодом.
          </p>

          <p class="general-issues__paragraph">
            Он используется для выполнения кода JavaScript на стороне сервера.
          </p>

          <p class="general-issues__paragraph">
            Node.js удобен для разработки приложений, которым требуется постоянное соединение
            браузера с сервером.
          </p>

          <p class="general-issues__paragraph">
            Node.js обычно используется для создания приложений реального времени, таких как чат,
            новостная лента и т.п.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion72 = !isQuestion72"
          :class="{ 'general-issues__question_active': isQuestion72 }"
        >
          Что такое <strong>цикл событий</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion72">
          <p class="general-issues__paragraph">
            Цикл событий — это очередь функций обратного вызова. Он обрабатывает все асинхронные
            обратные вызовы.
          </p>

          <p class="general-issues__paragraph">
            Когда выполняется асинхронная функция, функция обратного вызова помещается в очередь.
            Механизм JavaScript не запускает цикл событий до завершения асинхронной задачи.
          </p>

          <p class="general-issues__paragraph">
            Например, структура цикла событий может выглядеть так:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                   <code>
while (queue.waitForMessage()) {
    queue.processNextMessage();
}
                   </code>
                 </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion73 = !isQuestion73"
          :class="{ 'general-issues__question_active': isQuestion73 }"
        >
          Что такое <strong>унарный оператор</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion73">
          <p class="general-issues__paragraph">
            <strong>Унарные операции</strong> - это операции, имеющие один операнд (аргумент),
            например, декремент и инкремент. В JavaScript унарные операции имеют самый высокий
            приоритет и все они правоассоциативные (операция находится справа от переменной i++,
            i--).
          </p>

          <p class="general-issues__paragraph">
            <strong>Унарный плюс (+)</strong> преобразует строку в число, если это возможно.
          </p>

          <p class="general-issues__paragraph">
            <strong>Унарный минус (-)</strong> преобразует строку в число, если это возможно и затем
            изменяет знак результата.
          </p>

          <p class="general-issues__paragraph">
            <strong>Оператор инкремент (++)</strong> означает увеличение на единицу. Работает он
            так: преобразует в число, увеличивает на единицу, присваивает обратно этой переменной.
            <br />

            Значение, возвращаемое оператором ++, зависит от его положения по отношению к операнду.
            Если поставить его перед операндом (префиксный оператор инкремента), то к операнду
            прибавляется 1, а результатом является увеличенное значение операнда. Если же он
            размещается после операнда (постфиксный оператор инкремента), то к операнду прибавляется
            1, однако результатом является первоначальное, неувеличенное значение операнда.
            Взгляните на различия в следующих двух выражениях: <br />

            <span class="general-issues__span-purple">
              Пример 1 <br />
              var a = 1; <br />
              var b = 1; <br />
              <br />
              document.write(a++); /* -> 1 */ <br />
              document.write(++b); /* -> 2 */
            </span>
          </p>

          <p class="general-issues__paragraph">
            <strong>Оператор декремент (--) </strong> означает уменьшение на единицу. Работает он
            так же, как и инкремент.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion84 = !isQuestion84"
          :class="{ 'general-issues__question_active': isQuestion84 }"
        >
          Что такое <strong>унарная функция</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion84">
          <p class="general-issues__paragraph">
            Унарная функция — это функция, которая принимает только один аргумент.
          </p>

          <p class="general-issues__paragraph">Например:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
              <code>
function greet(name){
    console.log('Hello', name);
}
              </code>
            </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion74 = !isQuestion74"
          :class="{ 'general-issues__question_active': isQuestion74 }"
        >
          Что такое <strong>TypeScript</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion74">
          <p class="general-issues__paragraph">
            TypeScript — это JavaScript с типами, с синтаксисом для типов. Это надмножество
            JavaScript, созданное Microsoft.
          </p>

          <p class="general-issues__paragraph">
            TypeScript — это строго типизированный язык программирования, основанный на JavaScript,
            предоставляющий вам лучшие инструменты в любом масштабе.
          </p>

          <p class="general-issues__paragraph">
            TypeScript добавляет такие типы, как необязательные типы, классы, async/await и т. д., в
            обычный JavaScript.
          </p>

          <p class="general-issues__paragraph">Вот простой пример функции TypeScript:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                 <code>
function greet(name: string): string {
   return "Hello, " + name;
}

console.log(greet("Michael"));
                 </code>
               </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion75 = !isQuestion75"
          :class="{ 'general-issues__question_active': isQuestion75 }"
        >
          Что такое <strong>конструктор</strong> в JavaScript?
        </button>

        <div class="general-issues__answer" v-if="isQuestion75">
          <p class="general-issues__paragraph">
            Конструктор — это метод создания и инициализации объекта класса. Он выполняется, когда
            вы создаете экземпляр нового объекта из класса.
          </p>

          <p class="general-issues__paragraph">Например:</p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <p>
                <code>
                  class Student { constructor() { this.name = "Mike"; } } let student = new
                  Student(); console.log(student.name);
                </code>
              </p>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output:

            <br />
            <span class="general-issues__span-green">Mike</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion76 = !isQuestion76"
          :class="{ 'general-issues__question_active': isQuestion76 }"
        >
          Что такое <strong>ES6</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion76">
          <p class="general-issues__paragraph">
            ES6 (ECMAScript 6) — шестая версия языка программирования JavaScript. Он был выпущен еще
            в июне 2015 года.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion77 = !isQuestion77"
          :class="{ 'general-issues__question_active': isQuestion77 }"
        >
          Что такое <strong>шаблонные литералы</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion77">
          <p class="general-issues__paragraph">
            Литералы шаблонов позволяют встраивать <strong>выражения</strong> непосредственно в
            строку.
          </p>

          <p class="general-issues__paragraph">
            - При использовании литерала шаблона не объявляйте строку в кавычках, а вместо этого
            используйте обратную кавычку <strong>(`)</strong>.
          </p>

          <p class="general-issues__paragraph">
            - Чтобы вставить переменную или выражение в строку, вам нужно добавить ее между
            <strong>${}</strong>
          </p>

          <p class="general-issues__paragraph">
            Например:

            <br />
            <span class="general-issues__span-purple">console.log(`Это ${10 * 10}-й раз`)</span>
          </p>

          <p class="general-issues__paragraph">
            Выход:

            <br />
            <span class="general-issues__span-green"> Это в сотый раз</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion78 = !isQuestion78"
          :class="{ 'general-issues__question_active': isQuestion78 }"
        >
          Как можно <strong>поменять местами</strong> две переменные без третьей?
        </button>

        <div class="general-issues__answer" v-if="isQuestion78">
          <p class="general-issues__paragraph">
            Используйте деструктурирование, чтобы отделить значения от массива. Это также можно
            использовать для замены двух переменных без третьего помощника:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b)
                </code>
              </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output:

            <br />
            <span class="general-issues__span-green">2 1</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion79 = !isQuestion79"
          :class="{ 'general-issues__question_active': isQuestion79 }"
        >
          Что такое <strong>ArrayBuffer</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion79">
          <p class="general-issues__paragraph">
            An ArrayBuffer— это универсальный буфер двоичных данных фиксированной длины.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                 <code>
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength)
                 </code>
               </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            Output:

            <br />
            <span class="general-issues__span-green">16</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion80 = !isQuestion80"
          :class="{ 'general-issues__question_active': isQuestion80 }"
        >
          Что такое <strong>прототип</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion80">
          <p class="general-issues__paragraph">
            Все объекты JavaScript наследуют свойства прототипа.
          </p>

          <p class="general-issues__paragraph">
            Например: <br />
            <br />
            - Математические объекты наследуют свойства от Math прототипа <br />
            - Объекты массива наследуют свойства Array прототипа.
          </p>

          <p class="general-issues__paragraph">
            Прототип – это характеристика объекта. Он описывает атрибуты, связанные с ним. Он
            действует как план объекта.
          </p>

          <p class="general-issues__paragraph">
            Например, вы можете получить доступ к объекту, prototypeчтобы добавить новое свойство в
            конструктор объекта, например:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
function Fruit(name, weight) {
  this.name = name;
  this.weight = weight;
}
Fruit.prototype.description = "Yum!";
                </code>
              </pre>
            </span>
          </p>
          <strong></strong>
        </div>
      </div>

      <!--  -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion81 = !isQuestion81"
          :class="{ 'general-issues__question_active': isQuestion81 }"
        >
          Что такое <strong>стрелочные функции</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion81">
          <p class="general-issues__paragraph">
            Стрелочные функции обеспечивают сокращение для создания функций в JavaScript.
          </p>

          <p class="general-issues__paragraph">
            Вы можете использовать стрелочные функции только в функциональных выражениях.
          </p>

          <p class="general-issues__paragraph">
            Вот сравнение обычной функции и стрелочной функции:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                 <code>
// Traditional function
var sum = function(a,b){
  return a + b;
}

// Arrow Function
var sum = (a,b) => a + b;
                 </code>
               </pre>
            </span>
          </p>

          <p class="general-issues__paragraph">
            - Стрелочные функции объявляются без ключевого слова function.
          </p>

          <p class="general-issues__paragraph">
            - Если есть только одно (возвращающее) выражение, вам не нужно использовать ключевое
            слово return.
          </p>

          <p class="general-issues__paragraph">
            В приведенном выше также отсутствуют фигурные скобки. Это возможно только в том случае,
            если стрелочная функция состоит только из одного выражения. Если их больше, то нужно
            добавить фигурные скобки после стрелки.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion82 = !isQuestion82"
          :class="{ 'general-issues__question_active': isQuestion82 }"
        >
          Какая польза от <strong>метода dir()</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion82">
          <p class="general-issues__paragraph">
            Отображает console.dir() интерактивный список свойств объекта JavaScript в формате JSON.
          </p>

          <p class="general-issues__paragraph">
            Например:
            <br />
            <span class="general-issues__span-purple"
              >const student = { "name":"Mike", "id": 132123, "city": "New York"}; <br />

              console.dir(student);</span
            >
          </p>

          <p class="general-issues__paragraph">
            В результате в консоли появится следующий интерактивный список:
          </p>

          <p class="general-issues__images">
            <img
              class="general-issues__img-interactive-list"
              src="/images/doctrine/interactive-list.png"
              alt="interactive-list"
            />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion83 = !isQuestion83"
          :class="{ 'general-issues__question_active': isQuestion83 }"
        >
          Как <strong> отключить щелчок правой кнопкой</strong> мыши на веб-странице?
        </button>

        <div class="general-issues__answer" v-if="isQuestion83">
          <p class="general-issues__paragraph">
            Вы можете отключить правый щелчок на веб-странице, вернув false из oncontextmenu
            атрибута body элемента.
          </p>

          <p class="general-issues__paragraph">
            <strong> &lt;body oncontextmenu="return false;"&gt;</strong>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion85 = !isQuestion85"
          :class="{ 'general-issues__question_active': isQuestion85 }"
        >
          Что такое <strong>чистая функция</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion85">
          <p class="general-issues__paragraph">
            Чистая функция — это функция, которая возвращает один и тот же результат с одними и теми
            же аргументами независимо от того, когда и где она вызывается. Функция является чистой,
            если она не зависит от состояния или изменения данных во время выполнения программы.
          </p>

          <p class="general-issues__paragraph">
            Например, функция, вычисляющая площадь круга, является чистой:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
                </code>
              </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion86 = !isQuestion86"
          :class="{ 'general-issues__question_active': isQuestion86 }"
        >
          Что такое <strong>деструктуризация объекта</strong>?
        </button>

        <div class="general-issues__answer" v-if="isQuestion86">
          <p class="general-issues__paragraph">
            Деструктуризация объекта — это способ извлечения свойств из объекта (или массива).
          </p>

          <p class="general-issues__paragraph">
            Но начиная с ES6 вы можете сделать это с помощью одной строки кода, используя
            деструктурирование объекта:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                 <code>
const PersonDetails = {
  name: "Matty",
  age: 42,
  married: false
}

const {name, age, married} = PersonDetails;

console.log(name);
console.log(age);
console.log(married);
                 </code>
               </pre>
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion87 = !isQuestion87"
          :class="{ 'general-issues__question_active': isQuestion87 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion87">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion88 = !isQuestion88"
          :class="{ 'general-issues__question_active': isQuestion88 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion88">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion89 = !isQuestion89"
          :class="{ 'general-issues__question_active': isQuestion89 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion89">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion90 = !isQuestion90"
          :class="{ 'general-issues__question_active': isQuestion90 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion90">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
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
      isQuestion61: false,
      isQuestion62: false,
      isQuestion63: false,
      isQuestion64: false,
      isQuestion65: false,
      isQuestion66: false,
      isQuestion67: false,
      isQuestion68: false,
      isQuestion69: false,
      isQuestion70: false,
      isQuestion71: false,
      isQuestion72: false,
      isQuestion73: false,
      isQuestion74: false,
      isQuestion75: false,
      isQuestion76: false,
      isQuestion77: false,
      isQuestion78: false,
      isQuestion79: false,
      isQuestion80: false,
      isQuestion81: false,
      isQuestion82: false,
      isQuestion83: false,
      isQuestion84: false,
      isQuestion85: false,
      isQuestion86: false,
      isQuestion87: false,
      isQuestion88: false,
      isQuestion89: false,
      isQuestion90: false,
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

  // general-issues__span-grey
  &__span-grey {
    color: #605858;
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

  &__images {
    width: 100%;
  }

  &__img-event-bubbling {
    width: 50%;
    aspect-ratio: 354 / 194;
  }

  &__img-interactive-list {
    width: 50%;
    aspect-ratio: 403 / 97;
  }
}
</style>
