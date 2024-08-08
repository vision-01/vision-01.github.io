import React from "react";
import { FaAws } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { SiDocker, SiJenkins, SiLinux, SiMicrosoftazure, SiMicrosoftsharepoint, SiPowerbi, SiTableau } from "react-icons/si";

const Tools = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Tools & Cloud</h3>
        <div className="skills__box">
            <div className="skills__group">
            <div className="skills__data">
                    <SiPowerbi />
                    <div>
                        <h3 className="skills__name">PowerBI</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiTableau />
                    <div>
                        <h3 className="skills__name">Tablu</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiJenkins />
                    <div>
                        <h3 className="skills__name">Jenkins</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiLinux />
                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <SiDocker />
                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiMicrosoftsharepoint />
                    <div>
                        <h3 className="skills__name">SharePoint</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <SiMicrosoftazure />
                    <div>
                        <h3 className="skills__name">Azure</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <FaAws />
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Tools;