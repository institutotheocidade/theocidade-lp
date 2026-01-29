"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const highlights = [
    {
        name: "Prof. Rômulo Monteiro",
        title: "Teologia Bíblica",
        imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
        name: "Prof. Aldair Queiroz",
        title: "Sistemática",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
        name: "Prof. Belmiro Junior",
        title: "Antigo Testamento",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    {
        name: "Prof. Paulo Won",
        title: "Novo Testamento",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    }
]

export function FacultyTeaser() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif mb-12">
                    Nossos Mestres
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {highlights.map((prof) => (
                        <div key={prof.name} className="flex flex-col items-center group">
                            <img
                                src={prof.imageUrl}
                                alt={prof.name}
                                className="h-32 w-32 rounded-full object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 ring-4 ring-white shadow-lg"
                            />
                            <h3 className="font-bold text-gray-900">{prof.name}</h3>
                            <p className="text-sm text-secondary font-medium">{prof.title}</p>
                        </div>
                    ))}
                </div>

                <Button asChild variant="outline">
                    <Link href="/sobre/docentes">Ver Corpo Docente Completo</Link>
                </Button>
            </div>
        </section>
    )
}
