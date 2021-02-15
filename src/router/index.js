import Vue from 'vue'
import VueRouter from 'vue-router'
import CalculationsView from "@/views/CalculationsView";
import TaskView from "@/views/TaskView";
import TimelineView from "@/views/TimelineView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TimelineView',
    component: TimelineView
  },
  {
    path: '/calculations',
    name: 'CalculationsView',
    component: CalculationsView
  },
  {
    path: '/task',
    name: 'TaskView',
    component: TaskView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
