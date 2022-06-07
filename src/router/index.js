import Vue from 'vue'
import VueRouter from 'vue-router'

import Lesson00 from '@/components/views/Lesson00.vue'
import ArrayMethodsPage from '@/components/views/ArrayMethodsPage.vue'
import Lesson01 from '@/components/views/Lesson01.vue'
import Lesson02 from '@/components/views/Lesson02.vue'
import Lesson03 from '@/components/views/Lesson03.vue'
import Lesson04 from '@/components/views/Lesson04.vue'
import Lesson05 from '@/components/views/Lesson05.vue'
import Lesson06 from '@/components/views/Lesson06.vue'
import Lesson07 from '@/components/views/Lesson07.vue'
import ApiFetchAxiosPage from '@/components/views/ApiFetchAxiosPage.vue'
import UsingAxiosPage from '@/components/views/UsingAxiosPage.vue'
import Posts from '@/components/views/Posts.vue'
import VuexPage from '@/components/views/VuexPage.vue'
import QuestionsWithAnswersPage from '@/components/views/QuestionsWithAnswersPage.vue'
import ObjectMethodsPage from '@/components/views/ObjectMethodsPage.vue'
import FunctionsPage from '@/components/views/FunctionsPage.vue'
import FunctionalExpressionPage from '@/components/views/FunctionalExpressionPage.vue'
import OperatorPage from '@/components/views/OperatorPage.vue'
import ProcessingErrorsPage from '@/components/views/ProcessingErrorsPage.vue'
import GitGitHub from '@/components/views/GitGitHub.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/arraymethodspage',
    name: 'ArrayMethodsPage',
    component: ArrayMethodsPage,
  },
  {
    path: '/lesson00',
    name: 'Lesson00',
    component: Lesson00,
  },
  {
    path: '/lesson01',
    name: 'Lesson01',
    component: Lesson01,
  },
  {
    path: '/lesson02',
    name: 'Lesson02',
    component: Lesson02,
  },
  {
    path: '/lesson03',
    name: 'Lesson03',
    component: Lesson03,
  },
  {
    path: '/lesson04',
    name: 'Lesson04',
    component: Lesson04,
  },
  {
    path: '/lesson05',
    name: 'Lesson05',
    component: Lesson05,
  },
  {
    path: '/lesson06',
    name: 'Lesson06',
    component: Lesson06,
  },
  {
    path: '/lesson07',
    name: 'Lesson07',
    component: Lesson07,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/vuexpage',
    name: 'VuexPage',
    component: VuexPage,
  },
  {
    path: '/questionswithanswers',
    name: 'QuestionsWithAnswersPage',
    component: QuestionsWithAnswersPage,
  },
  {
    path: '/objectmethodspage',
    name: 'ObjectMethodsPage',
    component: ObjectMethodsPage,
  },
  {
    path: '/functionspage',
    name: 'FunctionsPage',
    component: FunctionsPage,
  },
  {
    path: '/functionalexpression',
    name: 'FunctionalExpressionPage',
    component: FunctionalExpressionPage,
  },
  {
    path: '/operatorpage',
    name: 'OperatorPage',
    component: OperatorPage,
  },
  {
    path: '/processingerrorspage',
    name: 'ProcessingErrorsPage',
    component: ProcessingErrorsPage,
  },
  {
    path: '/apifetchaxios',
    name: 'ApiFetchAxiosPage',
    component: ApiFetchAxiosPage,
  },
  {
    path: '/usingaxios',
    name: 'UsingAxiosPage',
    component: UsingAxiosPage,
  },
  {
    path: '/github',
    name: 'github',
    component: GitGitHub,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to);
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
