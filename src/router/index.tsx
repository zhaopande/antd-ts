import * as React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
// import App from '@/App';
import Main from '@/view/main/Main';
export default function () {
    return (
    <Router>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/index" component={Main} />
            <Route component={Main} />
        </Switch>
    </Router>
    // <div>123</div>
    )
}
