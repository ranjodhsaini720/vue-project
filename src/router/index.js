import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import AppointmentView from '../views/AppointmentView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView

    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: BlogView
    },
    {
      path: '/Services',
      name: 'Services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/Appointment',
      name: 'Appointment',
      component: AppointmentView
    }
  ]
})

export default router
