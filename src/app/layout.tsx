import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "TechBlog | O seu portal de tecnologia",
  description: "Explorando o universo do desenvolvimento web com foco em Next.js e boas práticas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Header />
        
        {/* children numa div com flex-grow para empurrar o footer para baixo */}
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 60px)' }}>
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}