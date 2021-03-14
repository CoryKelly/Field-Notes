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
    redirect: '/posts'
  },
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
    path: '/posts/:postId',
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
