import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div className="navbar stack">
            <div className="nav__item_container">
                <div className="navbar__logo">
                    <p className="navbar__title">WatchMovies</p>
                </div>
                <div id="hamburger" className="target" data-cursor="check">
                <img src="assets/burger.svg" className="icon targetChild navbar__ham"/>
                </div>
            </div>
        </div>
    );
}

export default Nav;