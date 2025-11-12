// app/landing/page.tsx
export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="text-center bg-black/50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">
            Bienvenido a DecoPlatform
          </h1>
          <p className="text-white text-xl mb-6">
            La plataforma más completa para decoradores de eventos
          </p>
          <a
            href="#features"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Descubre más
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Características</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Diseños Profesionales</h3>
              <p>Diseña decoraciones increíbles con herramientas fáciles de usar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Colaboración</h3>
              <p>Comparte tus ideas y trabaja junto a otros decoradores o clientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Inspiración</h3>
              <p>Accede a plantillas, paletas de colores y conceptos listos para usar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Planes y Precios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-semibold mb-4">Básico</h3>
              <p className="text-3xl font-bold mb-4">$0</p>
              <p>Acceso limitado a herramientas de diseño.</p>
            </div>
            <div className="border p-6 rounded-lg shadow hover:shadow-lg transition text-center bg-blue-50">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-3xl font-bold mb-4">$19/mes</p>
              <p>Acceso completo a todas las funciones y plantillas.</p>
            </div>
            <div className="border p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <h3 className="text-2xl font-semibold mb-4">Profesional</h3>
              <p className="text-3xl font-bold mb-4">$49/mes</p>
              <p>Para decoradores que quieren mostrar su portafolio y trabajar con clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
          <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Nombre</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border rounded px-4 py-2"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Mensaje</label>
              <textarea
                className="w-full border rounded px-4 py-2"
                placeholder="Escribe tu mensaje"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
