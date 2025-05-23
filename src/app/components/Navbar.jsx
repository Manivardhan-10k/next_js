// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about" style={{ marginLeft: '20px' }}>About</Link>
    </nav>
  );
}