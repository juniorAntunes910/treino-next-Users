"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function detail() {
  const params = useSearchParams();

  const userDetail = {
    nacionalide: params.get("nacionalidade"),
    nome: params.get("nome"),
    sobrenome: params.get("sobrenome"),
    email: params.get("email"),
    telefone: params.get("telefone"),
    cidade: params.get("cidade"),
    pais: params.get("pais"),
    celular: params.get("celular"),
    estado: params.get("estado"),
    idade: params.get("idade"),
    imagem: params.get("imagem"),
  };

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Link
            href="/"
            className="text-sm font-extrabold text-blue-600 hover:text-blue-800"
          >
            ← Voltar para usuários
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <aside className="rounded-2xl border border-slate-200 bg-white p-6">
              <Image
                src={userDetail.imagem}
                alt={`Fodo de ${userDetail.nome}`}
                height={160}
                width={160}
                className="rounded-3xl object-cover"
              ></Image>
              <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
                Nacionalidade {userDetail.nacionalide}
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-app-dark">
                {`${userDetail.nome} ${userDetail.sobrenome} `}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {userDetail.email}
              </p>
            </aside>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold tracking-tight text-app-dark">
                Informações do perfil
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Telefone
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.telefone}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Celular
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.celular}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Cidade
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.cidade}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Estado
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.estado}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    País
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.pais}
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                    Idade
                  </p>
                  <p className="mt-1 font-bold text-app-dark">
                    {userDetail.idade}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
