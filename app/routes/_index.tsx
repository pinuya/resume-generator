import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { File, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Resume Builder" },
    {
      name: "Crie seu currículo perfeito em minutos.",
      content:
        "Nosso gerador de currículo ajuda você a criar um currículo profissional que se destaque. Seja contratado mais rapidamente com o Resume Builder.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to={"/"}>
          <span className="ml-2 text-[#76853e]">Resume Builder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"/"}
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"/"}
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"/"}
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full flex items-center py-12 md:py-24 lg:py-32 xl:py-72 bg-gradient-to-b from-[#76853e] to-[#53631d]">
          <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
            <div className="w-full space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Crie seu currículo perfeito em minutos.
              </h1>
              <p className=" text-blue-100 md:text-xl">
                Nosso gerador de currículo ajuda você a criar um currículo
                profissional que se destaque. Seja contratado mais rápido com
                Resume Builder!
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white">Comece Agora</Button>
              <Button variant="outline">Saber mais</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ResumeBuilder. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to={"/"}>
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to={"/"}>
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  );
}
