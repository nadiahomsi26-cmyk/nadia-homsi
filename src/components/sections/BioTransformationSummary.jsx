"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Leaf } from "lucide-react";

export default function ProgramIntroduction() {
  const pillars = [
    {
      icon: Heart,
      title: "Sanación emocional",
    },
    {
      icon: Sparkles,
      title: "Transformación consciente",
    },
    {
      icon: Leaf,
      title: "Bienestar integral",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-secondary font-handwritten tracking-wider mb-8">
            ¿Qué es Biotransformación?
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Biotransformación es un proceso de acompañamiento que integra
            cuerpo, mente, emociones y energía para ayudarte a comprender tu
            historia, fortalecer tu bienestar y generar cambios profundos,
            sostenibles en tu vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={30} className="text-primary" />
                </div>

                <h3 className="font-semibold text-xl text-secondary">
                  {pillar.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}