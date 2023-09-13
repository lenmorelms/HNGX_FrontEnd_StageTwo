import React from "react";
import Image from "./Image";
import { facebook, instagram, twitter, youtube } from "./Imports/Imports";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-socials">
                <Image
                  className="image-socials" 
                  src={facebook}
                  alt="facebook"
                />
                <Image
                  className="image-socials" 
                  src={instagram}
                  alt="instagram"
                />
                <Image
                  className="image-socials"
                  src={twitter}
                  alt="twitter"
                />
                <Image
                  className="image-socials"
                  src={youtube}
                  alt="facebook"
                />
            </div>
            <div className="footer-policies">
                <span>Conditions of Use</span>
                <span>Privacy & Policy</span>
                <span>Press Room</span>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} MovieBox by lenmorelms</p>
            </div>
        </div>
    );
}

export default Footer;