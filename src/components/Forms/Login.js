import React, { Component } from "react";
import api from "./../../config/api.js";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                login: "",
                password: "",
            },

            error: null,
            message: null,
        };

        this.fieldEventValue = this.fieldEventValue.bind(this);
        this.attemptLogin = this.attemptLogin.bind(this);
    }
    componentDidUpdate() {
        console.log("this.state :>> ", this.state);
    }
    fieldEventValue(e) {
        e.preventDefault();
        let state = { ...this.state };
        let { name, value } = e.currentTarget;

        state.form[name] = value;

        this.setState(state);
    }

    attemptLogin(e) {
        e.preventDefault();
        const { form } = this.state;
        let self = this;

        console.log("this.props :>> ", this.props);
        api.post("/session/login", { ...form }).then((response) => {
            const { data } = response;
            if (data.success) {
                this.setState({
                    ...data,
                    error: null,
                    message: null,
                });

                this.props.callback();
            } else {
                this.setState({
                    ...data,
                });
            }
        });
    }

    render() {
        const { error, message } = this.state;

        return (
            <div>
                <form onSubmit={this.attemptLogin}>
                    <label htmlFor="login">Användarnamn: </label>
                    <input onChange={this.fieldEventValue} type="text" name="login" />
                    <br />
                    <label htmlFor="password">Lösenord: </label>
                    <input onChange={this.fieldEventValue} type="password" name="password" />
                    <br />
                    <button type="submit">submit</button>
                    {error && <span>{error + ": " + message}</span>}
                </form>
                <div></div>
            </div>
        );
    }
}

export default Login;
