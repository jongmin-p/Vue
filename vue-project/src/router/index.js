import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import compu from '../components/ComputedExam.vue'
import DataBinding from '../components/DataBindingList.vue'
import EventClick from '../components/EventClick.vue'
import JinjuExam from '../components/JinjuExam.vue'
import gimhae from '../components/GimHae.vue'
import fineDust from '../components/FineDust.vue'

const routes = [
  {
    path: '/fineDust',
    name: 'fineDust',
    component: fineDust
  },
  {
    path: '/gimhae',
    name: 'gimhae',
    component: gimhae
  },
  {
    path: '/JinjuExam',
    name: 'JinjuExam',
    component: JinjuExam
  },
  {
    path: '/EventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/DataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  // import 한거 가져오자
  {
    path: '/computedExam',
    name: 'computedExam',
    component: compu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
