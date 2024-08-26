import styles from './Navbar.module.css';

export default function Navbar(){
    return(
        <><div className={styles.navBar}>
        <div className={styles.links}>
          <a href="" className={styles.link}>About</a>
          <a href="" className={styles.link}>Offers</a>
          <a href="" className={styles.link}>Corporate</a>
          <a href="" className={styles.link}>Personal</a>
          <a href="" className={styles.link}>Location</a>
          <a href="" className={styles.link}>Contact Us</a>
        </div>
        
        <div className={styles.icons}>
          <div className={styles.bell}>
            <a href=''><img src="images/bell.svg" alt="" /></a>
          </div>
          <div className={styles.name}>
            <img src="images/name.svg" alt="" />
          </div>
        </div>
      </div><div className={styles.sunday}>
          <div className={styles.marqueeText}>
            <span
            >Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor
              Grand Sales Counters | All Rates inclusive of VAT. T&C's apply |
              Follow us on Social Media for New Offers</span>
          </div>
        </div></>
    );
}