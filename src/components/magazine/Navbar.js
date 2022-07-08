import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  let history = useHistory();
  const project1 = () => {
    history.push("/project");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src="./devlogo.png" alt="bug" height={30} />
              FreeMag
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about1"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  About us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services1"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Our Job
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  onClick={project1}
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Store
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="signinfo"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="main"
                  smooth="true"
                  duration={500}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signup"
                smooth="true"
                duration={500}
                exact="true"
                offset={-80}
              >
                Sign in
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
