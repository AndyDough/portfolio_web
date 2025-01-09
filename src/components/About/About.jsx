import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.bio}>
            I'm a Computer Science student at California State University, Fullerton, passionate about
            creating innovative solutions through code. With a strong foundation in both
            frontend and backend development, I enjoy building full-stack applications
            that solve real-world problems.
          </p>
          <div className={styles.details}>
            <div className={styles.education}>
              <h3>Education</h3>
              <p>B.S. Computer Science</p>
              <p>California State University, Fullerton</p>
              <p>Expected Graduation: 2026</p>
            </div>
            <div className={styles.interests}>
              <h3>Hobbies</h3>
              <ul className={styles.techList}>
                <li>Keyboard modding ⌨️</li>
                <li>Badminton 🏸</li>
                <li>Inline Skating 🛼</li>
                <li>Team Fight Tactics 🕹️</li>
                <li>Air Fryers 😊</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img
            src={getImageUrl("about/aboutImage.jpg")}
            alt="Professional headshot"
            className={styles.aboutImage}
          />
          {/* <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>15+</h3>
              <p>Projects<br />Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>3+</h3>
              <p>Years of<br />Experience</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
