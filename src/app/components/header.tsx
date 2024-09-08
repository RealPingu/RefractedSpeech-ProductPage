"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#006D77] via-[#262E2F] via-[#293637] via-[#3D5254] via-[#7C8889] to-[#EDF6F9] p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/refracted-logo.png"
                alt="refracted speech logo"
                width={100}
                height={25}
              />
            </Link>
            <span className="text-xl md:text-2xl font-bold text-[#EDF6F9] whitespace-nowrap">
              Refracted Speech
            </span>
          </div>
          <nav className="hidden md:flex flex-grow justify-center space-x-8">
            <Link
              href="/"
              className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
            >
              ¿Quiénes Somos?
            </Link>
            <Link
              href="/contact"
              className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
            >
              Contáctanos
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link
              href="/download"
              className="bg-[#006D77] text-[#EDF6F9] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#20344b] transition-colors"
            >
              Descarga Ahora
            </Link>
          </div>
          <button
            className="md:hidden text-[#006D77]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#EDF6F9] text-lg hover:text-[#20344b] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/download"
                className="bg-[#006D77] text-[#EDF6F9] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#20344b] transition-colors inline-block"
              >
                Descarga Ahora
              </Link>
            </nav>
          </div>
        )}
      </header>
      <div className="h-[72px] md:h-[200px] bg-gradient-to-r from-[#006D77] to-[#3D5254] text-[#EDF6F9] py-12 "></div>
    </>
  );
}
