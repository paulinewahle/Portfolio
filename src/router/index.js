import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '/src/views/PageNotFound.vue'
import LoadingView from '/src/views/LoadingView.vue'
import HomeView from '/src/views/HomeView.vue'
import WorkView from '/src/views/WorkView.vue'
import AboutView from '/src/views/AboutView.vue'
import NordikView from '/src/views/cases/NordikView.vue'
import ConcreateView from '/src/views/cases/ConcreateView.vue'
import HitechView from '/src/views/cases/HitechView.vue'
import GamelView from '/src/views/cases/GamelView.vue'
import SkilledView from '/src/views/cases/SkilledView.vue'
import CorianderView from '/src/views/cases/CorianderView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'auto',
      }
    }
  },
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/',
      name: 'loading',
      component: LoadingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home#work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/nordik',
      name: 'nordik',
      component: NordikView
    },
    {
      path: '/concreate',
      name: 'concreate',
      component: ConcreateView
    },
    {
      path: '/hitech',
      name: 'hitech',
      component: HitechView
    },
    {
      path: '/gamel',
      name: 'gamel',
      component: GamelView
    },
    {
      path: '/skilled',
      name: 'skilled',
      component: SkilledView
    },
    {
      path: '/coriander',
      name: 'coriander',
      component: CorianderView
    }
    
  ]
})


export default router
