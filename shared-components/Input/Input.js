import styles from './Input.module.css';

export default function Input({size, type, value, onChange, onClick, id, name, checked, pattern, placeholder, required}) {
  return <>
    <input
      className={`${styles.input} ${size === 'sm' ? styles.inputSmall : size === 'md' ? styles.inputMedium : size === 'lg' ? styles.inputLarge : styles.input}`}
      type={type}
      value={value}
      onChange={onChange}
      onClick={onClick}
      id={id}
      name={name}
      checked={checked}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
    />
  </>
}
