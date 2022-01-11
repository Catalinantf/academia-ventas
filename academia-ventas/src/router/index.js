import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/vistaadministrador',
    name: 'VistaAdministrador',
    component: () => import(/* webpackChunkName: "VistaAdministrador" */ '../views/VistaAdministrador.vue')
  },
  {
    path: '/vistaestudiante',
    name: 'VistaEstudiante',
    component: () => import(/* webpackChunkName: "VistaEstudiante" */ '../views/VistaEstudiante.vue')
  },
  {
    path: '/vistaprofesor',
    name: 'VistaProfesor',
    component: () => import(/* webpackChunkName: "VistaProfesor" */ '../views/VistaProfesor.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
