import React from "react";
import {Instagram, Facebook, Telegram} from "../../helpers/SVG-icons";
import Classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.wrapper}>
        <ul className={Classes.list}>
          <li>
            <a className={Classes.icon} href="https://www.instagram.com/" target="_blank"
               rel="noopener noreferrer">
              <Instagram />
            </a>
          </li>
          <li>
            <a className={Classes.icon} href="https://www.facebook.com/" target="_blank"
               rel="noopener noreferrer">
              <Facebook/>
            </a>
          </li>
          <li>
            <a className={Classes.icon} href="https://web.telegram.org/a/" target="_blank"
               rel="noopener noreferrer">
              <Telegram/>
            </a>
          </li>
        </ul>
        <div className={Classes.copyright}>
          Copyright @ 2024 Chakra
        </div>
      </div>
    </footer>
  );
}

export default Footer;
