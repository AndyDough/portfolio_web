import React, { useState, useEffect, useRef } from "react";

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
    { name: "JavaScript", src: "skills/javascript.webp" },
    { name: "HTML", src: "skills/html.png" },
    { name: "CSS", src: "skills/css.png" },
    { name: "Node", src: "skills/node.png" },
    { name: "Python", src: "skills/python.png" }
  ];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const wordDelay = 1000;

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

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
            <span className={styles.parenthesis}>(</span>
            <div className={styles.skillsCarousel}
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className={styles.carouselTrack}>
                {[...skills, ...skills].map((skill, index) => (
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
            <span className={styles.parenthesis}>)</span>
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
