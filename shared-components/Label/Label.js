import styles from "./Label.module.css";

export default function Label({text, htmlFor, className}) {
  return (<label className={`${styles.label} ${className}`} htmlFor={htmlFor}>
      {text}
    </label>);
}
