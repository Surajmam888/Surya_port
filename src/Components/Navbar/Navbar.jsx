// Navbar.jsx
import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./Navbar.css";
import Logo from "../images/RajatLog.png";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link
        to="intro"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        {/* <img src={Logo} alt="" width="" className="logo" /> */}
        <h1>Logo</h1>
      </Link>

      {/* Desktop Menu */}
      <div className={`desktopMenu ${isOpen ? "open" : ""}`}>
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}>
          About
        </Link>
        <Link
          to="Resume"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}>
          Resume
        </Link>
        <Link
          to="Projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}>
          Projects
        </Link>

        <Link
          to="Contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => setOpen(false)}>
          Contact Me
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
