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
