import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, CheckCircle, Star, Users, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";
import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";

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
  const defaultAnimation = (duration: number) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration },
    };
  };

  const textAnimation = defaultAnimation(2);
  const subTitlesAnimation = defaultAnimation(3);
  const buttonAnimation = defaultAnimation(4);

  return (
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"#features"}
          >
            Recursos
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"#how-it-works"}
          >
            Como Funciona
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"#testemunhas"}
          >
            Testemunhas
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"#plans"}
          >
            Planos
          </Link>

          <Link
            className="text-sm font-medium hover:underline hover:text-[#76853e] underline-offset-4"
            to={"#cta"}
          >
            Comece Agora
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full flex items-center py-12 md:py-24 lg:py-32 xl:py-72 bg-gradient-to-b from-[#76853e] to-[#53631d]">
          <div className="w-full px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
            <div className="w-full space-y-2">
              <motion.h1
                {...textAnimation}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white"
              >
                Crie currículos profissionais em minutos
              </motion.h1>
              <motion.p
                {...subTitlesAnimation}
                className=" text-blue-100 md:text-xl"
              >
                Destaque-se no mercado de trabalho com currículos personalizados
                e de alta qualidade. Fácil, rápido e eficiente.
              </motion.p>
            </div>
            <motion.div {...buttonAnimation} className="space-x-4">
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
            </motion.div>
          </div>
        </section>

        {/* RECURSOS */}
        <section
          id="features"
          className="w-full flex items-center md:py-24 lg:py-32"
        >
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
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

        {/* COMO FUNCIONA */}
        <section className="py-16 bg-muted" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Como funciona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-center">
                    Escolha um modelo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Selecione entre nossa variedade de modelos profissionais.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-center">
                    Preencha suas informações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Insira seus dados pessoais, experiência e habilidades.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-center">
                    Personalize
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Ajuste cores, fontes e layout para se adequar ao seu estilo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <span className="text-3xl font-bold text-primary">4</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-center">
                    Baixe e candidate-se
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Exporte seu currículo em PDF e comece a se candidatar!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* TESTEMUNHAS */}
        <section className="py-16 bg-background" id="testemunhas">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              O que nossos usuários dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <p className="text-center mb-4 italic">
                    "Consegui meu emprego dos sonhos graças ao currículo que
                    criei com o CurriculoFácil!"
                  </p>
                  <p className="text-center font-semibold">- Maria S.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <p className="text-center mb-4 italic">
                    "Interface super intuitiva e modelos incríveis. Recomendo a
                    todos!"
                  </p>
                  <p className="text-center font-semibold">- João P.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <p className="text-center mb-4 italic">
                    "O melhor investimento que fiz na minha carreira. Obrigado,
                    CurriculoFácil!"
                  </p>
                  <p className="text-center font-semibold">- Ana L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section className="py-16 bg-muted" id="plans">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Planos e preços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Básico
                  </CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-3xl font-bold">Grátis</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Acesso a modelos básicos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Exportação em PDF</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Suporte por email</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Comece agora
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Pro
                  </CardTitle>
                  <CardDescription className="text-center">
                    <span className="text-3xl font-bold">R$ 29,90</span>
                    <span className="text-muted-foreground">/mês</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Todos os recursos do plano Básico</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Modelos premium</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Personalização avançada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>Múltiplos formatos de exportação</span>
                    </li>
                  </ul>
                  <Button className="w-full">Assine agora</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white"
          id="cta"
        >
          <div className="px-4 md:px-6">
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
