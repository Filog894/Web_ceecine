import { FundFilled } from '@ant-design/icons';
import { AdminRouterItem } from "../../../router";
import Showtimes from '.';

const demoRoutes: AdminRouterItem[] = [
  {
    path: 'admin/showtime',
    element: <Showtimes/>,
    meta: {
      label: "Lịch chiếu",
      title: "Lịch chiếu",
      key: "admin/showtime",
      icon: <FundFilled />,
    },
    
  }
]

export default demoRoutes
