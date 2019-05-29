import React from 'react'
import { Button } from "antd"
import { Link } from 'react-router-dom';
import "./user.less";
// import { rejects } from 'assert';
interface UserListProps {
    tilte: string
}

interface UserListState {
    tableData: number[],
    clickItemText?: string,
    lastItemPosition: number
}

class UserList extends React.Component<UserListProps, UserListState> {
    constructor(props: UserListProps) {
        super(props);
        this.state = { tableData: [1, 2, 3, 4], clickItemText: "", lastItemPosition: 0 };
    }
    public componentDidMount() {

        console.log("1");
        this.timing();
    }
    private timing = async () => {
        await new Promise((resolve, rejects) => {
            setTimeout(() => {
                resolve();
                console.log(2);
            }, 1000);
            console.log("3");
        });
        console.log("4");

    }
    private mouseOverItem = (e: any) => {
        // console.log(e);
        // console.log(e.currentTarget);
        // console.log(e.target.offsetLeft);
        const leftDistance = e.target.offsetLeft;
        let underLine: any = document.querySelectorAll(".under-line");
        console.log(underLine);
        console.log(underLine[0].style.left);
        underLine[0].style.left = leftDistance + "px";
    }
    private mouseOutItem = (e: any) => {
        const { clickItemText, lastItemPosition } = this.state;
        let currentTargetText = e.currentTarget.innerTextt;
        let underLine: any = document.querySelectorAll(".under-line");
        if (clickItemText !== currentTargetText) {
            underLine[0].style.left = lastItemPosition + "px";
        }
    }
    private clickItem = (e: any) => {
        this.setState({
            clickItemText: e.currentTarget.innerText,
            lastItemPosition: e.currentTarget.offsetLeft
        })
    }
    render() {
        return (<div className="userList">
            <Link to="/main/addUser"><Button>add</Button></Link>
            <div className="container">
                <div className="item" onMouseOver={this.mouseOverItem} onMouseOut={this.mouseOutItem} onClick={this.clickItem}>1</div>
                <div className="item" onMouseOver={this.mouseOverItem} onMouseOut={this.mouseOutItem} onClick={this.clickItem}>2</div>
                <div className="item" onMouseOver={this.mouseOverItem} onMouseOut={this.mouseOutItem} onClick={this.clickItem}>3</div>
                <div className="item" onMouseOver={this.mouseOverItem} onMouseOut={this.mouseOutItem} onClick={this.clickItem}>4</div>
                <div className="under-line"></div>
            </div>
        </div>);
    }
}

export default UserList;