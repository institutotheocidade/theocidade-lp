"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { BookOpen, Scroll, LandPlot, Languages, Brain, Users, Mic2 } from 'lucide-react';

const subjects = [
    {
        name: "Teologia Sistemática",
        description: "Estudo ordenado das doutrinas bíblicas fundamentais.",
        professor: "Prof. Rev. Carlos",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Hermenêutica",
        description: "A arte e ciência da interpretação bíblica.",
        professor: "Prof. Dr. Marcos",
        icon: Scroll,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "História da Igreja",
        description: "A trajetória do povo de Deus através dos séculos.",
        professor: "Prof. Me. João",
        icon: LandPlot,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Grego Bíblico",
        description: "Exegese do Novo Testamento no original.",
        professor: "Prof. Rev. Pedro",
        icon: Languages,
        image: "https://images.unsplash.com/photo-1507842217159-a28f26809313?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Hebraico Bíblico",
        description: "Compreensão profunda do Antigo Testamento.",
        professor: "Prof. Dr. Paulo",
        icon: Languages,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Aconselhamento",
        description: "Cuidado pastoral e sabedoria bíblica.",
        professor: "Prof. Dra. Ana",
        icon: Users,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Homilética",
        description: "A arte da pregação expositiva.",
        professor: "Prof. Rev. Lucas",
        icon: Mic2,
        image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=1000&auto=format&fit=crop"
    },
];

export function SubjectsCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3500 })]);

    return (
        <section className="py-24 bg-muted/30 overflow-hidden relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <div className="flex justify-center mb-4">
                    <Brain className="h-10 w-10 text-primary opacity-80" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                    Matérias do Curso
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Uma grade curricular completa para sua formação ministerial.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="overflow-visible" ref={emblaRef}>
                    <div className="flex gap-6 pl-4 pb-12">
                        {subjects.map((subject, index) => (
                            <div className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_28%] min-w-0 pt-4" key={subject.name}>
                                <div className="group relative h-full bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/40 flex flex-col">
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={subject.image}
                                            alt={subject.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary">
                                            <subject.icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {subject.name}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                                            {subject.description}
                                        </p>

                                        <div className="pt-4 border-t border-border mt-auto">
                                            <p className="text-xs text-accent font-semibold uppercase tracking-wider">Docente</p>
                                            <p className="text-sm font-medium text-foreground">{subject.professor}</p>
                                        </div>
                                    </div>

                                    <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
