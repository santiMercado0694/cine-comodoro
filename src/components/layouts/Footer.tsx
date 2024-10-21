const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sección de Información de Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: contacto@cinecomodoro.com</p>
            <p>Dirección: Calle Falsa 123, Ciudad</p>
          </div>
          {/* Sección de Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-2">Enlaces Rápidos</h3>
            <ul className="space-y-1">
              <li>
                <a href="/sobre-nosotros" className="hover:underline">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/cartelera" className="hover:underline">
                  Cartelera
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/política-de-privacidad" className="hover:underline">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
          {/* Sección de Redes Sociales */}
          <div>
            <h3 className="text-lg font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.451C0 23.204.796 24 1.775 24h20.451C23.204 24 24 23.204 24 22.225V1.775C24 .796 23.204 0 22.225 0zm-3.657 24h-3.335V14.69h3.337l.5-3.914h-3.836V8.5c0-1.138.316-1.915 1.955-1.915h2.083v-3.552a29.048 29.048 0 0 0-3.254-.164c-3.217 0-5.421 1.96-5.421 5.539v3.03H8.137v3.914h3.335V24z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c-6.03 0-10.961 4.933-10.961 10.961S5.97 24.085 12 24.085s10.961-4.933 10.961-10.961S18.03 2.163 12 2.163zm0 18.183a7.217 7.217 0 1 1 0-14.433 7.217 7.217 0 0 1 0 14.433zm-.004-11.326a2.092 2.092 0 1 0 0 4.183 2.092 2.092 0 0 0 0-4.183zm3.867 1.678c-.848 0-1.627.336-2.223.887-.596-.551-1.375-.887-2.223-.887-1.682 0-3.043 1.367-3.043 3.042 0 1.676 1.367 3.042 3.043 3.042 1.682 0 3.042-1.366 3.042-3.042 0-1.675-1.367-3.042-3.042-3.042z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.673 7.417c-.63.28-1.308.47-2.017.56.726-.43 1.286-1.11 1.55-1.938-.68.405-1.438.695-2.246.853-.637-.677-1.54-1.1-2.547-1.1-1.93 0-3.49 1.56-3.49 3.49 0 .27.03.53.08.78-2.897-.145-5.47-1.53-7.194-3.65-.3.515-.47 1.118-.47 1.756 0 1.21.615 2.28 1.55 2.91-.57-.02-1.1-.173-1.563-.43v.04c0 1.691 1.196 3.1 2.786 3.42-.29.08-.596.12-.91.12-.22 0-.44-.021-.655-.06.44 1.384 1.71 2.39 3.22 2.42-1.178.925-2.61 1.47-4.2 1.47-.272 0-.54-.016-.803-.047 1.48.952 3.24 1.5 5.12 1.5 6.13 0 9.49-5.08 9.49-9.49 0-.14-.002-.29-.007-.43.652-.47 1.23-1.05 1.68-1.71z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cine Comodoro. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
