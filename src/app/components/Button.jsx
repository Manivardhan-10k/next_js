// src/components/Button.js
import styles from './Button.module.css';

export default function Button({ text, color }) {
  return (
    <button className={styles.button} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}