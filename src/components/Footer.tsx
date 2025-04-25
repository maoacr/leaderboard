import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tiny Leaderboard</h3>
            <p className="text-gray-300">
              Una aplicación para seguir el rendimiento de los jugadores
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Mercado
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-300">
              ¿Tienes alguna pregunta? Contáctanos en:
              <br />
              <a
                href="mailto:contacto@ejemplo.com"
                className="hover:text-white"
              >
                contacto@ejemplo.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Tiny Leaderboard. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
