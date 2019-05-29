import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { Link } from 'react-router-dom';
export interface FunctionalTestProps {
    name: String
}

export interface FunctionalTestState {
    state1: String
}
//创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
const ThemeContext = React.createContext('primary1');
class FunctionalTest extends React.Component<FunctionalTestProps, FunctionalTestState> {
    constructor(props: FunctionalTestProps) {
        super(props);
        this.state = { state1: "1" };
    }
    componentDidMount() {
        console.log(this.context);
    }
    clickParent = () => {
        console.log(this.context);
        console.log(this.props);
    }
    render() {
        // Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
        return (<React.Fragment>{this.state.state1}
            <Button onClick={() => this.clickParent()}>parent</Button>
            {/*每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。Provider 接收一个 value 属性，
        传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。 */}
            <ThemeContext.Provider value="danger">
                <Son1 />
            </ThemeContext.Provider>
        </React.Fragment>);
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
                <ThemeContext.Consumer>
                    {context => (
                        <Button>son1{context}</Button>
                    )}
                </ThemeContext.Consumer>
                <Son2></Son2>
            </div>
        )
    }

}
interface Son2State {
    contextVal?: String
}
interface Son2Props {
    contextVal?: String
}
class Son2 extends React.Component<Son2Props> {
    // public state: Son2State = {
    //     contextVal: ""
    // }
    constructor(props: Son2Props) {
        super(props)
        this.state = {
            contextVal: this.context
        }
    }
    componentDidMount() {
        console.log(this);
        console.log(this.context);
    }
    clickSon2 = (context: any) => {
        console.log(context);
        console.log(this.context);
        context = context + "1";
        // this.setState({
        //     contextVal: this.context + "1"
        // })
    }
    render() {
        return (
            // <Son1 name="name">
            // {/* // 获取context */}
            <ThemeContext.Consumer>
                {context => (
                    <Button onClick={() => this.clickSon2(context)}>
                        {context}
                    </Button>
                )}
            </ThemeContext.Consumer>
            // </Son1>

        )
    }

}

export default FunctionalTest;