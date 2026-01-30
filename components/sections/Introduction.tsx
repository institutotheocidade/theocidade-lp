"use client";

import { FadeIn } from "@/components/motion/fade-in";

export function Introduction() {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-3xl px-6 text-center">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-serif mb-6">
                        Conheça o Instituto Theocidade
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Somos uma instituição comprometida com o ensino das Escrituras Sagradas, unindo rigor acadêmico e piedade cristã. Nosso objetivo é formar líderes, pastores e leigos capacitados para servir à Igreja e transformar a sociedade através do Evangelho, mantendo-nos fiéis à tradição reformada e conectados com os desafios do mundo contemporâneo.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
