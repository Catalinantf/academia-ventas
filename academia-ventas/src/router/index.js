import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter)
const routes = [{
  path: '/',
  redirect: { name: 'Home' }
},
{
  path: '/home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
}, 
{
  path: '/acceso',
  name: 'Acceso',
  component: () => import(/* webpackChunkName: "Acceso" */ '../views/Acceso.vue')
}, 
{
  path: '/administracion',
  name: 'Administracion',
  meta: {
    requiredAuth: true
  },
  component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue')
},
{
  path: '/editando/:id',
  props: true,
  name: 'Editando',
  meta: {
    requiredAuth: true
  },
  component: () => import(/* webpackChunkName: "Editando" */ '../views/Editando.vue')
},
{
  path: '*',
  redirect: { name: 'Home' }
}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, routes
})
router.beforeEach((to, from, next) => {
  let user = store.getters.enviarUser;
  let requiredAuth = to.matched.some(res => res.meta.requiredAuth);
  if (!user && requiredAuth) {
    next({ name: 'Home' });
  } else if (user && !requiredAuth) {
    next();
  } else {
    next();
  }
})
export default router