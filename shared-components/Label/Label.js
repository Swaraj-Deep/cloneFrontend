import styles from "./Label.module.css";

export default function Label({ text, htmlFor }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    {/* </label> */}
  );
}
