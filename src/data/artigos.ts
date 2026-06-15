import artigosJSON from './artigos.json';

export interface Artigo {
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    content: string;
}

// O TypeScript infere automaticamente os tipos do JSON,
// mas assim garante que a API retorna a interface correta.
const artigosData = artigosJSON as Artigo[];

export async function getArtigos(): Promise<Artigo[]> {
    // Simula um tempo de rede
    return new Promise((resolve) => {
        setTimeout(() => resolve(artigosData), 300);
    });
}

export async function getArtigoBySlug(
    slug: string
): Promise<Artigo | undefined> {
    const artigos = await getArtigos();
    return artigos.find((artigo) => artigo.slug === slug);
}
