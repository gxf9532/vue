
// 引入页面组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    // 定义子路由
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: MessageDetail,
            // 将路由中的参数数据映射成标签的属性
            props: route => ({id: route.params.id * 1})
          }
        ]
      }
    ]
  },
  {
    path: '/',
    redirect: '/about'
  }
]
