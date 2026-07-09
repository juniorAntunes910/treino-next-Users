import Link from "next/link";
export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
            Prática com API
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-app-dark md:text-6xl">
            Perfis fictícios para praticar Next.js
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Esta base simula uma interface de consulta de usuários. Na versão em
            Next.js, os cards deverão ser renderizados a partir da API Random
            User Generator.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#usuarios"
              className="rounded-full bg-app-primary px-5 py-3 text-sm font-bold bg-blue-600 text-white hover:bg-blue-800"
            >
              Ver usuários
            </a>
            <a
              href="/about"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-app-dark hover:bg-slate-50"
            >
              Sobre o projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
