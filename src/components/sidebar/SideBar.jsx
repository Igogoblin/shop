import React from "react";
import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to={"/categories"}>Link</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.footer}>
          <a
            href={"/help"}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Help
          </a>
          <a
            href={"/terms"}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            style={{ textDecoration: "underline" }}
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
