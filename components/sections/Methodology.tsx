"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { BookOpen, Users, Globe } from "lucide-react";

const methods = [
    {
        title: "Ensino Híbrido",
        description: "A flexibilidade do estudo online com a riqueza do convívio presencial.",
        icon: Globe,
    },
    {
        title: "Mentoria Próxima",
        description: "Acompanhamento pastoral e acadêmico durante toda a jornada.",
        icon: Users,
    },
    {
        title: "Material Exclusivo",
        description: "Conteúdo didático próprio, focado na realidade da igreja brasileira.",
        icon: BookOpen,
    },
];

export function Methodology() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                            Nossa Metodologia
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Um jeito de ensinar que valoriza seu tempo e maximiza seu aprendizado.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {methods.map((method, index) => (
                        <FadeIn key={method.title} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 h-full">
                                <div className="p-3 bg-primary/5 rounded-full mb-4 text-primary">
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-gray-600">{method.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
