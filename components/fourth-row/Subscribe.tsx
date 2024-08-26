import styles from './Subscribe.module.css';

export default function Subscribe(){
    return(
        <div className={styles.subscribe}>
          <h2>Subscribe here for exclusive offers and updates!</h2>
          <form action="">
            <div className={styles.input}>
              <div className={styles.name}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.email}>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className={styles.miss}>
              <p>
                Don't miss out! enter your email and your name, then hit
                subscribe to unlock a world of special offers and details.
              </p>
            </div>
            <button type="submit">Subscribe</button>
          </form>
        </div>
    );
}