import styles from './Locations.module.css';

export default function Locations(){
    return(
        <div className={styles.locations}>
            <h3>Locations</h3>
        <div className={styles.countries}>
          <ul>
            <li className={styles.link}>Dubai</li>
            <li>
              <hr className={styles.vertical} />
            </li>
            <li className={styles.link}>Abu Dhabi</li>
            <li>
              <hr className={styles.vertical} />
            </li>
            <li className={styles.link}>Sharjah</li>
            <li>
              <hr className={styles.vertical} />
            </li>
            <li className={styles.link}>Fujairah</li>
            <li>
              <hr className={styles.vertical} />
            </li>
            <li className={styles.link}>Ras Al Khaimah</li>
          </ul>
        </div>
        </div>
    );
}