import React from "react";
import styles from "./header.module.scss";
import Logo from "../Logo/Logo";

import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { MdOutlineLiveHelp } from "react-icons/md";
const Header = () => {
  const pages = ["Home", "Universities", "Account", "About Us", "Get Inspired"];
  return (
    <header className={styles.headerMain}>
      <nav className={styles.headerCont}>
        <Logo />
        <ul className={styles.navLinks}>
          {pages.map((pg) => (
            <li className={styles.navLink}>
              <Link to={`/${pg}`}>{pg}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSearch}>
          <SearchBar />
          <span>
            <MdOutlineLiveHelp />
            <b>
              24/7 support <br /> Contact Us
            </b>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
