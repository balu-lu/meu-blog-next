export interface Artigo {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
}

const artigosData: Artigo[] = [
  {
    slug: 'introducao-ao-nextjs-15',
    title: 'Introdução ao Next.js 15 e App Router',
    description: 'Aprenda os conceitos fundamentais da nova versão do Next.js e como utilizar o App Router.',
    author: 'Desenvolvedor Senior',
    date: '15 de Junho de 2026',
    content: 'O Next.js 15 trouxe mudanças significativas na forma como construímos aplicações React. Com os Server Components habilitados por padrão, despachamos menos JavaScript para o cliente, resultando em aplicações extremamente rápidas e otimizadas para motores de busca (SEO).'
  },
  {
    slug: 'seo-dinamico-com-metadata',
    title: 'Dominando SEO Dinâmico no Next.js',
    description: 'Um guia prático sobre como utilizar a função generateMetadata para melhorar o ranqueamento do seu site.',
    author: 'Especialista em SEO',
    date: '10 de Junho de 2026',
    content: 'A tag title e a meta description são cruciais para o SEO. No Next.js, a função generateMetadata permite que você busque dados de uma API e gere essas tags dinamicamente antes mesmo de a página ser renderizada para o usuário.'
  },
  {
    slug: 'ssg-vs-ssr',
    title: 'SSG vs SSR: Qual escolher?',
    description: 'Entenda as diferenças entre Static Site Generation e Server-Side Rendering e quando aplicar cada um.',
    author: 'Arquiteto de Software',
    date: '05 de Junho de 2026',
    content: 'Utilize SSG (generateStaticParams) para páginas que raramente mudam, como artigos de blog. Utilize SSR (force-dynamic) para páginas que dependem de dados em tempo real, como um carrinho de compras ou um dashboard financeiro.'
  }
];

// Função que simula um fetch assíncrono (como se fosse uma API externa)
export async function getArtigos(): Promise<Artigo[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(artigosData), 500);
  });
}

export async function getArtigoBySlug(slug: string): Promise<Artigo | undefined> {
  const artigos = await getArtigos();
  return artigos.find((artigo) => artigo.slug === slug);
}