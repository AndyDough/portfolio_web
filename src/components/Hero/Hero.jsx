import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const greetings = [
    "Hello,", // English
    "Xin chào,", // Vietnamese
    "你好,", // Chinese
    "Hola,", // Spanish
    "Bonjour,", // French
    "こんにちは,", // Japanese
    "안녕하세요,", // Korean
  ];

  const skills = [
    { name: "React", src: "skills/react.png" },
    { name: "Python", src: "skills/python.png" },
    { name: "JavaScript", src: "skills/javascript.webp" },
    { name: "swift", src: "skills/swift.webp" },
    { name: "C++", src: "skills/cpp.png" },
    { name: "MongoDB", src: "skills/mongodb.png" },

  ];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const wordDelay = 2000;

    const animateText = () => {
      const currentWord = greetings[currentIndex];
      
      if (isTyping) {
        if (currentGreeting.length < currentWord.length) {
          setCurrentGreeting(currentWord.slice(0, currentGreeting.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => setIsDeleting(true), wordDelay);
        }
      } else if (isDeleting) {
        if (currentGreeting.length > 0) {
          setCurrentGreeting(currentGreeting.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    };

    const timer = setTimeout(
      animateText,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentGreeting, isTyping, isDeleting, currentIndex]);


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <div className={styles.greetingLine}>
            <span className={styles.greeting}>{currentGreeting}</span>
          </div>
          <p className={styles.description}>
            I'm <span className={styles.name}>Andy Nguyen</span>, a software developer working on mastering fullstack development. 
            Check out what I'm working on as I continue to learn!
          </p>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <img 
                  src={getImageUrl(skill.src)}
                  alt={skill.name}
                  className={styles.skillIcon}
                />
              </div>
            ))}
          </div>
        </div>
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
