import React from "react";
import Logo from "./partials/Logo";
import Search from "./partials/Search";
import Menu from "./partials/Menu";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
const Header = () => {
    return (
        <div className="header">
            <div className="header-navigation">
                <div className="header-logo">
                    <Logo />
                </div>
                <div className="header-menu">
                    <Search />
                </div>
                <div className="header-search">
                    <Menu />
                </div>
            </div>  
            <div className="header-description">
                <h1>John Wick 3 : <br /> Parabellum</h1>
                <p>John Wick is on the run after killing a member of the international
                    assasin's guild,and with $14 million price tag on his head, he is the target of
                    hit men and women everywhere.
                </p>
                <button className="header-description-btn">Watch Trailer</button>
            </div>          
        </div>
    );
}

export default Header;