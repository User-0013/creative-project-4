import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PatchNotes from '../views/PatchNotes.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import GameOverview from '../views/GameOverview.vue'
import Assignments from '../views/Assignments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/patch-notes',
    name: 'PatchNotes',
    component: PatchNotes
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/overview/*',
    name: 'Overview',
    component: GameOverview
  },
  {
    path: '/assignments/*',
    name: 'Assignments',
    component: Assignments
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
