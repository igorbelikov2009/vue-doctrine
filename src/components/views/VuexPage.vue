<template>
  <div class="general-issues">
    <div class="general-issues__container">
      <h1 class="general-issues__heading">Vuex - глобальное хранилище</h1>

      <div>
        <div>
          <button
            class="general-issues__question"
            @click="isQuestion01 = !isQuestion01"
            :class="{ 'general-issues__question_active': isQuestion01 }"
          >
            Что такое Vuex?
          </button>

          <div class="general-issues__answer" v-if="isQuestion01">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://vuex.vuejs.org/guide/state.html"
              >Что такое Vuex</a
            >

            <p>
              Vuex — это шаблон управления состоянием + библиотека для Vue.js - приложений. Vuex
              служит централизованным хранилищем для всех компонентов приложения с правилами,
              гарантирующими, что состояние может изменяться только предсказуемым образом.
            </p>

            <p>
              Vuex - это библиотека для работы с данными, и, по сути, компоненты, при использовании
              Vuex, превращаются в некоторые обёртки, которые эти данные выводят. Но вся логика
              будет переноситься во Vuex.
            </p>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion02 = !isQuestion02"
            :class="{ 'general-issues__question_active': isQuestion02 }"
          >
            Диограмма работы Vuex
          </button>

          <div class="general-issues__answer" v-if="isQuestion02">
            State (состояние) содержит в себе определёные данные, которые отправляет в Vue
            components. Vue components принимает эти данные и отрисовывает их с помощью рендера.
            Если происходит какое-то событие во Vue components, то тогда мы, с помощью функции
            Dispatch (диспатч), вызываем какой нибудь Actions (экшен) и Actions (экшены) могут быть
            асинхронными, потому, что они работают с Backend (бэкэнд айпи) API. Далее, когда данные
            подгрузятся, или мы что-то изменим в экшенах (Actions), мы вызываем метод Commit, для
            того,чтобы вызвать мутации (Mutations) и мутации, они просто напрямую изменяют State
            (состояние), который в свою очередь передаёт измененный State (состояние) во Vue
            components и он его рендерит.
            <br />
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion03 = !isQuestion03"
            :class="{ 'general-issues__question_active': isQuestion03 }"
          >
            Как сгенерировать новый проект во Vue
          </button>

          <div class="general-issues__answer" v-if="isQuestion03">
            Смотрим видео на ютубе
            <a
              class="general-issues__link"
              target="_blank"
              href="https://www.youtube.com/watch?v=c2SK1IlmYL8&t=86s"
            >
              "Все о Vuex за 30 минут." 1 минута 57 секунда</a
            >
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion04 = !isQuestion04"
            :class="{ 'general-issues__question_active': isQuestion04 }"
          >
            Как мы получаем данные с сервера, если у нас нет Vuex?
          </button>

          <div class="general-issues__answer" v-if="isQuestion04">
            Как мы получаем данные с сервера, если у нас нет Vuex? Для этого мы обращаемся к методу
            mounted, делаем его асинхронным при помощи ключевого слова async и с помощью нативной
            функции fetch передаём её URL. Далее, метод fetch возвращает нам промис, поэтому мы
            можем его подождать (await) и занести всё в объект response. Далее, для того, чтобы
            получить нам данные, необходимо распарсить этот response (const posts = await
            response.json()). Метод json() тоже возвращает промис, и в итого мы получим список
            постов. Далее, для того, чтобы мы могли обращаться к нему в шаблоне (HTML), заводим поле
            data(), где по умолчанию массив posts будет равнятся пустому массиву.
            <br />
            <span class="general-issues__span-purple">
              <pre>
                  <code>
export default {
  name: 'VuexPage',
  data() {
   return {
    posts: [],
   }
  },

  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await response.json()
    this.posts = posts
  },
}
                  </code>
                </pre>
            </span>
            <br />

            И когда данные загрузятся, мы будем делать присвоение модели posts значение posts.
            <br />
            <span class="general-issues__span-purple">this.posts = posts</span> <br />
            После этого всё выводим в шаблон (HTML) . Для этого создаём div, дальше этот див
            итерируется: <br />
            <span class="general-issues__span-purple">
              <pre>
            <code>
&lt;div&gt;
    &lt;div v-for="post in posts" :key="post.id"&gt;
        &lt; h2 &gt; &#123; &#123; post.title &#125; &#125; &lt; /h &gt;

        &lt; p &gt; &#123; &#123; post.body &#125;&#125; &lt; /p &gt; 
    &lt;/div&gt;
