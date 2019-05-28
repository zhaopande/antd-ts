import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { Link } from 'react-router-dom';
export interface FunctionalTestProps {
    name: String
}

export interface FunctionalTestState {
    state1: String
}
const ThemeContext = React.createContext('primary1');
class FunctionalTest extends React.Component<FunctionalTestProps, FunctionalTestState> {
    constructor(props: FunctionalTestProps) {
        super(props);
        this.state = { state1: "1" };
    }
    render() {
        return (<div>{this.state.state1}

            <ThemeContext.Provider value="primary">
                <Son1 />
            </ThemeContext.Provider>
        </div>);
    }
}

interface Son1Props {
    name?: String
}
class Son1 extends React.Component<Son1Props> {
    constructor(props: Son1Props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Button>son1</Button>
                <Son2></Son2>
            </div>
        )
    }

}
class Son2 extends React.Component {
    componentDidMount() {
        console.log(this);
        console.log(this.context);
    }
    render() {
        return (
            // <Son1 name="name">
            // {/* // 获取context */}
            <ThemeContext.Consumer>
                {context => (
                    <Button>
                        {context}
                    </Button>
                )}
            </ThemeContext.Consumer>
            // </Son1>

        )
    }

}

export default FunctionalTest;