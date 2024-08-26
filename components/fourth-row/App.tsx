import styles from './App.module.css';

export default function App(){
    return(
        <div className={styles.app}>
          <img src="images/mobile.svg" alt="" />
          <div className={styles.mobile}>
            <h5>
              Enter your number and receive a direct link to download the app
            </h5>
            <form action="">
              <div className={styles.input}>
                <input type="text" placeholder="Enter Phone Number" />
              </div>

              <button type="submit">Get the link</button>
            </form>
            <p>Get in on</p>
            <div className={styles.appLinks}>
              <a href=""><img src="images/apple.svg" alt="" /></a>
              <div className={styles.img}>
                <a href=""><img src="images/playstore.svg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
    );
}












