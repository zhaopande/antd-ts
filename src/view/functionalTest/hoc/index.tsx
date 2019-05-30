import * as React from 'react'
import "./index.less"
export interface HeightOrderComponentsProps {
    defaultProps?: String
}

export interface HeightOrderComponentsState {
    defaultState?: String,
    hoc?: React.FC
}
/**
 * 高阶组件
 */
class HeightOrderComponents extends React.Component<HeightOrderComponentsProps, HeightOrderComponentsState> {
    constructor(props: HeightOrderComponentsProps) {
        super(props);
        this.state = { defaultState: "1" };
    }
    componentDidMount() {
        const getHoc=CreacteHOC(TestHoc);
        console.log(getHoc);
        // this.setState({
        //     hoc:getHoc
        // })
    }
    render() {
        return (<div>
            HeightOrderComponents
            {/* <GethocFun></GethocFun> */}
        </div>);
    }
}

function GethocFun(){
    return CreacteHOC(TestHoc);
}

type BCProps = {
    p1: string
}
class BC extends React.Component<BCProps> {
    render() {
        return <div>{this.props.p1}</div>
    }
}
type HOCProps = {
    loading?: string,
    // component: React.Component
}
// function withVisible<Self>(WrappedComponent: React.ComponentType<Self & IVisible>): React.ComponentType<Omit<Self, 'visible'>> {
//     return class extends Component<Self> {
//         render() {
//             return <WrappedComponent {...this.props}  visible={true} />
//         }
//     }
// }

function CreacteHOC(Component:React.ComponentType<TestHocProps>) {
    return class NewComponent extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }
}

function LoadingSpinner() {
    return (
        <div>LoadingSpinner</div>
    )
}
export interface TestHocProps {
    loading?: Boolean
}

export interface TestHocState {
    defaultState?: String
}

class TestHoc extends React.Component<TestHocProps, TestHocState> {
    constructor(props: TestHocProps) {
        super(props);
        // this.state = { : };
    }
    render() {
        return (<div>
            TestHoc
        </div>);
    }
}

// export default Test;
// function createHoc() {
//     return class extends React.Component {
//         constructor(props: any) {
//             super(props);

//         }
//     }
// }
export default HeightOrderComponents;