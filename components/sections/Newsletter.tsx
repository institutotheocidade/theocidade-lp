"use client";

import { Button } from "@/components/ui/button";

export function Newsletter() {
    return (
        <section className="bg-primary py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                            Inscreva-se em nossa newsletter
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Receba reflexões teológicas semanais e novidades sobre cursos diretamente no seu e-mail.
                        </p>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <form className="w-full max-w-md">
                                <div className="flex gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">Endereço de e-mail</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder:text-gray-400"
                                        placeholder="Digite seu e-mail"
                                    />
                                    <Button type="submit" variant="secondary" className="flex-none">
                                        Inscrever-se
                                    </Button>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">
                                    Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
                                </p>
                            </form>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}
