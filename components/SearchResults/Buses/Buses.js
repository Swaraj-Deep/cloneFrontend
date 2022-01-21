import Link from "next/link";
import styles from "./Buses.module.scss";

export default function Buses() {
  return (
    <div className={styles.BusCard}>
      <div className={styles.BusDetails}>
        <div className={styles.BusName}>
          <div className={styles.BusNameDetail}>Faisal Tours and Travels</div>
          <div className={styles.BusTypeDetail}>A/C Seater/Sleeper (2+1)</div>
        </div>
        <div className={styles.BusPickUpTime}>
          <div className={styles.BusPickUpTimeDetail}>23:00</div>
          <div className={styles.BusPickUpPointDetail}>Alambagh</div>
        </div>
        <div className={styles.BusDuration}>00h 59m</div>
        <div className={styles.BusDropTime}>
          <div className={styles.BusDropTimeDetail}>23:59</div>
          <div className={styles.BusDropPointDetail}>Kanpur</div>
        </div>
        <div className={styles.BusPrice}>
          <div className={styles.BusPriceDetail}>
            <span className={styles.BusPriceCurrency}>INR </span>900
          </div>
        </div>
        <div className={styles.BusSeats}>
          <div className={styles.BusSeatsDetail1}>30 Seats Available</div>
          <div className={styles.BusSeatsDetail2}>10 Single</div>
        </div>
      </div>
      <div className={styles.BusOptions}>
        <div className={styles.BusOptionsAll} id="BusOptions">
          <Link href={"/"}>
            <a>Bus</a>
          </Link>
        </div>
        <div className={styles.BusOptionsViewButton}>
          <button className={styles.BusOptionsViewSeats}>View Seats</button>
        </div>
      </div>
    </div>
  );
}
