// import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/Home'
import Kind from '@/pages/Kind'
import Cart from '@/pages/Cart'
import Search from '@/pages/Search'
import User from '@/pages/User'
import Detail from '@/pages/Detail'

const routes = [
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/kind',
    name: 'kind',
    component: Kind
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

export default routes
