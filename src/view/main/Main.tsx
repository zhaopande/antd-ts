import * as React from 'react'
import {
    Layout, Menu
} from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import "./main.css";

import FunctionalTest from '@/view/functionalTest';
import UserManagement from '@/view/userManagement';
import PrivateRouter from "@/util/PrivateRouter"
const { Header } = Layout;


interface Location {
    pathname: string,
}
interface MainProps {
    title?: string,
    location: Location
}
interface MainState {
    name?: string,
    currentPathName?: string
}

class Main extends React.Component<MainProps, MainState> {
    public state: MainState = {
        name: "state",
        currentPathName: ""
    }
    // constructor(props: MainProps, state: MainState) {
    //     super(props, state);
    // };

    public componentDidMount() {
        this.setState({
            currentPathName: this.props.location.pathname
        })
        // this.state.currentPathName=this.props.location.pathname;
    }
    public itemOnclick(item: any) {
        console.log(item);
        this.setState({
            currentPathName: item.key
        })
    }
    public render() {
        // const { currentPathName } = this.state;
        // console.log(currentPathName);
        return (<Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/functionaltest/context" className="container">功能测试</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/usermanage/userlist" className="container">用户管理</Link></Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Switch>
                <PrivateRouter>
                    <Route path="/functionaltest" component={FunctionalTest} />
                    <Route path="/usermanage" component={UserManagement} />
                </PrivateRouter>
            </Switch>

        </Layout>
        )
    }
}
export default Main;