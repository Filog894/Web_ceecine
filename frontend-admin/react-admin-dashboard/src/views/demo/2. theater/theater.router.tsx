import { PlaySquareTwoTone, UnorderedListOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { AdminRouterItem } from '../../../router';
import FormPage from "./components/addtheater";
import DemoTable from "./components/listtheater";

const demoRoutes: AdminRouterItem[] = [
{
    path: "admin/theater",
    element: <Outlet />,
    meta: {
        label: "Quản lý rạp phim",
        title: "Quản lý rạp phim",
        key: "admin/theater",
        icon: <PlaySquareTwoTone/>,
    },
    children: [
    {
        path: "listthearter",
        element: <DemoTable/>,
        meta: {
            label: "Danh sách rạp phim",
            title: "Danh sách rạp phim",
            key: "/admin/theater/listthearter",
            icon: <UnorderedListOutlined/>,
        },
    },
    {
        path: "addtheater",
        element: <FormPage/>,
        meta: {
            label: "Thêm rạp phim",
            title: "Thêm rạp phim",
            key: "/admin/theater/addtheater",
            icon: <VideoCameraAddOutlined/>,
        },
    }
    ],
},
];

export default demoRoutes;
