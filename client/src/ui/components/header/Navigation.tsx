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
      <nav className="nav">
        <ul className="nav_ul">
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
              to="/social-media"
            >
              Social Media
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
              to="/about-us"
            >
              About-Us
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="nav_li">
            <NavLink
              onClick={toggleNavigationHandler}
              className="nav_link"
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
