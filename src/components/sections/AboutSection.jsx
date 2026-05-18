import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="py-10 bg-gradient-to-b from-white to-[#f8f6f3]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-secondary font-handwritten">
            Un poco sobre mí
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Mi historia
          </h3>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-[var(--text-dark)]">
              Soy Médica Cirujana, formada en la Universidad
              Mayor de San Simón. Me gradué como médica
              convencional y luego continué mi camino en
              Argentina con la intención de especializarme en
              Neurología. Sin embargo, durante ese proceso
              —tras una crisis emocional y física— descubrí el
              mundo de las terapias alternativas, y fue a través
              de la meditación como herramienta de
              transformación que todo empezó a cambiar.
            </p>

            <p className="text-lg leading-relaxed text-[var(--text-dark)]">
              Al experimentar en mí misma, comprendí que la
              sanación no siempre requiere tratamientos
              farmacológicos que, en muchos casos, terminan
              dañando nuestro sistema. Mi salud mejoró
              notablemente, mi autoestima se fortaleció, mis
              relaciones se volvieron más sanas, y empecé a
              sentir una energía y un propósito que antes no
              conocía.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[650px]">
            <Image
              src="/imgs/nadia.jpeg"
              alt="Dra. Nadia meditando"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <p className="text-2xl font-bold text-secondary mb-2">
                Médica y Terapeuta holística
              </p>

              <p className="text-lg italic text-[var(--text-dark)] leading-relaxed">
                “Creo profundamente en el amor propio como la
                base de todo proceso de sanación.”
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-secondary mb-6">
              La transformación
            </h3>

            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-[var(--text-dark)]">
                Esa transformación profunda me llevó a tomar
                una decisión importante: renunciar al hospital
                en el que trabajaba. Necesitaba compartir y
                aplicar todo lo que había aprendido, pero
                dentro del sistema convencional no encontraba
                el espacio para hacerlo.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]">
                Este camino me llevó a cofundar el Centro
                Sananda, un espacio donde integramos la
                medicina convencional con terapias
                alternativas mencionadas además de
                electrobiomagnetismo, la energía escalar, la
                danzaterapia, entre otros.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]">
                Hoy, reúno todo lo aprendido y vivido para
                crear mis propios métodos y protocolos.
                Acompaño a cada persona con empatía y amor,
                desde el corazón.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)]">
                Creo firmemente en el amor propio como la base
                de todo proceso de sanación, en la posibilidad
                de generar cambios profundos y duraderos, y en
                la capacidad de transformar el dolor en amor.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-6">
                Formación y especialidades
              </h3>

              <p className="text-lg leading-relaxed text-[var(--text-dark)] mb-6">
                Hoy soy especialista en Bioneuroemoción,
                certificada por el Enric Corbera Institute
                (España), certificada en Biodecodificación por
                el Centro Argentino de Psicología Integral, y en
                Psiconeuroinmunología por la Universidad
                Tecnológica de España.
              </p>

              <p className="text-lg leading-relaxed text-[var(--text-dark)] mb-6">
                Además, cuento con diversas certificaciones en
                terapias energéticas y actualmente curso la
                certificación en Somatic Experiencing en el
                Trauma Institute.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Bioneuroemoción",
                "Biodecodificación",
                "Psiconeuroinmunología",
                "Terapias energéticas",
                "Somatic Experiencing",
                "Meditación",
                "Sanación emocional",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2 rounded-full border border-secondary text-secondary text-sm font-medium tracking-wide bg-white transition-all duration-300 hover:bg-secondary hover:text-white hover:shadow-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[650px]">
            <Image
              src="/formacion.jpg"
              alt="Dra. Nadia meditando"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <p className="text-2xl font-bold text-secondary mb-2">
               “Sanar es posible cuando nos atrevemos a mirar más
              allá.”
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}