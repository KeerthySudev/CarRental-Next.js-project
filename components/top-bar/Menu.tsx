'use client';
import styles from './Logo.module.css';

import { useState } from 'react';

const MenuToggle = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const menuStyles = {
    display: isMenuVisible ? 'flex' : 'none',}

  return (
    <div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
       &#9776;
      </div>

      {/* Hidden Content */}
      <div className={styles.linksMob} style={menuStyles}>
      <div className={styles.imgCross} onClick={toggleMenu}>
        <img src="images/cross.svg" alt="" />
      </div>
      <a href="" className={styles.link}>About</a>
      <div className={styles.middle}></div>
      <a href="" className={styles.link}>Offers</a>
      <div className={styles.middle}></div>
      <a href="" className={styles.link}>Corporate</a>
      <div className={styles.middle}></div>
      <a href="" className={styles.link}>Personal</a>
      <div className={styles.middle}></div>
      <a href="" className={styles.link}>Location</a>
      <div className={styles.middle}></div>
      <a href="" className={styles.link}>Contact Us</a>
      <button>Log In/Sign Up</button>
    </div>
    </div>
  );
};

export default MenuToggle;
