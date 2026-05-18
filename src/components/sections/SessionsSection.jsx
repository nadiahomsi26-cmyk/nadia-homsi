"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaHospital,
  FaGlobeAmericas,
  FaSyncAlt,
} from "react-icons/fa";
import { StepCard } from "../cards/StepCard";

const SessionType = {
  PRESENCIAL: "presencial",
  DISTANCIA: "distancia",
  SEGUIMIENTO: "seguimiento",
};

const SessionsSection = () => {
  const [activeTab, setActiveTab] = useState(
    SessionType.PRESENCIAL,
  );

  const sessionContent = {
    [SessionType.PRESENCIAL]: {
      title:
        "Primera sesión presencial en el Centro Sananda",
      steps: [
        "Armamos tu historia clínica, vemos todos los puntos físicos y emocionales a trabajar.",
        "Escaneo de estado corporal, con escáner cuántico.",
        "Se te entrega una receta específica con puntos a mejorar, en alimentación, suplementos, hábitos saludables específico para tu sistema nervioso.",
        "Pasas a sesión de desintoxicación por 15 minutos en máquina especial con sales minerales y contacto a tierra.",
        "Pasas a la camilla donde se colocan imanes en regiones específicas, en conjunto con musicoterapia y energía escalar.",
      ],
      icon: <FaHospital />,
    },

    [SessionType.DISTANCIA]: {
      title: "Primera sesión a distancia",
      steps: [
        "Armamos tu historia clínica, vemos todos los puntos físicos y emocionales a trabajar.",
        "Indagamos profundamente en el origen de la situación física o emocional con bioneuroemoción y biodeodificación.",
        "Se te entrega una receta específica con puntos a mejorar, en alimentación, suplementos, hábitos saludables.",
      ],
      icon: <FaGlobeAmericas />,
    },

    [SessionType.SEGUIMIENTO]: {
      title: "Seguimiento y sesiones posteriores",
      content:
        "Trabajamos los puntos específicos emocionales o físicos para cada paciente. Las sesiones se realizan una vez por semana. Si el problema es principalmente emocional, utilizamos las técnicas mencionadas en Mi metodología de manera combinada e integrada de acuerdo a cada caso. Durante todo el proceso te acompaño y hago un seguimiento, también te indico ejercicios y tareas para que tengas un cambio profundo y duradero.",
      icon: <FaSyncAlt />,
    },
  };

  const TabButton = ({ type, icon, label }) => (
    <button
      onClick={() => setActiveTab(type)}
      className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 border ${
        activeTab === type
          ? "bg-secondary text-white shadow-lg -translate-y-1 border-secondary"
          : "bg-white text-secondary border-secondary/20 hover:bg-secondary/5"
      }`}
    >
      <span className="text-xl">{icon}</span>

      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <section
      id="sessions"
      className="container mx-auto py-4 md:py-8 lg:py-8 px-6"
    >
      <h2 className="text-5xl font-bold text-center text-secondary font-handwritten tracking-wider mb-12">
        ¿Cómo son las sesiones conmigo?
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-12 w-full">
        <TabButton
          type={SessionType.PRESENCIAL}
          icon={<FaHospital />}
          label="Sesión Presencial"
        />

        <TabButton
          type={SessionType.DISTANCIA}
          icon={<FaGlobeAmericas />}
          label="Sesión a Distancia"
        />

        <TabButton
          type={SessionType.SEGUIMIENTO}
          icon={<FaSyncAlt />}
          label="Seguimiento"
        />
      </div>

      <div className="max-w-7xl mx-auto lg:flex items-center lg:gap-12">
        <div className="w-full lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-50 rounded-2xl p-4 md:p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl text-secondary">
                    {sessionContent[activeTab].icon}
                  </span>

                  <h3 className="text-2xl font-semibold text-secondary">
                    {sessionContent[activeTab].title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {sessionContent[activeTab].steps ? (
                    sessionContent[activeTab].steps.map(
                      (step, index) => (
                        <StepCard
                          key={index}
                          number={index}
                          content={step}
                        />
                      ),
                    )
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-lg text-[var(--text-dark)] leading-relaxed"
                    >
                      {sessionContent[activeTab].content}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:w-1/3 overflow-hidden rounded-2xl mt-8 w-fit mx-auto">
          <Image
            src="/imgs/sesiones.jpeg"
            alt="Sesiones terapéuticas en camilla"
            width={400}
            height={600}
            className="rounded-2xl shadow-lg transition-transform duration-700 scale-110 hover:scale-100"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={() =>
            (window.location.href = "#contact")
          }
          className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          Agenda tu sesión ahora
        </button>
      </div>
    </section>
  );
};

export default SessionsSection;