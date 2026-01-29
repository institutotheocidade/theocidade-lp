import { BookOpen, Laptop, Wallet, Heart } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const features = [
    {
        name: 'Bíblico',
        description: 'Fidelidade doutrinária e compromisso com as Escrituras Sagradas como nossa única regra de fé e prática.',
        icon: BookOpen,
    },
    {
        name: 'Flexível',
        description: 'Facilidade do online para você estudar onde e quando quiser, sem abrir mão da profundidade.',
        icon: Laptop,
    },
    {
        name: 'Acessível',
        description: 'Custo-benefício pensado para viabilizar sua formação teológica de alta qualidade.',
        icon: Wallet,
    },
    {
        name: 'Dedicado',
        description: 'Foco total no aluno, com suporte acadêmico e pastoral durante toda sua jornada.',
        icon: Heart,
    },
];

export function WhyChoose() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <FadeIn>
                        <h2 className="text-base font-semibold leading-7 text-accent uppercase tracking-wide">Diferenciais</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
                            Por que escolher o Theocidade?
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Uma instituição comprometida com a formação integral do aluno, unindo piedade e academia.
                        </p>
                    </FadeIn>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <StaggerContainer className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <StaggerItem key={feature.name} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                                    <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-bold leading-7 text-gray-900 font-serif">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </div>
    );
}
