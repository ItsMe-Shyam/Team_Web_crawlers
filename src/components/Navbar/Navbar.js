import React, {Fragment, useState, useEffect} from "react";
import "./Navbar.css";
import video from '../../video/forest-97998.mp4';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [link, setLink] = useState("about");
  const [navbar, setNavbar] = useState(false);

  return (
    <Fragment>

      <div className="bg-video">
          <video className="bg-video__content" muted loop autoPlay>
            <source src={video} type="video/mp4" />
            Your browser is not supported!
          </video>
      </div>
      <div className="navbar-container">
      <nav className="nav">
        <Link className={link === "about" ? "active" : ""} onClick={() => setLink("about")} to="/">Home</Link>
        <Link className={link === "mental" ? "active" : ""} onClick={() => setLink("mental")} to="/about">About</Link>
        <Link className={link === "skills" ? "active" : ""} onClick={() => setLink("skills")} to="/test">Test</Link>
        <Link className={link === "projects" ? "active" : ""} onClick={() => setLink("projects")} to="/music">Music</Link>
        <Link className={link === "purpose" ? "active" : ""} onClick={() => setLink("purpose")} to="/sessions">Spiritual Sessions</Link>
      </nav>
    </div>
    {
      navbar && (
        <div className="mobNavLinks">
          <nav className="nav">
                <Link className={link === "about" ? "active": ""} onClick={() => {setLink("about"); setNavbar(false)} } to="/">Home</Link>
                <Link className={link === "mental" ? "active": ""} onClick={() => {setLink("mental"); setNavbar(false)} } to="/about">About</Link>
                <Link className={link === "skills" ? "active": ""} onClick={() => {setLink("skills"); setNavbar(false)}} to="/test">Test</Link>
                <Link className={link === "projects" ? "active": ""} onClick={() => {setLink("projects"); setNavbar(false)}} to="/music">Music</Link>
                <Link className={link === "purpose" ? "active": ""} onClick={() => {setLink("purpose"); setNavbar(false)}} to="/sessions">Spiritual Sessions</Link>
            </nav> 
        </div>
      )
    }
    <div className="mobNavbarContainer">
            <div className={`mobNavbarBackground ${navbar ? "animateNavbarBg" : ""} `}/>
            <div onClick={() => setNavbar(prev => !prev)} className="burgerNavbar">
              <div className={navbar ? "line1" : ""}></div>
              <div className={navbar ? "line2" : ""}></div>
              <div className={navbar ? "line3" : ""}></div>
            </div>
    </div>
    </Fragment>
    
  );
};

export default Navbar;
