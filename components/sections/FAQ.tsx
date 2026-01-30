"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";

const faqs = [
    {
        question: "O curso é reconhecido pelo MEC?",
        answer: "O Bacharelado em Teologia é um curso livre, de caráter eclesiástico, focado na formação ministerial e confessional. Não possuímos reconhecimento pelo MEC, o que nos garante liberdade para manter nossa grade curricular alinhada com nossos princípios teológicos."
    },
    {
        question: "Como funcionam as aulas semipresenciais?",
        answer: "O curso combina aulas presenciais em nosso campus (geralmente uma vez por semana ou quinzenalmente, consulte o calendário atual) com conteúdo online na plataforma, permitindo flexibilidade sem perder o contato comunitário."
    },
    {
        question: "Qual o valor da mensalidade?",
        answer: "Nossos valores são pensados para serem acessíveis. Para informações atualizadas sobre investimento e bolsas, entre em contato através do nosso WhatsApp ou consulte a página de Admissão."
    },
    {
        question: "É necessário ser membro de alguma igreja?",
        answer: "Sim, para o Bacharelado em Teologia exigimos que o aluno seja membro ativo de uma igreja evangélica e apresente carta de recomendação pastoral."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif text-center mb-12">
                        Perguntas Frequentes
                    </h2>
                </FadeIn>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-gray-900">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
