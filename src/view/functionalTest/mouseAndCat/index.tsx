
import React from 'react';
import fire from "./fire.png"
/**
 * render prop 示例
 * “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 * 更具体地说，render prop 是一个用于告知组件需要渲染什么内容的函数 prop。
 * render prop 是因为模式才被称为 render prop ，你不一定要用名为 render 的 prop 来使用这种模式
 */
interface CatProps {
    mouse: MouseProps,
}
class Cat extends React.Component<CatProps>{
    constructor(props: CatProps) {
        super(props)
    }
    render() {
        const mouse = this.props.mouse;
        return (
            <div>
                <img src={fire} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="fire"/>
            </div>
        );
    }
}
interface MouseProps {
    x?: number,
    y?: number,
    renders: Function
}
interface Event {
    clientX: number,
    clientY: number,
}
class Mouse extends React.Component<MouseProps> {
    constructor(props: MouseProps) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event: Event) {
        this.setState({
            x: event.clientX - 254,
            y: event.clientY - 217
        });
    }

    render() {
        return (
            <div style={{ height: "500px", width: "800px", position: "relative" }} onMouseMove={this.handleMouseMove}>

                {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
                {/* 把提前放到render中的函数拿出来并传入state,与子组件共享了state */}
                {this.props.renders(this.state)}
            </div>
        );
    }
}
interface MouseAndCatProps {
    defaultProps?: String
}

interface MouseAndCatState {
    name: String
}
class MouseAndCat extends React.Component<MouseAndCatProps, MouseAndCatState> {
    constructor(props: MouseAndCatProps) {
        super(props);
        this.state = { name: "MouseAndCat" };
    }
    render() {
        return (
            <>
                <h1>移动鼠标!</h1>
                <Mouse renders={(mouse: MouseProps) => (
                    <Cat mouse={mouse} />//把子组件注入到父组件的render属性中，在父组件中调用
                )} />
            </>
        );
    }
}

export default MouseAndCat;