import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { SiDjango, SiJavascript, SiTypescript } from "react-icons/si";
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <FaHtml5 />
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaCss3 />
                        <div>
                            <h3 className="skills__name">CSS/SASS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaBootstrap />
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiDjango />
                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <SiJavascript />
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiTypescript />
                        <div>
                            <h3 className="skills__name">Typescript</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaReact />
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaAngular />
                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;