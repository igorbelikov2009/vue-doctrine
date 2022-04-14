export default {
  actions: {
    async fetchAlertPosts(ctx, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
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
        return p.title && p.body
      })
    },
    allAlertPosts(state) {
      return state.alertPosts
    },
    //
    // alertPostsCount(state) {
    //   return state.alertPosts.length
    // },
    alertPostsCount(state, getters) {
      return getters.validAlertPosts.length
    },
  },
}

/*   
1. Как нам передавать параметры в actions? Домустим, мы хотим статический параметр _limit=4 передавать динамически.
Имеем:
  actions: {
    async fetchAlertPosts(ctx) {
      const resAlertPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')...

Для этого, вторым параметром в метод async fetchAlertPosts() передаём limit = 3 :

  actions: {
    async fetchAlertPosts(ctx, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )......

А в компоненте, в метод this.fetchAlertPosts(4), передаём нужный нам параметр, например 4. 
Но стоит помнить, что в actions всегда первым параметром идёт некоторый контекст, а второй параметр - те данные, которые мы передаём. 
В данный момент мы уберём этот параметр, оставим так: this.fetchAlertPosts() чтобы метод грузился по умолчанию, заданным в модуле

2. Как мы ещё можем работать с геттерами? Заведём ещё один геттер, который будет нам возвращать количество всех постов:
  alertPostsCount(state) {
      return state.alertPosts.length
    }

alertPosts - это массив, и у него есть длина alertPosts.length.

В компоненте заведём:
<h1> alertPostsCount: {{ alertPostsCount }} </h1>

В скрипте 
 computed: mapGetters(['allAlertPosts', 'alertPostsCount']),

3. Рассмотрим ещё один функционал, для этого создадим компонент PostForm.vue , который нам будет добавлять новый пост. Импортируем его, регистрируем в VuexPage.vue, и вводим в шаблон HTML  перед нашими постами, перед заголовком.

Метод submit(): меняем state с новыми значениями поста, для этого мы используем мутации.
 mutations: {
   createAlertPosts(state, newAlertPost) {
      state.alertPosts.unshift(newAlertPost)
    }, .................

где параметрами будут state и newAlertPost - новый пост, а сам метод будет добавлять новый пост (newAlertPost) в начало массива alertPosts. 
Всё, больше нам за этим следить не нужно: мы изменим state, дальше геттеры автоматически изменяться и шаблон в компоненте сам перерисуется.

Далее, нам только нужно вызвать эту мутацию в компоненте, для этого нам нужно воспользоваться методом из vuex.

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

4. Сделаем валидацию, которая запретит создавать пустые посты.
Для валидации создадим новый геттер, где принимаем state, и дальше  мы можем обращаться к state.alertPosts и валидировать их
 validAlertPosts(state) {
      return state.alertPosts.filter(p => {
        return p.title && p.body
      })
    },
валидировать будем очень просто, нам нужны посты, 
у которых поля p.title и p.body не пустые: p.title && p.body = true     

5. Теперь в компоненте будем обращаться не к 'allAlertPosts'
 computed: mapGetters(['allAlertPosts', 'alertPostsCount']),
                       ----------------
  <div class="appPost__post" v-for="(alertPost, index) in allAlertPosts" 
                                                          ------------- 
  :key="index">

 а к 'validAlertPosts'

  computed: mapGetters(['validAlertPosts', 'alertPostsCount']),
                         --------------- 
   <div class="appPost__post" v-for="(alertPost, index) in validAlertPosts" 
                                                           -------------- 
   :key="index">

6. Теперь у нас меняется значение счётчика количества постов {{ alertPostsCount }}, но посты с пустыми полями не добавлятся. Нужна коррекция
вместо геттера:
alertPostsCount(state) {
      return state.alertPosts.length
     },

пишем другой:
alertPostsCount(state, getters) {
      return getters.validAlertPosts.length
    },

    Чтобы внутри одного геттера обратиться к другому геттеру вторым параметром устанавливаем объект getters (state, getters), а внутри метода
обращаемся к нужному нам геттеру, в данном случае - валидному validAlertPosts

7. Ещё пару слов про данный объект контекста (ctx) в
 async fetchAlertPosts(ctx, limit = 3) {.........

  можем сделать сразу так:
  actions: {
    async fetchAlertPosts({commit}, limit = 3) {
      const resAlertPosts = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
     
      const alertPosts = await resAlertPosts.json()
      commit('updateAlertPosts', alertPosts)
    },
  },

Если мы хотим получить в actions какие-то геттеры, то так же можем получить их из этого объекта: 
async fetchAlertPosts({commit, getters}, limit = 3).
Если в actions нужно вызвать другой actions, то мы так же можем получить метод dispatch и дальше обращаться к этому методу  dispatch(''), куда первым параметром мы передаём название экшена, данный метод должен быть реализованн в экшене, например:

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
*/
