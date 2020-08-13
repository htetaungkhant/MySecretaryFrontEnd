import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends React.Component {

    toggleMobileMenu = () => {
        let drm = document.getElementById("desktop-right-menu");
        let mmi = document.getElementById("mobile-menu-item");

        if (drm.className === "right-menu") {
            drm.className += " responsive";
            mmi.src = "https://img.icons8.com/ios/50/000000/close-window.png";
        }
        else {
            drm.className = "right-menu";
            mmi.src = "./img/mobile-menu.png";
        }
    }

    toggleFunSubMenu = () => {
        let SML = document.getElementById("sub-menu-list");
        let UDI = document.getElementsByClassName("fa");

        if (SML.className === "fun-sub-menu hide") {
            SML.className = "fun-sub-menu show";
            UDI[0].className = "fa fa-caret-up";
        }
        else {
            SML.className = "fun-sub-menu hide";
            UDI[0].className = "fa fa-caret-down";
        }
    }

    hideFunSubMenu = () => {
        let SML = document.getElementById("sub-menu-list");
        let UDI = document.getElementsByClassName("fa");

        SML.className = "fun-sub-menu hide";
        UDI[0].className = "fa fa-caret-down";
    }

    render() {
        return (
            <div className="header">
                <Link className="left-menu" to="/" onClick={() => { this.hideFunSubMenu() }}>
                    <img className="logo" src="/img/Logo.png" width="50px" height="50px" alt="Logo" />
                    <h2 className="title">My Secretary</h2>
                </Link>
                <div className="mobile-right-menu">
                    <img id="mobile-menu-item" src="./img/mobile-menu.png" alt="menu" onClick={this.toggleMobileMenu.bind(this)} />
                </div>
                <ul className="right-menu" id="desktop-right-menu">
                    <li className="menuItem"><Link to="/" onClick={() => { this.toggleMobileMenu(); this.hideFunSubMenu() }}><button>Home</button></Link></li>
                    <li className="menuItem">
                        <button onClick={this.toggleFunSubMenu.bind(this)}>Functions <i className="fa fa-caret-down"></i></button>
                        <ul className="fun-sub-menu hide" id="sub-menu-list">
                            <li><button>Add Person</button></li>
                            <li><button>Add Category</button></li>
                            <li><button>Transaction Activities</button></li>
                        </ul>
                    </li>
                    <li className="menuItem"><button>About</button></li>
                    <li className="menuItem"><button>Contact</button></li>
                    <Link to="/login" onClick={() => { this.toggleMobileMenu(); this.hideFunSubMenu() }} style={{ marginLeft: 10, marginRight: 10 }}><button className="btn-login-signup">Login</button></Link>
                    <Link to="/signup" onClick={() => { this.toggleMobileMenu(); this.hideFunSubMenu() }} style={{ marginLeft: 10, marginRight: 10 }}><button className="btn-login-signup">Signup</button></Link>
                </ul>
            </div>
        );
    }
}

export default Header;