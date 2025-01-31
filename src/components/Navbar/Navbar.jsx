import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import drop from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logOut } from "../../firebase";
const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search} alt="" className="icons" />
        <p>Children</p>
        <img src={bell} alt="" className="icons" />
        <div className="nav-profile">
          <img src={profile} alt="" className="profile" />
          <img src={drop} alt="" className="drop" />
          <div className="dropdown">
            <p
              onClick={() => {
                logOut();
              }}
            >
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
