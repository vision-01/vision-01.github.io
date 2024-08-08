import React from "react";
import { FiInstagram,FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/vision-01" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/vision-kumar-reddy-ellendula" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>
                <a href="https://www.instagram.com/_visionreddy_/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiInstagram />
                </a>
        </div> 
    ); 
}

export default Social;