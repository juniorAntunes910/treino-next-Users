"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Topbar() {

    const path = usePathname();
    const homeActive = "rounded-full bg-blue-50 px-3 py-2 text-blue-700";
    const homeDesative = "rounded-full bg-app-soft px-3 py-2 ";

    return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-app-dark"
        >
            UserList
        </Link>

        <nav
          className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            className={path === "/" ? homeActive : homeDesative}
>
            Usuários
          </Link>
          <Link
            href="/about"
            className={path === "/about" ? homeActive : homeDesative}           
          >
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </header>
  );
}
