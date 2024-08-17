import React from "react";
import {Instagram, Facebook, Telegram} from "../helpers/SVG-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__icons">
          <li className="footer__icon">
            <a className="footer__link" href="#">
              <Instagram />
            </a>
          </li>
          <li className="footer__icon">
            <a className="footer__link" href="#">
              <Facebook/>
            </a>
          </li>
          <li className="footer__icon">
            <a className="footer__link" href="#">
              <Telegram/>
            </a>
          </li>
        </ul>
        <div className="footer__text">
          Copyright @ 2024 Chakra
        </div>
      </div>
    </footer>
  );
}

export default Footer;
