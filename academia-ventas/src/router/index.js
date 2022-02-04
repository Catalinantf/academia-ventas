import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

Vue.use(VueRouter)
const routes = [
  {
  path: '/',
  redirect: { name: 'Home' }
},
{
  path: '/home',
  name: 'Home',
  component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
},
{
  path: '/404',
  name: '404',
  component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
}, 
{
  path: '/About',
  name: 'About',
  component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
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
  path: '/editandoprospecto/:id',
  props: true,
  name: 'EditandoProspecto',
  meta: {
    requiredAuth: true
  },
  component: () => import(/* webpackChunkName: "EditandoProspecto" */ '../views/EditandoProspecto.vue')
},
{
  path: '*',
  redirect: { name: '404' }
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
    next({ name: 'Administracion' });
  } else if (user && !requiredAuth) {
    next();
  } else {
    next();
  }
})
export default router