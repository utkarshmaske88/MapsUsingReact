import React, { useState } from 'react';
import Map from './map';
import { Layout, Menu, Button } from 'antd';
import {
    UserOutlined, RightCircleFilled, LeftCircleFilled,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Option 3
                    </Menu.Item>
                    {collapsed ?
                        <Menu.Item style={{ backgroundColor: "#1677ff" }} onClick={toggleSidebar} icon={<RightCircleFilled />}></Menu.Item>
                        : <Menu.Item style={{ backgroundColor: "#1677ff" }} onClick={toggleSidebar} icon={<LeftCircleFilled />}></Menu.Item>}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ paddingTop: '15px', gap: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button>Profile </Button>
                    <Button>Login </Button>
                    <Button>SignUp </Button>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Map />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;
