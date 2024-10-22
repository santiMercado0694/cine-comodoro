const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl"> {/* Agregado max-w-4xl para limitar el ancho */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sección de Información de Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p>Teléfono: (297) 111-1111</p>
            <p>Email: contacto@cinecomodoro.com</p>
            <p>Dirección: San Martin 999, Comodoro Rivadavia</p>
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
              <a href="https://api.whatsapp.com/send/?phone=5492974088302&text&type=phone_number&app_absent=0" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/12635/12635043.png" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/cinescomodoro/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/cinecr" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png" alt="Facebook" className="w-6 h-6" />
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
