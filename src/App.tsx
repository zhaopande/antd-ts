import * as React from 'react'
import {Button} from "antd"
interface HomeProps {
    name?: string;
}
interface HomeState {
    title: string
}
class App extends React.Component<HomeProps,HomeState> {
    public propss: HomeProps = {
        name: 'props name'
    }
    public state: HomeState = {
        title: 'Home state title'
    }
    constructor(props: HomeProps, state: HomeState) {
        super(props, state);
        console.log(props,state);
    }
    render() {
        return (
            <div className="Home-component-root">
                <p>{this.state.title}</p>
                <p>{this.propss.name}</p>
                <Button>123456</Button>
            </div>
        );
    }
}
export default App;