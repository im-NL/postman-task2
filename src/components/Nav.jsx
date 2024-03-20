import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div className="navbar stack">
            <div className="nav__item_container">
                <div className="navbar__logo">
                    <p className="navbar__title">BLACKED</p>
                </div>
                <div id="hamburger">
                <img src="src/assets/burger.svg" className="icon navbar__ham"/>
                </div>
            </div>
        </div>
    );
}

export default Nav;