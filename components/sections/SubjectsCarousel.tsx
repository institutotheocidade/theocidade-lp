"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const subjects = [
    { name: "Teologia Sistemática", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop" },
    { name: "Hermenêutica", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop" },
    { name: "História da Igreja", image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1000&auto=format&fit=crop" },
    { name: "Grego Bíblico", image: "https://images.unsplash.com/photo-1507842217159-a28f26809313?q=80&w=1000&auto=format&fit=crop" },
    { name: "Hebraico Bíblico", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop" },
    { name: "Aconselhamento", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
    { name: "Homilética", image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=1000&auto=format&fit=crop" },
];

export function SubjectsCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif text-center">
                    Algumas das Nossas Matérias
                </h2>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {subjects.map((subject) => (
                            <div className="flex-[0_0_80%] sm:flex-[0_0_40%] md:flex-[0_0_30%] lg:flex-[0_0_25%] min-w-0" key={subject.name}>
                                <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                                    <img
                                        src={subject.image}
                                        alt={subject.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                        <h3 className="text-white font-bold text-xl font-serif">{subject.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
