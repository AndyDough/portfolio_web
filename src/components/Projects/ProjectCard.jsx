import React, { useState, useRef, useEffect } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const descriptionRef = useRef(null);

  const checkOverflow = () => {
    if (descriptionRef.current) {
      const isOverflowing = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
      setNeedsExpansion(isOverflowing);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, [description]);

  return (
    <div className={styles.container}>
      <a 
        href={demo} 
        className={styles.imageLink}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </a>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div 
          ref={descriptionRef} 
          className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}
        >
          {description}
        </div>
        {needsExpansion && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className={styles.readMoreBtn}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
