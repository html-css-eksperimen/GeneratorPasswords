import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PasswordGenPage = () => import(/* webpackChunkName: "password-page-component" */'@/views/passwordgens/PasswordGenerator.vue');

const routes = [
  {
    path: '/passwordgen',
    name: 'passwordgen',
    component: PasswordGenPage,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '*',
    redirect: {
      name: 'passwordgen',
    },
  },
  {
    path: '/',
    redirect: {
      name: 'passwordgen',
    },
  },
  {
    path: '',
    redirect: {
      name: 'passwordgen',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
