import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon
} from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import userList from '@/view/userManagement/userList';
import addUser from '@/view/userManagement/addUser';
const { SubMenu } = Menu;
const {Content, Sider } = Layout;

interface Location {
    pathname: string,
}
export interface NavProps {
    name?: String;
    location: Location
}

export interface NavState {
    name?: String;
}

class Nav extends React.Component<NavProps, NavState> {
    constructor(props: NavProps) {
        super(props);
        this.state = { name: "hahaha" };
    }
    render() {
        return (
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['/nav/test1']}
                        selectedKeys={((path) => {
                            let pathnames = path.pathname.split('/')[2];
                            return [pathnames]
                        })(this.props.location)}
                        defaultOpenKeys={['sub1']}  //初始展开的 SubMenu 菜单项 key 数组 
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />nav</span>}>
                            <Menu.Item key="userlist"><Link to="/usermanage/userlist">用户列表</Link></Menu.Item>
                            <Menu.Item key="adduser"><Link to="/usermanage/adduser">用户列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />功能</span>}>
                            <Menu.Item key="5">test</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                    }}
                    >
                        <Switch>
                            <Route path="/usermanage/userList" component={userList} />
                            <Route path="/usermanage/addUser" component={addUser} />
                        </Switch>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Nav;