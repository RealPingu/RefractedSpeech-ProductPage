import { Mail, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#006D77] to-[#3D5254]">
      {/* "Encuentranos" Frame */}
      <section className="py-20 bg-[#EDF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#006D77] mb-4">
            Encuéntranos
          </h1>
          <p className="text-xl text-[#3D5254]">
            Estamos aquí para ayudarte. Contáctanos a través de cualquiera de
            estos medios.
          </p>
        </div>
      </section>

      {/* Contact Information Frame */}
      <section className="py-20 bg-gradient-to-r from-[#006D77] to-[#3D5254]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#EDF6F9] rounded-full p-4 mb-4">
                <Linkedin className="w-8 h-8 text-[#006D77]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#EDF6F9] mb-2">
                LinkedIn
              </h2>
              <Link
                href="https://www.linkedin.com/company/sinestesiaml"
                className="text-[#83C5BE] hover:text-[#EDF6F9] transition-colors"
              >
                @sinestesiaml
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#EDF6F9] rounded-full p-4 mb-4">
                <Instagram className="w-8 h-8 text-[#006D77]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#EDF6F9] mb-2">
                Instagram
              </h2>
              <Link
                href="https://www.instagram.com/sinestesiaml"
                className="text-[#83C5BE] hover:text-[#EDF6F9] transition-colors"
              >
                @sinestesiaml
              </Link>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#EDF6F9] rounded-full p-4 mb-4">
                <Mail className="w-8 h-8 text-[#006D77]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#EDF6F9] mb-2">
                Email
              </h2>
              <a
                href="mailto:contacto@sinestesiaml.com"
                className="text-[#83C5BE] hover:text-[#EDF6F9] transition-colors"
              >
                contacto@sinestesiaml.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Frame */}
      <section className="py-20 bg-[#EDF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#006D77] mb-8 text-center">
            Nuestra Ubicación
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2304678157!2d-70.60745548480174!3d-33.41755808078201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69995fb2a5%3A0x6e5e9e1f7e90c4d7!2sAv.%20Providencia%201760%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2s!4v1623345678901!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full h-[500px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
