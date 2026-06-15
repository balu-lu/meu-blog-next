import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                Tech<span className={styles.logoHighlight}>Blog</span>
            </Link>
            <nav className={styles.nav}>
                <Link href="#artigos" className={styles.navLink}>
                    Artigos
                </Link>
                <Link href="#sobre" className={styles.navLink}>
                    Sobre
                </Link>
            </nav>
        </header>
    );
}
