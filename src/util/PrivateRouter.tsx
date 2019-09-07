import * as React from 'react'

export interface PrivateRouterProps {

}

export interface PrivateRouterState {

}

class PrivateRouter extends React.Component<PrivateRouterProps, PrivateRouterState> {
    constructor(props: PrivateRouterProps) {
        super(props);
        // this.state = { : };
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (<div style={{ height: "100%" }}>{this.props.children}</div>);
    }
}

export default PrivateRouter;