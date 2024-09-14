import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#006D77] to-[#3D5254] text-[#EDF6F9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Acerca de Refracted Speech
            </h2>
            <p className="text-sm mb-4">
              Refracted Speech es una aplicación que te ayuda recuperar tu
              capacidad del habla. Recupera tu conexion con el resto con nuestra
              tecnologia avanzada.
            </p>
            <div className="flex space-x-4">
              <Link href="mailto:sinestesia.ml@gmail.com" aria-label="Email">
                <MdOutlineEmail className="h-6 w-6"></MdOutlineEmail>
              </Link>
              <Link
                href="https://www.instagram.com/refractedspeech/"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6"></FaInstagram>
              </Link>
              <Link
                href="https://www.linkedin.com/in/refracted-speech/"
                aria-label="Linkedin"
              >
                <FaLinkedin className="h-6 w-6"></FaLinkedin>
              </Link>
              <Link href="#" aria-label="Youtube">
                <FaYoutube className="h-6 w-6"></FaYoutube>
              </Link>
            </div>
          </div>
          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Enlaces</h2>
            <ul className="list-disc space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex space-x-4">
                  <MdOutlineEmail className="h-6 w-6"></MdOutlineEmail>
                  <Link
                    href="mailto:sinestesia.ml@gmail.com"
                    aria-label="Email"
                  >
                    sinestesia.ml@gmail.com
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <FaInstagram className="h-6 w-6"></FaInstagram>
                  <Link
                    href="https://www.instagram.com/refractedspeech/"
                    aria-label="Instagram"
                  >
                    @refractedspeech
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <FaLinkedin className="h-6 w-6"></FaLinkedin>
                  <Link
                    href="https://www.linkedin.com/in/refracted-speech/"
                    aria-label="Linkedin"
                  >
                    Linkedin
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <FaYoutube className="h-6 w-6"></FaYoutube>
                  <Link href="#" aria-label="Youtube">
                    Youtube
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/* Logo USM - Feria */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Somos parte</h2>
            <div className="flex space-x-4 items-center">
              <img
                src="/logos/logo-feria.svg"
                alt="logo-feria"
                width={150}
                height={200}
                className="mr-2"
              />
              <img
                src="/logos/logo-usm.svg"
                alt="logo-usm"
                width={150}
                height={200}
                className="mr-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-[#7C8889] flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/logos/logo-header.png"
              alt="Refracted Speech logo"
              width={100}
              height={100}
              className="mr-2"
            />
            <span className="text-2xl font-bold">Refracted Speech</span>
          </div>
          <p className="text-sm">
            © 2023 - {new Date().getFullYear()} Refracted Speech. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
