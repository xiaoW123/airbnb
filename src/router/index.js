import React from "react";
import { Navigate } from "react-router-dom";
// 1.配置路由懒加载
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
  // 2.配置路由重定向
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/entire',
    element: <Entire></Entire>
  },
  {
    path: '/detail',
    element: <Detail></Detail>
  }
]


export default routes