import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { Link } from 'react-router-dom';

export interface UserListProps {
    tilte?: string
}

export interface UserListState {
    tableData?: number[]
}

class UserList extends React.Component<UserListProps, UserListState> {
    name: String;
    constructor(props: UserListProps) {
        super(props);
        this.state = { tableData: [7, 8, 9, 4, 5, 6, 1] };
        this.name = "zpzpzpzp";
    }
    componentDidMount() {
        // const user = new User({name:"zpzpzpz"});
        // console.log(user.print());
    }
    render() {
        return (<div>
            {this.state.tableData}
            <span>adduser</span>
            <Link to="/main/userList"><Button>userList</Button></Link>
            <Example />
            {/* <User name={this.name} age={12} sex={true} /> */}
        </div>);
    }
}

interface UserProps {
    name: String,
    age: Number,
    sex: Boolean
}
class User extends React.Component<UserProps> {
    fullName: String;
    count: any;
    setCount: any;
    constructor(props: UserProps) {
        super(props);
        console.log(this.props);
        const { name, age, sex } = this.props;
        this.fullName = `我叫${name},今年${age}岁了,(${sex ? "男" : "女"}性)`;
    }
    public print(): String {
        return this.fullName;
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { fullName } = this;
        console.log(this);
        return (
            <div>
                {fullName}
            </div>
        );
    }
}
/**
 * useState和useEffect 同时使用
 * useEffect类似于vue中的watch监听数据,数据改变才会触发函数
 */
function Example() {
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        // document.title = ` ${count} times`;
        // console.log(count);

    });

    const [count2, setCount2] = useState(false);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        console.log(count, count2);
        handleStatusChange(!count2);
        // console.log(count2);
        // 使用浏览器的 API 更新页面标题
        // document.title = ` ${count2} times`;
        return () => handleStatusChange(count2);//这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
    });
    function handleStatusChange(status: boolean) {
        setCount2(status);
    }
    return (
        <div>
            <div>count1</div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click count
        </button>
            <div>count2</div>
            <p>You clicked {count2} times</p>
            <button onClick={() => handleStatusChange(false)}>
                Click count2 false
        </button>
            <button onClick={() => handleStatusChange(true)}>
                Click count2 true
        </button>
        </div>
    );
}

// function FriendStatus(props) {
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status) {
//         setIsOnline(status.isOnline);
//     }
//     function subscribeToFriendStatus(id, fun) {
//         console.log(id);
//         console.log(fun);
//     }
//     function unsubscribeFromFriendStatus(id, fun) {
//         console.log(id);
//         console.log(fun);
//     }
//     useEffect(() => {
//         subscribeToFriendStatus(props.friend.id, handleStatusChange);

//         return () => {
//             unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//         };
//     });

//     if (isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }
export default UserList;