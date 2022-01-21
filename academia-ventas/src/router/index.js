import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/vistaadministrador',
    name: 'VistaAdministrador',
    // meta: {
    //   requiredAuth: true
    //   },
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
  }, {
    path: '/editando/:id',
    props: true,
    name: 'Editando',
    component: () => import(/* webpackChunkName: "Editando" */
      '../views/Editando.vue')
  },
  {
    path: '*',
    redirect: { name: 'Login' }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // aquí crearemos una variable para guardar los valores que existan del usuario
  let requiredAuth = to.matched.some(res => res.meta.requiredAuth);
  if (requiredAuth) {
    next({ name: 'Login' });
  } else if (!requiredAuth) {
    next();
  } else {
    next();
  }
})

export default router
