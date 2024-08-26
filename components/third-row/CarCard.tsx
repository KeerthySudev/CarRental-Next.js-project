import styles from './Cars.module.css';

interface CarCardProps {
  imgSrc: string;
  heading: string;
  description: string;
  features: string[]; // Only the labels are dynamic
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({ imgSrc, heading, description, features, price }) => {
  const icons = [
    '/images/seat.svg',
    '/images/gear.svg',
    '/images/door.svg',
    '/images/ac.svg'
  ];

  return (
    <div className={styles.car}>
      <div className={styles.img}>
        <img src={imgSrc} alt={heading} />
      </div>
      <div className={styles.desc}>
        <h3>{heading}</h3>
        <p>{description}</p>
        <div className={styles.features}>
          {features.map((label, index) => (
            <div className={styles.feature} key={index}>
              <img src={icons[index]} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className={styles.price}>
          <h4>{price}</h4>
        </div>
        <div className={styles.book}>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
