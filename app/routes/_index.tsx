import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, CheckCircle, Users, Zap } from "lucide-react";
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
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to={"/"}>
          <span className="font-semibold ml-2 text-[#76853e]">
            Resume Builder
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"/"}
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"/"}
          >
            Como Funciona
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
                Crie currículos profissionais em minutos
              </h1>
              <p className=" text-blue-100 md:text-xl">
                Destaque-se no mercado de trabalho com currículos personalizados
                e de alta qualidade. Fácil, rápido e eficiente.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-white text-primary hover:bg-gray-200">
                Comece agora
                <ArrowRight className="text-primary ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full flex items-center md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Recursos Principais
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Rápido e Fácil</h3>
                <p className="text-gray-600">
                  Crie seu currículo em poucos minutos com nossa interface
                  intuitiva.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">
                  Modelos Profissionais
                </h3>
                <p className="text-gray-600">
                  Escolha entre diversos modelos modernos e adequados para sua
                  área.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Personalização Total</h3>
                <p className="text-gray-600">
                  Adapte cores, fontes e layout para refletir sua personalidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Como Funciona
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Insira seus dados</h3>
                <p className="text-gray-600">
                  Preencha suas informações pessoais, experiências e
                  habilidades.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Escolha um modelo</h3>
                <p className="text-gray-600">
                  Selecione entre diversos modelos profissionais e
                  personalize-o.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Baixe seu currículo</h3>
                <p className="text-gray-600">
                  Gere seu currículo em PDF e comece a se candidatar a vagas!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pronto para impulsionar sua carreira?
              </h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Crie seu currículo profissional agora e aumente suas chances de
                conseguir o emprego dos seus sonhos.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100">
                Comece Gratuitamente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
