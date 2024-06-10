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
import NestlinkView from '/src/views/cases/NestlinkView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
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
      component: HomeView,
      props: route => ({ links: route.meta.links })
    },
    { //only used for responsive
      path: '/work',
      name: 'work',
      component: WorkView,
      props: route => ({ links: route.meta.links })
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
    },
    {
      path: '/nestlink',
      name: 'nestlink',
      component: NestlinkView
    },
    
  ]
})


export default router
