<template>
  <div>
    <button
      class="general-issues__button"
      @click="isHTTPRequestMethods = !isHTTPRequestMethods"
      :class="{ 'general-issues__button_active': isHTTPRequestMethods }"
    >
      Вопросы по HTTP и клиент серверной архитектуре
    </button>

    <div v-if="isHTTPRequestMethods">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          Как работает WWW (всемирная паутина, веб) в двух словах
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">
          <p class="general-issues__paragraph">
            Как работает WWW (всемирная паутина, веб) в двух словах: <br />
            - браузер пользователя (клиент) отправляет на сервер запрос с адресом сайта (URL);
            <br />
            - сервер получает этот запрос и отдаёт клиенту требуемый тому контент. <br />
            <br />
            Иными словами, весь современный веб построен на модели клиент-серверного взаимодействия.
            И чтобы весь этот процесс оказался возможным, необходим универсальный язык-протокол,
            который будет понимать и сервер, и браузер. Такой протокол есть, а называется он HTTP
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          HTTP и клиент серверная архитектура
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <p class="general-issues__paragraph">
            В клиент-серверной архитектуре: <br />
            -

            <span class="general-issues__span-red">Клиентом </span>
            может быть всё, что угодно, что имеет доступ в сеть и может отсылать сформированные
            HTTP- запросы, либо XML- запросы на сервер и получать от него ответы:
            <br />
            - Браузер (сайт, например, фейсбук, инстаграмм) <br />
            - Мобильное приложение <br />
            - Умная бытовая техника, имеющая доступ к сети <br />
            - Серверное приложение <br />
            - Настольное приложение (например, клиент компьютерной игры)
            <span class="general-issues__span-red">сервер - </span> поставщик поставляемой услуги
            <br />
            Вся информация хранится на сервере, и читается - меняется клиентом по запросу.
            Клиентское приложение формирует запросы и отправляет на сервер. После чего програмное
            обеспечение сервера формирует ответ и отправляет его клиенту. После этого клиентское
            приложение может отправлять другие запросы, которые будут обработаны аналогичным
            образом.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Для чего нужен HTTP
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP"
              >HTTP -
            </a>
            протокол передачи гипертекста. Он разработан для передачи HTML- документов, для связи
            между браузерами и серверами, но может использоваться и для других целей. HTTP следует
            модели клиент-сервер , когда клиент делает запрос на сервер и ждёт от него ответа. HTTP
            — это протокол без сохранения состояния , что означает, что сервер не сохраняет никаких
            данных (состояния) между двумя запросами. Есть версии HTTP/1.1 и HTTP/2.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Что означает s в HTTPs
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <p class="general-issues__paragraph">
            Фактически, это тот же самый протокол HTTP, только с дополнительным уровнем шифрования.
            HTTPS расшифровывается как «защита протокола передачи гипертекста». Таким образом, HTTP
            — самостоятельный протокол, а HTTPS — расширение для его защиты. По HTTP информация
            передается незащищенной, а HTTPS обеспечивает криптографическую защиту. Особенно
            актуально это для ресурсов с ответственной авторизацией. Это могут быть социальные сети
            или сайты платежных систем. <br />

            Таким образом, HTTP применяется для передачи данных, а HTTPS позволяет осуществлять
            защищенную передачу данных с помощью шифрования и выполнять авторизацию на ресурсах с
            высоким уровнем безопасности.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          HTTP - сообщения.
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">
            HTTP - сообщения подразделяются на 2 типа: <br />

            - <span class="general-issues__span-red"> HTTP - запросы, </span>
            <span class="general-issues__span-grey"
              >которые отправляет клиент, например браузер на сервер.</span
            >
            <br />
            - <span class="general-issues__span-red"> HTTP - ответы, </span>
            <span class="general-issues__span-grey">сообщения, котрые отправляет сервер.</span>
            <br />
            <br />

            У каждого HTTP - сообщения есть свои заголовки, строка состояния и, по возможности,
            тело.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          HTTP - заголовки
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"
              >Заголовки HTTP</a
            >
            позволяют клиенту и серверу передавать дополнительную информацию с HTTP-запросом или
            ответом. <br />
            Заголовки можно сгруппировать в соответствии с их контекстом: <br />
            <span class="general-issues__span-green"> - Заголовки запроса содержат</span>
            дополнительную информацию о ресурсе, который необходимо получить, или о клиенте,
            запрашивающем ресурс. <br />
            <span class="general-issues__span-green"> - Заголовки ответов </span>
            содержат дополнительную информацию об ответе, например, о его местонахождении или о
            сервере, который его предоставил. <br />
            <span class="general-issues__span-green"> - Заголовки представления </span>
            содержат информацию о теле ресурса, например о его MIME-типе или применяемом
            кодировании/сжатии. <br />
            <span class="general-issues__span-green"> - Заголовки полезной нагрузки </span>
            содержат независимую от представления информацию о полезных данных, включая длину
            содержимого и кодировку, используемую для транспортировки.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Запросы - первый тип HTTP сообщений.
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <p class="general-issues__paragraph">
            Запросы содержат следующие элементы: <br />

            - HTTP-метод, обычно глагол подобно GET, POST или существительное, как OPTIONS или HEAD,
            определяющее операцию, которую клиент хочет выполнить. Обычно, клиент хочет получить
            ресурс (используя GET) или передать значения HTML-формы (используя POST), хотя другие
            операция могут быть необходимы в других случаях. <br />
            - Путь к ресурсу: URL ресурсы лишены элементов, которые очевидны из контекста, например
            без протокола (http://), домена (здесь developer.mozilla.org), или TCP порта (здесь 80).
            <br />
            - Версию HTTP-протокола. <br />
            - Заголовки (опционально), предоставляющие дополнительную информацию для сервера. <br />
            - Или тело, для некоторых методов, таких как POST, которое содержит отправленный ресурс.
            <br />
            <span class="general-issues__span-red"> Строка состояния:</span>
            [метод][URI][HTTP/версия], пример: GET/hello.html HTTP/1.1 <br />
            <span class="general-issues__span-red"> Заголовки: </span> <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Методы HTTP-запроса (Request Methods).
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          <p class="general-issues__paragraph">
            HTTP определяет набор
            <a
              class="general-issues__link"
              tabindex="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"
              >методов запроса</a
            >
            , чтобы указать желаемое действие, которое должно быть выполнено для данного ресурса.
            Хотя они также могут быть существительными, эти методы запроса иногда называют
            HTTP-глаголами . Каждый из них реализует различную семантику, но некоторые общие черты
            являются общими для группы из них: например, метод запроса может быть безопасным ,
            идемпотентным или кэшируемым . <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">GET</span> <br />
            <span class="general-issues__span-grey">
              Метод GET запрашивает получение содержимого ресурса.</span
            >
            <br />

            <span class="general-issues__span-green">
              Нет тела запроса. <br />
              Есть тело ответа. <br />
              Идемпотентный
            </span>
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> GET /index.html</span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">HEAD</span> <br />
            <span class="general-issues__span-grey">Проверка состояния ресурса </span>
            <br />

            <span class="general-issues__span-green">
              Нет тела запроса. <br />
              Нет тела ответа. <br />
              Идемпотентный</span
            >
            <br />

            Метод HTTP HEAD запрашивает заголовки , которые были бы возвращены, если бы HEAD
            URL-адрес запроса был запрошен методом GET HTTP . Например, если URL-адрес может
            привести к большой загрузке, HEAD запрос может прочитать его Content-Length заголовок,
            чтобы проверить размер файла без фактической загрузки файла. <br />

            Syntax: <br />
            <span class="general-issues__span-purple">HEAD /index.html </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">POST</span> <br />
            <span class="general-issues__span-grey">
              Метод запроса POST предназначен для направления запроса, при котором веб-сервер
              принимает данные, заключённые в тело сообщения, для хранения. Он часто используется
              для загрузки файла или представления заполненной веб-формы. В отличие от него, метод
              HTTP GET предназначен для получения информации от сервера. POST — метод для отправки
              данных на сайт. Чаще всего с помощью метода POST передаются формы.</span
            >
            <br />

            <span class="general-issues__span-green">
              Есть тело запроса. <br />
              Есть тело ответа. <br />
              Идемпотентный</span
            >
            <br />

            Метод HTTP POST отправляет данные на сервер. Тип тела запроса указывается в Content-Type
            заголовке. <br />
            Разница между PUT и POST заключается в том, что PUT он идемпотентный: вызов его один или
            несколько раз подряд имеет тот же эффект (то есть не является побочным эффектом), тогда
            как последовательное идентичное POSTможет иметь дополнительные эффекты, такие как
            передача заказа несколько раз. <br />

            Запрос POST обычно отправляется через HTML-форму и приводит к изменению на сервере. В
            этом случае тип контента выбирается путем помещения соответствующей строки в enctype
            атрибут form элемента или formenctype атрибут элемента input или button <br />

            Когда POST запрос отправляется с помощью метода, отличного от HTML-формы, — например,
            через XMLHttpRequest— тело может принимать любой тип. Как описано в спецификации HTTP
            1.1, POST он предназначен для обеспечения единого метода для следующих функций: <br />
            - Аннотации существующих ресурсов <br />
            - Публикация сообщения на доске объявлений, в группе новостей, в списке рассылки или в
            аналогичной группе статей; <br />
            - Добавление нового пользователя через форму регистрации; <br />
            - Предоставление блока данных, таких как результат отправки формы, в процесс обработки
            данных; <br />
            - Расширение базы данных с помощью операции добавления. <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> POST /test </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">PUT</span> <br />

            <span class="general-issues__span-grey">Изменениие ресурса</span>
            <br />
            PUT-запросы приводят к замене целевого ресурса на данные, передаваемые в запросе. Его
            можно использовать для обновления содержимого существующего ресурса или для создания
            нового ресурса.

            <span class="general-issues__span-green">
              Есть тело запроса. <br />
              Нет тела ответа. <br />
              Идемпотентный</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> PUT /new.html HTTP/1.1</span> <br />

            Ответы <br />
            Если целевой ресурс не имеет текущего представления и PUT запрос успешно создает его, то
            исходный сервер должен сообщить об этом пользовательскому агенту, отправив ответ 201(
            ).Created <br />

            HTTP/1.1 201 Created <br />
            Content-Location: /new.html <br />
            Если у целевого ресурса действительно есть текущее представление, и это представление
            успешно изменено в соответствии с состоянием вложенного представления, то исходный
            сервер должен отправить ответ 200( OK) или 204( No Content), чтобы указать на успешное
            выполнение запроса. <br />

            HTTP/1.1 204 No Content <br />
            Content-Location: /existing.html
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">DELETE</span> <br />
            <span class="general-issues__span-grey"> Метод DELETE удаляет указанный ресурс.</span>
            <br />

            <span class="general-issues__span-green">
              Есть тело запроса. <br />
              Есть тело ответа. <br />
              Не Идемпотентный</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> DELETE /file.html HTTP/1.1</span> <br />
            Ответы <br />
            Если DELETE метод успешно применен, возможны несколько кодов состояния ответа: <br />
            - Код состояния ( 202) Accepted, если действие, скорее всего, будет успешным, но еще не
            было выполнено. <br />
            - Код состояния ( 204) No Contentозначает, что действие выполнено и дополнительная
            информация не предоставляется. <br />
            - Код состояния ( 200) OK, если действие было выполнено, а ответное сообщение включает
            представление, описывающее состояние.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">CONNECT</span> <br />
            <span class="general-issues__span-grey">
              Метод CONNECT создаёт соединение с ресурсом.</span
            >
            <br />
            Метод HTTP CONNECT запускает двустороннюю связь с запрошенным ресурсом. Его можно
            использовать для открытия туннеля. <br />

            Например, этот CONNECT метод можно использовать для доступа к веб-сайтам, использующим
            SSL ( HTTPS ).
            <br />

            <span class="general-issues__span-green">
              Нет тела запроса. <br />
              Есть тело ответа. <br />
              Используется для создания туннеля на базе TCP/IP.</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> CONNECT www.example.com:443 HTTP/1.1</span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">OPTIONS</span> <br />
            <span class="general-issues__span-grey">
              Метод OPTIONS описывает варианты связи для целевого ресурса.</span
            >
            Метод HTTP OPTIONS запрашивает разрешенные параметры связи для данного URL-адреса или
            сервера. С помощью этого метода клиент может указать URL-адрес или звездочку ( *) для
            ссылки на весь сервер.
            <br />

            <span class="general-issues__span-green">
              Нет тела запроса. <br />
              Есть тело ответа. <br />
              Чаще всего используется для выполнения CORS запросов.</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple">
              OPTIONS /index.html HTTP/1.1 <br />
              OPTIONS * HTTP/1.1</span
            >
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">TRACE</span> <br />
            <span class="general-issues__span-grey">Проверяет путь до ресурса.</span>
            <br />

            <span class="general-issues__span-green">
              Для отладки. <br />
              Позволяет смотреть заголовки прокси-сервера. <br />ИдемпотентныЙ.</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> TRACE /index.html</span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">PATCH</span> <br />
            <span class="general-issues__span-grey"> Частичное изменение ресурса</span>
            <br />
            <span class="general-issues__span-green">
              Есть тело запроса. <br />
              Есть тело ответа. <br />
              Не идемпотентный</span
            >
            <br />

            Syntax: <br />
            <span class="general-issues__span-purple"> PATCH /file.txt HTTP/1.1</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Чем отличаются HTTP-методы GET и POST
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <p class="general-issues__paragraph">
            HTTP-методы GET и POST — самые распространённые способы отправить или получить данные с
            сервера. Но в разных случаях оба метода могут быть небезопасными или неудобными в
            использовании. В этой заметке рассмотрим, какой метод когда использовать. <br />

            <span class="general-issues__span-red"> GET — </span> метод для чтения данных с сайта.
            Например, для доступа к указанной странице. Он говорит серверу, что клиент хочет
            прочитать указанный документ. На практике этот метод используется чаще всего, например,
            в интернет-магазинах на странице каталога. Фильтры, которые выбирает пользователь,
            передаются через метод GET. <br />

            <span class="general-issues__span-purple">
              :authority: htmlacademy.ru <br />
              :method: GET <br />
              :path: /tutorial/php/http-header <br
            /></span>
            <br />
            <span class="general-issues__span-red"> POST — </span> метод для отправки данных на
            сайт. Чаще всего с помощью метода POST передаются формы. <br />

            <span class="general-issues__span-purple">
              URL-адрес запроса: https://htmlacademy.ru/consulting <br />
              Метод запроса: POST <br />
              Код состояния: 200 <br />
            </span>
          </p>

          <h4>GET для безопасных действий, POST для опасных</h4>

          <p class="general-issues__paragraph">
            Говоря совсем просто, GET-запросы лучше не использовать с приватной информацией. Вот
            почему: <br />
            <span class="general-issues__span-green"> - Они кэшируются.</span> Это значит, что логин
            и пароль, переданные через GET-запрос, могут остаться в интернете навсегда, например, в
            веб-архиве или кэше Гугла. <br />
            <span class="general-issues__span-green"> - Остаются в истории браузера.</span> Чтобы
            узнать, какие данные отправлялись, достаточно нажать Ctrl+H. <br />
            <span class="general-issues__span-green">
              - Сохраняются в закладках и пересылаются.</span
            >
            Можно не обратить внимания и опубликовать в соцсетях или отправить ссылку с приватной
            информацией в GET-запросе. <br />
            <span class="general-issues__span-green"> - Сохраняются в логах сервера. </span>
            Например, нельзя отправлять данные банковских карт через GET-запрос, так как это создаёт
            риски для пользователей. <br />
            Таким образом, любые важные данные — логины, пароли, данные карты, персональные данные —
            лучше передавать с помощью метода POST. Также метод POST поддерживает тип кодирования
            данных multipart/form-data, что позволяет передавать файлы.
          </p>

          <h4>Ещё раз коротко</h4>

          <h5>GET</h5>

          <p class="general-issues__paragraph">
            - Фильтры в интернет-магазинах <br />
            - Передача параметров через ссылку <br />
            - Другие безопасные запросы
          </p>

          <h5>POST</h5>

          <p class="general-issues__paragraph">
            - Любые формы с паролями или банковскими картами <br />
            - Формы заявок с персональными данными <br />
            - Отправка файлов
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          Чем отличаются PUT- и POST-запросы?
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">
          <p class="general-issues__paragraph">
            PUT-запросы приводят к замене целевого ресурса на данные, передаваемые в запросе. Его
            можно использовать для обновления содержимого существующего ресурса или для создания
            нового ресурса.
          </p>

          <p class="general-issues__paragraph">
            POST-запросы приводят к специфической для ресурса обработке данных, передаваемых в
            запросе. Их можно использовать для выполнения различных действий. В том числе — для
            создания новых ресурсов, для выгрузки файлов на сервер, для отправки форм.
          </p>

          <p class="general-issues__paragraph">
            Ещё одно отличие между PUT- и POST-запросами заключается в том, что PUT-запросы являются
            идемпотентными, а POST-запросы — нет. То есть — если запрос, в котором передаются одни и
            те же данные, и который выполняется по одному и тому же URL, будет выполнен несколько
            раз, это равносильно однократному выполнению этого запроса. Многократное выполнение
            POST-запроса не эквивалентно его однократному выполнению. То есть — несколько таких
            запросов, например, могут привести к созданию нескольких объектов на сервере
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          Ответы - второй тип HTTP сообщений,
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <p class="general-issues__paragraph">
            Ответы содержат следующие элементы: <br />
            - Версию HTTP-протокола. <br />
            - HTTP код состояния, сообщающий об успешности запроса или причине неудачи. <br />
            - Сообщение состояния — краткое описание кода состояния. <br />
            - HTTP заголовки, подобно заголовкам в запросах. <br />
            - Опционально: тело, содержащее пересылаемый ресурс. <br />

            <span class="general-issues__span-red"> Строка состояния: </span> [HTTP/версия][статус
            код], пример: HTTP/1.1 200 OK <br />
            <span class="general-issues__span-red"> Заголовки: </span> <br />
            <span class="general-issues__span-red"></span>
          </p>

          <h4>HTTP коды ответов</h4>

          <p class="general-issues__paragraph">
            1хх. Информационный <br />
            --- 100 Continue (продолжай) <br />
            2хх. Успех <br />
            --- 200 Ok (Успех) <br />
            --- 201 Created (Создано) <br />
            --- 204 No content (Нет содержимого) <br />
            3хх. Перенаправление <br />
            --- 300 Moved permanently (перемещено навсегда) <br />
            --- 301 Moved temporarily (перемещено временно) <br />
            4хх. Ошибка клиента <br />
            --- 400 Bad request (некорректный запрос) <br />
            --- 401 Unauthorized (не авторизован) <br />
            --- 404 Not found (не найден) <br />
            5хх. Ошибка сервера <br />
            --- 500 Internal server error (Внутренняя ошибка сервера) <br />
            --- 502 Bad gateway (Ошибка проксирования)
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Безопасный метод HTTP
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP"
              >Безопасный метод HTTP
            </a>
            Метод HTTP безопасен , если он не изменяет состояние сервера. Другими словами, метод
            безопасен, если он приводит к операции только для чтения. Несколько распространенных
            HTTP-методов безопасны: GET, HEAD, или OPTIONS. Все безопасные методы также идемпотентны
            , но не все идемпотентные методы безопасны. Например, PUT и DELETE оба являются
            идемпотентными, но небезопасными. <br />
            Все безопасные методы также идемпотентны: HEAD PUT DELETE POST.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          ИдемпотентныЙ метод HTTP
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
              >ИдемпотентныЙ метод HTTP
            </a>
            Метод HTTP является идемпотентным , если идентичный запрос может быть выполнен один или
            несколько раз подряд с одинаковым эффектом, оставляя сервер в одном и том же состоянии.
            Вызванный несколько раз подряд, клиент получает одинаковые результаты. <br />
            Все безопасные методы также идемпотентны: HEAD PUT DELETE POST.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Кэшируемый ответ HTTP
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/cacheable"
            >
              Кэшируемый ответ HTTP
            </a>
            Кэшируемый ответ — это HTTP-ответ, который можно кэшировать, который сохраняется для
            извлечения и использования позже, сохраняя новый запрос на сервер. Не все HTTP-ответы
            могут быть кэшированы. <br />
            Кэшируемые методы: GET,HEAD. <br />
            Некэшируемые методы: PUT, DELETE, часто POST
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          URI URL URN
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">URI - Uniform Resource Identifier</span> <br />
            <span class="general-issues__span-grey"
              >унифицированный идентификатор ресурса. Включает в себя: URL и URN
            </span>
            <br />
            URI: https://github.com/pulls/mentioned

            <br />
            <br />

            <span class="general-issues__span-red">URL - Uniform Resource Locator</span> <br />
            <span class="general-issues__span-grey"
              >унифицированный определитель местонахождения ресурса</span
            >
            <br />
            URL: https://github.com/

            <br />
            <br />

            <span class="general-issues__span-red">URN - Uniform Resource Name</span> <br />
            <span class="general-issues__span-grey">унифицированное имя ресурса</span> <br />
            URN: /pulls/mentioned
            <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          Тело HTTP - сообщения.
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">
            Тело HTTP - сообщения используется для передачи тела объекта запроса или тела объекта
            ответа. Тело сообщения может отсутствовать, но стартовая строка и заголовок являются
            обязательными элементами. Самым популярным типом тела сообщения является либо HTML, либо
            JSON.
          </p>
        </div>
      </div>

      <!--  -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Axios — это JavaScript-библиотека. Она представляет собой HTTP-клиент для браузера и
          node.js на основе Promise
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          <h4>Что такое Axios?</h4>

          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://axios-http.com/ru/docs/intro"
              >Axios</a
            >
            — это JavaScript-библиотека. Она представляет собой HTTP-клиент для браузера и node.js
            на основе Promise. Он изоморфный (одинаково может работать в браузере и node.js с той же
            базой кодов). На стороне сервера он использует нативный node.js http-модуль, тогда как
            на стороне клиента (браузер) он использует XMLHttpRequests.
          </p>

          <h4>Особенности</h4>

          <p class="general-issues__paragraph">
            - Делает XMLHttpRequests запросы из браузера <br />
            - Делает http запросы из node.js <br />
            - Поддерживает Promise API <br />
            - Перехватывает запросы и ответы <br />
            - Преобразовывает данные запроса и ответа <br />
            - Отменяет запросы <br />
            - Автоматическое преобразование для JSON-данных <br />
            - Поддержка на стороне клиента для защиты от XSRF <br />
            -
          </p>

          <h4>Установка</h4>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey">Используя npm:</span> <br />

            <span class="general-issues__span-red">$ npm install axios</span> <br />
            или <br />

            <span class="general-issues__span-red"> npm install axios</span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Используем axios для доступа к API Vue.js
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          <p class="general-issues__paragraph">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://ru.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"
            >
              Используем axios для доступа к API Vue.js</a
            >
            <br />
          </p>

          <p class="general-issues__paragraph">
            Работаем по
            <a
              class="general-issues__link"
              target="_blank"
              href="https://www.youtube.com/watch?v=zntx4J9jnb0&t=197s"
              >видео</a
            >
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          В чём отличия технологии Long Polling, протокола WebSocket и событий, генерируемых
          сервером?
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          <p class="general-issues__paragraph">
            Технология Long Polling применяется при взаимодействии клиентских и серверных систем.
            Клиент отправляет серверу запрос, ответ на который поступает тогда, когда в распоряжении
            сервера оказываются данные, запрошенные клиентом. После этого клиент выполняет новый
            запрос.
          </p>

          <p class="general-issues__paragraph">
            Протокол WebSocket позволяет устанавливать долгоживущие двусторонние соединения между
            клиентом и сервером.
          </p>

          <p class="general-issues__paragraph">
            В основе событий, генерируемых сервером, лежит использование долгоживущего
            HTTP-соединения, которое используется для отправки клиенту новых данных по инициативе
            сервера.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          Чем отличаются куки-файлы, сессионное хранилище и локальное хранилище?
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          <p class="general-issues__paragraph">
            Локальное хранилище, это место, которое браузеры могут использовать для локального
            хранения данных. В нём может храниться до 10 Мб данных. Сессионное хранилище — это
            разновидность локального хранилища, которое привязано к сессии и удаляется после её
            завершения. В сессионном хранилище может храниться до 5 Мб данных.
          </p>

          <p class="general-issues__paragraph">
            Куки-файлы используются для хранения небольших объёмов данных, не превышающих 4 Кб. Ими
            может пользоваться браузер, их может запрашивать у браузера сервер.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          Что такое CORS?
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          <p class="general-issues__paragraph">
            CORS (Cross-Origin Resource Sharing, совместное использование ресурсов между разными
            источниками) — это браузерный механизм, который позволяет предоставлять страницам доступ
            к ресурсам, расположенным за пределами некоего домена. Это расширяет возможности страниц
            и добавляет гибкости политике одинакового источника (same-origin policy).
          </p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
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
          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTTPRequestMethods',

  data() {
    return {
      isHTTPRequestMethods: false,

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
}
</style>
