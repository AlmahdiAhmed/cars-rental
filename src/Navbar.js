import { useState } from "react";
import icon from "./images/car-svgrepo-com.svg";
import { FaBars } from "react-icons/fa";
import { PiCarSimpleLight } from "react-icons/pi";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navShow = () => {
    setShowNav(!showNav);
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">
            <PiCarSimpleLight />
          </a>
        </div>
        <div className={`links ${showNav && "nav-show"}`}>
          <div className="link">
            <Link to="home">home</Link>
          </div>
          <div className="link">
            <Link offset={-30} to="about">
              about
            </Link>
          </div>
          <div className="link">
            <Link offset={-20} to="cars">
              cars
            </Link>
          </div>
          <div className="link">
            <Link to="contact">contact</Link>
          </div>
        </div>
        <div className="nav-icon" onClick={navShow}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
