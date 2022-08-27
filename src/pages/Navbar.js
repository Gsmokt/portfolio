import React, { useEffect, useState } from "react";
import { Header, NavMenu, Hamburger, NavIcons } from "../styles/navbar";
import NavLinks from "../components/NavLinks";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { portfolioUrl } from "../utils/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
      setShowMenu(false);
    } else {
      setColor(false);
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <Header bgcolor={color}>
      <NavIcons>
        <Link to="home" smooth={true} duration={500}>
          <h1>Portfolio</h1>
        </Link>
        <a href={portfolioUrl} className="icon">
          <FaCode />
        </a>
      </NavIcons>
      <NavMenu show={!showMenu ? "active" : "inactive"}>
        <NavLinks showMenu={showMenu} setShowMenu={setShowMenu} />
      </NavMenu>
      <Hamburger onClick={() => setShowMenu(!showMenu)}>
        {!showMenu ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </Hamburger>
    </Header>
  );
};

export default Navbar;
