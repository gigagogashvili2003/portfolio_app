import AboutUsPage from "pages/about-us-page/AboutUsPage";
import ContactUsPage from "pages/contact-us-page/ContactUsPage";
import MainPage from "pages/main-page/MainPage";
import ProjectsPage from "pages/projects-page/ProjectsPage";
import SkillsPage from "pages/skills-page/SkillsPage";
import SocialMediaPage from "pages/social-media-page/SocialMediaPage";

interface Route {
  title: string;
  path: string;
  component: JSX.Element;
}

const routes: Route[] = [
  {
    title: "Main",
    path: "/",
    component: <MainPage />,
  },
  {
    title: "About Us",
    path: "/about-us",
    component: <AboutUsPage />,
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    component: <ContactUsPage />,
  },
  {
    title: "Projects",
    path: "/projects",
    component: <ProjectsPage />,
  },
  {
    title: "Skills",
    path: "/skills",
    component: <SkillsPage />,
  },
  {
    title: "Social Media Links",
    path: "/social-media",
    component: <SocialMediaPage />,
  },
];

export default routes;
