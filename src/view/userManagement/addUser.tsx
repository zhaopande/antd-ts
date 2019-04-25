import * as React from 'react'
import {Button} from "antd"
import { Link } from 'react-router-dom';

export interface UserListProps {
    tilte: string
}

export interface UserListState {
    tableData: number[]
}

class UserList extends React.Component<UserListProps, UserListState> {
    constructor(props: UserListProps) {
        super(props);
        this.state = { tableData: [7,8,9,4,5,6,1] };
    }
    render() {
        return (<div>
            {this.state.tableData}
            <Link to="/main/userList"><Button>userList</Button></Link>
        </div>);
    }
}

export default UserList;