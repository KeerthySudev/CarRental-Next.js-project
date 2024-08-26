'use client';
import { useState } from 'react';
import styles from "./Search.module.css";
import DateTimeInput from "./DATE";
import BookButton from "./book";

const Search = () => {
  const [isDifferentDropOff, setIsDifferentDropOff] = useState(false);

  return (
    <div className={styles.secondRow}>
      <div className={styles.searchBar}>
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
            <option value="">
              Select vehicle type
            </option>
          </select>
        </div>
        <div className={styles.search}>
          <form action="">
            <div className={styles.placeWrap}>
              <select className={styles.place}>
                <option value="" > Pickup Location</option>
                <option value="">Al Quoz</option>
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
              <DateTimeInput placeholder="Pick-Up Date & Time" />
            </div>

            <div className={styles.date}>
              <DateTimeInput placeholder="Drop-Off Date & Time" />
            </div>
            <div className={styles.btnSearch}>
              <button type="submit"></button>
            </div>
          </form>
          <div className={styles.smallLine}></div>
          <div className={styles.btnBooking}>
            <BookButton />
          </div>
          <div className={styles.btnBook}>
            <button>Quick Book</button>
          </div>
        </div>
        <div className={styles.download}>
          <p>Download our App for easy accessibility anytime, anywhere!</p>
          <img src="images/apple.svg" alt="" />
          <div className={styles.img}>
            <img src="images/playstore.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.phone}>
        <img src="images/phone.svg" alt="" />
      </div>
      <div className={styles.hours}>
        <img src="images/24x7.svg" alt="" />
      </div>
    </div>
  );
}

export default Search;


