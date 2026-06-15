import { getArtigos, getArtigoBySlug } from '../../../data/artigos';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Gera as rotas estáticas durante o build (SSG)
export async function generateStaticParams() {
  const artigos = await getArtigos();
  
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// 2. Gera o SEO Dinâmico
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${artigo.title} | Blog de Tecnologia`,
    description: artigo.description,
  };
}

// 3. Renderiza a página do artigo
export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backLink}>
        Voltar para o início
      </Link>
      
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{artigo.title}</h1>
          <div className={styles.meta}>
            Publicado por <strong>{artigo.author}</strong> em {artigo.date}
          </div>
        </header>
        
        <div className={styles.content}>
          {artigo.content}
        </div>
      </article>
    </main>
  );
}