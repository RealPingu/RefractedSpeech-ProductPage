import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#006D77] to-[#3D5254] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#EDF6F9] animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                fontSize: `${Math.random() * 2 + 1}rem`,
              }}
            >
              🎧 🔊 🎤
            </div>
          ))}
        </div>

        {/* App description */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="bg-[#EDF6F9] rounded-full p-3 mr-3">
                <svg
                  className="w-8 h-8 text-[#006D77]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-[#EDF6F9]">
                Refracted Speech
              </h1>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#EDF6F9] mb-4">
              Aplicación para la <span className="text-[#83C5BE]">ayuda</span> y{" "}
              <span className="text-[#83C5BE]">prediagnóstico</span> de tu voz
              con tecnología moderna de{" "}
              <span className="text-[#83C5BE]">Inteligencia Artificial</span>
            </h2>
            <p className="text-xl text-[#EDF6F9] mb-6">
              Da el paso que te falta para mejorar y encontrar la ayuda que
              necesitas.
            </p>
            <Link
              href="https://www.feriadesoftware.cl/"
              className="bg-[#EDF6F9] text-[#006D77] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#83C5BE] transition-colors inline-block"
            >
              Feria de software 2024
            </Link>
          </div>

          {/* Right side image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-[500px] bg-[#EDF6F9] rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
              <div className="absolute top-0 left-0 right-0 h-6 bg-[#006D77] flex items-center justify-end pr-2">
                <div className="w-2 h-2 rounded-full bg-[#EDF6F9]"></div>
              </div>
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="text-[#006D77] text-lg font-semibold">
                  Refracted Speech
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-[#83C5BE] rounded w-3/4"></div>
                  <div className="h-2 bg-[#83C5BE] rounded w-1/2"></div>
                  <div className="h-2 bg-[#83C5BE] rounded w-5/6"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#006D77] rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#EDF6F9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-16 bg-[#EDF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#006D77] mb-4 text-center">
            ¿ Qué es RefractedSpeech?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <p className="text-lg text-[#3D5254] mb-4 text-justify">
                Discurso Acorde al Video.
              </p>
              <p className="text-lg text-[#3D5254] text-justify">Parrafo</p>
            </div>
            <div className="md:w-3/4 lg:w-2/3 mt-10 md:mt-10">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[350px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-gradient-to-br from-[#006D77] to-[#3D5254]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#EDF6F9] mb-8 text-center">
            ¿A quién ayudará?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#EDF6F9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#006D77] mb-2">70%</div>
              <Link
                href="https://www.dovepress.com/parkinsons-disease-associated-dysarthria-prevalence-impact-and-managem-peer-reviewed-fulltext-article-JPRLS"
                className="bg-[#EDF6F9] text-[#006D77] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#83C5BE] transition-colors inline-block"
              >
                De las personas con Parkinson desarrollan disartria.
              </Link>
            </div>
            <div className="bg-[#EDF6F9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#006D77] mb-2">
                30.000+
              </div>
              <Link
                href="https://www.latercera.com/que-pasa/noticia/por-que-en-chile-se-habla-mal/4DE374IKEJG3XP4XR33LJRJE2I/"
                className="bg-[#EDF6F9] text-[#006D77] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#83C5BE] transition-colors inline-block"
              >
                Personas tienen algún grado de disartria en Chile.
              </Link>
            </div>
            <div className="bg-[#EDF6F9] rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#006D77] mb-2">50%</div>
              <Link
                href="https://www.stroke.org.uk/research/speech-after-stroke-recovery-study#:~:text=Around%2050%25%20of%20stroke%20survivors,clear%2C%20slurred%20or%20sounds%20different."
                className="bg-[#EDF6F9] text-[#006D77] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#83C5BE] transition-colors inline-block"
              >
                De las personas pueden sufrir disartria después de un derrame
                cerebral.
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-[#EDF6F9] mb-4">
              Los estudios indican mejoras significativas con el ejercicio
              constante.
            </h3>
            <p className="text-lg text-[#EDF6F9] mb-6">
              Refracted Speech te ayuda a mantenerte activo y mejorar tu calidad
              de vida para <span className="text-[#83C5BE]"> recuperar </span>{" "}
              tu conexión con tus seres queridos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
