import React from "react";
import Search from "./partials/Search";
import Menu from "./partials/Menu";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
const Header = () => {
    return (
        <div className="header">
            <div className="header-navigation">
                <div className="header-logo">
                    <h2>Movie<span>Box</span></h2>
                </div>
                <div className="header-search">
                    <Search />
                </div>
                <div className="header-menu">
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