import React from "react";
import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="stuff" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by
        <a href="https://github.com/igogoblin" target="_blank" rel="noreferrer">
          Ihar Skavysh
        </a>
      </div>
      <div className={styles.socials}></div>
    </section>
  );
};

export default Footer;
