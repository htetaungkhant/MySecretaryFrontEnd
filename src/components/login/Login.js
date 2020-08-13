import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div className="form">
                    <input className="input-box" type="email" placeholder="Email" />
                    <input className="input-box" type="password" placeholder="Password" />
                    <button id="btn-signup">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;