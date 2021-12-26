import styles from './Input.module.css';

export default function Input({
                                type,
                                value,
                                onChange,
                                onClick,
                                id,
                                name,
                                checked,
                                pattern,
                                placeholder,
                                required,
                                className,
                                minVal,
                                maxVal
                              }) {
  return <>
    <input
      className={`${styles.input} ${className}`}
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
      min={minVal}
      max={maxVal}
    />
  </>
}
