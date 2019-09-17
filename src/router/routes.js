const Hello = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Hello')
const Home = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Home')
const Kind = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Kind')
const Cart = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Cart')
const User = () => import(/* webpackChunkName: "group-footer" */ '@/pages/User')
const Search = () => import(/* webpackChunkName: "group-search" */ '@/pages/Search')
const Detail = () => import(/* webpackChunkName: "group-detail" */ '@/pages/Detail')
const Footer = () => import(/* webpackChunkName: "group-footer" */ '@/components/Footer')
const Login = () => import(/* webpackChunkName: "group-footer" */ '@/pages/Login')

const routes = [
  {
    path: '/',
    name: 'hello',
    components: {
      default: Hello
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      footer: Footer
    },
    alias: '/h'
  },
  {
    path: '/city',
    name: 'city',
    components: {
      default: () => import(/* webpackChunkName: "group-user" */ '@/pages/City')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: Footer
    }
    // beforeEnter (to, from, next) {
    //   if (localStorage.getItem('isLogin') === 'ok') {
    //     next()
    //   } else {
    //     next('/register')
    //   }
    // }
  },
  {
    path: '/kind',
    name: 'kind',
    components: {
      default: Kind,
      footer: Footer
    }
  },
  {
    path: '/search',
    name: 'search',
    components: {
      default: Search
    }
  },
  {
    path: '/user',
    name: 'user',
    components: {
      default: User,
      footer: Footer
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {
      default: () => import(/* webpackChunkName: "group-user" */ '@/pages/Register')
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    components: {
      default: Detail
    },
    props: {
      default: true
    }
  }
]

export default routes
