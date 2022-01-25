import styles from "./SearchBar.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHighlighter } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className={`${styles.headerSearchBarMain}`}>
      <div className={`${styles.headerSearchBar}`}>
        <div className={`${styles.headerSearchBarSection}`}>
          <label className={`${styles.headerSearchBarLabel}`}>From</label>
          <input
            placeholder="Pickup city"
            className={`${styles.headerSearchBarInput}`}
            type="text"
          />
        </div>
        <div className={`${styles.headerSearchBarSection}`}>
          <label className={`${styles.headerSearchBarLabel}`}>To</label>
          <input
            placeholder="Where to go?"
            className={`${styles.headerSearchBarInput}`}
            type="text"
          />
        </div>
        <div className={`${styles.headerSearchBarSection}`}>
          <label className={`${styles.headerSearchBarLabel}`}>Date</label>
          <input className={`${styles.headerSearchBarInput}`} type="date" />
        </div>
        <button className={`${styles.headerSearchBarButton}`}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
