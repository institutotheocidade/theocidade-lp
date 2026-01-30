"use client";

import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Check, BookOpen, Laptop, Users } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function AdmissaoPage() {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    return (
        <div className="bg-white">
            <PageHeader
                title="Processo Seletivo"
                subtitle="Dê o primeiro passo na sua jornada teológica. Escolha seu curso abaixo."
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">

                {/* Selection Step */}
                {!selectedCourse && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Bacharelado Card */}
                        <div className="border rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer group bg-gray-50 border-primary/20 relative overflow-hidden" onClick={() => setSelectedCourse('bacharelado')}>
                            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                            <BookOpen className="w-12 h-12 text-primary mb-6" />
                            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Bacharelado Livre</h3>
                            <p className="text-gray-600 mb-6">Curso completo de Teologia. Modalidade Semipresencial.</p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-600" /> Presencial + Online</li>
                                <li className="flex items-center gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-600" /> 4 anos e meio</li>
                            </ul>
                            <Button className="w-full">Inscrever-se</Button>
                        </div>

                        {/* EAD Card */}
                        <div className="border rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer group bg-white" onClick={() => setSelectedCourse('ead')}>
                            <Laptop className="w-12 h-12 text-secondary mb-6" />
                            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Curso EAD</h3>
                            <p className="text-gray-600 mb-6">Teologia de qualidade onde você estiver.</p>
                            <Badge variant="secondary" className="mb-6">Em Breve</Badge>
                            <Button variant="outline" className="w-full">Entrar na Lista de Espera</Button>
                        </div>

                        {/* Cursos Livres Card */}
                        <div className="border rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer group bg-white opacity-90" onClick={() => setSelectedCourse('livres')}>
                            <Users className="w-12 h-12 text-gray-600 mb-6" />
                            <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Cursos Livres</h3>
                            <p className="text-gray-600 mb-6">Capacitação rápida para líderes e membros.</p>
                            <Badge variant="outline" className="mb-6">Em Construção</Badge>
                            <Button variant="outline" className="w-full" disabled>Em Breve</Button>
                        </div>
                    </div>
                )}

                {/* Bacharelado Content (Existing Form) */}
                {selectedCourse === 'bacharelado' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="mb-8 hover:bg-gray-100">&larr; Voltar para seleção</Button>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                            {/* Left Column: Requirements & Curriculum */}
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif mb-6">
                                    Requisitos e Documentação
                                </h2>
                                <div className="prose prose-blue text-gray-600 mb-10">
                                    <h3 className="text-lg font-semibold text-gray-900">Documentos Necessários</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Cópia do RG e CPF</li>
                                        <li>Comprovante de Residência atualizado</li>
                                        <li>Histórico Escolar do Ensino Médio (ou Diploma de Curso Superior)</li>
                                        <li>Carta de Recomendação Pastoral</li>
                                        <li>1 Foto 3x4 recente</li>
                                    </ul>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif mb-6">
                                    Grade Curricular
                                </h2>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 max-h-[500px] overflow-y-auto">
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-200 pb-2">
                                            <h4 className="font-bold text-primary">Teologia Exegética</h4>
                                            <div className="mt-2 space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between items-center">
                                                    <span>Hebraico I, II, III e IV</span>
                                                    <Badge variant="outline">16 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Grego I, II, III e IV</span>
                                                    <Badge variant="outline">16 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Pentateuco</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                                {/* Add more subjects as needed */}
                                                <div className="flex justify-between items-center">
                                                    <span>Livros Históricos</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Livros Poéticos</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-gray-200 pb-2">
                                            <h4 className="font-bold text-primary">Teologia Sistemática</h4>
                                            <div className="mt-2 space-y-2 text-sm text-gray-600">
                                                <div className="flex justify-between items-center">
                                                    <span>Prolegômenos</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Teontologia</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Antropologia</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span>Cristologia</span>
                                                    <Badge variant="outline">4 Créditos</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Pre-registration Form */}
                            <div>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-primary/10 shadow-sm sticky top-24">
                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-serif mb-2">
                                        Pré-Matrícula
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-8">
                                        Preencha seus dados para iniciar o processo seletivo do Bacharelado.
                                    </p>

                                    <form className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nome Completo</label>
                                            <input required type="text" id="name" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">CPF</label>
                                                <input required type="text" id="cpf" placeholder="000.000.000-00" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">WhatsApp</label>
                                                <input required type="tel" id="phone" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                                            <input required type="email" id="email" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div>
                                            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Endereço Completo</label>
                                            <input required type="text" id="address" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div>
                                            <label htmlFor="church" className="block text-sm font-medium leading-6 text-gray-900">Igreja que frequenta</label>
                                            <input required type="text" id="church" placeholder="Ex: Igreja Presbiteriana de Manaus" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3" />
                                        </div>

                                        <div>
                                            <label htmlFor="education" className="block text-sm font-medium leading-6 text-gray-900">Escolaridade</label>
                                            <select id="education" className="mt-1 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 pl-3">
                                                <option>Ensino Médio Completo</option>
                                                <option>Superior Incompleto</option>
                                                <option>Superior Completo</option>
                                                <option>Pós-Graduação</option>
                                            </select>
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                                            Enviar Pré-Matrícula
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* EAD Content */}
                {selectedCourse === 'ead' && (
                    <div className="max-w-xl mx-auto text-center py-12 animate-in fade-in zoom-in duration-300">
                        <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="mb-8">&larr; Voltar</Button>
                        <Laptop className="w-20 h-20 text-secondary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Curso EAD</h2>
                        <p className="text-gray-600 mb-8">O lançamento do nosso curso 100% online está previsto para o <strong>segundo semestre de 2026</strong>. Deixe seu contato para ser avisado em primeira mão.</p>
                        <form className="max-w-md mx-auto space-y-4">
                            <input type="email" placeholder="Seu melhor e-mail" className="w-full rounded-md border-gray-300 pl-3 py-2" />
                            <Button className="w-full">Entrar na Lista de Espera</Button>
                        </form>
                    </div>
                )}

                {/* Livres Content */}
                {selectedCourse === 'livres' && (
                    <div className="max-w-xl mx-auto text-center py-12 animate-in fade-in zoom-in duration-300">
                        <Button variant="ghost" onClick={() => setSelectedCourse(null)} className="mb-8">&larr; Voltar</Button>
                        <Users className="w-20 h-20 text-gray-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cursos Livres</h2>
                        <p className="text-gray-600">Em breve teremos cursos focados em liderança, eclesiologia e vida cristã. Acompanhe nossas redes sociais para novidades.</p>
                    </div>
                )}


            </div>
        </div>
    );
}
