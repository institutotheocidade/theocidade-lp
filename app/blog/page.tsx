import { PageHeader } from "@/components/ui/page-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "5 coisas que aprendemos em Introdução à Bíblia",
        excerpt: "A Bíblia é a história da relação entre Deus e a humanidade, escrita em 3 idiomas, inspirada por Deus e fonte de toda a salvação.",
        date: "21 de Janeiro, 2026",
        author: "Theocidade",
        slug: "5-coisas-introducao-biblia",
        imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2574&auto=format&fit=crop",
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Blog Theocidade"
                subtitle="Teologia, Cultura e Vida Cristã. Artigos densos e atuais para a igreja brasileira."
                backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-2xl text-center mb-16 border-b pb-8">
                    <p className="text-lg leading-8 text-gray-600 font-serif italic">
                        "Pensando a fé cristã no mundo contemporâneo."
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between group">
                            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg mb-6 bg-gray-100">
                                <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="max-w-xl">
                                <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
                                    <span className="text-secondary">{post.author}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">{post.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold leading-tight text-gray-900 font-serif mb-3 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-base leading-7 text-gray-600 line-clamp-3 mb-4 font-light">
                                    {post.excerpt}
                                </p>
                                <div className="relative mt-auto flex items-center gap-x-4">
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900 group-hover:underline underline-offset-4 decoration-secondary transition-all">
                                            Ler Artigo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
