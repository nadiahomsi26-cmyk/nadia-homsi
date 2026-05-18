import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList } from "lucide-react";

export default function RegistrationSection({ formUrl }) {
  return (
    <section className="py-6 px-6">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-[#f8f6f3] shadow-2xl border border-secondary/10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 blur-3xl rounded-full" />

        <div className="relative z-10 px-8 py-16 lg:px-16 text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
            <ClipboardList className="w-10 h-10 text-secondary" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Inscríbete aquí
          </h2>

          <p className="text-lg lg:text-xl leading-relaxed text-[var(--text-dark)] max-w-3xl mx-auto mb-10">
            Completa el formulario para continuar con tu inscripción y seguir
            los pasos necesarios para reservar tu lugar.
          </p>

          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base shadow-xl hover:scale-105 transition-all duration-300 gap-2"
            >
              Ir al formulario
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            Serás redirigido a Google Forms para completar tu inscripción.
          </p>
        </div>
      </div>
    </section>
  );
}
