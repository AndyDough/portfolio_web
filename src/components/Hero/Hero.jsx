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
          Hello, I'm Andy Nguyen, a software developer working on mastering fullstack development. Check out what I'm working on as I continue to learn.
        </p>
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
