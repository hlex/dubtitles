import {
  App,
  Home,
  Discover,
  Lesson,
  LessonDetail,
  MyProfile,
  PageNotFound,
  StyleGuide
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
        path: '/dub',
        component: Home
      },
      {
        path: '/profile',
        exact: true,
        component: MyProfile
      },
      {
        path: '/discover',
        exact: true,
        component: Discover
      },
      {
        path: '/lessons',
        exact: true,
        component: Lesson
      },
      {
        path: '/lessons/:slug',
        exact: true,
        component: LessonDetail
      },
      {
        path: '/style-guide',
        exact: true,
        component: StyleGuide
      },
      {
        path: '/*',
        component: PageNotFound
      }
    ]
  }
]

export default routes
