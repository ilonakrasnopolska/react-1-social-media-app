import React from "react";
import socialLinks from "./SocialLinks";
import Classes from './Footer.module.css';

const Footer = () => {

  return (
    <footer className={Classes.footer}>
      <div className={Classes.wrapper}>
        <ul className={Classes.list}>
          {socialLinks.map(({href, icon}, index) => (
            <li key={index}>
              <a className={Classes.icon} href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <div className={Classes.copyright}>
          Copyright @ 2024 Chakra
        </div>
      </div>
    </footer>
  );
}

export default Footer;
