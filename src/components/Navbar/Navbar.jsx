import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Andy Nguyen
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" onClick={handleNavLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleNavLinkClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
