"use client";

import { StepCard } from "../cards/StepCard";
import { BiCalendarStar, BiBook, BiGroup } from "react-icons/bi";
import Image from "next/image";
import { couseModules } from "@/data/courseModules";
import ModuleCard from "../cards/ModuleCard";
import RegistrationSection from "./RegistrationSection";

export default function CourseDetailsSection() {
  const steps = [
    {
      text: "6 clases teóricas en vivo (2 horas cada una)",
      icon: <BiCalendarStar />,
    },
    { text: "2 sesiones de preguntas y respuestas", icon: <BiGroup /> },
    { text: "Ejercicios prácticos y tareas", icon: <BiBook /> },
    { text: "Material en PDF", icon: <BiBook /> },
    { text: "Meditaciones guiadas", icon: <BiCalendarStar /> },
    { text: "Sesiones prácticas grupales", icon: <BiGroup /> },
    { text: "Grupo privado de acompañamiento", icon: <BiGroup /> },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto lg:flex items-center lg:gap-2 pb-10">
        <h2 className="text-5xl font-bold text-center text-secondary font-handwritten tracking-wider mb-12">
          Resumen del programa
        </h2>
        <div className="w-full lg:w-2/3">
          <div className="bg-gray-50 rounded-2xl p-4 md:p-8 shadow-xl">
            <p className="text-[var(--text-dark)] mb-6">
              Este programa tiene una duración de <strong>8 semanas</strong>
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  number={index}
                  content={step.text}
                  icon={step.icon}
                  className="md:p-2 py-2"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 lg:top-32 overflow-hidden rounded-2xl mt-8 w-fit mx-auto">
          <Image
            src="/imgs/biotransformacionDuracion.png"
            alt="Duracion de biotransformacion"
            width={800}
            height={800}
            className="rounded-2xl shadow-lg transition-transform duration-700 scale-110 hover:scale-100"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center m-10">
        {couseModules.map((data, index) => (
          <ModuleCard
            key={index}
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>

      <RegistrationSection formUrl={"https://docs.google.com/forms/d/e/1FAIpQLSeRCYvLlmctXkelm4HJbUZX4EoMkRsd_7GXnVN2aK766bBIow/viewform"} />
    </div>
  );
}
