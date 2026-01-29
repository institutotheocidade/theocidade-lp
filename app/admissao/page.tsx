"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, FileText, Scroll } from "lucide-react";
import { courses } from "@/lib/courses";

export default function AdmissaoPage() {
    const [submitted, setSubmitted] = useState(false);
    const semipresencialCourse = courses.find(c => c.slug === 'semipresencial');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // In a real app, send data to API/Email
    };

    return (
        <div className="bg-white">
            <PageHeader
                title="Processo Seletivo"
                subtitle="Dê o primeiro passo para sua formação teológica. Confira a grade curricular e preencha a pré-matrícula."
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Curriculum & Documents */}
                    <div>
                        {/* Curriculum Section */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif mb-6 flex items-center gap-2">
                                <Scroll className="h-6 w-6 text-primary" />
                                Grade Curricular (Bacharelado)
                            </h2>
                            {semipresencialCourse?.curriculum?.length ? (
                                <div className="space-y-8">
                                    {semipresencialCourse.curriculum.map((semester, idx) => (
                                        <div key={idx} className="bg-gray-50 rounded-xl p-6 ring-1 ring-gray-900/5">
                                            <h3 className="font-bold text-lg text-primary mb-4">{semester.semester}</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                                                {semester.subjects.map((subject, sIdx) => (
                                                    <li key={sIdx} className="flex items-center gap-2">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                                        {subject}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600">Grade curricular em atualização.</p>
                            )}
                        </div>

                        {/* Documents Section */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif mb-6 flex items-center gap-2">
                                <FileText className="h-6 w-6 text-primary" />
                                Documentos Necessários
                            </h2>
                            <div className="bg-white border rounded-xl p-6 shadow-sm">
                                <ul className="space-y-3 text-gray-700">
                                    {[
                                        "Cópia do RG e CPF",
                                        "Comprovante de Residência",
                                        "Certidão de Nascimento ou Casamento",
                                        "Histórico Escolar do Ensino Médio (Cópia Autenticada)",
                                        "Certificado de Conclusão do Ensino Médio (Cópia Autenticada)",
                                        "1 Foto 3x4 recente",
                                        "Carta de Recomendação Pastoral",
                                        "Comprovante de pagamento da taxa de matrícula"
                                    ].map((doc, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Pre-registration Form */}
                    <div className="lg:sticky lg:top-8 self-start">
                        {submitted ? (
                            <div className="rounded-2xl bg-green-50 p-8 text-center ring-1 ring-green-900/10">
                                <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-bold font-serif text-green-900">Pré-matrícula Recebida!</h3>
                                <p className="mt-2 text-green-800">
                                    Nossa secretaria entrará em contato pelo WhatsApp em breve para orientar sobre os próximos passos e envio de documentos.
                                </p>
                                <Button className="mt-8" onClick={() => setSubmitted(false)}>Voltar</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-2xl rounded-2xl p-8 lg:p-10 ring-1 ring-gray-900/10">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Ficha de Pré-Matrícula</h3>
                                    <p className="text-gray-500 text-sm mb-6">Preencha seus dados para iniciar o processo.</p>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome Completo</label>
                                            <input required type="text" id="name" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">CPF</label>
                                                <input required type="text" id="cpf" placeholder="000.000.000-00" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp</label>
                                                <input required type="tel" id="phone" placeholder="(92) 99999-9999" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                            <input required type="email" id="email" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div>
                                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Endereço Completo</label>
                                            <input required type="text" id="address" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Escolaridade</label>
                                                <select id="education" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3">
                                                    <option>Ensino Médio Completo</option>
                                                    <option>Ensino Superior Incompleto</option>
                                                    <option>Ensino Superior Completo</option>
                                                    <option>Pós-Graduação</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">Curso de Interesse</label>
                                                <select id="course" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3">
                                                    <option>Semipresencial</option>
                                                    <option>Pós-Graduação</option>
                                                    <option>Curso Livre</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" size="lg" className="w-full text-lg h-12">Confirmar Pré-Matrícula</Button>
                                    <p className="mt-4 text-xs text-center text-gray-500">
                                        Seus dados estão seguros. Entraremos em contato em até 24h úteis.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
