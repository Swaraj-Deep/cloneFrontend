import styles from "./SearchResults.module.scss";
import Buses from "./Buses";

export default function SearchResults() {
  let buses = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <div className={styles.FilterPane}>
        Filter
        <ul>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
      <div className={styles.Buses}>
        <ul>
          {buses.map(function (item, i) {
            return (
              <li className={styles.BusesList} key={i}>
                <Buses />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
