import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="sobre" className={styles.footer}>
            <p className={styles.texto}>
                Desenvolvido com{' '}
                <span className={styles.destaque}>Next.js 15</span> e App
                Router.
            </p>
            <p className={styles.texto}>
                &copy; {new Date().getFullYear()} TechBlog. Todos os direitos
                reservados.
            </p>
        </footer>
    );
}
