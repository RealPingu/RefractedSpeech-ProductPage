"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#006D77] via-[#262E2F] via-[#293637] via-[#3D5254] via-[#7C8889] to-[#EDF6F9] p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 w-[100px] h-[100px] md:w-[250px] md:h-[150px]">
            <Link href="/">
              <img
                src="/logos/logo-header.png"
                alt="refracted speech logo"
                width={500}
                height={300}
              />
            </Link>
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
            <img
              src="/refracted-images/refracted-cat.png"
              alt="refracted mascot"
              width={125}
              height={50}
            />
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
            </nav>
          </div>
        )}
      </header>
      <div className="h-[72px] md:h-[200px] bg-gradient-to-r from-[#006D77] to-[#3D5254] text-[#EDF6F9] py-12 "></div>
    </>
  );
}
