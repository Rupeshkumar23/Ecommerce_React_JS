import React, { useEffect, useState } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big1.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>TRENDY</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icons_container">
          <img src={instagram_icon} alt="Instagram_icon" />
        </div>
        <div className="footer_icons_container">
          <img src={pinterest_icon} alt="pinterest_icon" />{" "}
        </div>
        <div className="footer_icons_container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr/>
        <p>Copyright @ {year} - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
