import * as React from 'react'
// import {Table} from "antd"
export interface UserListProps {
    tilte: string
}

export interface UserListState {
    tableData: number[]
}

class UserList extends React.Component<UserListProps, UserListState> {
    constructor(props: UserListProps) {
        super(props);
        this.state = { tableData: [1, 2, 3, 4] };
    }
    render() {
        return (<div>
            {this.state.tableData}
        </div>);
    }
}

export default UserList;