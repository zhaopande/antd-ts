import * as React from 'react'
import { Route, HashRouter as Router, Switch,Redirect } from 'react-router-dom';
// import App from '@/App';
import Main from '@/view/main/Main';

// import UserManage from './userManage';

export default function () {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} render={()=><Redirect to="/functionaltest/context"></Redirect>}/>
                {/* <Route path="/index" component={Main}><UserManage/></Route> */}
                <Route path="/main" component={Main}/>
                {/* <UserManage /> */}
                <Route component={Main} />
            </Switch>
        </Router>
    )
}
