import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import HelloWorld from '@/pages/HelloWorld'
// import Home from '@/pages/Home'

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
//   {
//     path: '/home',
//     name: 'home',
//     component: Home
//   }
// ]

const router = new Router({
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/cart') {
//     if (localStorage.getItem('isLogin') === 'ok') {
//       next()
//     } else {
//       // alert('小样，没有登录还想进去？')
//       next('/register')
//     }
//   } else {
//     next()
//   }
// })

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
