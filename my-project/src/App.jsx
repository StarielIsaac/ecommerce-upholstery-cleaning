import logo from "../src/assets/logo.jpg";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
// import { FiPhone, FiMail } from 'react-icons/fi';
import { IoMdPhonePortrait, IoMdMail } from "react-icons/io";
import { FaBars, FaTimes, FaHome, FaToolbox } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main
        id="home"
        className="relative bg-cover bg-bottom"
        style={{
          backgroundImage: "url('/src/assets/test5.jpg')",
        }}
      >
        <header className="bg-slate-700 py-2 px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-5">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <div className="text-white font-light text-xl md:text-3xl tracking-widest">
              Motta Clean
            </div>
          </div>

          {/* Hambúrguer do menu para telas menores */}
          <div className="md:hidden">
            {isOpen ? (
              <FaTimes
                onClick={handleMenuToggle}
                className="text-white text-2xl cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={handleMenuToggle}
                className="text-white text-2xl cursor-pointer"
              />
            )}
          </div>

          <nav
            className={`md:flex md:space-x-5 ${isOpen ? "block" : "hidden"}`}
          >
            <a
              href="#home"
              className="text-white text-lg group relative focus:text-gray-200"
            >
              <FaHome className="inline-block mr-2 text-xl" />
              Home
            </a>
            <a
              href="#servicos"
              className="text-white text-lg group relative focus:text-gray-200"
            >
              <FaToolbox className="inline-block mr-2 text-xl" />
              Serviços
            </a>
            <a
              href="#contatos"
              className="text-white text-lg group relative focus:text-gray-200"
            >
              <FaEnvelope className="inline-block mr-2 text-xl" />
              Contatos
            </a>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center h-screen">
          <div className="md:w-1/2 bg-slate-800 bg-opacity-70 p-8 rounded-lg shadow-2xl text-center transform hover:scale-105 transition-transform">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Renove sua casa com estofados de qualidade!
            </h2>
            <p className="text-white text-lg md:text-xl">
              Oferecemos uma ampla variedade de estofados retráteis e
              reclináveis de qualidade superior, projetados para atender às suas
              necessidades.
            </p>
            <p className="text-white text-lg md:text-xl mt-4">
              Tenha o conforto e a sofisticação que você merece.
            </p>
          </div>
          <a
            href="#contatos"
            className="bg-blue-500 text-white text-lg font-sans font-semibold mt-4 px-6 py-3 hover:bg-blue-600 transition-colors"
          >
            Fale Comigo
            
          </a>
        </div>
      </main>

      <div className="flex flex-col md:flex-row md:space-x-14 mx-20 my-20">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-5">Item 1</h3>
          <p className="text-gray-700 text-center text-xl mb-7">
            Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
            muito carinho, desde a seleção das espumas e madeiras até a escolha
            dos tecidos para o acabamento.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-5">Item 2</h3>
          <p className="text-gray-700 text-center text-xl mb-7">
            Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
            muito carinho, desde a seleção das espumas e madeiras até a escolha
            dos tecidos para o acabamento.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-5">Item 3</h3>
          <p className="text-gray-700 text-center text-xl mb-7">
            Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
            muito carinho, desde a seleção das espumas e madeiras até a escolha
            dos tecidos para o acabamento.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-5">Item 4</h3>
          <p className="text-gray-700 text-center text-xl mb-7">
            Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
            muito carinho, desde a seleção das espumas e madeiras até a escolha
            dos tecidos para o acabamento.
          </p>
        </div>
      </div>

      <section
        id="servicos"
        className="bg-[url('/src/assets/test4.jpg')] py-16 bg-auto"
      >
        <div className="container mx-auto">
          <h2 className="font-medium text-4xl my-14 text-center text-gray-800 tracking-wide">
            Serviços:
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span>
                  <FaToolbox className="inline-block text-xl text-white" />
                </span>
              </div>
              <h3 className="text-xl font-mono font-semibold mb-4">Limpeza</h3>
              <p className="text-gray-700 text-center">
                Limpeza profissional de estofados, tapetes, carpetes, colchões,
                persianas, carrinho de bebê, veículos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span>
                  <FaToolbox className="inline-block text-xl text-white" />
                </span>
              </div>
              <h3 className="text-xl  font-mono font-semibold  mb-4">
                Hipermeabilização
              </h3>
              <p className="text-gray-700 text-center">
                Proteção contra umidade e infiltrações em estofados e colchões.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span>
                  <FaToolbox className="inline-block text-xl text-white" />
                </span>
              </div>
              <h3 className="text-xl font-mono font-semibold mb-4">
                Lavagem a Seco
              </h3>
              <p className="text-gray-700 text-center">
                Lavagem profissional de estofados e colchões a seco, sem uso de
                água.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span>
                  <FaToolbox className="inline-block text-xl text-white" />
                </span>
              </div>
              <h3 className="text-xl mb-4 font-mono font-semibold">
                Higienização
              </h3>
              <p className="text-gray-700 text-center">
                Higienização completa de estofados, eliminando ácaros e
                bactérias.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="py-16 bg-gray-100">
  <div className="container mx-auto">
    <h2 className="font-medium text-4xl mb-12 text-center text-gray-800 tracking-wide">
      Galeria:
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Imagem 1 - Antes */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test1.jpg"
          alt="Imagem Antes da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-md transform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
          <span className="text-white text-lg font-bold">Antes</span>
        </div>
      </div>

      {/* Imagem 1 - Depois */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test2.jpg"
          alt="Imagem Depois da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <span className="text-white text-lg font-bold">Depois</span>
        </div>
      </div>

      {/* Imagem 2 - Antes */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test3.jpg"
          alt="Imagem Antes da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <span className="text-white text-lg font-bold">Antes</span>
        </div>
      </div>

      {/* Imagem 2 - Depois */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test4.jpg"
          alt="Imagem Depois da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-2xltransform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <span className="text-white text-lg font-bold">Depois</span>
        </div>
      </div>

      {/* Imagem 3 - Antes */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test5.jpg"
          alt="Imagem Antes da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <span className="text-white text-lg font-bold">Antes</span>
        </div>
      </div>

      {/* Imagem 3 - Depois */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="/src/assets/test6.jpg"
          alt="Imagem Depois da Limpeza"
          className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
          <span className="text-white text-lg font-bold">Depois</span>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="contatos" className="bg-gray-100 py-16">
        <div className="container mx-auto">
          {/* <h2 className="text-4xl font-medium text-center text-gray-800 tracking-wide pb-14 my-12">
            Contatos:
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-8">
            {/* Contato 1 */}
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
              <FaWhatsapp size={40} className="text-blue-500 mb-4" />
              <p className="text-gray-700 text-center text-lg">
                +55 (75) 99713-0700
              </p>
            </div>

            {/* Contato 2 */}
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
              <FaInstagram size={40} className="text-pink-500 mb-4" />
              <p className="text-gray-700 text-center text-lg">
                @motta_clean
              </p>
            </div>

            {/* Contato 3 */}
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
              <IoMdPhonePortrait size={40} className="text-green-500 mb-4" />
              <p className="text-gray-700 text-center text-lg">
                +55 (75) 99713-0700
              </p>
            </div>

            {/* Contato 4 */}
            <div className="flex flex-col items-center border border-gray-300 rounded-lg p-6">
              <IoMdMail size={40} className="text-red-500 mb-4" />
              <p className="text-gray-700 text-center text-lg">
                contato@minhaempresa.com
              </p>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-slate-700 py-14 px-4 text-white text-center">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <p className="text-xl">
              Todos os direitos reservados &copy; 2023 | Motta Clean
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="flex justify-center space-x-6">
              <a
                href="https://api.whatsapp.com/send?phone=5575997130700" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={26}
                  className="text-white hover:text-gray-300"
                />
              </a>

              <a
                href="https://www.instagram.com/motta_clean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={26}
                  className="text-white hover:text-gray-300"
                />
              </a>

              <a
                href="tel:+5575997130700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone size={26} className="text-white hover:text-gray-300" />
              </a>

              <a
                href="mailto:contato@minhaempresa.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope
                  size={26}
                  className="text-white hover:text-gray-300"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
