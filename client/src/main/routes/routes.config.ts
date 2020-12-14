import Dashboard from '../../modules/dashboard'
import Drawer from '../../modules/drawer'
import Symptoms from '../../modules/symptoms'
import Nutrition from '../../modules/nutrition'

const names = {
   NUTRITION: 'nutrition',
   SYMPTOMS: 'symptoms',
   DASHBOARD: 'dashboard'
}

const components = {
   NUTRITION: Nutrition,
   SYMPTOMS: Symptoms,
   DASHBOARD: Dashboard,
   DRAWER: Drawer
}

export const paths = {
   DRAWER: '/me/',
   DASHBOARD: '/me/dashboard',
   NUTRITION: '/me/nutrition',
   SYMPTOMS: '/me/symptoms',
   HOME: '/home'
}

export const drawerRoutes = [
   {
      path: paths.NUTRITION,
      component: components.NUTRITION,
      name: names.NUTRITION
   },
   {
      path: paths.SYMPTOMS,
      component: components.SYMPTOMS,
      name: names.SYMPTOMS
   },
   {
      path: paths.DASHBOARD,
      component: components.DASHBOARD,
      name: names.DASHBOARD
   }
]
