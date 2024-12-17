import { FundFilled } from '@ant-design/icons';
import { AdminRouterItem } from "../../router";
import DemoChart from "./chart";

const demoRoutes: AdminRouterItem[] = [
  {
    path: 'admin/dashboard',
    element: <DemoChart/>,
    meta: {
      label: "Dashboard",
      title: "Dashboard",
      key: "/admin/dashboard",
      icon: <FundFilled />,
    },
    
  }
]

export default demoRoutes
