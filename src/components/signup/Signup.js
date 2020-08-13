import React from 'react';
import './Signup.css';

class Signup extends React.Component {
    render() {
        return (
            <div className="signup">
                <div className="form">
                    <input className="input-box" type="text" placeholder="Username" />
                    <input className="input-box" type="email" placeholder="Email" />
                    <input className="input-box" type="password" placeholder="Password" />
                    <input className="input-box" type="password" placeholder="Confirm Password" />
                    <button id="btn-signup">Signup</button>
                </div>
            </div>
        );
    };
}

export default Signup;