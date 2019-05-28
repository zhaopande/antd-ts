import React, { useState, useEffect } from 'react';
import { Button } from "antd"
import { Link } from 'react-router-dom';

export interface FunctionalTestProps {
    name: String
}

export interface FunctionalTestState {
    state1: String
}

class FunctionalTest extends React.Component<FunctionalTestProps, FunctionalTestState> {
    constructor(props: FunctionalTestProps) {
        super(props);
        this.state = { state1: "1" };
    }
    render() {
        return (<div>{this.state.state1}</div>);
    }
}

export default FunctionalTest;