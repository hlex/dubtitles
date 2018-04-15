import {
  App,
  Home,
  Discover,
  Lesson,
  MyProfile,
  PageNotFound
} from './containers'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/profile',
        component: MyProfile
      },
      {
        path: '/discover',
        component: Discover
      },
      {
        path: '/lessons',
        component: Lesson
      },
      {
        path: '/*',
        component: PageNotFound
      }
    ]
  }
]

export default routes
