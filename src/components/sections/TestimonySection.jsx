"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const testimonials = [
  {
    text: "La verdad llega del inconscientemente y de tus sombras, tus sesiónes me ayudaron a mirar a esa oscuridad, y con cada sesión observarla, liberarla y equilibrar mi vibración ✨Ahora se mucho más de mi de lo que sabia antes sobre mi! Esto me permite ser amable, paciente y más amorosa conmigo misma👑♥️ como efectos secundarios a nivel físico mejoró mi sueño, mi alimentación y nuevas oportunidades laborales llegaron a mi vida! Gracias querida Nadia por la confianza, por tu Luz y tu labor 🫶🏻💝 cambias vida con tu magia 💯top!",
    author: "Candy",
    country: "Portugal",
  },
  {
    text: "Desde que empecé hacer terapia en Sananda holística realmente marcó una diferencia en mi vida. Las terapias que realizamos me ayudaron a sentirme más equilibrado, tanto física como emocionalmente. Me sentí comprendido y acompañado durante todo el proceso, lo cual me dio mucha confianza. Gracias a tu enfoque integral, logré mejorar en áreas donde sentía estancamiento, y aprendí a conectar mejor conmigo mismo. Estoy muy agradecido por todo lo que me aporto la Dra. Nadia Sin duda recomendaría sus terapias a quienes busquen una transformación real en sus vidas.",
    author: "Angelo",
    country: "Bolivia",
  },
  {
    text: "A través de una amiga, conocí a Nadia, con quien exploré la pregunta de si deseaba ser madre? Y si algo me estaba bloqueando en ese proceso? En la primera sesión, nos adentramos profundamente en mi subconsciente y pude ver claramente que el deseo de ser madre era el anhelo de mi alma. También pude identificar los miedos que me estaba bloqueando. En las sesiones posteriores, trabajamos sobre esos miedos, conectando con mi niña interior y acompañándola a verlo de otra manera.... (continuación en el siguiente testimonio)",
    author: "Arwa",
    country: "Países Bajos",
  },
  {
    text: "Realmente re-programar tu mente. Las sesiones siempre me ofrecieron exactamente lo que necesitaba en cada momento. Nadia trabaja con algo mucho más grande que ella misma y me acompaña con una facilidad y sin juicio, sabiendo exactamente qué decir en el momento justo. Inicialmente tomé las sesiones de forma presencial, pero cuando regresé a mi país, decidí continuar las sesiones en línea. Y me sentí muy feliz de poder anunciar, en una de nuestras primeras sesiones en línea, que estaba embarazada. No podía creerlo!.... (continuación en el siguiente testimonio)",
    author: "Arwa",
    country: "Países Bajos",
  },
  {
    text: "...tengo 43 años y todo se orquestó de una manera tan hermosa después de las sesiones con Nadia; estaba lista y abierta para recibir a esta alma el dia que regrese devuelta a mi pareja. Estoy muy agradecida de que Nadia haya cruzado mi camino, y ahora, después de tres meses, la he pedido que continúe acompañándome con un par de sesiones para ayudarme a prepararme en este hermoso viaje de ser madre, entregándome y siendo un canal para esta nueva personita que viene a la tierra.",
    author: "Arwa",
    country: "Países Bajos",
  },
  {
    text: "Hola Nadia!! Soy Candy te cuento que cambié de número, sólo te quería agradecer por todo tú trabajo y el amor que le pones a lo que haces, no sabes todo lo que me ayudaste a entender y sanar 🩷🫶🏻🪄 si alguna vez quieres enseñar lo que haces seré tu primera inscrita☺️ te mando un abrazo!!",
    author: "Candy",
    country: "Portugal",
  },
  {
    text: "Mi reconocimiento y gratitud a la dra. nadia homsi. medico y terapista bioneuroemocional y terapia melquizedec terapias que recibí a distancia estoy en bruselas. felicito a esta servidora de la humanidad por su carisma y profecionalismo. además de su paciencia. estas terapias han sido de mucha ayuda para mí… para liberar. sanar. y dejar ir. … debo también comentar que toda terapia sirve para ayudarnos con los otros tratamientos. es una otra herramienta maravillosa al servicio … gracias abrazos de luz divina.",
    author: "Mimita Mal Chal",
    country: "Bruselas, Bélgica",
  },
  {
    text: "Yo vivo en Bruselas-Bélgica tuve varias terapias a distancia, las recomiendo con certeza fueron de mucho crecimiento espiritual y sanación para mí…. Un encuentro con mi ser superior una hermosa experiencia de vida maravillosa. Agradezco de manera muy especial a la Dra. Nadia Homsi muy profesional. ¡Estoy muy contenta! 🍀 Namaste 🍀",
    author: "Tatiana Maldonado",
    country: "Bruselas, Bélgica",
  },
  {
    text: "La Terapia Melquizedec aun hecha a gran distancia con la Dra Nadia Homsi ha sido una experiencia maravillosa y efectiva para sanar trauma emocional. La recomiendo 100 % 🙏",
    author: "Jaqueline Maldonado",
    country: "Estados Unidos",
  },
  {
    text: "Buen día Dra Nadia. Quisiera agradecerle por mis terapias con usted. Al inicio ingresé con muchos miedos, angustia, dudas y timidez. Después de su análisis y la ayuda con sus sesiones pude aprender y ver hechos que daba por sanados y cerrados. En cada sesión pude ver partes importantes de mi vida actual y pasada que pedían ser sanadas. Actualmente ya puedo dormir tranquila, mis sueños me ayudan a llevar guía en la parte mía que necesita atención y además pude soltar el control con las personas que me rodean. La relación con mis padres y familia mejoró demasiado y aún sigue en mejora. Mi energía se siente despierta y calmada. Le agradezco por ayudarme a ver y entender lo que no podía yo misma. Gracias infinitas ✨",
    author: "Beatriz Colque",
    country: "Bolivia",
  },
  {
    text: "Hola, soy Eliana, tengo 34 años y médico de profesión. Quiero contarles sobre mi experiencia y agradecer inmensamente a Nadia, quien sin su ayuda no podría haber salido de donde yo me encontraba. Hoy soy otra persona comparado al primer día de sesión que tuve con Nadia. Esa mujer que se sentía muerta en vida por todo lo que estaba atravesando ahora está viva nuevamente, con ganas de ser una mejor versión de mí y con ganas de superarse todos los días. Nadia me enseñó la importancia de tener una buena salud mental y sobre todo amor propio. Recomiendo sin duda alguna el trabajo que Nadia realiza, es muy profesional y tiene todas las herramientas para ayudarte a salir adelante. Gracias por todo Nadia. Dios te bendiga.",
    author: "Eliana",
    country: "Bolivia",
  },
];

export default function TestimonySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonies" className="relative overflow-hidden py-6 md:py-8">
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[var(--secondary-color)] via-[#5e3732] to-[var(--primary)]" />

      <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <p className="text-white/80 text-lg md:text-xl mb-4">
            Historias reales
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Lo que dicen nuestros pacientes
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45 }}
              className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12"
            >
              <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed mb-10">
                “{testimonials[currentIndex].text}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm">
                  <FaCheck />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].country}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-600 ${
                currentIndex === index ? "w-10 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
