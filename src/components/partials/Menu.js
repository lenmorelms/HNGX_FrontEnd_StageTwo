import React from "react";
import { menuIcon } from "../Imports/Imports";
import Image from "../Image";

const Menu = () => {
    return (
        <div className="header-menu flex-row">
            <span className="header-menu-text">Sign in</span>
            <span><Image className="header-menu-logo" src={menuIcon} alt="Menu Icon" /></span>
        </div>
    );
};

export default Menu;