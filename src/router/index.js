import Vue from 'vue'
import VueRouter from 'vue-router'
import CalculationsView from "@/views/CalculationsView";
import TaskView from "@/views/TaskView";
import TimelineView from "@/views/TimelineView";
import postDetails from "@/views/Post";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/task/all'
  },
  {
    path: '/task/all',
    name: 'TimelineView',
    component: TimelineView
  },
  {
    path: '/task/create',
    name: 'TaskView',
    component: TaskView
  },
  {
    path: '/task/:postId',
    component: postDetails
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
