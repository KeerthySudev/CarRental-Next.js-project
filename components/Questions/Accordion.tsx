"use client";

import React, { useState } from 'react';
import styles from './Accordion.module.css';


interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    console.log("Accordion state:", isOpen);
  };

  return (
    <div className={styles.question}>
      <button className={`${styles.accordion} ${isOpen ? styles.active : ''}`} onClick={toggleAccordion}>
        <p>{title}</p>
        <div className={styles.more}>
          <img src={isOpen ? 'images/xmark.svg' : 'images/plus.svg'} alt="toggle icon" />
        </div>
      </button>
      {isOpen && (
        <div className={styles.panel}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