&lt;/div&gt;
            </code>
          </pre>
            </span>

            <h1>Это и есть ответ от сервера (response)</h1>

            <div class="appPost">
              <div class="appPost__container">
                <h5>Это и есть ответ от сервера (response)</h5>

                <div class="appPost__post" v-for="post in posts" :key="post.id">
                  <h2 class="appPost__title">{{ post.title }}</h2>

                  <p class="appPost__body">{{ post.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion07 = !isQuestion07"
            :class="{ 'general-issues__question_active': isQuestion07 }"
          >
            Получаем данные с сервера с помощью async/await через метод fetch в массивы cards и
            documents
          </button>

          <div class="general-issues__answer" v-if="isQuestion07">
            <div class="appPost">
              <h5>ответ от сервера</h5>

              <div class="appPost__container">
                cards - это объект, мы его не итерируем. Доступ к значению ключей через имя объекта
                cards, не забываем про букву
                <span class="general-issues__span-red">(s)</span> на конце <br />

                <div class="appPost__post">
                  <h2 class="appPost__title">{{ cards.userId }}</h2>

                  <h2 class="appPost__title">{{ cards.id }}</h2>

                  <h2 class="appPost__title">{{ cards.title }}</h2>

                  <p class="appPost__body">{{ cards.completed }}</p>
                </div>
              </div>

              <div>
                шаблон HTML в компоненте <br />
                <span class="general-issues__span-purple">
                  <pre>
<code>
                       
&lt;div&gt;
  &lt;h2&gt; &#123; &#123; cards.userId &#125; &#125; &lt;/h2&gt;

  &lt;h2&gt; &#123; &#123; cards.id &#125; &#125; &lt;/h2&gt;

  &lt;h2 &#123; &#123; cards.title &#125; &#125; &lt;/h2&gt;

  &lt;p&gt; &#123; &#123; cards.completed &#125; &#125; &lt;/p&gt;
&lt;/div&gt; 
                      
</code>
</pre>
                </span>
              </div>

              <div>
                script в компоненте <br />
                <span class="general-issues__span-purple">
                  <pre>
<code>
                     
&lt;script&gt;
export default {
  name: "VuexPage"

  data(){
    return {
      cards: [],
    }
  },
  async mounted(){
    const resСards = await fetch('https://jsonplaceholder.typicode.com/todos/5')
    const cards = resСards.json()
    this.cards = cards
  }

}
&lt;/script&gt;
                       
 </code>
</pre>
                </span>
              </div>

              <div class="appPost__container">
                <p>documents - это массив, мы его итерируем</p>

                <div class="appPost__post" v-for="(document, index) in documents" :key="index">
                  <p class="appPost__body">{{ index }}</p>

                  <h2 class="appPost__title">{{ document.id }}</h2>

                  <h2 class="appPost__title">{{ document.title }}</h2>

                  <p class="appPost__body">{{ document.body }}</p>
                </div>
              </div>

              <div>
                шаблон HTML в компоненте <br />
                <span class="general-issues__span-purple">
                  <pre>
<code>
                       
&lt;div v-for="(document, index) in documents" :key="index" &gt;
  &lt;p&gt; &#123; &#123; documents.userId &#125; &#125; &lt;/p&gt;

  &lt;h2&gt; &#123; &#123; documents.id &#125; &#125; &lt;/h2&gt;

  &lt;h2 &#123; &#123; documents.title &#125; &#125; &lt;/h2&gt;

  &lt;p&gt; &#123; &#123; documents.body &#125; &#125; &lt;/p&gt;
&lt;/div&gt; 
                      
</code>
</pre>
                </span>
              </div>

              <div>
                script в компоненте <br />
                <span class="general-issues__span-purple">
                  <pre>
<code>
                     
&lt;script&gt;
export default {
  name: "VuexPage"

  data(){
    return {
      documents: [],
    }
  },
  async mounted(){
    const resDocument = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const documents = resDocument.json()
    this.documents = documents
  }

}
&lt;/script&gt;
                       
 </code>
</pre>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion06 = !isQuestion06"
            :class="{ 'general-issues__question_active': isQuestion06 }"
          >
            Устанавливаем Vuex, создаём папку store и файл index.js в ней.
          </button>

          <div class="general-issues__answer" v-if="isQuestion06">
            <a
              class="general-issues__link"
              target="_blank"
              href="https://vuex.vuejs.org/installation.html"
            >
              ссылка на "Установка Vuex"</a
            >
            <br />
            <span class="general-issues__span-red"> npm install vuex@next --save </span> <br />
            1. Проверяем в папке package.json наличие vuex, у нас стоит "vuex": "^3.6.2" <br />
            2. Далее, обычно, в папке src создаётся папка store <br />
            3. В этой папке создаётся файл index.js <br />
            4. В этом файле регистрируем vuex, как обычный плагин. <br />
            <span class="general-issues__span-purple">
              import Vue from 'vue' <br />
              import Vuex from 'vuex' <br />

              <span class="general-issues__span-green">
                // 5. регистрируем Vuex, используя функцию use(), куда передаём Vuex <br
              /></span>
              Vue.use(Vuex) <br />
            </span>
            6. Далее нам необходимо сформировать объект Store, в конструктор которого передаём
            конфигурацию <br />

            <span class="general-issues__span-purple">
              const store new Vuex.Store({}) <br />
              export default store
            </span>
            <br />
            <br />
            На данный момент код в index.js такой: <br />

            <span class="general-issues__span-purple">
              import Vuex from 'vuex' <br />
              import Vue from 'vue' <br />
              <br />
              Vue.use(Vuex) <br />
              <br />
              const store = new Vuex.Store({ <br />
              state: {}, <br />
              getters: {}, <br />
              mutations: {}, <br />
              actions: {}, <br />
              }) <br />

              export default store
            </span>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion09 = !isQuestion09"
            :class="{ 'general-issues__question_active': isQuestion09 }"
          >
            В файле main.js мы импортируем объект store
          </button>

          <div class="general-issues__answer" v-if="isQuestion09">
            7. В файле main.js мы импортируем объект store <br />
            <span class="general-issues__span-purple">
              import store from './store'
            </span>
            <br />
            8. Далее, в конструктор нашего приложения new Vue в файле main.js мы передаём:
            <span class="general-issues__span-purple">store: store,</span> но учитывая, что ключ и
            значение совпадает, можем не писать значение <br />
            <span class="general-issues__span-purple">
              new Vue({ <br />
              router, <br />
              store, <br />
              render: h => h(App), <br />
              }).$mount('#app')
            </span>
            <br />
            9. После этого в терминале пишем: npm run serve
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion08 = !isQuestion08"
            :class="{ 'general-issues__question_active': isQuestion08 }"
          >
            Основные концепции Vuex.Store: actions, mutations, state, getters
          </button>

          <div class="general-issues__answer" v-if="isQuestion08">
            <p>
              При использовании Vuex компоненты нам нужны только для отображения данных, логика
              находится уже в store. Для этого, в поле Vuex.Store настраиваем концепции экшенов.
              <br />
              <span class="general-issues__span-purple">
                const store = new Vuex.Store({ <br />

                <span class="general-issues__span-green"
                  >Когда мы настраиваем Vuex.Store, мы можем реализовывать 4 типа полей:</span
                >
                <br />

                state: {}, <br />
                <span class="general-issues__span-green">
                  // Состояние приложения, где мы определяем изначальные данные и данные, которые
                  есть в ВЭБ приложении. Состояние приложения хранится как один большой JSON-объект.
                </span>
                <br />

                getters: {}, <br />
                <span class="general-issues__span-green">
                  // Геттеры используются для доступа к значениям, находящимся в хранилище.
                </span>
                <br />

                mutations: {}, <br />
                <span class="general-issues__span-green">
                  // mutations: {} - это объект, содержащий в себе функции, которые будут напрямую
                  изменять Vuex.Store. Следует помнить, что мутации являются синхронными.</span
                >
                <br />

                actions: {}, <br />
                <span class="general-issues__span-green">
                  // Все асинхронные операции должны выполняться внутри actions. actions изменяют
                  состояние, инициируя мутации. Возьмите за правило инициировать мутации
                  исключительно через actions</span
                >
                <br />

                <span class="general-issues__span-green"> // помимо этих 4-х полей есть поле</span>
                <br />

                modules: {},
                <br />
                <span class="general-issues__span-green">
                  // в которое мы можем декомпозировать логику Vuex.Store <br />
                  modules: { <br />
                  post, <br />
                  }, <br />
                  // Модули могут использоваться для организации вашего хранилища в нескольких
                  небольших файлах.
                </span>
                <br />
                }) <br />
                <br />
                export default store Vue.use(Vuex)
              </span>
              <br />
            </p>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion05 = !isQuestion05"
            :class="{ 'general-issues__question_active': isQuestion05 }"
          >
            Получаем данные с сервера при наличии Vuex, store, model: cardPosts.js. Подробные шаги.
          </button>

          <div class="general-issues__answer" v-if="isQuestion05">
            <div>
              1. Создали модуль cardPosts.js в ^store^modules
              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
export default {
  actions: {},
  mutations: {},
  state: {},
  getters: {},
}</span> 
    </code>
  </pre>
              </div>
              Импортировали его в ^store^.index.js <br />
              <br />
              <span class="general-issues__span-purple"
                >import cardPost from './modules/cardPost'</span
              >
              <br />
              <br />
              Зарегистрировали там

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
const store = new Vuex.Store({
  modules: {
    cardPosts,
  },
})        
        </span> <br />
    </code>
  </pre>
              </div>
              2. В state определяем массив сardPosts: [], в который будем получать распарсенные
              ответы с сервера.
              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
  state: {
    сardPosts: [],
  },        
        </span> <br />
    </code>
  </pre>
              </div>

              3. В getters заводим новый геттер (по сути - фунцию), который забирает что-то из
              state, и возвращает, как данные.
              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
  getters: {
    allCardPosts(state) {
      return state.cardPosts
    },
  },
 
        </span> <br />
    </code>
  </pre>
              </div>
              4. Теперь у нас есть геттер allCardPosts и в компоненте к нему можно обратиться. Идём
              в компонент. Для того, чтобы получать геттеры, обратимся к computed- свойству, которое
              будет реагировать на любое изменение геттера. Есть два способа: -- 4.1 использование
              геттера напрямую:
              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
computed: {
    allCardPosts() {
      return this.$store.getters.allCardPosts // не вызываем, без скобок()
    },
},   
        </span> <br />
    </code>
  </pre>
              </div>
              -- 4.2 использование хэлперов из библиотеки import {} from 'vuex'. Пойдём по второму
              пути, импортируем mapGetters из библиотеки: <br />
              <br />
              <span class="general-issues__span-purple">import { mapGetters } from 'vuex</span>
              <br />
              <br />
              Функция mapGetters включает в себя массив из строк, и строки должны совпадать с
              названием сущностей из store. Например: computed: mapGetters(['allCardPosts',
              'allMessages', 'allPosts']), В нашем случае геттер allCardPosts. <br />
              <br />

              <span class="general-issues__span-purple"
                >computed: mapGetters(['allCardPosts']),</span
              >
              <br />
              <br />

              5. Для работы с Backend API (запросы fetch или axios) мы должны использовать Actions,
              в них асинхронные функции, в данном случае: async fetchCardPosts()

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
actions: {
    async fetchCardPosts() {
 *   const resCardPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
 **  const cardPosts = await resCardPosts.json()

      //   this.cardPosts = cardPosts
    },
  },

*  здесь мы обращаемся к Backend API 
**  получаем список cardPosts        
        </span> <br />
    </code>
  </pre>
              </div>

              <div>
                6. Когда мы получили messages с сервера (получили ответ response и распарсили его),
                мы должны изменить state state: { cardPosts: [], }. state меняется через
                mutations:{} Поэтому, давайте в объекте mutations заведём метод, который будет
                называться updateCardPosts
              </div>

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
 mutations: {
    updateCardPosts(state, cardPosts) {
      state.cardPosts = cardPosts
    },
  },        
        </span> <br />
    </code>
  </pre>
              </div>

              <div>
                В этом методе мы приравняли state.cardPosts к массиву cardPosts, полученному из
                actions из async fetchCardPosts(). В мутациях первый параметр - это state, второй -
                то, что мы будем в него передавать, в данном случае cardPosts.
              </div>

              <div>
                7. Как нам вызвать данную мутацию? Для этого в actions мы можем использовать
                специальный контекст (ctx). То есть всегда первый параметр у async
                fetchCardPosts(ctx) - ctx. И у контекста есть метод: ctx.commit('') В первый
                параметр метода commit мы передаём название мутации, которую хотим вызвать, в нашем
                случае - updateCardPosts Вторым параметром мы передаём, то, что хотим передать, в
                нашем случае - cardPosts Получается, в actions мы предаём:
                ctx.commit('updateCardPosts', cardPosts)
              </div>

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
   actions: {
    async fetchCardPosts(ctx) {
      const resCardPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      const cardPosts = await resCardPosts.json()

      ctx.commit('updateCardPosts', cardPosts)
    },
  },     
        </span> <br />
    </code>
  </pre>
              </div>

              <div>
                8. Нам необходимо вызвать этот экшен. Для этого в компоненте, в
                <span class="general-issues__span-purple">async mounted(){}</span> , мы обращаемся к

                <span class="general-issues__span-purple">
                  <pre>
                    <code>
 async mounted() { 
    this.$store.dispatch('fetchCardPosts') 
 } 
                    </code>
                  </pre>
                </span>
                <br />
                , куда первым параметром передаём название экшена fetchCardPosts
              </div>

              <div>
                <p>
                  9. В скрипте компоненты импортируем фунцию mapActions:
                  <br />
                  <span class="general-issues__span-purple">
                    import { mapGetters, mapActions } from 'vuex'</span
                  >
                </p>

                <p>
                  10. Добавляем в methods:
                  <br />
                  <span class="general-issues__span-purple">
                    methods: mapActions(['fetchAlertPosts']),</span
                  >
                </p>

                <p>
                  11. Меняем в
                  <br />
                  <span class="general-issues__span-purple">
                    async mounted() { <br />
                    // this.$store.dispatch('fetchAlertPosts') <br />
                    this.fetchAlertPosts() <br />
                    }</span
                  >
                </p>
              </div>
              <div>
                12. Наша компонента, шаблон Html
              </div>

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
&lt;div v-for="cardPost in allCardPosts" :key="cardPost.id"&gt;
      &lt;h2&gt; &#123; &#123; cardPost.title &#125; &#125; &lt;/h2&gt;

      &lt;p&gt; &#123; &#123; cardPost.body &#125; &#125; &lt;/p&gt;
&lt;/div&gt;
        
        </span> <br />
    </code>
  </pre>
              </div>

              13. Наша компонента, скрипт script

              <div class="code">
                <pre>
    <code>
      <span class="general-issues__span-purple">
&lt;script&gt;
import { mapGetters, mapActions  } from 'vuex'

export default {
  name: 'VuexPage',

  computed: mapGetters(['allCardPosts']),
    methods: mapActions(['fetchCardPosts']),

  async mounted() {
  // меняем this.$store.dispatch('fetchCardPosts') на:
   this.fetchCardPosts()
  },
}
&lt;/script&gt;       
        </span> <br />
    </code>
  </pre>
              </div>
            </div>

            <p>
              14. Наш модуль
            </p>

            <div class="code">
              <pre>
    <code>
      <span class="general-issues__span-purple">
export default {
  actions: {
    async fetchCardPosts(ctx) {
      const resCardPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      const cardPosts = await resCardPosts.json()

      ctx.commit('updateCardPosts', cardPosts)
    },
  },
  mutations: {
    updateCardPosts(state, cardPosts) {
      state.cardPosts = cardPosts
    },
  },
  state: {
    сardPosts: [],
  },
  getters: {
    allCardPosts(state) {
      return state.cardPosts
    },
  },
}
        </span> <br />
    </code>
  </pre>
            </div>

            <div class="appPost__container">
              <h2>Данные с сервера</h2>

              <div class="appPost__post" v-for="cardPost in allCardPosts" :key="cardPost.id">
                <h2 class="appPost__title">{{ cardPost.title }}</h2>

                <p class="appPost__body">{{ cardPost.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion10 = !isQuestion10"
            :class="{ 'general-issues__question_active': isQuestion10 }"
          >
            Получаем данные с сервера, образец кода в модуле и в компоненте
          </button>

          <div class="general-issues__answer" v-if="isQuestion10">
            <div>
              Это компонента, шаблон HTML <br />
              <span class="general-issues__span-purple">
                <pre>
             <code>
&lt;div&gt;
  &lt;div v-for="(message, index) in allMessages" :key="index"&gt;
    &lt;p&gt; index: &#123; &#123; index &#125; &#125; &lt;/p&gt;

      &lt;p&gt; userId: &#123; &#123;  message.userId &#125; &#125; &lt;/p&gt;

    &lt;h2&gt; id: &#123; &#123; message.id &#125; &#125; &lt;/h2&gt;

    &lt;h2&gt; title: &#123; &#123; message.title &#125; &#125; &lt;/h2&gt;

   &lt;p&gt; body: &#123; &#123; message.body &#125; &#125; &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
             </code>
           </pre>
              </span>
            </div>

            <div>
              Это компонента, script <br />
              <span class="general-issues__span-purple">
                <pre>
                <code>
&lt;script&gt;
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexPage',

  computed: mapGetters(['allMessages']),
   methods: mapActions(['fetchMessages']),

  async mounted() {
    this.fetchMessages()
  },
}
&lt;/script&gt;
                </code>
              </pre>
              </span>
            </div>

            <div>
              Это модуль message.js <br />
              <span class="general-issues__span-green">
                <pre>
                   <code>
^ store
  ^ modules
    JS message.js
                         </code>
           </pre>
              </span>

              <span class="general-issues__span-purple">
                <pre>
             <code>
export default {
  actions: {
    async fetchMessages(ctx) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      const messages = await response.json()

      ctx.commit('updateMessages', messages)
    },
  },
  mutations: {
    updateMessages(state, messages) {
      state.messages = messages
    },
  },
  state: {
    messages: [],
  },
  getters: {
    allMessages(state) {
      return state.messages
    },
  },
}                     
                   </code>
                 </pre>
              </span>
            </div>

            <div class="appPost">
              <h5>Это и есть ответ от сервера (response)</h5>

              <div class="appPost__container">
                <div class="appPost__post" v-for="(message, index) in allMessages" :key="index">
                  <p class="appPost__body">index: {{ index }}</p>

                  <p class="appPost__body">userId: {{ message.userId }}</p>

                  <h2 class="appPost__title">id: {{ message.id }}</h2>

                  <h2 class="appPost__title">title: {{ message.title }}</h2>

                  <p class="appPost__body">body: {{ message.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion11 = !isQuestion11"
            :class="{ 'general-issues__question_active': isQuestion11 }"
          >
            Получаем данные с сервера при наличии Vuex, store, model: alertPost.js. Начальный код
          </button>

          <div class="general-issues__answer" v-if="isQuestion11">
            <div class="appPost__post" v-for="(alertPost, index) in validAlertPosts" :key="index">
              <p class="appPost__body">index: {{ index }}</p>

              <p class="appPost__body">userId: {{ alertPost.userId }}</p>

              <h2 class="appPost__title">id: {{ alertPost.id }}</h2>

              <h2 class="appPost__title">title: {{ alertPost.title }}</h2>

              <p class="appPost__body">body: {{ alertPost.body }}</p>
            </div>

            <div>
              <p>Наш скрипт в компоненте предварительный</p>
              <span class="general-issues__span-purple">
                <pre>
                   <code>
&lt;script&gt;
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexPage',
  
  computed: mapGetters(['allAlertPosts']),
  methods: mapActions(['fetchAlertPosts']),
  
  async mounted() {
      this.fetchAlertPosts()
  },
}
&lt;/script&gt;  
                   </code>
                 </pre>
              </span>
            </div>

            <div>
              <p>Наш шаблон в HTML</p>
              <span class="general-issues__span-purple">
                <pre>
                   <code>

 &lt;div v-for="(alertPost, index) in allAlertPosts" :key="index"&gt;
    &lt;p&gt; index: &#123; &#123; index &#125; &#125; &lt;/p&gt;

    &lt;p&gt; userId: &#123; &#123; alertPost.userId &#125; &#125; &lt;/p&gt;

    &lt;h2&gt; id: &#123; &#123; alertPost.id &#125; &#125; &lt;/h2&gt;

    &lt;h2&gt; title: &#123; &#123; alertPost.title &#125; &#125; &lt;/h2&gt;

    &lt;p&gt; body: &#123; &#123; alertPost.body &#125; &#125; &lt;/p&gt;
&lt;/div&gt;
                   </code>
                 </pre>
              </span>
            </div>

            <div>
              <p>Наш модуль alertPost.js</p>
              <span class="general-issues__span-purple">
                <pre>
                   <code>
export default {
  actions: {
    async fetchAlertPosts(ctx) {
      const resAlertPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      //  получаем список alertPosts:
      const alertPosts = await resAlertPosts.json()
      // вызвыаем мутацию
      ctx.commit('updateAlertPosts', alertPosts)
    },
  },
  mutations: {
    updateAlertPosts(state, alertPosts) {
      state.alertPosts = alertPosts
    },
  },
  state: {
    alertPosts: [],
  },
  getters: {
    allAlertPosts(state) {
      return state.alertPosts
    },
  },
}
                   </code>
                 </pre>
              </span>
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion12 = !isQuestion12"
            :class="{ 'general-issues__question_active': isQuestion12 }"
          >
            Продолжение - добавляем новые посты с сервера alertPost.js.
          </button>

          <div class="general-issues__answer" v-if="isQuestion12">
            <div class="appPost__container">
              <AlertPostForm />

              <h1 class="appPost__heading">alertPostsCount: {{ alertPostsCount }}</h1>

              <div class="appPost__post" v-for="(alertPost, index) in validAlertPosts" :key="index">
                <p class="appPost__body">index: {{ index }}</p>

                <p class="appPost__body">userId: {{ alertPost.userId }}</p>

                <h2 class="appPost__title">id: Date.now() {{ alertPost.id }}</h2>

                <p class="appPost__title">title: {{ alertPost.title }}</p>

                <p class="appPost__body">body: {{ alertPost.body }}</p>
              </div>
            </div>

            <div>
              Шаблон HTML в компоненте <br />
              <span class="general-issues__span-purple">
                <pre>
                  <code>
&lt;AlertPostForm /&gt;

&lt;h1&gt; alertPostsCount: &#123; 	&#123; alertPostsCount &#125; &#125; &lt;/h1&gt;

&lt;div v-for="(alertPost, index) in validAlertPosts" :key="index"&gt;
    &lt;p&gt; index: 	&#123; 	&#123;  index &#125; &#125;  &lt;/p&gt;

    &lt;p&gt; userId: 	&#123; 	&#123;  alertPost.userId &#125; &#125; &lt;/p&gt;

    &lt;h2&gt; id: Date.now() 	&#123; 	&#123;  alertPost.id &#125; &#125; &lt;/h2&gt;

    &lt;p&gt; title: 	&#123; 	&#123;  alertPost.title &#125; &#125; &lt;/p&gt;

    &lt;p&gt; body: 	&#123; 	&#123;  alertPost.body &#125; &#125; &lt;/p&gt;
&lt;/div&gt;
                  </code>
                </pre>
              </span>
            </div>

            <div>
              script в компоненте <br />
              <span class="general-issues__span-purple">
                <pre>
                  <code>
&lt;script&gt;
import { mapGetters, mapActions } from 'vuex'
import AlertPostForm from '@/components/post/AlertPostForm.vue'

export default {
  name: 'VuexPage',

},
  components: {
    AlertPostForm,
  },

  computed: mapGetters(['validAlertPosts', 'alertPostsCount']),
  methods: mapActions(['fetchAlertPosts']),  

  async mounted() {
    this.fetchAlertPosts()
  },
}
&lt;/script&gt;
                  </code>
                </pre>
              </span>
            </div>

            <div>
              модуль alertPost.js <br />
              <span class="general-issues__span-purple">
                <pre>
                  <code>
export default {
  actions: {
    async fetchAlertPosts(ctx, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
      //  получаем список alertPosts:
      const alertPosts = await resAlertPosts.json()
      // вызываем мутацию
      ctx.commit('updateAlertPosts', alertPosts)
    },
  },
  mutations: {
    updateAlertPosts(state, alertPosts) {
      state.alertPosts = alertPosts
    },
    createAlertPosts(state, newAlertPost) {
      state.alertPosts.unshift(newAlertPost)
    },
  },
  state: {
    alertPosts: [],
  },
  getters: {
    validAlertPosts(state) {
      return state.alertPosts.filter(p => {
        return p.title &amp;&amp; p.body
      })
    },
    allAlertPosts(state) {
      return state.alertPosts
    },
    // меняем 
    // alertPostsCount(state) {
    //   return state.alertPosts.length
    // },
    // на
    alertPostsCount(state, getters) {
      return getters.validAlertPosts.length
    },
  },
}
                  </code>
                </pre>
              </span>
            </div>

            <div>
              компонента AlertPostForm.vue <br />
              <span class="general-issues__span-purple">
                <pre>
                  <code>
&lt;template&gt;
  &lt;form @submit.prevent="submit"&gt;
    &lt;input type="text" placeholder="title" v-model="title" /&gt;

    &lt;input type="text" placeholder="body" v-model="body" /&gt;

    &lt;button type="submit"&gt;Create Post&lt;/button&gt;

    &lt;hr /&gt;
  &lt;/form&gt;
&lt;/template&gt;

&lt;script&gt;
import { mapMutations } from 'vuex'

export default {
  name: 'AlertPostForm',

  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    ...mapMutations(['createAlertPosts']),
    // createAlertPosts
    submit() {
      this.createAlertPosts({
        //   createAlertPosts
        title: this.title,
        body: this.body,
        id: Date.now(),
      })
      this.title = this.body = ''
    },
  },
}
&lt;/script&gt;

&lt;style scoped&gt;
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  display: block;
  width: calc(100% - 22px);
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  margin-top: 24px;
}
&lt;/style&gt;

                  </code>
                </pre>
              </span>
            </div>
          </div>
        </div>
        <!--  -->

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion14 = !isQuestion14"
            :class="{ 'general-issues__question_active': isQuestion14 }"
          >
            Продолжение - добавляем новые посты с сервера alertPost.js, подробная инструкция
          </button>

          <div class="general-issues__answer" v-if="isQuestion14">
            <div>
              1. Как нам передавать параметры в actions? Домустим, мы хотим статический параметр
              _limit=4 передавать динамически. Имеем:<br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
