import React, { Component } from "react";
import "../Login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    login () {
        console.log('a')
    }

    render() {
        return (
            <div>
                <form className="login-form" action="#" method="POST">
                    <div className="login-form__input-container">
                        <input className="login-form__input" type="text" id="login" placeholder="Enter login"/>
                    </div>
                    <div className="login-form__input-container">
                        <input className="login-form__input" type="text" id="password" placeholder="Enter password"/>
                    </div>
                    <button type="button" className="login-form__btn" onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
