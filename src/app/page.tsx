import Link from 'next/link';
import { getArtigos } from '../data/artigos';
import styles from './page.module.css';

// Força a página a ser estática (SSG)
export const dynamic = 'force-static';

export default async function Home() {
    // Busca os dados diretamente no servidor
    const artigos = await getArtigos();

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Blog de Tecnologia</h1>

            <p className={styles.subtitle}>
                Explorando o universo do desenvolvimento front-end, arquitetura
                de software e as melhores práticas para construir aplicações web
                modernas e otimizadas.
            </p>

            <div id="artigos" className={styles.grid}>
                {artigos.map((artigo) => (
                    <article key={artigo.slug} className={styles.card}>
                        <h2 className={styles.cardTitle}>
                            <Link href={`/artigos/${artigo.slug}`}>
                                {artigo.title}
                            </Link>
                        </h2>
                        <p className={styles.cardDescription}>
                            {artigo.description}
                        </p>
                        <div className={styles.cardMeta}>
                            <span className={styles.author}>
                                {artigo.author}
                            </span>
                            <span>{artigo.date}</span>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
