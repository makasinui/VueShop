import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../components/Main.vue'
import AboutUs from '../components/AboutUs.vue'
import Delivery from '../components/Delivery.vue'
import Payment from '../components/Payment.vue'
import Contacts from '../components/Contacts.vue'
import News from '../components/Ns.vue'
const routes = [

  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about-us',
    name:'AboutUs',
    component:AboutUs
  },
  {
    path:'/delivery',
    name:'Delivery',
    component:Delivery
  },
  {
    path:'/payment',
    name:'Payment',
    component:Payment
  },
  {
    path:'/contacts',
    name:'Contacts',
    component:Contacts
  },
  {
    path:'/news',
    name:'News',
    component:News
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
