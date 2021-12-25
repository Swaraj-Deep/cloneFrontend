import styles from './Button.module.css';

export default function Button({btnStyle, text, onClick, type, disabled, size}) {
  function getButtonStyle(btnStyle) {
    switch (btnStyle) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'danger':
        return styles.buttonDanger;
      case 'primaryOutline':
        return styles.buttonPrimaryOutline;
      case 'secondaryOutline':
        return styles.buttonSecondaryOutline;
      case 'dangerOutline':
        return styles.buttonDangerOutline;
    }
  }

  const buttonStyle = getButtonStyle(btnStyle);
  return <button
    className={`${size === 'sm' ? styles.buttonSm : size === 'md' ? styles.buttonMd : size === 'lg' ? styles.buttonLg : ''} ${styles.button} ${buttonStyle}`}
    onClick={onClick} type={type} disabled={disabled}> {text} </button>
}
