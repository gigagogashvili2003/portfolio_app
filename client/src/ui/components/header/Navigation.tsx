import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./Header.styles";

interface IProps {
  nodeRef?: React.RefObject<HTMLDivElement>;
  toggleNavigationHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

const Navigation: React.FC<IProps> = (props) => {
  const { nodeRef, toggleNavigationHandler } = props;

  return (
    <NavigationContainer ref={nodeRef}>
      <div className="menu_title">MENU</div>
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              onClick={toggleNavigationHandler}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              onClick={toggleNavigationHandler}
              to="/social-media"
            >
              Social Media
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              onClick={toggleNavigationHandler}
              to="/about-us"
            >
              About-Us
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              onClick={toggleNavigationHandler}
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              className={(state) =>
                state.isActive ? "nav_link nav_link_active" : "nav_link"
              }
              onClick={toggleNavigationHandler}
              to="/about-us"
            >
              About-Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </NavigationContainer>
  );
};

export default Navigation;
