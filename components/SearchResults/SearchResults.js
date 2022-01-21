import styles from "./SearchResults.module.scss";
import Buses from "./Buses";

export default function SearchResults() {
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
        <Buses />
      </div>
    </div>
  );
}
