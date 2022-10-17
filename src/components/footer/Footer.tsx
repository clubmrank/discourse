import React from "react";
import Logo from "../Logo/Logo";
import styles from "./footer.module.scss";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerTop}>
        <Logo />
        <div className={styles.socials}>
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillLinkedin />
        </div>
      </div>

      <ul>
        <li>2022, All right reserved</li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of service</a>
        </li>
        <li>
          <a href="#">Cookies settings</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
