import styles from './Steps.module.css';

export default function Steps(){
    return(
        <><div className={styles.heading2}>
        <h1>Rent/Lease In three easy steps</h1>
      </div>
      <div className={styles.steps}>
        <div className={styles.step1}>
          <div className={styles.numBox}>
            <h3>01</h3>
          </div>

          <div className={styles.box}>
            <div className={styles.img}>
              <img src="images/map.svg" alt="" />
            </div>

            <p>
              Select the location. Browse through our available options and find
              the perfect car to suit your needs
            </p>
          </div>
        </div>
        <div className={styles.step1}>
          <div className={styles.numBox}>
            <h3>02</h3>
          </div>

          <div className={styles.box}>
            <div className={styles.img}>
              <img src="images/calendar.svg" alt="" />
            </div>

            <p>Choose your desired Pick-Up date and time.</p>
          </div>
        </div>
        <div className={styles.step1}>
          <div className={styles.numBox}>
            <h3>03</h3>
          </div>

          <div className={styles.box}>
            <div className={styles.img}>
              <img src="images/car.svg" alt="" />
            </div>

            <p>
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </p>
          </div>
        </div>
      </div></>
    );
}


















