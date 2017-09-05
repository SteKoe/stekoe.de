import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import ProjectDetail from '../components/ProjectDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/projects/:slug',
      component: ProjectDetail
    }
  ]
})
