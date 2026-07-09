import Image from "next/image";
import Hero from "@/components/Hero";
import Usuarios from "@/components/Usuarios";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="mx-auto max-w-6xl px-4 py-14" id="usuarios">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-500">
              Usuários
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-app-dark">
              Lista de perfis
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Os cards abaixo estão estáticos e mockados. Na entrega, eles
              deverão ser gerados a partir dos dados retornados pela API.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2"> 
            <Usuarios />
          </div>
        </section>
      </main>
    </>
  );
}
