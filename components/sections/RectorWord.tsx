import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function RectorWord() {
    return (
        <div className="relative bg-gray-900 py-16 sm:py-24">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
                    alt=""
                    className="h-full w-full object-cover object-center opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/50 mix-blend-multiply" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-wide mb-2">
                                Uma Palavra do Reitor
                            </h2>
                            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif mb-6">
                                Teologia para a vida toda
                            </h3>
                            <div className="prose prose-lg prose-invert text-gray-300">
                                <p>
                                    "No Theocidade, acreditamos que a teologia não é apenas um exercício intelectual, mas uma jornada de transformação. Nosso compromisso é entregar um ensino que não apenas informe a mente, mas que inflame o coração."
                                </p>
                                <p className="mt-4">
                                    Convidamos você a fazer parte desta história. Seja para aprofundar seu conhecimento bíblico ou para se preparar para o ministério pastoral, temos um lugar para você.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-4">
                                <div>
                                    <p className="text-lg font-bold text-white">Rev. Fulano de Tal</p>
                                    <p className="text-sm text-gray-400">Reitor do Seminário Theocidade</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button asChild variant="secondary">
                                    <Link href="/sobre/docentes">Conheça nossa Equipe</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2}>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800 ring-1 ring-white/10 shadow-2xl flex items-center justify-center group">
                            {/* YouTube Embed Placeholder - In production use an actual iframe */}
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/placeholder"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
