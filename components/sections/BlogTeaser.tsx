"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const posts = [
    {
        id: 1,
        title: "A Importância da Teologia Sistemática para a Vida da Igreja",
        excerpt: "Por que precisamos organizar o que cremos? Uma reflexão sobre a necessidade da doutrina.",
        date: "24 Jan, 2026",
        imageUrl: "https://images.unsplash.com/photo-1505664063603-28e48ca204eb?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "5 Livros Essenciais para Todo Seminarista",
        excerpt: "Uma lista curada de leituras que vão fundamentar sua caminhada acadêmica nos próximos anos.",
        date: "18 Jan, 2026",
        imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "O Desafio da Pregação Expositiva no Século 21",
        excerpt: "Como manter a fidelidade ao texto bíblico enquanto nos comunicamos com a cultura contemporânea.",
        date: "12 Jan, 2026",
        imageUrl: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2670&auto=format&fit=crop"
    }
];

export function BlogTeaser() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12 border-b pb-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                            Pensando a Fé
                        </h2>
                        <p className="mt-2 text-gray-600">Artigos e reflexões recentes do nosso blog.</p>
                    </div>
                    <Button asChild variant="link" className="hidden sm:inline-flex">
                        <Link href="/blog">Ver todos os artigos &rarr;</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col group cursor-pointer">
                            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-gray-100">
                                <img src={post.imageUrl} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{post.date}</span>
                                <h3 className="text-xl font-bold leading-tight text-gray-900 font-serif mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-8 text-center sm:hidden">
                    <Button asChild variant="outline">
                        <Link href="/blog">Ver todos os artigos</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
