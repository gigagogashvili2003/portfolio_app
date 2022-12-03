import React from "react";
import Block from "ui/library/footer-block/Block";
import BlockList from "ui/library/footer-block/BlockList";
import LogoGroup from "../header/LogoGroup";
import {
  FooterBottomBlockWrapper,
  FooterTopBlockWrapper,
  FooterWrapper,
} from "./Footer.styles";

const Footer = () => {
  const ContactBlockData = [
    {
      additionalTitle: "Phone:",
      value: "+995 551 907 657",
      linkPath: "tel:+995 551 907 657",
      needHref: true,
    },
    {
      additionalTitle: "Email:",
      value: "thegogashvili@gmail.com",
      linkPath: "mailto:thegogashvili@gmail.com",
      needHref: true,
    },
  ];
  const LatestProjectsBlockData = [
    {
      value: "Weather App",
      linkPath: "/weather-app",
    },
    {
      value: "Recipe App",
      linkPath: "/recipe-app",
    },
    {
      value: "Map Project",
      linkPath: "/map-project",
    },
    {
      value: "Modern Website",
      linkPath: "/modern-website",
    },
    {
      value: "Authentication App",
      linkPath: "/authentication-app",
    },
  ];
  const SocialMediaBlocksData = [
    {
      value: "Github",
      linkPath: "https://github.com/gigagogashvili2003",
      needHref: true,
      targetBlank: true,
    },
    {
      value: "Linkedin",
      linkPath: "https://www.linkedin.com/in/giga-gogashvili-76553322a/",
      needHref: true,
      targetBlank: true,
    },
    {
      value: "Facebook",
      linkPath: "https://www.facebook.com/giga.gogashvili.33",
      needHref: true,
      targetBlank: true,
    },
    {
      value: "Twitter",
      linkPath: "https://twitter.com/TheGogashvili1",
      needHref: true,
      targetBlank: true,
    },
    {
      value: "Instagram",
      linkPath: "https://www.instagram.com/thegogashvili/",
      needHref: true,
      targetBlank: true,
    },
  ];

  const SkillsBlockData = [
    {
      value: "HTML5",
    },
    {
      value: "CSS3",
    },
    {
      value: "Javascript ES6+",
    },
    {
      value: "Typescript",
    },
    {
      value: "React.Js",
    },
    {
      value: "See All Skills",
      linkPath: "/skills",
    },
  ];

  return (
    <FooterWrapper>
      <FooterTopBlockWrapper>
        <Block
          title="Contact Information"
          additionalText="Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away."
          blockData={ContactBlockData}
        />
        <Block title="Latest Projects" blockData={LatestProjectsBlockData} />
        <Block title="Skills" blockData={SkillsBlockData} />
        <Block title="Social Media" blockData={SocialMediaBlocksData} />
      </FooterTopBlockWrapper>
      <FooterBottomBlockWrapper>
        <LogoGroup className="custom_logo_group" />
      </FooterBottomBlockWrapper>
    </FooterWrapper>
  );
};

export default Footer;
