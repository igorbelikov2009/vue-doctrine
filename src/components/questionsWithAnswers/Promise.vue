<template>
  <div>
    <button
      class="general-issues__button"
      @click="isPromise = !isPromise"
      :class="{ 'general-issues__button_active': isPromise }"
    >
      Промисы
    </button>

    <div v-if="isPromise">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Промисы, что это и для чего нужны ?
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <p class="general-issues__paragraph">
            Обещание — это объект, который может принести пользу в будущем
          </p>

          <p class="general-issues__paragraph">
            Обещание всегда находится в одном из возможных состояний: выполнено, отклонено или
            ожидает выполнения.
          </p>

          <p class="general-issues__paragraph">
            Создание промиса выглядит так: <br />
            <span class="general-issues__span-purple"
              >const promise = new Promise(function(resolve, reject) { <br />
              // реализуем обещание здесь })</span
            >
          </p>

          <p class="general-issues__paragraph">
            Например, давайте создадим обещание, которое разрешается через две секунды после вызова.
            <br />
            <span class="general-issues__span-purple">
              const promise = new Promise(resolve => { <br />
              setTimeout(() => { <br />
              resolve("Привет, мир!"); <br />
              }, 2000); <br />
              }, reject => {});
            </span>
          </p>

          <p class="general-issues__paragraph">
            Теперь ключ промисов в том, что вы можете выполнить код сразу после разрешения промиса с
            помощью .then() метода:
            <br />
            <span class="general-issues__span-purple">
              обещание.затем(результат => console.log(результат));
            </span>
          </p>

          <p class="general-issues__paragraph">
            Выход:
            <br />
            <span class="general-issues__span-purple">Привет, мир!</span>
          </p>

          <p class="general-issues__paragraph">
            Обещания могут быть объединены в цепочку, так что разрешенное обещание возвращает новое
            обещание.
          </p>

          <p class="general-issues__paragraph">
            Вот блок-схема промисов, которая также иллюстрирует, как они могут быть объединены в
            цепочку:
          </p>

          <div class="general-issues__images">
            <img
              class="general-issues__img-promise"
              src="/images/doctrine/promises-block.png"
              alt=""
            />
          </div>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph">
            Промисы — это объекты, которые используются в JavaScript при выполнении асинхронных
            операций. Они упрощают работу с асинхронными операциями и дают более удобные механизмы
            обработки ошибок, чем коллбэки и события.
          </p>

          <p class="general-issues__paragraph">
            Promise (промис) - это возвращаемый объект асинхронной операции, результат успешного или
            неудачного завершения асинхронной операции.
          </p>

          <p class="general-issues__paragraph">
            Promise (промис) - это объект, в который мы записываем два колбэка вместо того, чтобы
            передать их функции (resolve, reject).
          </p>

          <p class="general-issues__paragraph">
            Промис - это обещание предоставить результат позже. С помощью промиса можно поставить на
            ожидание получение результата и, когда его получаем, можем его обрабатывать. Так же
            промис может вернуть ошибку, если результат вернуть не возможно. Промис может вернуть
            либо результат, либо ошибку.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> Промис- может быть создан: </span> <br />
            - путём создания нового экземляра класса Promise <br />
            - методом fetch(), который всегда возвращает промис. <br />
            - асинхронной функцией async (), которая также всегда возвращает промис.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> Асинхронными событиями </span> являются те,
            которые возникают независимо от основного потока выполнения программы, отложенные по
            времени.
          </p>
        </div>
      </div>

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          Метод Promise.race(iterable)
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">
            Метод Promise.race(iterable) возвращает промис, который выполнен (разрешен) или отклонён
            первым, со значением или причиной отклонения этого промиса.
          </p>

          <p class="general-issues__paragraph">Пример:</p>

          <!-- <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              <pre>
                <code>
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Оба разрешенны, но promise2 выполнился быстрее
});
//результат: "two"

                </code>
              </pre>  
            </span>
          </p> -->
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion36 = !isQuestion36"
          :class="{ 'general-issues__question_active': isQuestion36 }"
        >
          Метод Promise.all(iterable)
        </button>

        <div class="general-issues__answer" v-if="isQuestion36">
          <p class="general-issues__paragraph">
            Метод Promise.all(iterable) возвращает промис, который принимает массив промисов в
            качестве входных данных. Он выполнится тогда, когда: <br />
            - будут выполнены все промисы, переданные в виде перечисляемых аргументов, <br />
            - или отклонён любой из переданных промисов.
          </p>

          <p class="general-issues__paragraph">
            Promise.all возвращает массив значений от всех промисов, которые были ему переданы.
            Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта, но
            не порядок выполнения промисов. Если какой-либо элемент перечисляемого объекта не
            является промисом, то он будет преобразован с помощью метода Promise.resolve.
          </p>

          <p class="general-issues__paragraph">
            Promise.all ждёт выполнения всех промисов (или первого метода reject()).
            <br />
            <br />

            <span class="general-issues__span-purple">
              var p1 = Promise.resolve(3); <br />
              var p2 = 1337; <br />
              var p3 = new Promise((resolve, reject) => { <br />
              setTimeout(resolve, 100, "foo"); <br />
              }); <br />
              <br />
              Promise.all([p1, p2, p3]).then(values => { <br />
              console.log(values); <br />
              }); <br />
              <br />
              //Выведет: <br />
              // [3, 1337, "foo"]
            </span>
          </p>

          <p class="general-issues__paragraph">
            Если одно из переданных промисов будет отклонено, Promise.all будет немедленно отклонён
            со значением отклонённого промиса, не учитывая другие промисы, независимо выполнены они
            или нет. Если в качестве аргумента будет передан пустой массив, то Promise.all будет
            выполнен немедленно.
          </p>

          <p class="general-issues__paragraph">
            Promise.all будет немедленно отклонён если один из переданных промисов будет отклонен:
            если у вас есть четыре промиса которые будут выполнены с задержкой и один, который будет
            отклонен немедленно - тогда Promise.all будет немедленно отклонён. <br />
            <span class="general-issues__span-purple">
              var p1 = new Promise((resolve, reject) => { <br />
              setTimeout(resolve, 1000, "one"); <br />
              }); <br />
              var p2 = new Promise((resolve, reject) => { <br />
              setTimeout(resolve, 2000, "two"); <br />
              }); <br />
              var p3 = new Promise((resolve, reject) => { <br />
              setTimeout(resolve, 3000, "three"); <br />
              }); <br />
              var p4 = new Promise((resolve, reject) => { <br />
              setTimeout(resolve, 4000, "four"); <br />
              }); <br />
              var p5 = new Promise((resolve, reject) => { <br />
              // Этот промис прервёт Promise.all <br />
              reject("reject"); <br />
              }); <br />
              <br />
              Promise.all([p1, p2, p3, p4, p5]).then(value => { <br />
              console.log(value); <br />
              }, reason => { <br />
              console.log(reason) <br />
              }); <br />
              <br />
              //Выведет: <br />
              //"reject"
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          Promise, Цепочка вызовов
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          <h4>Цепочка вызовов:</h4>
          <p class="general-issues__paragraph">
            Необходимость выполнить две или более асинхронных операции одна за другой реализуется
            созданием цепочки вызовов промисов. Причём каждый следующий вызов начинается при
            успешном завершении предыдущего и использует результат его выполнения. <br />
            Вот в чём магия: функция then возвращает новый промис, отличающийся от первоначального:
            <br />
            По сути, каждый вызванный промис означает успешное завершение предыдущих шагов в
            цепочке. <br />

            <span class="general-issues__span-green"
              ><span class="general-issues__span-red"> Важно: </span> Всегда возвращайте промисы в
              return, иначе колбэки не будут сцеплены и ошибки могут быть не пойманы (стрелочные
              функции неявно возвращают результат, если скобки {} вокруг тела функции
              опущены).</span
            >
            <br />
          </p>

          <h4>Цепочка вызовов после catch</h4>

          <p class="general-issues__paragraph">
            Можно продолжить цепочку вызовов после ошибки, т. е. после catch, что полезно для
            выполнения новых действий даже после того, как действие вернёт ошибку в цепочке вызовов.
            Ниже приведён пример: <br />

            <span class="general-issues__span-purple">
              new Promise((resolve, reject) => { <br />
              console.log('Начало'); <br />
              <br />
              resolve(); <br />
              }) <br />
              .then(() => { <br />
              throw new Error('Где-то произошла ошибка'); <br />
              <br />
              console.log('Выведи это'); <br />
              }) <br />
              .catch(() => { <br />
              console.log('Выведи то'); <br />
              }) .then(() => { <br />
              console.log('Выведи это, несмотря ни на что'); <br />
              }); <br />
            </span>
            <br />
            В результате выведется данный текст: <br />
            <span class="general-issues__span-green">
              Начало <br />
              Выведи то <br />
              Выведи это, несмотря ни на что
            </span>
            <br />
            Заметьте, что текст "Выведи это" не вывелся, потому что "Где-то произошла ошибка"
            привела к отказу
          </p>

          <h4>Композиция</h4>

          <p class="general-issues__paragraph">
            Promise.resolve() и Promise.reject() короткий способ создать уже успешные или
            отклонённые промисы соответственно. Это иногда бывает полезно. <br />

            Promise.all() и Promise.race() - два метода запустить асинхронные операции параллельно.
            <br />

            Последовательное выполнение композиции возможно при помощи хитрости JavaScript: <br />

            [func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Состояния промиса
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <p class="general-issues__paragraph">
            Promise может находиться в трёх состояниях: <br />
            - ожидание (pending): начальное состояние, не исполнен и не отклонён. <br />
            - исполнено (fulfilled): операция завершена успешно. <br />
            - отклонено (rejected): операция завершена с ошибкой.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Создание промиса
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <p class="general-issues__paragraph">
            Промис создаём путём создания нового экземляра класса Promise, передаём в него один
            аргумент - функцию. В это функции находится весь наш асинхронный код, который мы должны
            обрабатывать. Так же, эта функция принимает два аргумента: resolve, reject.
            <br />
            <span class="general-issues__span-purple">
              const myPromise = new Promise((resolve, reject) => { <br />
              <span class="general-issues__span-green">
                /* выполнение асинхронных операций <br />
                Внутри этой функции по результату нужно вызвать одну из функций : resolve или reject
                */ <br />
              </span>
              });
            </span>
            <br />
            <span class="general-issues__span-red"> resolve и reject </span> – это колбэки, которые
            предоставляет сам JavaScript. <br />
            С момента создания, промис находится в состоянии ожидания (pending). <br />
            Когда мы вызываем resolve, мы должны передать результат - какие-то данные. Состояние
            ожидания (pending) меняется на состояние исполнено (fulfilled). <br />
            Если возникла ошибка, мы должны вызвать функцию reject и передать ей эту ошибку. В этом
            случае промис считается отклонённым. <br />
            Ещё раз: промис создаётся путём создания нового экземляра класса Promise. При создании,
            в качестве аргументов, мы должны передать колбэк-функцию ((resolve, reject) => {}) c
            параметрами resolve, reject. И внутри этой колбэк-функции мы долны вызвать одну из этих
            функций (resolve, reject), чтобы промис завершился либо с успехом, либо с ошибкой.
            <br />
            При создании Промиса, внутри колбэк-функции мы должны описать логику возврата данных
            либо ошибки. То, что, мы поместим внутри resolve мы и получим результатом промиса. То,
            что мы создадим, то и будем обрабатывать при получении результата.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Получение результата промиса, .then (value => {}), .catch (error => {}) .finally()
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              myPromise <br />
              .then(value => { <br />
              <span class="general-issues__span-green">
                /* Действия, в случае успешного исполнения Промиса <br />
                - Значения value - это значение, переданное в вызове функции resolve внутри Промиса
                */
                <br />
              </span>
              }) <br />

              .catch(error => { <br />
              <span class="general-issues__span-green">
                /* Действия в случае отклонения Промиса <br />
                - Значение error - это значение, переданное в вызове фунции reject внутри Промиса */
              </span>
              <br />
              })
            </span>
            <br />
            Получение результата Промиса происходит следующим образом: у объекта myPromise, который
            был создан, будут доступно методы .then и .catch. Эти методы можно комбинировать:
            вызывать .then, затем вызывать .catch. При вызове этих функций, необходимо передать им
            параметры: value или error. <br />
            Этими методами мы описываем, что делать в случае успешного исполнения Промиса или в
            случае его отклонения.
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              .finally(() => { <br />
              <span class="general-issues__span-green">
                /* Вызов .finally(f) выполнится в любом случае после завершения промиса, независимо
                от того успешно или нет. finally хорошо подходит для очистки, например остановки
                индикатора загрузки, его ведь нужно остановить вне зависимости от результата.
                Обработчик finally «пропускает» результат или ошибку дальше, к последующим
                обработчикам. */
              </span>
              <br />
              })
            </span>
            <br />

            <span class="general-issues__span-grey"
              >Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его.
              Однако, если промис уже завершён, то обработчики выполнятся сразу:</span
            >
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          Метод fetch(), возвращает промис.
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <p class="general-issues__paragraph">
            JavaScript может отправлять сетевые запросы на сервер и подгружать новую информацию по
            мере необходимости. <br />

            Например, мы можем использовать сетевой запрос, чтобы: <br />
            - Отправить заказ, <br />
            - Загрузить информацию о пользователе, <br />
            - Запросить последние обновления с сервера, <br />
            - …и т.п. <br />
            <br />

            <span class="general-issues__span-red">
              Метод fetch() — современный, очень мощный способ выполнения сетевого запроса и
              получения информации с сервера.</span
            >
            <br />

            Базовый синтаксис: <br />

            <span class="general-issues__span-red"> let promise = fetch(url, [options]) </span>
            <br />
            <span class="general-issues__span-green"> - url – </span> URL для отправки запроса.
            <br />
            <span class="general-issues__span-green"> - options – </span> дополнительные параметры:
            метод, заголовки и так далее. <br />
            Без options это простой GET-запрос, скачивающий содержимое по адресу url. <br />

            Браузер сразу же начинает запрос и возвращает промис, который внешний код использует для
            получения результата. <br />

            Процесс получения ответа обычно происходит в два этапа: <br />

            <span class="general-issues__span-red"> Во-первых, </span> promise выполняется с
            объектом встроенного класса
            <a
              class="general-issues__link"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Response"
              >Response</a
            >
            в качестве результата, как только сервер пришлёт заголовки ответа. <br />

            На этом этапе мы можем проверить статус HTTP-запроса и определить, выполнился ли он
            успешно, а также посмотреть заголовки, но пока без тела ответа. <br />

            Промис завершается с ошибкой, если fetch не смог выполнить HTTP-запрос, например при
            ошибке сети или если нет такого сайта. <br />
            <br />

            <span class="general-issues__span-red"> Во-вторых, </span> для получения тела ответа нам
            нужно использовать дополнительный вызов метода:
            <br />

            Response предоставляет несколько методов, основанных на промисах, для доступа к телу
            ответа в различных форматах: <br />
            <span class="general-issues__span-green"> - response.text() – </span> читает ответ и
            возвращает как обычный текст, <br />
            <span class="general-issues__span-green"> - response.json() – </span> декодирует ответ в
            формате JSON, то есть, мы получаем промис <br />
            <span class="general-issues__span-green"> - response.formData() – </span> возвращает
            ответ как объект FormData (разберём его в следующей главе), <br />
            <span class="general-issues__span-green"> - response.blob() – </span> возвращает объект
            как Blob (бинарные данные с типом), <br />
            <span class="general-issues__span-green"> - response.arrayBuffer() – </span> возвращает
            ответ как ArrayBuffer (низкоуровневое представление бинарных данных), <br />
            <span class="general-issues__span-green"> - помимо этого, response.body – </span> это
            объект ReadableStream, с помощью которого можно считывать тело запроса по частям.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          Получение данных с помощью fetch api
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <p class="general-issues__paragraph">
            Запрос для получение данных будем делать на сайт
            <a
              class="general-issues__link"
              target="_blank"
              href="https://jsonplaceholder.typicode.com/"
              >JSONPlaceholder</a
            >
            <br />( Можно перейти на вкладку
            <a
              class="general-issues__link"
              target="_blank"
              href="https://jsonplaceholder.typicode.com/guide/"
              >Guide</a
            >) <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">Запрос на получение данных массива</span> <br />
            <span class="general-issues__span-purple">
              fetch('https://jsonplaceholder.typicode.com/todos') <br />
              .then(response => { <br />
              console.log(response) <br />
              return response.json() <br />
              }) <br />

              <span class="general-issues__span-green">
                результатом вызова первого метода .then является объект Response <br />
                Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/todos',
                redirected: false, status: 200, ok: true, …}</span
              >
              <br />

              .then(json => console.log(json)) <br />
              .catch(error => console.error(error))
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"
              >Запрос на получение данных отдельного элемента с id=55
            </span>
            <br />
            <span class="general-issues__span-purple">
              fetch('https://jsonplaceholder.typicode.com/todos/55') <br />
              <span class="general-issues__span-green">
                // если промис исполнен, то выполнится первая функция .then, и этой функции
                передастся ответ от сервера.
              </span>
              <br />
              .then(response => response.json()) <br />
              <span class="general-issues__span-green">
                // мы получаем ответ от сервера, как значение для параметра response этой колбэк
                функции, затем мы должны вызвать метод response, например response.json в этом
                объекте, для того, чтобы получить непосредственно данные ответа от сервера. Метод
                response.json так же возвращает промис. Из-за того, что нам опять возвращается
                промис, мы добавляем ещё один блок вызова метода .then
              </span>
              <br />

              .then(json => console.log(json)) <br />
              <span class="general-issues__span-green"
                >здесь, в качестве ответа мы получем объект json, либо JS объект, либо JS
                массив</span
              >
              <br />
              .catch(error => console.error(error))
            </span>
            <br />

            <span class="general-issues__span-green">
              метод .catch добавлен на случай, если один из промисов вернёт ошибку. Вместо того,
              чтобы быть исполненным, промис может быть отклонённым. В этом случае ошибка будет
              передана, как значение для параметра error
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          Интерфейс
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Response"
            >Response</a
          >
          представляет собой ответ на запрос
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          <p class="general-issues__paragraph">
            Можно создать новый Respons eобъект с помощью Response() конструктора, но обычно
            встречается Response объект, возвращаемый в результате операции fetch() API. <br />

            Методы Response: <br />
            - response.text() – читает ответ и возвращает как обычный текст, <br />
            - response.json() – декодирует ответ в формате JSON, <br />
            - response.formData() – возвращает ответ как объект FormData (разберём его в следующей
            главе), <br />
            - response.blob() – возвращает объект как Blob (бинарные данные с типом), <br />
            - response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое
            представление бинарных данных), <br />
            <br />

            Характеристики Response <br />
            - Response.body - ReadableStream содержимого тела. <br />
            - Response.bodyUsed - Сохраняет логическое значение, указывающее, использовалось ли тело
            в ответе. <br />
            - Response.headers - Объект Headers, связанный с ответом. <br />
            - Response.ok - Логическое значение, указывающее, был ли ответ успешным (статус в
            диапазоне 200– 299) или нет. <br />
            - Response.redirected - Указывает, является ли ответ результатом перенаправления (то
            есть его список URL-адресов содержит более одной записи). <br />
            - Response.status - Код состояния ответа. (Это будет 200к успеху). <br />
            - Response.statusText - Сообщение о состоянии, соответствующее коду состояния.
            (например, OK для 200). <br />
            - Response.trailers - Преобразование Promiseв Headersобъект, связанный с ответом,
            Response.headersдля значений HTTP- Trailerзаголовка. <br />
            - Response.type - Тип ответа (например, basic, cors). <br />
            - Response.url - URL-адрес ответа.<br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          Модуль для получения данных с сервера
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              const getData = url => <br />
              <span class="general-issues__span-green">
                // стрелочная функция getData неявно возвращает промис
              </span>
              <br />
              new Promise((resolve, reject) => <br />
              fetch(url) <br />
              .then(response => response.json()) <br />
              .then(json => resolve(json)) <br />
              <span class="general-issues__span-green">
                // вызываем resolve передаём ей (json)
              </span>
              <br />
              .catch(error => reject(error)) <br />
              ) <br />
            </span>
            <br />

            <span class="general-issues__span-green">
              // В случае возникновения ошибки, при запросе, вызываем reject и передаём ей ошибку
              (error) <br />
              // Мы создали свой промис, для того, чтобы обернуть в него вызов, используя функцию
              fetch() <br />
              <br />

              // Сначала мы получаем ответ от сервера <br />
              // Из стрима, методом response.json(), мы получаем (json) <br />
              // Только тогда мы резольвим (resolve) наш промис (Promise) <br />
              <br />

              // следовательно, мы можем использовать фунцию getData, для того чтобы послать запросы
              <br />
              // при вызове фунции передаём ей (url) <br />
              // Мы можем вынести фунцию getData в отдельный модуль и назвать его utility, <br />
              // экспортировать эту фунцию из того модуля, <br />
              // а в других местах импортировать эту фунцию, <br />
              <br />
              // и после этого просто выполнять вызовы таким образом <br />
            </span>

            <span class="general-issues__span-purple">
              getData('https://jsonplaceholder.typicode.com/todos') <br />
              .then(data => console.log(data)) <br />
              <span class="general-issues__span-green">
                // data - это то, что мы передали в resolve(json)</span
              >
              <br />
              .catch(error => console.log(error.message)) <br />
              <span class="general-issues__span-green">
                // error - это то, что мы передали в reject(error)</span
              >
              <br />
              <br />

              <span class="general-issues__span-green">
                // вызываем нашу кастомную фунцию с другими (url</span
              >) <br />
              getData('https://jsonplaceholder.typicode.com/todos/5') <br />
              .then(data => console.log(data)) <br />
              <span class="general-issues__span-green">
                // data - это то, что мы передали в resolve(json)
              </span>
              <br />
              .catch(error => console.log(error.message)) <br />
              <br />

              getData('https://jsonplaceholder.typicode.com/todos/55') <br />
              .then(data => console.log(data)) <br />
              <span class="general-issues__span-green">
                // data - это то, что мы передали в resolve(json)</span
              >
              <br />
              .catch(error => console.log(error.message)) <br />
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          ASYNK/AWAIT - специальный синтаксис для упрощения работы с промисами.
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          <h4>ASYNK</h4>

          <p class="general-issues__paragraph">
            Асинхронная функция – это функция, после вызова которой JavaScript приложение продолжает
            работать, потому что функция сразу выполняет возврат. <br />

            <span class="general-issues__span-red"> async</span> всегда ставится перед функцией, вот
            так: <br />

            <span class="general-issues__span-purple">
              async function f() { <br />
              return 1; <br />
              } <br />
            </span>
            <br />
            async функция() всегда возвращает <span class="general-issues__span-red">промис.</span>
            <br />
            Эта функция возвратит выполненный промис с результатом 1: <br />
            <span class="general-issues__span-purple">
              async function f() { <br />
              return 1; <br />
              } <br />

              f().then(alert); // 1 <br />
            </span>
            Можно и явно вернуть промис, результат будет одинаковым: <br />

            <span class="general-issues__span-purple">
              async function f() { <br />
              return Promise.resolve(1); <br />
              } <br />

              f().then(alert); // 1 <br />
            </span>
            <br />
            <br />
          </p>

          <h4>AWAIT</h4>

          <p class="general-issues__paragraph">
            Синтаксис: <br />

            // работает только внутри async–функций <br />

            <span class="general-issues__span-purple"> let value = await promise; </span> <br />
            Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис
            справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода
            продолжится.
            <br />
            <br />

            В этом примере промис успешно выполнится через 1 секунду: <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              async function f() { <br />

              let promise = new Promise((resolve, reject) => { <br />
              setTimeout(() => resolve("готово!"), 1000) <br />
              }); <br />

              let result = await promise; // будет ждать, пока промис не выполнится (*) <br />

              alert(result); // "готово!" <br />
              } <br />

              f();
            </span>
            <br />

            <span class="general-issues__span-green">
              В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис
              не выполнится. Это произойдёт через секунду после запуска функции. После чего в
              переменную result будет записан результат выполнения промиса, и браузер отобразит
              alert-окно «готово!». <br />

              Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса,
              это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может
              заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п.
              <br />

              По сути, это просто «синтаксический сахар» для получения результата промиса, более
              наглядный, чем promise.then. <br />

              await нельзя использовать в обычных функциях Если мы попробуем использовать await
              внутри функции, объявленной без async, получим синтаксическую ошибку. <br />
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
          ASYNK/AWAIT от Богдана
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <p class="general-issues__paragraph">
            Асинхронная функция, это функция, которая вместо какого-то значения возвращает промис.
            <br />

            <span class="general-issues__span-purple">
              async function asynkFn(){ <br />
              <span class="general-issues__span-red"> // всегда возвращает промис</span> <br />
              }
            </span>
            <br />

            функциональные выражения и стрелочные функции так же можно сделать асинхронными <br />
            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              <span class="general-issues__span-red"> // всегда возвращает промис</span> <br />
              }
            </span>
          </p>

          <p class="general-issues__paragraph">
            пример без AWAIT <br />
            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              return 'Success' <br />
              } <br />

              asynkFn()
            </span>
            <br />
            Эта фунция вернёт промис, потом,
            <span class="general-issues__span-red"> без ожидания, мнговенно </span> выполнет resolve
            этого промиса, и в качестве результата этого промиса функции resolve будет передана
            строка 'Success'. То есть результатом этого промиса будет строка 'Success'.
            <br />

            <span class="general-issues__span-green">
              Promise { &lt;fulfilled &gt; : 'Success'} <br />
              [[Prototype]]: Promise <br />
              [[PromiseState]]: "fulfilled" <br />
              [[PromiseResult]]: "Success" <br />
            </span>
            <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          ASYNK/AWAIT ловим ошибку
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          <p class="general-issues__paragraph">
            В данном примере промис будет мнговенно отклонён "rejected" с ошибкой<br />
            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              throw new Error('There was an error') <br />
              } <br />

              asynkFn() <br />
            </span>

            <span class="general-issues__span-green">
              Promise {rejected: Error: There was an error <br />
              at asynkFn (anonymous:2:9) <br />
              at anonymous:5:1} <br />
              [[Prototype]]: Promise <br />
              [[PromiseState]]: "rejected" <br />
              [[PromiseResult]]: Error: There was an error at asynkFn (anonymous:2:9) at
              anonymous:5:1
            </span>
            <br />

            <span class="general-issues__span-red">
              Uncaught (in promise) Error: There was an error VM2663:2 <br />
              at asynkFn (anonymous:2:9) <br />
              at anonymous:5:1 <br />
            </span>

            <br />
            Что бы обработать эту ошибку, нам нужно поймать её, используя метод .catch <br />
            В данном примере функция reject будет вызвана не явно <br />
            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              throw new Error('There was an error') } <br />

              <span class="general-issues__span-green"> // ловим ошибку</span> <br />
              asynkFn() <br />

              .then(value => console.log(value)) <br />
              <span class="general-issues__span-green">
                // на случай, если промис будет исполнен</span
              >
              <br />
              .catch(error => console.log(error.message)) <br />
              <span class="general-issues__span-green">
                // на случай, если промис будет отклонён
              </span>
            </span>
            <br />
            В консоле получим строку <br />
            <span class="general-issues__span-green">There was an error</span> <br />

            <span class="general-issues__span-grey">
              В данном случае промис выбрасывает ошибку, то есть, внутри асинхронной функции мы
              выбрасываем ошибку, в таком случае промис будет автоматически отклонён с указанной
              ошибкой. Здесь не надо указывать функции resolve и reject, они здесь присутствуют
              неявно.
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          Ожидание результата AWAIT от Богдана (часть 1)
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">
            С помощью AWAIT можно ожидать результата другого промиса, тем самым можно выполнять
            какие-то асинхронные действия внутри асинхронной функции, ожидать какого-то результата.
            <br />

            AWAIT можно использовать только в асинхронной функции. <br />

            <span class="general-issues__span-purple">
              const asynkFn = async() => { <br />
              await Promise
              <span class="general-issues__span-green"> (ожидаем результата промиса)</span> <br />
              } <br />
              <br />
              asyncFn()
            </span>
            <br />

            <span class="general-issues__span-grey">
              AWAIT может быть не один внутри асинхронной функции. То есть можно ожидать сначала
              одного результата, потом другого, потом третьего и в конце вернуть какой-то результат
              всей этой асинхронной функции. Ещё раз, асинхронная функция возвращает промис.
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              const timerPromise = () => <br />
              new Promise((resolve, reject) => <br />
              setTimeout(() => resolve(), 2000))</span
            >
            <br />

            <span class="general-issues__span-green">
              // функция timerPromise неявно возвращает промис <br />
              // 1- ая стрелочная функция возвращает new Promise <br />
              // 2- ая стрелочная функция вызывает setTimeout() <br />
              // в 3- ю мы передаём колбэк функцию resolve() <br />
              // вызываем setTimeout со 2-м аргументом, который равен 2000. <br />
              <br />

              // Получается, что через 2 сек внутри setTimeout вызовется колбэк функция resolve(),
              <br />
              // и эта функция resolve() вызовет функцию resolve в промисе, <br />
              // соответственно, промис исполнится. То есть промис исполнится через 2 сек. <br />
              <br />

              // То есть, промис создастся, функция timerPromise его вернёт, <br />
              // он будет в состоянии ожидания 2000 мс, <br />
              // через 2 сек мы вызовем функцию resolve() <br />
              // без каких то данных, без аргументов <br />
              // но, тем самым, мы исполняем промис. <br />
              // И дальше мы можем использовать функцию timerPromise</span
            >
            <br />

            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              console.log('Timer start') <br />
              await timerPromise() <br />
              console.log('Timer ended') <br />
              } <br />

              asynkFn()</span
            >
            <br />

            <span class="general-issues__span-green">
              // Мы создаём функцию asynkFn, помечаем её как асинхронную, <br />
              // то есть мы используем async перед началом стрелочной функции, <br />
              // а внутри этой функции делаем следующее: <br />
              // сначала выводим сообщение console.log('Timer start') <br />
              // потом есть вызов функции timerPromise, <br />
              // но перед ним стоит ключевое слово AWAIT, <br />
              // то есть мы ожидаем результата промиса, <br />
              // который будет возвращён функцией timerPromise(). <br />
              // И только после этого выведем console.log('Timer ended'). <br />
              <br />
              // То есть получается, что у нас функция asynkFn дальше <br />
              // не выполняется, пока не получим результат выполнения <br />
              // промиса (либо исполнен либо отклонён).
            </span>
          </p>

          <p></p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Ожидание результата AWAIT от Богдана (часть 2)
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey">
              Посмотрим, как мы можем отследить, что мы ожидаем выполнения промиса, либо исполнения,
              либо отклонения</span
            >
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              const timerPromise = () => <br />
              new Promise((resolve, reject) => <br />
              setTimeout(() => resolve(), 2000))
            </span>
            <br />
            <br />

            <span class="general-issues__span-purple">
              const asynkFn = async () => { <br />
              console.log('Timer start') <br />
              const startTime = performance.now()</span
            >
            <br />

            <span class="general-issues__span-green">
              // Метод performance.now() возвращает временную метку <br />
              // (какое время в момент вызова performance.now), <br />
              // измеряемую в миллисекундах, с точностью до одной тысячной миллисекунды.</span
            >
            <br />

            <span class="general-issues__span-purple">
              await timerPromise() <br />
              const endTime = performance.now() <br />
              console.log('Timer ended', endTime - startTime) <br />
              } <br />
              <span class="general-issues__span-green">// вызываем </span>
              <br />
              asynkFn()</span
            >
            <br />
            <br />

            <span class="general-issues__span-green"
              >// Timer start <br />
              // Promise {fulfilled} <br />
              // Timer ended 2012.800000011921 <br />
              <br />

              // повторный вызов</span
            >
            <br />

            <span class="general-issues__span-purple">asynkFn()</span> <br />

            <span class="general-issues__span-green"
              >// Timer start <br />
              // Promise {fulfilled} <br />
              // Timer ended 2003.699999988079</span
            >
            <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          Переход с промисов на ASYNK/AWAIT c непойманной ошибкой
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey"> имеем промисную запись </span> <br />
            <span class="general-issues__span-purple">
              const getData = url => <br />
              new Promise((resolve, reject) => <br />
              fetch(url) <br />
              .then(response => response.json) <br />
              .then(json => resolve(json)) <br />
              .catch(error => reject(error)) <br />
              ) <br />
              <br />
              getData('https://jsonplaceholder.typicode.com/todos') <br />
              .then(data => console.log(data)) <br />
              .catch(error => console.log(error.message))
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey"> перезапишем на ASYNK/AWAIT </span> <br />

            <span class="general-issues__span-purple">
              const getData = async url => { <br />
              const res = await fetch(url) <br />
              const json = await res.json() <br />
              <br />
              return json <br />
              } <br />
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />
              <br />
              const data = await getData(url) <br />

              console.log(data) <br
            /></span>

            <span class="general-issues__span-green">
              VM3639:1 (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, …]
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey">
              перезапишем на ASYNK/AWAIT с расшифровкой
            </span>
            <br />
            <span class="general-issues__span-purple">
              const getData = async url => { <br />
              const res = await fetch(url) <br />
            </span>
            <br />
            <span class="general-issues__span-green">
              // сначала мы ожидаем исполнения либо отклонения промиса, <br />
              // который будет возвращён функцией fetch() и результат <br />
              // присваиваем переменой res
            </span>
            <br />

            <span class="general-issues__span-purple"> const json = await res.json() </span>
            <br />
            <span class="general-issues__span-green">
              // Вызываем метод json() для res. <br />
              // Метод json() так же возвращает промис, <br />
              // потому здесь мы добавили ключевое слово await. <br />
              // Так же ожидаем исполнения либо отклонения промиса, <br />
              // который вернёт метод json и результат мы <br />
              // присваиваем переменной json.
            </span>
            <br />
            <br />

            <span class="general-issues__span-purple">return json</span> <br />
            <span class="general-issues__span-green">
              // И в итого мы возвращаем json (return json)</span
            >
            <br />

            <span class="general-issues__span-purple">}</span> <br />
            <span class="general-issues__span-green">
              /* <br />
              Асихронная функция getData async вернёт промис, <br />
              а команда (return json ) сделает этот промис исполненным. <br />
              В качестве результата такого промиса мы получим json. <br />
              А пока мы ожидаем на командах (await), <br />
              промис будет в состоянии pending. <br />
              <br />
              Что будет, если возникнет ошибка на этапах <br />
              * const res = await fetch(url) или <br />
              ** const json = await res.json() ? <br />
              <br />
              Всё просто: промис, который возвращает функция getData, <br />
              будет автоматически отклонён с указанной ошибкой, <br />
              которая возникла там (*) либо там (**). <br />
              И нам ничего для этого делать не надо. <br />
              */
            </span>
            <br />

            <span class="general-issues__span-purple">
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />

              const data = await getData(url)
            </span>
            <br />
            <span class="general-issues__span-green">
              /* <br />
              Асихронная функция getData вернёт промис, <br />
              поэтому можем записать ключевое слово await. <br />
              Мы ожидаем исполнения промиса и результат <br />
              такого промиса присваиваем переменной "data" <br />
              <br />
              Здесь нет обработки ошибок и если она возникнет, <br />
              то мы получим непойманную ошибку. <br />
              */
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          Переход с промисов на ASYNK/AWAIT c пойманной ошибкой
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              const getData = async url => { <br />
              const res = await fetch(url) <br />
              const json = await res.json() <br />
              <br />
              return json <br />
              } <br />
              <br />
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />
              <br />
              try { <br />
              const data = await getData(url) <br />
              console.log(data) <br />
              } catch (error) { <br />
              console.log(error.message) <br />
              }
            </span>
            <br />

            <span class="general-issues__span-grey">Ошибку поймали</span>

            <br />
            <span class="general-issues__span-green">
              /* GET https://jsonplaceholder.typicode.com/todos <br />
              net::ERR_INTERNET_DISCONNECTED <br />
              (ОШИБКА_ИНТЕРНЕТ_ОТКЛЮЧЕН) <br />
              Failed to fetch <br />
              */
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
          Главное в ASYNK/AWAIT
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          <p class="general-issues__paragraph">
            1. <span class="general-issues__span-purple">asynk/await - </span> синтаксическая
            надстройка над промисами, не более. <br />
          </p>

          <p class="general-issues__paragraph">
            2. <span class="general-issues__span-purple"> await </span>синтаксис возможен только
            внутри <span class="general-issues__span-purple">asynk </span> (асинхронных) функций.
            <br />
          </p>

          <p class="general-issues__paragraph">
            3. <span class="general-issues__span-purple">asynk</span> (асинхронная) функция всегда
            возвращает <span class="general-issues__span-purple">Promise</span>. <br />
            <span class="general-issues__span-green">
              В асинхронной функции мы можем использовать ключевое слово return и возвращать
              какой-то результат: строку, объект, число, всё, что угодно. И до момента возврата
              результата функции с помощью ключевого слова return, Promise, который возвращает
              функция, будет в состоянии ожидания (pending). И если нигде ошибок не возникло и
              функция дошла до ключевого слова return, то Promise, возвращённый этой функцией, будет
              исполнен с теми данными, которые мы возвращаем в инструкции с ключевым словом return.
              Если возвращаем строку (return 'строка'). то промис будет исполнен и исполнен со
              строкой 'строка', как данными. Или, если возвращаем объект, будет исполнен с объектом
              и т.д. <br />
              Если где-то возникла ошибка, то промис будет отклонён с той ошибкой, которая возникла
              внутри асинхронной функции.
            </span>
            <br />
          </p>

          <p class="general-issues__paragraph">
            4. <span class="general-issues__span-purple">asynk</span> (асинхронная) функция ожидает
            результата инструкции <span class="general-issues__span-purple">await</span> и не
            выполняет последующие инструкции.

            <span class="general-issues__span-green"
              >Это очень важно. То есть, если есть инструкция с ключевым словом asynk, дальше
              функция не будет выполнятся, пока Promise находится в состоянии pending (ожидания). Но
              при этом, JavaScript может выполнять другие задачи, например, выполнять какие-то
              действия при нажатии пользователем какой нибудь кнопки в интерфейсе фронт-энд
              приложения. То есть, это не блокирующее действие. Промис не блокирует выполнение
              других частей нашего приложения. И только, когда промис будет resolved или rejected,
              то есть - либо исполнен, либо отклонён, выполнение функции продолжится.<br />
              Это главное в ASYNK/AWAIT синтаксисе.
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          Promise от Владилена Милина
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">
          По сути, Promise - это определённая обёртка над асинхронностью, которая добавляет
          удобство.
          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey"> Пример 1: промис </span> <br />
            <span class="general-issues__span-purple">
              console.log('Request data...') <br />

              setTimeout(() => { <br />
              console.log('Preparing data...') <br />

              const backendData = { <br />
              server: 'aws', <br />
              port: 2000, <br />
              tatus: 'working', <br />
              } <br />

              setTimeout(() => { <br />
              backendData.modiified = true <br />
              console.log('Data received', backendData) <br />
              }, 2000) <br />
              }, 2000) <br />
            </span>
            <br />

            <span class="general-issues__span-green">
              Request data... // выход в консоле мнговенно <br />
              Preparing data... // через 2 секунды <br />
              Data received { server: 'aws', port: 2000, tatus: 'working', modiified: true } // ещё
              через 2 секунды
            </span>
            <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey"> Пример 2: промис с ошибкой и finally </span>
            <br />

            <span class="general-issues__span-purple">
              const p = new Promise((resolve, reject) => { <br />
              setTimeout(() => { <br />
              console.log('Preparing data') <br />

              const backendData = { <br />
              server: 'aws', <br />
              port: 2000, <br />
              tatus: 'working', <br />
              } <br />

              resolve(backendData) <br />
              }, 2000) <br />
              }) <br />
              p.then(data => { <br />
              return new Promise((resolve, reject) => { <br />
              setTimeout(() => { <br />
              data.modified = true <br />
              reject(data) <br />
              }, 2000) <br />
              }) <br />
              }) <br />
              .then(clientData => { <br />
              // console.log('Data received', clientData) <br />
              clientData.fromPromise = true <br />
              return clientData <br />
              }) <br />
              .then(data => { <br />
              console.log('modified', data) <br />
              }) <br />
              .catch(error => console.error('Error', error)) <br />
              .finally(() => console.log('Finally'))</span
            >
            <br />

            <span class="general-issues__span-green">
              Preparing data <br />
              <span class="general-issues__span-red">Error</span> { server: 'aws', port: 2000,
              tatus: 'working', modified: true } <br />
              Finally
            </span>
            <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey"> Пример 3: Функция sleep()</span> <br />

            <span class="general-issues__span-purple">
              const sleep = ms => { <br />
              return new Promise(resolve => { <br />
              setTimeout(() => resolve(), ms) <br />
              }) <br />
              } <br />

              sleep(2000).then(() => console.log('After 2 sec')) <br />
              sleep(3000).then(() => console.log('After 3 sec'))
            </span>
            <br />

            <span class="general-issues__span-green">
              After 2 sec // спустя 2 секунды <br />
              After 3 sec // спустя 3 секунды <br />
            </span>
            <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-grey">
              Пример 4: Функция sleep(), Promise.all, Promise.race</span
            >
            <br />

            <span class="general-issues__span-purple">
              const sleep = ms => { <br />
              return new Promise(resolve => { <br />
              setTimeout(() => resolve(), ms) <br />
              }) <br />
              } <br />
              Promise.all([sleep(2000), sleep(5000)]).then(() => { <br />
              console.log('All promise') <br />
              }) <br />
              <br />
              Promise.race([sleep(2000), sleep(5000)]).then(() => { <br />
              console.log('Race promise') <br />
              }) <br />
            </span>
            <br />

            <span class="general-issues__span-green">
              Race promise // через 2 секунды <br />
              All promise // через 5 секунд
            </span>
            <br />
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          Перевод цепочки промисов в ASYNK/AWAIT (от Владилена Милина)
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"
              >создаём функцию, которая возвращает промис и которая делает некую искусственную
              задержку
            </span>
            <br />

            <span class="general-issues__span-purple">
              const delay = ms => { <br />
              return new Promise(resolve => setTimeout(() => resolve(), ms)) <br />
              } <br />

              <br />
              delay(2000).then(() => console.log('2 sec')) <br />
              <span class="general-issues__span-green">// delay(2000) - это промис</span> <br />
              <br />
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />
              <br />
              function fetchTodos() { <br />
              console.log('Fetch todo started...') <br />
              return delay(2000) <br />
              .then(() => fetch(url)) <br />
              .then(response => response.json()) <br />
              } <br />
              <br />
              fetchTodos() <br />
              .then(data => { <br />
              console.log('Data:', data) <br />
              }) <br />
              .catch(error => console.error(error))</span
            >
            <br />
            <br />

            <span class="general-issues__span-grey">На выходе в консоле</span> <br />

            <span class="general-issues__span-green">
              Fetch todo started...<br />

              Data: (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},
              {…}, …]
            </span>
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red"> Переводим цепочку промисов в ASYNK/AWAIT </span>
            <br />
            <span class="general-issues__span-purple">
              const delay = ms => { <br />
              return new Promise(resolve => setTimeout(() => resolve(), ms)) <br />
              } <br />
              <br />
              delay(2000).then(() => console.log('2 sec')) <br />
              <br />
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />
              <br />
              async function fetchAsynkTodos() { <br />
              console.log('Fetch todo started...') <br />
              await delay(2000) <br />
              const response = await fetch(url) <br />
              const data = await response.json() <br />
              console.log('Data:', data) <br />
              } <br />

              <br />
              <span class="general-issues__span-green"
                >// не забываем вызвать функциюfetchAsynkTodos()</span
              >
              <br />
              fetchAsynkTodos()
            </span>
            <br />
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-red">
              Добавляем конструкцию tru{} catch{} finally{}
            </span>
            <br />

            <span class="general-issues__span-purple">
              const delay = ms => { <br />
              return new Promise(resolve => setTimeout(() => resolve(), ms)) <br />
              } <br />
              <br />
              delay(2000).then(() => console.log('2 sec')) <br />
              <br />
              const url = 'https://jsonplaceholder.typicode.com/todos' <br />
              <br />
              async function fetchAsynkTodos() { <br />
              try { <br />
              console.log('Fetch todo started...') <br />
              await delay(2000) <br />
              const response = await fetch(url) <br />
              const data = await response.json() <br />
              console.log('Data:', data) <br />
              } catch (error) { <br />
              console.error(error) <br />
              } finally { <br />
              console.log('Сделать в любом случае') <br />
              } <br />
              } <br />
              <br />
              fetchAsynkTodos() <br />
            </span>
            <br />

            <span class="general-issues__span-green"
              >/* Здесь не присутствуют внутренние колбэки, которые мы передаём в методы then. Мы
              как будто программируем асинхронный код, но благодаря оператору await, он позволяет не
              переходить к следующей строчке, пока промис, который находится справа от него на
              текущей строчке, не выполнится. */</span
            >
            <br />
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

        <div class="general-issues__answer" v-if="isQuestion21">
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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

        <div class="general-issues__answer" v-if="isQuestion23"></div>
        <p class="general-issues__paragraph">xx</p>

        <p class="general-issues__paragraph">xx</p>

        <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
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
          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>

          <p class="general-issues__paragraph">xx</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promise',

  data() {
    return {
      isPromise: false,

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
    width: calc(100% - 72px);
  }

  &__img-promise {
    width: 100%;
    aspect-ratio: 700 / 375;
  }
}
</style>
