import React from "react";
import { Link } from "react-scroll";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import ContactUs from "../pages/contact/index";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";

const AppRoutes = () => {
  return (
    <div>
     
      <nav className="sidebar">
        <ul>
          <li><Link to="home" smooth={true} duration={500}></Link></li>
          <li><Link to="about" smooth={true} duration={500}></Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}></Link></li>
          <li><Link to="contact" smooth={true} duration={500}></Link></li>
        </ul>
      </nav>

      
      <div className="sections">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><ContactUs /></section>
      </div>

      <Socialicons />
    </div>
  );
};

export default AppRoutes;
