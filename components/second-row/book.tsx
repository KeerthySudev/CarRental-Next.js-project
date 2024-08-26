'use client';
import styles from './Search.module.css';
import DateTimeInput from './DATE';

import { useState } from 'react';

const BookButton = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDifferentDropOff, setIsDifferentDropOff] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const menuStyles = {
    display: isMenuVisible ? 'flex' : 'none',}

  return (
    <div>
      
      <button onClick={toggleMenu}>Book a Car</button>
      

      {/* Hidden Content */}
      <div className={styles.form} style={menuStyles}>
          <div className={styles.categories}>
            <div className={styles.titles}>
            <p className={isDifferentDropOff ? styles.title : styles.titleActive}
            onClick={() => setIsDifferentDropOff(false)}>
              Same as Pick-Up
              <hr />
            </p>
            <p className={isDifferentDropOff ? styles.titleActive : styles.title}
            onClick={() => setIsDifferentDropOff(true)}>
              Different Drop-Off
              <hr />
            </p>
          </div>
            <select className={styles.vehicle}>
              <option value="" >Vehicle type</option>
            </select>
          </div>
          <form action="">
            <div className={styles.placeWrap}>
              <select className={styles.place}>
              <option value="" >Pickup Location</option>
                                <option value="" >Al Quoz</option>
              </select>
            </div>
             {isDifferentDropOff && (
          <div className={styles.placeWrap}>
            <select className={styles.place}>
              <option value="">Drop-Off Location</option>
              <option value="Al Quoz">Al Quoz</option>
            </select>
          </div>
        )}

            <div className={styles.date}>
                            <DateTimeInput placeholder='Pick-Up Date & Time'/>
                        </div>
                        
                        <div className={styles.date}>
                        <DateTimeInput placeholder='Drop-Off Date & Time'/>
                        </div>
            <div className={styles.btnSearch}>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default BookButton;

