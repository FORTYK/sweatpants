import React, { Component } from "react";
import api from "./config/api.js";

import Login from "./components/Forms/Login";

import Feed from "./components/Feed";
import Editor from "./components/Editor";
import "./css/index.css";
import { cookie } from "express-validator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };

        this.setLogin = this.setLogin.bind(this);
        this.getSession = this.getSession.bind(this);
    }

    componentDidMount() {
        this.getSession();
    }

    setLogin() {
        this.getSession();
    }

    getSession() {
        api.get("/session").then((response) => {
            const { data } = response;
            console.log("data :>> ", data);
            if (data.success) {
                this.setState({ user: data.user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        const { user } = this.state;
        console.log("user :>> ", user);
        return (
            <div className="App">
                <div>
                    <Login callback={this.setLogin}></Login>
                </div>
                {user && (
                    <div>
                        <div>{user.login}</div>
                        <div>{user.email}</div>
                        <div>{user.display}</div>
                    </div>
                )}
                <div>
                    <h1>Posts</h1>
                    <Feed></Feed>
                    <Editor></Editor>
                </div>
            </div>
        );
    }
}

export default App;
