import React, { useState, useEffect } from 'react';
import { Button } from "antd";
import { Link } from 'react-router-dom';

export interface TsDecoratorProps {
    defaultProps?: String
}

export interface TsDecoratorState {
    name?: String
}

class TsDecorator extends React.Component<TsDecoratorProps, TsDecoratorState> {
    constructor(props: TsDecoratorProps) {
        super(props);
        this.state = { name: "TsDecorator" };
    }
    componentDidMount() {

        //类方法的装饰器
        this.funDecorator();
        //类的装饰器
        this.classDecorator();
        // 重载构造函数
        this.overloadConstructor();

    }
    public funDecorator = () => {
        let temple;
        /**
         * target：如果修饰的是类的实例函数，那么target就是类的原型。如果修饰的是类的静态函数，那么target就是类本身。
           key： 该函数的函数名。
           descriptor：该函数的描述属性，比如 configurable、value、enumerable等。
         */
        function log(target: Object, key: String, descriptor: Object) {//
            console.log(`${key} was called!`);
            temple = target;
        }
        class P {
            @log
            foo() {
                console.log('Do something');
            }
        }

        console.log(P.prototype === temple);
    }
    /**
     * classDecorator
     */
    public classDecorator() {
        interface FooInterface {
            new(): P
        }
        interface PInterface {
            new(): Function
        }
        let temple
        //当装饰函数直接修饰类的时候，装饰函数接受唯一的参数，这个参数就是该被修饰类本身。上述的例子中，输出的target就是类P的本身。
        function foo(target: FooInterface) {
            return class extends target {
                name = 'Jony';
                sayHello() {
                    console.log("Hello " + this.name)
                }
            }
        }
        @foo
        class P {
            constructor() {

            }
        }

        const p = new P();
        console.log(p)
        console.log(new P())
        console.log(P.prototype)
        // console.log(temple === P) //true
    }

    /**
     * 重载构造函数
     */
    public overloadConstructor() {
        function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
            return class extends constructor {
                newProperty = "new property";
                hello = "override";
                public newPropertyFun=()=>{
                    console.log("this is new  " + this.newProperty)
                }
            }
        }

        @classDecorator
        class Greeter {
            property = "property";
            hello: string;
            constructor(m?: string) {
                this.hello = m || "";
            }
        }

        const greeter = new Greeter();
        console.log(greeter);
        console.log(Greeter.prototype);
        console.log(new Greeter("world"));
    }
    render() {
        return (<div>{this.state.name}</div>);
    }
}

export default TsDecorator;