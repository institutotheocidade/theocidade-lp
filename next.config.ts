import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera site 100% estático em ./out (Cloudflare Pages)
  output: "export",
  // O export não roda o otimizador de imagem do Next; serve as imagens direto
  images: { unoptimized: true },
};

export default nextConfig;
