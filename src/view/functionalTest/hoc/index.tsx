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
  
        // this.setState({
        //     hoc:getHoc
        // })
    }
    render() {

        return (<div>
            HeightOrderComponents
            {/* <getHoc ></getHoc> */}
        </div>);
    }
}

function GethocFun() {
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

interface WithLoadingProps {
    loading: boolean;
}
const CreacteHOC = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({
    loading,
    ...props
}: WithLoadingProps) =>
        loading ? <LoadingSpinner /> : <Component {...props as P} />;
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

const getHoc = CreacteHOC(TestHoc);
console.log(getHoc);
export default getHoc;