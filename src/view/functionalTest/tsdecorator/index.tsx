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

        // 类的装饰器 重载构造函数
        this.overloadConstructor();
        //类方法的装饰器
        this.funDecorator();
        //访问器装饰器
        this.accessorDecorator();
        // 属性修饰器
        this.propertyDecorator();
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
     * 重载构造函数
     */
    public overloadConstructor() {
        // 类装饰器  重载构造函数
        function classDecorator<T extends { new(...args: any[]): object }>(constructor: T): T {
            return class extends constructor {
                newProperty = "new property";
                hello = "override";
                // this.newPropertyFun().bind(this);
                newPropertyFun = () => {//使用箭头函数自动绑定当前类this对象
                    console.log("this is new  " + this.newProperty)
                    // return "this is new  " + this.newProperty
                }
            }
        }

        // 采用工厂方式创建装饰器
        function testFactory(n: boolean) {
            return function (target: string, key: string, desc: PropertyDescriptor) {
                console.log("\n -->", target, "\nkey -->", key, "\ndesc -->", desc);
            }
        }
        function Path(path: string) {
            return function (target: Function) {
                !target.prototype.$Meta && (target.prototype.$Meta = {})
                target.prototype.$Meta.baseUrl = path;
            };
        }
        @classDecorator
        // @Path('/hello')
        class Greeter {
            property = "property";
            hello: string;
            constructor(m?: string) {
                this.hello = m || "";
            }
        }

        const greeter: any = new Greeter();
        // console.log(greeter);
        // greeter.newPropertyFun()
    }

    /**
     * 访问器修饰器
     */
    public accessorDecorator() {
        function configurable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.configurable = value;
                descriptor.enumerable = value;
            };
        }
        class Point {
            private _x: number;
            private _y: number;
            private _z: number;
            constructor(x: number, y: number,z: number) {
                this._x = x;
                this._y = y;
                this._z = z;
            }

            // @configurable(true)
            get a() { return this._z; }
            get z() { return this._z; }

            @configurable(true)
            get y() { return this._y; }

            /**
             * changey
             */
            public changey() {
                this._y=12;
                console.log(this.y);
                return this._y
            }
        }
        const point:any =new Point(1,2,3);
        console.log(point.y);
        console.log(point.changey());
    }

    /**
     * propertyDecorator
     */
    public propertyDecorator() {
        // class Greeter {
        //     @format("Hello, %s")
        //     greeting: string;
        
        //     constructor(message: string) {
        //         this.greeting = message;
        //     }
        //     greet() {
        //         let formatString = getFormat(this, "greeting");
        //         return formatString.replace("%s", this.greeting);
        //     }
        // }
    }
    render() {
        return (<div>{this.state.name}</div>);
    }
}

export default TsDecorator;