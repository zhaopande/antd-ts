import * as React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// import App from '@/App';
import Main from '@/view/main/Main';
// import UserManage from './userManage';
// import AddUser from '@/view/userManagement/addUser';

export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Main} />
                {/* <Route path="/index" component={Main}><UserManage/></Route> */}
                <Route path="/index" component={Main}/>
                {/* <UserManage /> */}
                <Route component={Main} />
            </Switch>
        </Router>
    )
}
