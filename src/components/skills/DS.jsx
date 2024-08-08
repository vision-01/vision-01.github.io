import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { SiApachekafka, SiKeras, SiPandas, SiPowerbi, SiScala, SiSnowflake } from "react-icons/si";
import { GrHadoop } from "react-icons/gr";

const DS = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">DS & AI</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <SiScala />
                    <div>
                        <h3 className="skills__name">Scala</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Pyspark</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiSnowflake />
                    <div>
                        <h3 className="skills__name">Snowflake</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Project Management</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <GrHadoop />
                    <div>
                        <h3 className="skills__name">Hadoop</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiKeras />
                    <div>
                        <h3 className="skills__name">Keras</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiPandas />
                    <div>
                        <h3 className="skills__name">pandas</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <SiApachekafka />
                    <div>
                        <h3 className="skills__name">kafka</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default DS;