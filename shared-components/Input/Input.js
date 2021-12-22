import styles from './Input.module.css';

export default function Input({size, type, value, onChange, onClick}) {
  return <>
    <input
      className={`${styles.input} ${size === 'sm' ? styles.inputSmall : size === 'md' ? styles.inputMedium : size === 'lg' ? styles.inputLarge : styles.input}`} type={type} value={value} onChange={onChange} onClick={onClick}/>
  </>
}
