import React from "react";
import {Instagram, Facebook, Telegram} from "../../helpers/SVG-icons";
import Classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={Classes.footer}>
      <div className={Classes.wrapper}>
        <ul className={Classes.list}>
          <li>
            <a className={Classes.icon} href="#">
              <Instagram />
            </a>
          </li>
          <li>
            <a className={Classes.icon} href="#">
              <Facebook/>
            </a>
          </li>
          <li>
            <a className={Classes.icon} href="#">
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
