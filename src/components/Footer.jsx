import { useState } from "react";
import Clock from "./Clock";
import "./Footer.css";
import { Button, ThemeProvider } from "@react95/core";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="footer" style={{ zIndex: 10 }}>
      <ThemeProvider>
        <div className="menu-button" onClick={toggleMenu}>
          <img
            className="windowsLogo"
            src="src\assets\win-logo.jpg"
            alt="icon"
          />
          Start
        </div>
        {menuOpen && (
          <div className="dropup-container">
            <div className="dropup-content">
              <div className="sidebar"></div>
              <a className="menu-links" href="#">
                <span className="menu-icon">
                  {" "}
                  <img
                    className="ring"
                    src="src\assets\All\PHONE.ico"
                    alt="icon"
                  />
                </span>
                <u>A</u>bout me
              </a>
              <a className="menu-links" href="#">
                <span className="menu-icon">
                  <img
                    className="ring"
                    src="src\assets\All\PHONE.ico"
                    alt="icon"
                  />
                </span>
                <u>G</u>et in touch
              </a>
              <a className="menu-links" href="#">
                <span className="menu-icon">
                  {" "}
                  <img
                    className="ring"
                    src="src\assets\All\PHONE.ico"
                    alt="icon"
                  />
                </span>
                <u>S</u>hut down
              </a>
            </div>
          </div>
        )}

        <div className="clockButton">
          <Clock />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
