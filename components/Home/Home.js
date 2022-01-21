import styles from "./Home.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faHighlighter } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

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
      <SearchBar />
    </header>
  );
}
