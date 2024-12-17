import {
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import { MenuItemType } from "antd/es/menu/interface";
import Login from "../views/login.tsx";
import ProtectedRoute from "../components/ProtectedRoutes.tsx";
import ForgotPassword from "../components/ForgotPassWord.tsx";
export type AdminRouterItem = RouteObject & {
  // set antd menu props in meta
  meta?: MenuItemType
  children?: AdminRouterItem[]
}

/**
 * auto load route from views/***\/*.router.ts
 * @returns route
 */
const loadRouteModules = async () => {
  const routeModuleFiles = import.meta.glob('../views/**/*.router.tsx', {
    eager: true,
    import: 'default'
  })
  const routeModules: AdminRouterItem[] = []

  for await (const [key, module] of Object.entries(routeModuleFiles)) {
    console.log('key = ', key, 'module = ', module)

    if (module) {
      const routes = Array.isArray(module) ? module : [module];
      routeModules.push(...routes);
    }
  }


  return routeModules
}

export const routes: AdminRouterItem[] = [
  ...await loadRouteModules()
]

export default createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
    {
      path: "/",
      element: <App />,
      children: routes,
    },
    ],
  },
]);
