import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MS in Computer Science</h3>
                            <span className="qualification__subtitle">Illinois Institute of Technology</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2023-2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">B.Tech in Computer Science</h3>
                            <span className="qualification__subtitle">KL University</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2018-2022
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">DataSciencce Intern</h3>
                            <span className="qualification__subtitle">The Spark Foundation</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                               Aug 2021 - Sep 2021
                            </div>
                            <p className="qualification__description">
                            Algorithm Utilization: Employed a variety of supervised and unsupervised learning algorithms... 
                            </p>
                            <p className="qualification__description-full">
                            Algorithm Utilization: Employed a variety of supervised and unsupervised learning algorithms to address complex tasks, enabling data-driven decision
                            making. Exploratory Data Analysis (EDA): Conducted comprehensive EDA to extract valuable insights from data, facilitating informed model selection. 
</p>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Technical Intern</h3>
                            <span className="qualification__subtitle">AT&T</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Jan 2022 - Jun 2022
                            </div>
                            <p className="qualification__description">
                            Developed a website that facilitated the seamless onboarding of new microservices...
                                </p>
                                <p className="qualification__description-full">
                                Developed a website that facilitated the seamless onboarding of new microservices, improving efficiency and reducing onboarding time by 30%. 
Designed and implemented robust APIs for data management, streamlining data access and enhancing the user experience. Contributed to SharePoint 
and PowerApps projects dedicated to aggregating and efficiently managing employee skills, ensuring that the skills database remained up-to-date, 
resulting in a 20% increase in data accuracy. Collaborated on SQL and Oracle Database projects to verify user details, ensuring data integrity and 
security while reducing verification time by 25%. Utilized MongoDB as the project database, ensuring efficient and scalable data storage and retrieval. 
                                </p>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior Associate Application Developer</h3>
                            <span className="qualification__subtitle">AT&T</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Jun 2022 - Jul 2023
                            </div>
                            <p className="qualification__description">
                            Developed Highly Scalable and Configurable Angular Web Applications and Implemented asynchronous programming....
                            </p>
                            <p className="qualification__description-full">
                            Developed Highly Scalable and Configurable Angular Web Applications and Implemented asynchronous programming to enhance data access and 
management, resulting in a 15% improvement in data retrieval speed. Utilized GraphQL for efficient querying. Utilized PowerBI to create interactive 
reports, Integrated PowerBI reports into Angular applications using REST APIs and OAuth2 authentication, enhancing data visualization and user 
experience. Employed Power Query for data transformation, reducing data preprocessing time by 15%. Developed Highly Scalable and Configurable 
Angular Web Applications, Configuration-Driven Development: Utilized configuration files for complete application configurability, reducing 
customization time.  Utilized Angular Dynamic Components to build adaptable interfaces, reducing development time by 20%. Implemented lazy 
loading and Ahead-of-Time (AOT) compilation for improved application performance. Designed and implemented APIs for database migration, 
facilitating the seamless transfer of data between different database types, resulting in a 15% reduction in data migration time and associated costs. </p>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;