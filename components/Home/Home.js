import styles from "./Home.module.css";
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
    </header>
  );
}
