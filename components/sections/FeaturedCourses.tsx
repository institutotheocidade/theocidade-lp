import Link from "next/link";
import { Book, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const courses = [
    {
        title: "Semipresencial",
        description: "Formação completa para pastores e líderes. Modalidade Semipresencial (4 anos e meio).",
        icon: GraduationCap,
        href: "/cursos/semipresencial",
    },
    {
        title: "Curso EAD (Em Breve)",
        description: "Cursos de teologia à distância, com lançamento previsto para 2026.",
        icon: Book,
        href: "/cursos",
    },
    {
        title: "Cursos Livres (Em Construção)",
        description: "Capacitação rápida e focada para obreiros e membros de igreja. Aguarde novidades.",
        icon: Users,
        href: "/cursos",
    },
];

export function FeaturedCourses() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                            Destaque
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif mb-6">
                            Bacharelado Livre em Teologia
                        </h2>
                        <p className="text-lg leading-8 text-gray-600 mb-8">
                            Nossa formação principal, desenhada para quem deseja mergulhar nas Escrituras. Um programa completo que une a profundidade da tradição reformada com a flexibilidade do ensino híbrido.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div>
                                <h3 className="font-bold text-gray-900 border-l-4 border-primary pl-3">Duração</h3>
                                <p className="text-gray-600 mt-1 pl-3">4 anos e meio</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 border-l-4 border-primary pl-3">Modalidade</h3>
                                <p className="text-gray-600 mt-1 pl-3">Semipresencial (Híbrido)</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 border-l-4 border-primary pl-3">Público</h3>
                                <p className="text-gray-600 mt-1 pl-3">Líderes e Vocacionados</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 border-l-4 border-primary pl-3">Certificação</h3>
                                <p className="text-gray-600 mt-1 pl-3">Livre (Eclesiástica)</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg">
                                <Link href="/cursos/semipresencial">Ver Grade Curricular</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Video/Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 ring-1 ring-gray-200">
                            {/* YouTube Embed Placeholder - In production use an actual iframe */}
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/placeholder"
                                title="Vídeo do Bacharelado"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
