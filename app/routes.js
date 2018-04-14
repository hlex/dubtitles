import { App, Home, Page1, Page2, Discover } from './containers'

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
        path: '/page1',
        component: Page1
      },
      {
        path: '/page2',
        component: Page2
      },
      {
        path: '/discover',
        component: Discover
      }
    ]
  }
]

export default routes
