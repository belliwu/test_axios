import Vue from 'vue'
import Router from 'vue-router'
import Logout from '@/components/Logout'
import Login from '@/components/Login'
import Error404 from '@/components/Error404'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '*',
      name: 'error404',
      component: Error404
    }
  ]
})
