import React, { Component } from "react";
import api from "./config/api.js";

import Login from "./components/Forms/Login";

import Feed from "./components/Feed";
import Editor from "./components/Editor";
import "./css/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };


    this.onLogout = this.onLogout.bind(this)
    this.onLogin = this.onLogin.bind(this);
    this.getSession = this.getSession.bind(this);
  }

  componentDidMount() {
    this.getSession();
  }

  onLogin() {
    this.getSession();
  }

  onLogout(e) {
    e.preventDefault();
    let self = this;
    api.post("/session/logout").then((response) => {
      self.getSession();
    });
  }

  getSession() {
    api.get("/handshake").then((response) => {
      const { data } = response;
      // extract and set CSRF

      console.log('data :>> ', data);
      if (data.user) {
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
          <Login callback={this.onLogin}></Login>
        </div>
        {user && (
          <div>
            <div>{user.login}</div>
            <div>{user.email}</div>
            <div>{user.display}</div>
            <form onSubmit={this.onLogout}>
              <button type="submit" value="">Logout</button>
            </form>
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
