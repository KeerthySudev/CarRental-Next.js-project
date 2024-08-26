import styles from './Navbar.module.css';
import SocialIcons from './SocialIcons';
import Logo from './Logo';
import Navbar from './Navbar';

export default function TopBar(){
    return(
        <div className={styles.TopBar}>
        <SocialIcons/>
        <Logo/>
        <Navbar/>
      </div>
    );
}