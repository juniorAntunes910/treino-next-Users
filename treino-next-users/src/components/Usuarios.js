import Image from "next/image";
import Link from "next/link";
export default async function Usuarios() {
  try {
    const data = await fetch("https://randomuser.me/api/?results=4");
    const usersResult = await data.json();
    console.log(usersResult);
    return (
      <>
        {usersResult.results.map((user) => (
          <article className="rounded-2xl border border-slate-200 bg-white p-5" key={user.login.uuid}>
            <div className="flex items-start gap-4">
              <Image
                src={user.picture.large}
                alt={ ` Foto da ${user.name.first}`}
                width={80}
                height={80}
                className="rounded-2xl object-cover"
              ></Image>
              <div>
                <span className="rounded-full bg-app-soft px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-app-primary">
                  {user.nat}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-tight text-app-dark">
                  {`${user.name.first} ${user.name.last}`}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {user.location.city}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {user.location.state}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                {user.dob.age}
              </span>
            </div>

            <Link
              href={{
                pathname: `/${user.login.uuid}`,
                query: {
                    nacionalidade : user.nat,
                    nome : user.name.first,
                    sobrenome: user.name.last,
                    email : user.email,
                    telefone : user.phone,
                    cidade : user.location.city,
                    pais : user.location.country,
                    celular : user.cell,
                    estado : user.location.state,
                    idade : user.dob.age,
                    imagem: user.picture.large
                }
              }}
              className="mt-5 inline-flex text-sm font-extrabold text-blue-500 hover:text-blue-800"

            >
              Ver perfil
            </Link>
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
