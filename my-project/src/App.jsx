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
        <header className="fixed top-0 left-0 bg-slate-700 py-2 px-4 md:px-8 flex justify-between items-center w-full z-50">
          <div className="flex items-center space-x-2 md:space-x-5">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <div className="text-white font-light text-xl md:text-3xl tracking-widest">
              Motta Clean
            </div>
          </div>

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
              className="flex flex-col md:flex-row items-center text-white text-lg group relative focus:text-gray-200 md:space-x-1"
            >
              <FaHome className="inline-block md:mr-2 text-xl" />
              <span className="hidden md:inline">Home</span>
            </a>
            <a
              href="#servicos"
              className="flex flex-col md:flex-row items-center text-white text-lg group relative focus:text-gray-200 md:space-x-1 mt-2 md:mt-0"
            >
              <FaToolbox className="inline-block md:mr-2 text-xl" />
              <span className="hidden md:inline">Serviços</span>
            </a>
            <a
              href="#contatos"
              className="flex flex-col md:flex-row items-center text-white text-lg group relative focus:text-gray-200 md:space-x-1 mt-2 md:mt-0"
            >
              <FaEnvelope className="inline-block md:mr-2 text-xl" />
              <span className="hidden md:inline">Contatos</span>
            </a>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center h-screen">
          <div className="sm:rounded-none md:w-1/2 bg-slate-800 bg-opacity-70 p-8 md:rounded-lg shadow-2xl text-center transform md:hover:scale-105 transition-transform">
            <h2 className="text-4xl md:text-6xl font-normal mb-8 text-white">
              Revitalize seus estofados com limpeza profissional!
            </h2>
            <p className="text-white text-lg md:text-xl">
              Oferecemos uma ampla variedade de serviços de limpeza para
              estofados retráteis em geral.
            </p>
            <p className="text-white text-lg md:text-xl mt-4">
              Recupere o conforto e deixe seus estofados como novos!!
            </p>
          </div>
          <a
            href="#contatos"
            className="bg-blue-500 text-white text-lg font-sans font-semibold mt-4 px-8 py-4 hover:bg-blue-600 transition-colors"
          >
            Fale Comigo
          </a>
        </div>
      </main>

      <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 xl:space-x-14 mx-6 md:mx-10 lg:mx-20 my-12 md:my-16 lg:my-20">
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-3 md:mb-5 text-center">
            Limpeza Profissional de Estofados
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg italic">
            "Sempre gostei de deitar em lugares limpos e com a limpeza
            profissional da Motta Clean, meus estofados ficaram como novos!
            Recomendo a todos!"
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-3 md:mb-5 text-center">
            Higienização de Camas
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg italic">
            "Desde que a Motta Clean realizou a higienização da minha cama,
            sinto uma melhora significativa na minha saúde. Agora durmo
            tranquilo sabendo que meu colchão está limpo!"
          </p>
        </div>
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-3 md:mb-5 text-center">
            Impermeabilização de Estofados
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg italic">
            "Com a impermeabilização feita pela Motta Clean, não preciso mais me
            preocupar com acidentes e derramamentos. Meus estofados estão
            seguros e protegidos!"
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-3 md:mb-5 text-center">
            Higienização de Tapetes
          </h3>
          <p className="text-gray-600 text-center text-base md:text-lg italic">
            "Meus tapetes nunca estiveram tão limpos e cheirosos! Agradeço a
            equipe da Motta Clean pelo excelente serviço de higienização."
          </p>
        </div>
      </div>

      <section
        id="servicos"
        className="bg-[url('/src/assets/test4.jpg')] py-20 bg-auto"
      >
        <div className="container mx-auto">
          <h2 className="font-medium text-4xl my-14 text-center text-gray-800 tracking-wide">
            Nossos Serviços:
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

      <section id="galeria" className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="font-medium text-4xl mb-16 text-center text-gray-800 tracking-wide">
            Transformação de Estofados (Antes e Depois)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/su1.jpg"
                alt="Imagem Antes da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-md transform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
                <span className="text-white text-2xl font-bold">Antes</span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/li1.jpg"
                alt="Imagem Depois da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
                <span className="text-white text-2xl  font-bold">Depois</span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/su2.jpg"
                alt="Imagem Antes da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
                <span className="text-white text-2xl  font-bold">Antes</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/li2.jpg"
                alt="Imagem Depois da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-2xltransform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
                <span className="text-white text-2xl  font-bold">Depois</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/su3.jpg"
                alt="Imagem Antes da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
                <span className="text-white text-2xl  font-bold">Antes</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden border-4 border-l-sky-950">
              <img
                src="/src/assets/li3.jpg"
                alt="Imagem Depois da Limpeza"
                className="w-full h-72 object-cover rounded-lg shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-30 rounded-lg">
                <span className="text-white text-2xl font-bold">Depois</span>
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
              <p className="text-gray-700 text-center text-lg">@motta_clean</p>
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
                Dinhofilho.mota@gmail.com
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
                href="mailto:Dinhofilho.mota@gmail.com"
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
