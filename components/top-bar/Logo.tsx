import styles from './Logo.module.css';
import MenuToggle from './Menu';

export default function Logo() {
    return (
      <div className={styles.logo}>
        <img src="/images/Group (2).svg" alt="Main Logo" />
      <div className={styles.img}>
        <img src="/images/Group.svg" alt="Secondary Logo" />
      </div>
      <MenuToggle/>
      </div>
    );
  }