import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#006D77] to-[#3D5254] text-[#EDF6F9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Acerca de Refracted Speech
            </h2>
            <p className="text-sm mb-4">
              Refracted Speech es una aplicación que te ayuda a mejorar tus
              habilidades de habla y comunicación. Recupera tu conexion con el
              resto con nuestra tecnologia avanzada.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="X">
                <FaXTwitter className="h-6 w-6"></FaXTwitter>
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="h-6 w-6"></FaInstagram>
              </Link>
              <Link href="#" aria-label="Linkedin">
                <FaLinkedin className="h-6 w-6"></FaLinkedin>
              </Link>
              <Link href="#" aria-label="Linkedin">
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
                  href="#"
                  className="hover:text-[#20344b] transition-colors"
                >
                  RefractedSpeech en los Medios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Enfoque ODS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#20344b] transition-colors"
                >
                  Terminos y condiciones
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
                  <FaWhatsapp className="h-6 w-6"></FaWhatsapp>
                  <h1>+569999999</h1>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <FaInstagram className="h-6 w-6"></FaInstagram>
                  <h1>Instagram</h1>
                </div>
              </li>
              <li>
                <div className="flex space-x-4">
                  <MdOutlineEmail className="h-6 w-6"></MdOutlineEmail>
                  <h1>Refracted correo</h1>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-[#7C8889] flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/refracted-logo.png"
              alt="Refracted Speech logo"
              width={50}
              height={50}
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
