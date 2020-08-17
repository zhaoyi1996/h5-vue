import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import News from '@/components/Index/News'
import Search from '@/components/Index/Search'
import Full from '@/components/Index/Full'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/news',
      name: 'News',
      component: News
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/full',
      name: 'Full',
      component: Full
    }
  ]
})
