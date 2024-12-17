import { PlaySquareTwoTone, UnorderedListOutlined, VideoCameraAddOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { AdminRouterItem } from '../../../router';
import FormPage from "./components/addfilm";
import DemoTable from "./components/listfilm";

const demoRoutes: AdminRouterItem[] = [
{
    path: "/admin/film",
    element: <Outlet />,
    meta: {
        label: "Quản lý phim",
        title: "Quản lý phim",
        key: "/admin/film",
        icon: <PlaySquareTwoTone />,
    },
    children: [
    {
        path: "listfilm",
        element: <DemoTable/>,
        meta: {
            label: "Danh sách phim",
            title: "Danh sách phim",
            key: "/admin/film/listfilm",
            icon: <UnorderedListOutlined />,
        },
    },
    {
        path: "addfilm",
        element: <FormPage/>,
        meta: {
            label: "Thêm phim",
            title: "Thêm phim",
            key: "/admin/film/addfilm",
            icon: <VideoCameraAddOutlined />,
        },
    }
    ],
},
];

export default demoRoutes;
