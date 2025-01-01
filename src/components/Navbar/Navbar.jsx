import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <div className={styles.accentBar} />
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.leftSection}>
          <a className={styles.title} href="/">
            AN
          </a>
          <div className={styles.mainMenu}>
            <ul className={styles.menuItems}>
              <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
              <li><a href="#experience" onClick={handleNavLinkClick}>Experience</a></li>
              <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <button 
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
          </button>
          <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
            <ul className={styles.mobileMenuItems}>
              <li><a href="#about" onClick={(e) => { handleNavLinkClick(e); setMenuOpen(false); }}>About</a></li>
              <li><a href="#experience" onClick={(e) => { handleNavLinkClick(e); setMenuOpen(false); }}>Experience</a></li>
              <li><a href="#projects" onClick={(e) => { handleNavLinkClick(e); setMenuOpen(false); }}>Projects</a></li>
              <li><a href="#contact" onClick={(e) => { handleNavLinkClick(e); setMenuOpen(false); }}>Contact</a></li>
            </ul>
          </div>
          <a href="#contact" onClick={handleNavLinkClick} className={styles.contactButton}>Contact Me!</a>
        </div>
      </nav>
    </>
  );
};
