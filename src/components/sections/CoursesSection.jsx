"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { Button } from "../ui/button";
import Modal from "../ui/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const workshopCloudinaryImages = [
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913491/taller1_thjfvy.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913491/taller2_utiuuj.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913491/taller3_hibszj.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913491/taller4_sii3oo.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913491/taller5_idzmke.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913490/taller6_t3uzqt.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913490/taller7_qczz8b.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913490/taller8_rzuzlx.webp",
  "https://res.cloudinary.com/dibuizxik/image/upload/v1776913490/taller9_f4nicc.webp",
];

const CoursesSectionCloudinary = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEventForModal, setSelectedEventForModal] = useState(null);
  const [workshopImages, setWorkshopImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const coursesCol = collection(db, "courses");
        const courseSnapshot = await getDocs(coursesCol);
        const courseList = courseSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const workshopsCol = collection(db, "workshops");
        const workshopSnapshot = await getDocs(workshopsCol);
        const workshopList = workshopSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const eventsCol = collection(db, "events");
        const eventSnapshot = await getDocs(eventsCol);

        const eventList = eventSnapshot.docs
          .map((doc) => {
            const data = doc.data();

            const timestamp = data.date?.toDate
              ? data.date.toDate()
              : new Date(data.date);

            return {
              id: doc.id,
              ...data,
              timestamp,
            };
          })
          .sort((a, b) => a.timestamp - b.timestamp);

        setCourses(courseList);
        setWorkshops(workshopList);
        setEvents(eventList);

        // Cloudinary images
        setWorkshopImages(workshopCloudinaryImages);
      } catch (err) {
        console.error(err);
        setError(
          "Error al cargar el contenido. Por favor inténtalo nuevamente.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (workshopImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % workshopImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [workshopImages]);

  const handleToggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formatDateForGoogleCalendar = (date) => {
    if (!(date instanceof Date)) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${year}${month}${day}T${hour}${minute}00`;
  };

  if (loading) {
    return (
      <section id="courses" className="py-16 text-center">
        <p className="text-3xl text-primary animate-pulse">
          Cargando cursos y talleres...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="courses" className="py-16 text-center">
        <p className="text-red-500 text-2xl">{error}</p>
      </section>
    );
  }

  return (
    <section id="courses" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-secondary mb-12">
          Nuestros Cursos y Talleres
        </h2>

        {/* CURSOS */}
        <div className="mb-20">
          <h3 className="text-3xl text-center font-bold mb-10 text-secondary">
            Cursos pre-grabados
          </h3>

          <div className="flex flex-wrap gap-8 justify-center">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl shadow-lg overflow-hidden border border-primary w-full md:w-[calc(40%-1rem)]"
              >
                <div className="relative h-96">
                  <Image
                    src={course.img || "/imgs/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4">{course.title}</h4>

                  <div
                    className={`md:hidden ${
                      expandedDescriptions[course.id] ? "block" : "hidden"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: course.description,
                    }}
                  />

                  <button
                    onClick={() => handleToggleDescription(course.id)}
                    className="md:hidden text-primary font-semibold mb-4"
                  >
                    {expandedDescriptions[course.id] ? "Ver menos" : "Ver más"}
                  </button>

                  {course.link ? (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Ver Curso</Button>
                    </a>
                  ) : (
                    <Button disabled>Próximamente</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TALLERES */}
        <div className="mb-20">
          <h3 className="text-3xl text-center font-bold mb-10 text-secondary">
            Talleres
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((item) => (
              <div key={item.id}>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {workshopImages.length > 0 && (
            <div className="relative w-full max-w-2xl h-72 mx-auto mt-10 rounded-xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0"
                  initial={{
                    x: "100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <Image
                    src={workshopImages[currentImageIndex]}
                    alt="Workshop"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Events Subsection */}
        <div>
          <h3 className="text-center text-3xl text-secondary font-bold mb-4 lg:mb-10">
            Próximos Eventos
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {events.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-lg shadow-lg overflow-hidden border border-primary w-full md:w-[calc(40%-1rem)]"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMyMjInLz48L3N2Zz4="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-95"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 p-4 backdrop-blur-sm">
                    <div
                      className="prose prose-sm prose-invert prose-cmsContent max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: event.description,
                      }}
                    />
                    {event.more && (
                      <div className="mt-3">
                        <button
                          className="text-white hover:underline underline-offset-4 text-center mt-4"
                          onClick={() => setSelectedEventForModal(event)}
                        >
                          Más info
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <h4 className="text-xl font-semibold mb-2 text-card-foreground">
                    {event.title}
                  </h4>
                  <div className="md:hidden my-2">
                    <button
                      onClick={() => handleToggleDescription(event.id)}
                      className="text-primary hover:underline text-sm font-semibold"
                    >
                      {expandedDescriptions[event.id]
                        ? "Ver menos descripción"
                        : "Ver más descripción"}
                    </button>
                  </div>
                  <div
                    className={`md:hidden prose prose-sm max-w-none my-2 ${
                      expandedDescriptions[event.id] ? "block" : "hidden"
                    } md:block`}
                    dangerouslySetInnerHTML={{
                      __html: event.description,
                    }}
                  />
                  {event.more && (
                    <div className="my-4">
                      <Button
                        variant="link"
                        className={`text-primary p-0 h-auto hover:underline text-sm font-semibold ${
                          expandedDescriptions[event.id] ? "block" : "hidden"
                        }`}
                        onClick={() => setSelectedEventForModal(event)}
                      >
                        Ver todos los detalles
                      </Button>
                    </div>
                  )}
                  {!isNaN(event.timestamp?.getTime()) ? (
                    (() => {
                      const startTime = event.timestamp;

                      const googleCalendarStartTime =
                        formatDateForGoogleCalendar(startTime);
                      const plainTextDescription = event.description
                        ? event.description.replace(/<[^>]*>?/gm, "")
                        : "";

                      const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                        event.title,
                      )}&dates=${googleCalendarStartTime}/${googleCalendarStartTime}&details=${encodeURIComponent(
                        plainTextDescription,
                      )}`;

                      return (
                        <a
                          href={googleCalendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-semibold mb-2 hover:underline inline-block"
                          title="Añadir al Google Calendar"
                        >
                          Fecha: {startTime.toLocaleDateString()} -{" "}
                          {startTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </a>
                      );
                    })()
                  ) : (
                    <a
                      href={`https://wa.me/59164903531?text=Hola%20Dra.%20Nadia,%20quisiera%20saber%20m%C3%A1s%20acerca%20de%20las%20fechas%20del%20evento%20${encodeURIComponent(
                        event.title,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mb-2"
                    >
                      <Button variant="outline" className="!text-sm" size="sm">
                        Consultar fechas
                      </Button>
                    </a>
                  )}

                  {event.hasInfoPage && (
                    <Button
                      variant="outline"
                      className="!text-sm ml-3"
                      size="sm"
                      onClick={() => router.push("/details")}
                    >
                      Ver detalles
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {events.length === 0 && !loading && (
              <p className="text-center text-muted-foreground w-full">
                No hay eventos programados por el momento.
              </p>
            )}
          </div>
        </div>

        <Modal
          isOpen={!!selectedEventForModal}
          onClose={() => setSelectedEventForModal(null)}
          title={selectedEventForModal?.title}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: selectedEventForModal?.more || "",
            }}
          />
        </Modal>
      </div>
    </section>
  );
};

export default CoursesSectionCloudinary;
