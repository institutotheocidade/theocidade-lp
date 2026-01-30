"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Laptop, Users } from "lucide-react";

export function OtherOptions() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Curso EAD */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-lg transition-shadow">
                        <div className="p-3 bg-secondary/10 rounded-xl mb-6">
                            <Laptop className="w-8 h-8 text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Curso EAD</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Estude de qualquer lugar do Brasil com a mesma qualidade teológica. Plataforma exclusiva e conteúdo gravado em alta definição.
                        </p>
                        <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                            <Link href="/ead">Saiba Mais</Link>
                        </Button>
                    </div>

                    {/* Cursos Livres */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-lg transition-shadow opacity-75">
                        <div className="p-3 bg-gray-100 rounded-xl mb-6">
                            <Users className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold font-serif text-gray-900">Cursos Livres</h3>
                            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Em Breve</span>
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Cursos de curta duração para líderes, professores de EBD e membros de igreja que desejam aprofundamento específico.
                        </p>
                        <Button disabled className="w-full" variant="outline">
                            Aguarde novidades
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
