import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth } from "firebase/auth";


const routes = [
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
  {
    path: '/contact',
    name: 'contact',  component: () => import('../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register',  component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',  component: () => import('../views/Login.vue')
  },
  {
    path: '/grammars',
    name: 'grammars',  component: () => import('../views/Grammars.vue')
  },
  {
    path: '/details',
    name: 'details',  component: () => import('../views/GrammarsDetails.vue')
  },
  {
    path: '/feed',
    name: 'feed',  component: () => import('../views/Feed.vue'),
    // meta: {
    //   requireAuth: true,
    // },
  },

  // for my Resume Site
  {
    path: '/contact',
    name: 'contact',  component: () => import('../views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',  component: () => import('../views/Resume.vue')
  },
  {
    path: '/what-steven-does',
    name: 'whatido',  component: () => import('../views/WhatIDo.vue')
  },
  {
    path: '/projects',
    name: 'projects',  component: () => import('../views/Projects.vue')
  },
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requireAuth)){
//     if(getAuth().currentUser){
//       next();
//     }else{
//       alert("You dont have permissions to access to this page")
//       next('/');
//     }
//   }
// });


export default router
