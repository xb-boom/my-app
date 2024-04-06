import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import UserHeader from '../component/userHeader'
import router from '../router/index'
// import LoginApp from './login';
import { Layout, Menu, theme, Spin } from 'antd';
import '../utils/moduleScss.scss';
import logo from '../assets/image/logo.png';
const { Header, Content, Sider } = Layout;

const Index: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const MenuArray = router.routes[0].children?.slice(1);
    // 解决刷新页面菜单栏选择目录不更新问题
    const location = useLocation()
    const [Selectmenu,setSelectmenu] =  useState('')
    const { SubMenu } = Menu;
    useEffect(() => {
        setSelectmenu(location.pathname)
    }, [location])
    return (
        <>
            <Spin spinning={false} fullscreen />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider style={{ backgroundColor: 'white' }} width={250}>
                    <div className="demo-logo-vertical">
                        <img src={logo} />
                    </div>
                    <Menu mode="inline" selectedKeys={[Selectmenu]} className="custom-menu">
                        {
                            MenuArray?.map((item: any) => {
                                return (
                                    item.children
                                        ?
                                        <SubMenu key={item.path} icon={item.meta.icon} title={item.meta.title}>
                                            {
                                                item.children.map((ele: any) => {
                                                    return (
                                                        <Menu.Item key={ele.path} icon={ele.meta.icon}>
                                                            <Link to={ele.path}>{(ele as any).meta.title}</Link>
                                                        </Menu.Item>
                                                    )
                                                })
                                            }
                                        </SubMenu>
                                        :
                                        <Menu.Item key={item.path} icon={item.meta.icon}>
                                            <Link to={item.path}>{(item as any).meta.title}</Link>
                                        </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 24, background: colorBgContainer }} >
                        <UserHeader />
                    </Header>
                    <Content style={{ margin: '16px 16px 0 16px' }}>
                        <Outlet />
                        {/* 坑 */}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Index;
