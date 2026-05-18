import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] to-white min-h-screen flex items-center pt-0">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 py-6 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <Image
              src="/logo colores.png"
              alt="Dra. Nadia Homsi"
              width={300}
              height={140}
              className="mb-6 mx-auto lg:mx-0"
              priority
            />

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-secondary mb-6">
              Sanar desde el
              <span className="text-primary block">
                cuerpo, mente y emoción
              </span>
            </h1>

            <p className="max-w-2xl text-lg lg:text-xl leading-relaxed text-[var(--text-dark)] mb-8 mx-auto lg:mx-0">
              Te acompaño a encontrar y tratar el origen de
              las patologías físicas y emocionales.
              <br />
              <br />
              Con un enfoque integral cuerpo, mente,
              emociones y espíritu.
            </p>          

            <a
              href="https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20más%20acerca%20de..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base shadow-xl hover:scale-105 transition-all duration-300"
              >
                Consulta Ahora
              </Button>
            </a>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center z-10">
            <div className="relative w-[320px] lg:w-[540px] aspect-square flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="200,20 340,100 340,300 200,380 60,300 60,100"
                  fill="rgba(210, 140, 46, 0.12)"
                />

                <polygon
                  points="200,40 320,110 320,290 200,360 80,290 80,110"
                  fill="none"
                  stroke="rgba(210, 140, 46, 0.35)"
                  strokeWidth="3"
                />

                <circle
                  cx="310"
                  cy="120"
                  r="55"
                  fill="rgba(210, 140, 46, 0.08)"
                />
              </svg>

              <div className="relative z-10 w-full h-full">
                <Image
                  src="/nadia1.png"
                  alt="Dra. Nadia Homsi"
                  fill
                  priority
                  className="object-contain scale-105 drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}