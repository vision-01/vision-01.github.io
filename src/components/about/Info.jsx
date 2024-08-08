import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiDocumentSearch } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1+ Years</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5+ Projects</span>
        </div>
        <div className="about__box">
            <HiDocumentSearch className="about__icon" />
            <h3 className="about__title">Research Published</h3>
            <span className="about__subtitle">2 papers</span>
        </div>
    </div>
  );
}

export default Info;