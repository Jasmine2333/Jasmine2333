import Vue from 'vue'
import VueRouter from 'vue-router'
import Employer_Login from '../views/Employer_login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/employer',
    name: 'Employer_login',
    component:  Employer_Login
  },
  {
    path: '/employee',
    name: 'Employee_login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Employee_login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
