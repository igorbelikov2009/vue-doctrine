import Vue from 'vue'
import VueRouter from 'vue-router'
import Lesson00 from '../components/views/Lesson00.vue'
import ArrayMethodsPage from '../components/views/ArrayMethodsPage.vue'
import Lesson01 from '../components/views/Lesson01.vue'
import Lesson02 from '../components/views/Lesson02.vue'
import Lesson03 from '../components/views/Lesson03.vue'
import Lesson04 from '../components/views/Lesson04.vue'
import Lesson05 from '../components/views/Lesson05.vue'
import Lesson06 from '../components/views/Lesson06.vue'
import Lesson07 from '../components/views/Lesson07.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
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
