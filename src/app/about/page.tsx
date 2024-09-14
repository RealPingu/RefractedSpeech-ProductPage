import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#006D77] to-[#3D5254]">
      {/* Logo Frame */}
      <section className="py-20 bg-[#EDF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="/logos/logo-sinestesiaml.png"
            alt="SinestesiaML Logo"
            width={250}
            height={500}
            className="mx-auto"
          />
          <h1 className="text-4xl font-bold text-[#006D77] mb-4">
            SinestesiaML
          </h1>
          <p className="text-xl text-[#3D5254]">
            Innovando en el campo de la salud y la comunicación usando IA.
          </p>
        </div>
      </section>

      {/* Vision and Mission Frame */}
      <section className="py-20 bg-gradient-to-r from-[#006D77] to-[#3D5254]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-[#EDF6F9] mb-4">
                Nuestra Visión
              </h2>
              <p className="text-lg text-[#EDF6F9] mb-6">
                En SinestesiaML, imaginamos un mundo donde la comunicación
                efectiva esté al alcance de todos. Nuestra visión es crear
                tecnologías innovadoras que potencien las habilidades de
                comunicación, permitiendo a las personas expresarse con claridad
                y confianza en cualquier situación.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold text-[#EDF6F9] mb-4">
                Nuestra Misión
              </h2>
              <p className="text-lg text-[#EDF6F9] mb-6">
                Nuestra misión es desarrollar soluciones de inteligencia
                artificial que analicen, mejoren y optimicen la comunicación
                verbal. Nos esforzamos por crear herramientas accesibles y
                fáciles de usar que ayuden a las personas a superar barreras de
                comunicación, mejorar su confianza y alcanzar su máximo
                potencial en todas las áreas de la vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Frame */}
      <section className="py-20 bg-[#EDF6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#006D77] mb-12 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Inti Vidal",
                role: "Scrum Master",
                image:
                  "/refracted-images/refracted-inti.jpg?height=250&width=200",
              },
              {
                name: "Simón Appel",
                role: "Product Owner",
                image:
                  "/refracted-images/refracted-simon.jpg?height=250&width=200",
              },
              {
                name: "Joaquín García ",
                role: "ML Specialist",
                image:
                  "/refracted-images/refracted-dhost.jpg?height=250&width=200",
              },
              {
                name: "Matías Elgueta ",
                role: "QA Analyst",
                image:
                  "/refracted-images/refracted-utam.jpg?height=250&width=200",
              },
              {
                name: "Alan Yanine ",
                role: "Marketing Manager",
                image:
                  "/refracted-images/refracted-kuki.jpg?height=250&width=200",
              },
              {
                name: "Diego Soto",
                role: "Tech Lead",
                image:
                  "/refracted-images/refracted-diego.jpg?height=250&width=200",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#006D77] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#3D5254]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="font-light text-[#006D77] mb-8 mt-8 text-right">
            Los delantales son solo para uso temático del proyecto. SinestesiaML
            no representa un equipo médico de ninguna índole.
          </div>
        </div>
      </section>
    </div>
  );
}
