import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleContactClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById("contact");

    if (targetElement) {
      // Scroll the target element into view
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Aligns the target element to the center of the screen
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Andy</h1>
        <p className={styles.description}>
          I'm a Computer Science student studying at Cal State Fullerton.
        </p>
        <p className={styles.description}>
          Always learning and looking for new opportunities. Contact me to learn
          more!
        </p>
        <a
          href="#contact"
          className={styles.contactBtn}
          onClick={handleContactClick}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
