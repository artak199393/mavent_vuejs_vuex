import MaventBody from './components/main/MaventBody'
import OurObjectsBody from './components/ourObjects/OurObjectsBody'
import ItemBody from './components/item/ItemBody'
import ItemAllBody from './components/item_all/ItemAllBody'
import NewsPageBody from './components/news_page/NewsPageBody'
import NewsAllBody from './components/news_all/NewsAllBody'
import ObjectsPageBody from './components/objects_page/ObjectsPageBody'


export const routes = [
  {
    path: '/',
    name: "home",
    redirect: "/main",
  },
  { 
    path: '/main',
    name:"main",
    component: MaventBody,
  },
  {
    path: '/our_objects',
    name: "our_objects",
    component: OurObjectsBody,
  },
  {
    path: '/item/:id',
    name: "item",
    component: ItemBody,
  },
  {
    path: '/item_all',
    name: "item_all",
    component: ItemAllBody,
  },
  {
    path: '/news_page/:id',
    name: "news_page",
    component: NewsPageBody,
  },
  {
    path: '/news_all',
    name: "news_all",
    component: NewsAllBody,
  },
  {
    path: '/objects_page/:id',
    name: "objects_page",
    component: ObjectsPageBody,
  }, 
]