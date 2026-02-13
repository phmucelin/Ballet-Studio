import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Heart, MapPin, MessageCircle, Music, Star, Users } from "lucide-react";

// Imports from attached assets
import teacherImage from "@assets/527443881_17997662411802896_9044380676725333149_n_1770953559512.jpg";

const WHATSAPP_NUMBER = "5521968802915";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre as aulas de ballet.`;

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }, // Custom cubic bezier for smooth "out" ease
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-pink-100">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Falar no WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco!
        </span>
      </a>
      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100/50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="Ballet Ana Mucelin Logo"
              className="h-16 w-auto"
            />
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-pink-200/50 transition-all hover:scale-105"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agendar Aula Experimental
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/4">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-pink-100 to-transparent blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-30 pointer-events-none -translate-x-1/3 translate-y-1/4">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-100 to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 text-center md:text-left"
            >
              <motion.div variants={itemVariants}>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1]">
                  Descubra a <span className="text-primary italic">leveza</span> de dançar.
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                  Respeitamos todos os corpos, idades e ritmos. Uma abordagem personalizada pensada especialmente para sua história com a dança.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-xl shadow-pink-200/50" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Começar Agora
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-lg h-14 px-8 border-pink-200 text-pink-700 hover:bg-pink-50 hover:text-pink-800"
                  onClick={() => {
                    const element = document.getElementById('modalidades');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Conhecer Modalidades
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4 flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <Star className="w-4 h-4 text-primary fill-primary" />
                <Star className="w-4 h-4 text-primary fill-primary" />
                <Star className="w-4 h-4 text-primary fill-primary" />
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>Aulas personalizadas e em grupo</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] md:aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-pink-200 rounded-t-[10rem] rounded-b-3xl rotate-3 opacity-50" />
                <div className="absolute inset-0 bg-white rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={teacherImage}
                    alt="Professora Ana Mucelin"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards opacity-0">
                  <div className="bg-pink-50 p-2 rounded-full">
                    <Heart className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-lg">Ana Mucelin</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Professora</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Como funciona?</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa metodologia é centrada no aluno, não apenas na técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg shadow-pink-100/50 bg-white hover:translate-y-[-5px] transition-transform duration-300">
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Para Todos</h3>
                <p className="text-muted-foreground">
                  Respeitamos todos os corpos, idades e ritmos. O ballet é uma arte democrática e acessível.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg shadow-pink-100/50 bg-white hover:translate-y-[-5px] transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-primary" />
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Personalizado</h3>
                <p className="text-muted-foreground">
                  Aulas pensadas especialmente pra você, considerando sua história com a dança, seja ela longa ou inexistente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg shadow-pink-100/50 bg-white hover:translate-y-[-5px] transition-transform duration-300">
              <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Bem-estar</h3>
                <p className="text-muted-foreground">
                  Além da técnica, focamos na expressão, na postura e no bem-estar físico e mental que a dança proporciona.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section id="modalidades" className="py-24 px-4 bg-white relative">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                Quais as modalidades?
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos opções para todas as fases da vida, sempre com acompanhamento próximo e cuidadoso.
              </p>

              <ul className="space-y-4 mt-8">
                {[
                  "Baby Class (Iniciação lúdica)",
                  "Ballet Infantil",
                  "Ballet Juvenil",
                  "Ballet Adulto Iniciante",
                  "Ballet Adulto Intermediário",
                  "Ballet 60+ (Silver Swans)"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-muted aspect-[4/5] rounded-2xl relative overflow-hidden group shadow-xl">
              <img
                src="/nossa_bailarina.jpeg"
                alt="Sapatilhas de ballet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-2xl italic">"A dança é a linguagem escondida da alma."</p>
                <p className="text-sm mt-2 opacity-80">— Martha Graham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-12">Onde nos encontrar?</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pink-50 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Aulas Particulares</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No conforto da sua casa, no seu condomínio ou em outro espaço combinado que seja ideal para você.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pink-50 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Aulas em Grupo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Atualmente acontecem no <strong>Recreio dos Bandeirantes</strong>. Venha fazer parte da nossa turma!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Accordion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Dúvidas Frequentes</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-serif text-lg">Nunca fiz ballet, posso começar?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Com certeza! Nossas aulas são adaptadas para quem nunca dançou. Respeitamos seu ritmo e introduzimos a técnica de forma gradual e segura.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-serif text-lg">Preciso de roupa específica?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Para as primeiras aulas, basta uma roupa confortável de ginástica (legging e camiseta) e meias. Depois, orientamos sobre o uniforme e sapatilhas ideais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-serif text-lg">Como agendar uma aula experimental?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                É muito simples! Basta clicar no botão de WhatsApp aqui no site e falar diretamente conosco para verificar os horários disponíveis.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-20 bg-primary text-white text-center px-4">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif">Vamos dançar?</h2>
          <p className="text-xl opacity-90">
            Dê o primeiro passo para realizar seu sonho de dançar ballet.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full text-lg h-16 px-10 text-primary hover:text-primary font-semibold shadow-xl"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Falar com a Professora Ana
            </a>
          </Button>

          <div className="pt-12 mt-12 border-t border-white/20 text-sm opacity-70">
            <p>&copy; {new Date().getFullYear()} Ballet Ana Mucelin. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}