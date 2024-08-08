import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { FaGit, FaJava, FaNpm } from "react-icons/fa";
import { SiGraphql, SiMongodb, SiMysql, SiNodedotjs, SiOracle } from "react-icons/si";
const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <FaJava />
                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiMongodb />
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiMysql />
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiOracle />
                    <div>
                        <h3 className="skills__name">Oracle</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <FaNpm />
                    <div>
                        <h3 className="skills__name">npm</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiNodedotjs />
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaGit />
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiGraphql />
                    <div>
                        <h3 className="skills__name">graphQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;