actions: {
  async fetchAlertPosts(ctx) {
    const resAlertPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')...                 
               </code>
             </pre>
              </span>
            </div>

            <div>
              Для этого, вторым параметром в метод async fetchAlertPosts() передаём limit = 3 :
              <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
  actions: {
    async fetchAlertPosts(ctx, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )......                 
               </code>
             </pre>
              </span>
              <br />
            </div>

            <div>
              А в компоненте, в метод this.fetchAlertPosts(4), передаём нужный нам параметр,
              например 4. Но стоит помнить, что в actions всегда первым параметром идёт некоторый
              контекст, а второй параметр - те данные, которые мы передаём. <br />
              В данный момент мы уберём этот параметр, оставим так: this.fetchAlertPosts() чтобы
              метод грузился по умолчанию, заданным в модуле.
            </div>
            <br />

            <div>
              2. Как мы ещё можем работать с геттерами? Заведём ещё один геттер, который будет нам
              возвращать количество всех постов: <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
  alertPostsCount(state) {
      return state.alertPosts.length
    }                 
               </code>
             </pre>
              </span>
              <br />
              alertPosts - это массив, и у него есть длина alertPosts.length. В компоненте заведём:
              <br />
              <span class="general-issues__span-purple">
                &lt;h1&gt; alertPostsCount: &#123; &#123; alertPostsCount &#125; &#125; &lt;/h1&gt;
              </span>
              <br />
              В скрипте <br />
              <span class="general-issues__span-purple">
                computed: mapGetters(['allAlertPosts', 'alertPostsCount']),</span
              >
            </div>
            <br />

            <div>
              3. Рассмотрим ещё один функционал, для этого создадим компонент PostForm.vue , который
              нам будет добавлять новый пост. Импортируем его, регистрируем в VuexPage.vue, и вводим
              в шаблон HTML перед нашими постами, перед заголовком. <br />
              <br />

              Метод submit(): меняем state с новыми значениями поста, для этого мы используем
              мутации. <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
 mutations: {
   createAlertPosts(state, newAlertPost) {
      state.alertPosts.unshift(newAlertPost)
    }, .................                 
               </code>
             </pre>
              </span>
              <br />
              где параметрами будут state и newAlertPost - новый пост, а сам метод будет добавлять
              новый пост (newAlertPost) в начало массива alertPosts. <br />
              Всё, больше нам за этим следить не нужно: мы изменим state, дальше геттеры
              автоматически изменяться и шаблон в компоненте сам перерисуется. <br />
              <br />

              Далее, нам только нужно вызвать эту мутацию в компоненте, для этого нам нужно
              воспользоваться методом из vuex. <br />

              <span class="general-issues__span-purple">
                <pre>
               <code>
import { mapMutations } from 'vuex'

  methods: {
    ...mapMutations(['createAlertPosts']),
    // createAlertPosts -------------------
    submit() {
      this.createAlertPosts({
        //   createAlertPosts ------------
        title: this.title,
        body: this.body,
        id: Date.now(),
      })
      this.title = this.body = ''
    },
  },
               </code>
             </pre>
              </span>
              <br />
            </div>

            <div>
              4. Сделаем валидацию, которая запретит создавать пустые посты. Для валидации создадим
              новый геттер, где принимаем state, и дальше мы можем обращаться к state.alertPosts и
              валидировать их <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
 validAlertPosts(state) {
      return state.alertPosts.filter(p => {
        return p.title &amp;&amp; p.body
      })
    },                 
               </code>
             </pre>
              </span>
              <br />
              валидировать будем очень просто, нам нужны посты, у которых поля p.title и p.body не
              пустые: <br />
              <span class="general-issues__span-purple"> p.title &amp;&amp; p.body = true </span>
            </div>
            <br />

            <div>
              5. Теперь в компоненте будем обращаться не к 'allAlertPosts' <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
 computed: mapGetters(['allAlertPosts', 'alertPostsCount']),
                       ----------------
  &lt;div class="appPost__post" v-for="(alertPost, index) in allAlertPosts" 
                                                          ------------- 
  :key="index"&gt;
               </code>
             </pre>
              </span>
              <br />
              а к 'validAlertPosts'
              <span class="general-issues__span-purple">
                <pre>
               <code>
  computed: mapGetters(['validAlertPosts', 'alertPostsCount']),
                         --------------- 
   &lt;div class="appPost__post" v-for="(alertPost, index) in validAlertPosts" 
                                                           -------------- 
   :key="index"&gt;
               </code>
             </pre>
              </span>
            </div>
            <br />

            <div>
              6. Теперь у нас меняется значение счётчика количества постов {{ alertPostsCount }}, но
              посты с пустыми полями не добавлятся. Нужна коррекция вместо геттера<br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
alertPostsCount(state) {
      return state.alertPosts.length
     },
               </code>
             </pre>
              </span>

              <br />
              пишем другой: <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
alertPostsCount(state, getters) {
      return getters.validAlertPosts.length
    },
               </code>
             </pre>
              </span>
              <br />
              Чтобы внутри одного геттера обратиться к другому геттеру вторым параметром
              устанавливаем объект getters (state, getters), а внутри метода обращаемся к нужному
              нам геттеру, в данном случае - валидному validAlertPosts
            </div>
            <br />

            <div>
              7. Ещё пару слов про данный объект контекста (ctx) в <br />
              async fetchAlertPosts(ctx, limit = 3) {......... <br />
              <br />
              можем сделать сразу так:
              <span class="general-issues__span-purple">
                <pre>
               <code>
  actions: {
    async fetchAlertPosts({commit}, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
     
      const alertPosts = await resAlertPosts.json()
      commit('updateAlertPosts', alertPosts)
    },
  },
               </code>
             </pre>
              </span>
            </div>

            <div>
              Если мы хотим получить в actions какие-то геттеры, то так же можем получить их из
              этого объекта: async fetchAlertPosts({commit, getters}, limit = 3). <br />
              Если в actions нужно вызвать другой actions, то мы так же можем получить метод
              dispatch и дальше обращаться к этому методу dispatch(''), куда первым параметром мы
              передаём название экшена, данный метод должен быть реализованн в экшене, например:
              <br />
              <span class="general-issues__span-purple">
                <pre>
               <code>
   actions: {
    async fetchAlertPosts({commit, getters, dispatch}, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
   
      const alertPosts = await resAlertPosts.json()

      dispatch('sayHello')

      commit('updateAlertPosts', alertPosts)
    },
    sayHello() {
      .................
    }
  },
               </code>
             </pre>
              </span>
              <br />
            </div>
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion13 = !isQuestion13"
            :class="{ 'general-issues__question_active': isQuestion13 }"
          >
            Скачать расширение для хрома Vue.js devtools
          </button>

          <div class="general-issues__answer" v-if="isQuestion13">
            Инструменты разработчика, расширение для хрома
            <a
              class="general-issues__link"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
              >Vue.js devtools</a
            >
          </div>
        </div>

        <div>
          <button
            class="general-issues__question"
            @click="isQuestion15 = !isQuestion15"
            :class="{ 'general-issues__question_active': isQuestion15 }"
          >
            xxx
          </button>

          <div class="general-issues__answer" v-if="isQuestion15">
            XXX
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

        <p>
          <span class="general-issues__span-purple">x</span> <br />

          <span class="general-issues__span-green">x</span> <br />

          <span class="general-issues__span-red">x</span> <br />

          <span class="general-issues__span-grey">xx</span> <br />

          <span class="general-issues__span-blue">xx</span> <br />
        </p>

        <!-- <div>
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
        </div> -->

        <!-- <div>
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AlertPostForm from '@/components/post/AlertPostForm.vue'

export default {
  name: 'VuexPage',

  data() {
    return {
      posts: [],
      documents: [],
      cards: [],
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
    }
  },
  components: {
    AlertPostForm,
  },

  computed: mapGetters(['allCardPosts', 'allMessages', 'validAlertPosts', 'alertPostsCount']),
  methods: mapActions(['fetchCardPosts', 'fetchMessages', 'fetchAlertPosts']),

  // computed: {
  //   allMessages() {
  //     return this.$store.getters.allMessages // не вызываем, без скобок()
  //   },
  //   allCardPosts() {
  //     return this.$store.getters.allCardPosts // не вызываем, без скобок()
  //   },
  // },

  async mounted() {
    //  posts
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await response.json()
    this.posts = posts

    // cards
    const resCards = await fetch('https://jsonplaceholder.typicode.com/todos/5')
    const cards = await resCards.json()
    this.cards = cards

    // documents
    const resDocument = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const documents = await resDocument.json()
    this.documents = documents

    // относится к модулю cardPost.js
    // this.$store.dispatch('fetchCardPosts')
    this.fetchCardPosts()

    // относится к модулю message.js
    this.fetchMessages()

    // относится к модулю alertPost.js
    this.fetchAlertPosts()
  },
}
</script>

<style lang="scss" scoped>
.general-issues {
  width: 100%;
  margin: 0 auto;
  margin-top: 76px;
  background-color: #eee;

  &__container {
    width: calc(100% - 48px);
    padding: 24px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
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
    font-size: 16px;
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
    font-size: 16px;
    line-height: 24px;
  }

  &__link {
    color: blue;
    text-decoration: none;
    cursor: pointer;
  }

  &__text {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
  }

  // general-issues__span
  &__span {
    font-size: 18px;
    line-height: 24px;
    color: black;
  }

  // general-issues__span-red
  &__span-red {
    font-size: 16px;
    line-height: 24px;
    color: red;
  }

  // general-issues__span-green
  &__span-green {
    font-size: 16px;
    line-height: 24px;
    color: green;
  }

  // general-issues__span-purple
  &__span-purple {
    font-size: 16px;
    line-height: 24px;
    color: #9b13bd;
  }

  // general-issues__span-blue
  &__span-blue {
    font-size: 16px;
    line-height: 24px;
    color: blue;
  }

  // general-issues__span-grey
  &__span-grey {
    font-size: 18px;
    line-height: 24px;
    color: grey;
  }
}

.appPost {
  width: 100%;
  margin: 0 auto;

  &__container {
    color: gray;
    width: 400px;
    margin: 60px auto;
  }

  &__post {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 1rem;
    padding: 6px;
  }

  &__heading {
    text-align: center;
  }

  &__title,
  &__body {
    text-align: center;
  }
}
</style>
