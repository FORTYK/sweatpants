import React, { Component } from "react";

import api from "./config/api.js";

import Feed from "./components/Feed";
import Editor from "./components/Editor";
import "./css/index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        api.get("/post").then((response) => {
            console.log("response :>> ", response);
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Posts</h1>
                <Feed></Feed>
                <Editor></Editor>
            </div>
        );
    }
}

export default App;
