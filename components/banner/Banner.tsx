"use client";

import styles from './Banner.module.css';
import { useState, useEffect } from 'react';

export default function Banner(){
    return(
      <div className={styles.banner}>
        <div className={styles.content}>
          <p>Recieve guarnteed</p>
          <button>GIFT VOUCHER</button>
          <p className={styles.lease}>on a monthly hire or lease</p>
        </div>
      </div>
        
    );
}


// const BannerCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const images = [
//     "images/banner.svg",
//     "images/banner.svg",
//     "images/banner.svg"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleDotClick = (index) => {
//     setActiveIndex(index: number);
//   };

//   return (
//     <div className={styles.banner}>
//       <div className={styles.carouselInner}>
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`${styles.carouselItem} ${index === activeIndex ? styles.active : ''}`}
//           >
//             <img src={src} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       <div className={styles.content}>
//         <p>Receive guaranteed</p>
//         <button>GIFT VOUCHER</button>
//         <p className={styles.lease}>on a monthly hire or lease</p>
//       </div>
//       <div className={styles.carouselDots}>
//         {images.map((_, index) => (
//           <span
//             key={index}
//             className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
//             onClick={() => handleDotClick(index)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;