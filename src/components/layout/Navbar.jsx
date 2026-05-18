"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/#sobre-mi", label: "Sobre Mí" },
  { href: "/#metodologia", label: "Metodología" },
  { href: "/#vision", label: "Visión" },
  { href: "/#courses", label: "Cursos" },
  { href: "/#partners", label: "Colaboraciones" },
  { href: "/#ig", label: "Instagram" },
  { href: "/#testimonies", label: "Testimonios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-[var(--primary)] fixed top-0 left-0 right-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link
          href="/"
          className="text-white font-handwritten text-xl md:text-2xl font-semibold tracking-tight"
        >
          Dra. Nadia Homsi
        </Link>

        <div className="space-x-1 xl:space-x-2 lg:flex hidden items-center">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`text-sm xl:text-[15px] px-3 py-2 h-auto hover:bg-white/10 hover:text-[var(--accent)] text-white font-medium`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
            <svg
              className="w-8 h-8 text-white fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d={
                  isOpen
                    ? "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                    : "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z"
                }
              />
            </svg>
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-primary flex items-center justify-center">
              <div className="text-center space-y-3 px-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={"text-xl w-full hover:bg-white/10 hover:text-[var(--accent)]"}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
