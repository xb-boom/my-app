import { createBrowserRouter, Navigate } from 'react-router-dom';
import Index from '../view/index'
import Home from '../view/home/index'
import DataCore from '../view/dataCore/index'
import Login from '../view/login'
import RouterAuth from './routerAuth';
import Finance from '../view/finance/index'
import Loss from '../view/finance/loss'
import Profit from '../view/finance/profit'
import Product from '../view/product/index'

import {
    HomeOutlined,
    FormOutlined,
    BarChartOutlined,
    DollarOutlined,
    FundProjectionScreenOutlined,
    UsergroupAddOutlined,
    CheckSquareOutlined,
    WarningOutlined,
} from '@ant-design/icons';


// type RouteMeta = {  
//     title: string;  
//     icon:ReactElement
//   }

// RouteObject v6变成只读属性了。。。不定义类型了
// type CustomRouteObject = RouteObject & { 
//     element:ReactNode, 
//     meta?:RouteMeta,
//     children?: CustomRouteObject[];
// };


const routes = [
    {
        path: '/',
        element: <RouterAuth><Index /></RouterAuth>,
        children: [
            {
                index: true,
                element: <Navigate to="/index" replace />,
            },
            {
                path: '/index',
                meta: {
                    title: '首页',
                    icon: <HomeOutlined />,
                },
                element: <Home />,
            },
            {
                path: '/dataCore',
                meta: {
                    title: '数据中心',
                    icon: <BarChartOutlined />,
                },
                element: <DataCore />,
            },
            {
                path: '/finance',
                meta: {
                    title: '财务管理',
                    icon: <DollarOutlined />,
                },
                element: <Finance />,
                children: [
                    {
                        path: '/finance/profit',
                        meta: {
                            title: '财务盈利',
                            icon: <CheckSquareOutlined />,
                        },
                        element: <Profit/>,
                    },
                    {
                        path: '/finance/loss',
                        meta: {
                            title: '财务亏损',
                            icon:<WarningOutlined />,
                        },
                        element: <Loss/>,
                    }
                   
                ]
            },
            {
                path: '/product',
                meta: {
                    title: '产品管理',
                    icon: <FundProjectionScreenOutlined />,
                },
                element: <Product />,
            },
            {
                path: '/b',
                meta: {
                    title: '客户管理',
                    icon: <UsergroupAddOutlined />,
                },
                // element: <About />,
            },
            {
                path: '/c',
                meta: {
                    title: '系统设置',
                    icon: <FormOutlined />,
                },
                // element: <About />,
            },
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录',
        },
        element: <Login />,
    },
]
const router = createBrowserRouter(routes); // 显式转换类型以匹配 createBrowserRouter 的参数类型  
export default router;