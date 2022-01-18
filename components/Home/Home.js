import styles from "./Home.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faHighlighter } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logobox}`}>
        <img className={`${styles.logo}`} src="/bus-128.png" />
      </div>
      <div className={`${styles.headerbox}`}>
        <h1 className={`${styles.heading_primary}`}>
          <span className={`${styles.heading_primary_main}`}>Travel</span>
          <span className={`${styles.heading_primary_sub}`}>At your ease</span>
        </h1>
      </div>
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
            placeholder="where to go?"
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
    </header>
  );
}
