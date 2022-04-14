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

///////////////////////////////////////////////////////////////////////////////////////
/*
1. Создали модуль cardPosts.js в ^store^modules
export default {
  actions: {},
  mutations: {},
  state: {},
  getters: {},
}

Импортировали его в ^store^.index.js 

import cardPost from './modules/cardPost'

Зарегистрировали там 

const store = new Vuex.Store({
  modules: {
    cardPosts,
  },
})

2. В state определяем массив сardPosts: [], в который будем получать распарсенные ответы с сервера.
  state: {
    сardPosts: [],
  },

3. В getters заводим новый геттер (по сути - фунцию), который забирает что-то из state, и возвращает, как данные.
  getters: {
    allCardPosts(state) {
      return state.cardPosts
    },
  },

4. Теперь у нас есть геттер allCardPosts и в компоненте к нему можно обратиться. Идём в компонент. Для того, чтобы получать геттеры, обратимся к computed- свойству, которое будет реагировать на любое изменение геттера. Есть два способа: 
-- 4.1 использование геттера напрямую:

computed: {
    allCardPosts() {
      return this.$store.getters.allCardPosts // не вызываем, без скобок()
    },
},



-- 4.2 использование хэлперов из библиотеки import {} from 'vuex'.
Пойдём по второму пути, импортируем mapGetters из библиотеки:

import { mapGetters } from 'vuex

Функция mapGetters включает в себя массив из строк, и строки должны совпадать с названием сущностей из store. Например: 

computed: mapGetters(['allCardPosts', 'allMessages', 'allPosts']),

В нашем случае геттер allCardPosts.

computed: mapGetters(['allCardPosts']),

5. Для работы с Backend API (запросы fetch или axios) мы должны использовать Actions, в них асинхронные функции, в данном случае: async fetchCardPosts() 

 actions: {
    async fetchCardPosts() {
 *     const resCardPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
 **     const cardPosts = await resCardPosts.json()

      //   this.cardPosts = cardPosts
    },
  },

*  здесь мы обращаемся к Backend API 
**  получаем список cardPosts

6. Когда мы получили messages с сервера (получили ответ response и распарсили его), мы должны изменить state
  state: { cardPosts: [], }. 
  state меняется через mutations:{}
Поэтому, давайте в объекте mutations заведём метод, который будет называться updateCardPosts

 mutations: {
    updateCardPosts(state, cardPosts) {
      state.cardPosts = cardPosts
    },
  },

  В этом методе мы приравняли state.cardPosts к массиву cardPosts, полученному из actions из async fetchCardPosts(). 

  В мутациях первый параметр - это state, второй - то, что мы будем в него передавать, в данном случае cardPosts.

7. Как нам вызвать данную мутацию? Для этого в actions мы можем использовать специальный контекст (ctx). То есть всегда первый параметр у async fetchCardPosts(ctx) - ctx. И у контекста есть метод:
 ctx.commit('')
 В первый параметр метода commit мы передаём название мутации, которую хотим вызвать, в нашем случае
- updateCardPosts
Вторым параметром мы передаём, то, что хотим передать, в нашем случае 
- cardPosts
Получается, в actions мы предаём:
 ctx.commit('updateCardPosts', cardPosts)

   actions: {
    async fetchCardPosts(ctx) {
      const resCardPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      const cardPosts = await resCardPosts.json()

      ctx.commit('updateCardPosts', cardPosts)
    },
  },


8. Нам необходимо вызвать этот экшен. Для этого в компоненте, в async mounted(),
 мы обращаемся к this.$store.dispatch('fetchCardPosts'), куда первым параметром передаём название экшена fetchCardPosts

9. Наша компонента, шаблон Html
  <div class="appPost__post" v-for="cardPost in allCardPosts" :key="cardPost.id">
      <h2 class="appPost__title">{{ cardPost.title }}</h2>

      <p class="appPost__body">{{ cardPost.body }}</p>
  </div>

10.  Наша компонента, скрипт script

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'VuexPage',

  computed: mapGetters(['allCardPosts']),

  async mounted() {
  this.$store.dispatch('fetchCardPosts')
  },
}
</script>

11. Наш модуль
*/
