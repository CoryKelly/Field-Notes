import Vue from 'vue'
import VueRouter from 'vue-router'
import CalculationsView from "@/views/CalculationsView";
import TaskView from "@/views/TaskView";
import TimelineView from "@/views/TimelineView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'TimelineView',
    component: TimelineView
  },
  {
    path: '/posts/createPost',
    name: 'TaskView',
    component: TaskView
  },
  {
    path: '/calculations',
    name: 'CalculationsView',
    component: CalculationsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
