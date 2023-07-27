import logo from "../src/assets/logo.jpg";
import { FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
// import { FiPhone, FiMail } from 'react-icons/fi';
import { IoMdPhonePortrait, IoMdMail } from 'react-icons/io';

function App() {
  return (
    <>
    <main id="home" className="bg-[url('/src/assets/test5.jpg')] bg-cover">
     <header className="bg-slate-700 py-2 px-8 md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-2 md:space-x-5">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
          <div className="text-white font-light text-xl md:text-3xl tracking-widest">
            Motta Clean
          </div>
        </div>
        <nav className="hidden md:flex md:space-x-5">
        <a
    href="#home"
    className="text-white text-lg group relative focus:text-gray-200"
  >
    Home
    <div className="absolute h-0.5 w-full bg-gray-200 left-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
  </a>
  <a
    href="#servicos"
    className="text-white text-lg group relative focus:text-gray-200"
  >
    Serviços
    <div className="absolute h-0.5 w-full bg-gray-200 left-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
  </a>
  <a
    href="#contatos"
    className="text-white text-lg group relative focus:text-gray-200"
  >
    Contatos
    <div className="absolute h-0.5 w-full bg-gray-200 left-0 bottom-0 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
  </a>
        </nav>
      </header>
    
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 h-screen">
            <div className="md:w-1/2">
              <h2 className="text-7xl font-bold mb-5 text-gray-800">Renove sua casa com estofados de qualidade!</h2>
              <p className="text-gray-700 text-xl">
                Oferecemos uma ampla variedade de estofados retráteis e
                reclináveis de qualidade superior, projetados para atender às
                suas necessidades.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-xl">
                Adquira agora os estofados de alta qualidade da CEMARA Estofados
                e sinta o conforto e a satisfação que nossos produtos oferecem.
                Com mais de trinta anos de experiência no setor de estofamentos,
                nossos empresários prezam pela excelência no trabalho e garantem
                a qualidade dos produtos e o bem-estar das pessoas.
              </p>
              <br></br>
              <p className="text-xl">
                Nossos estofados são feitos com madeira 100% reflorestada,
                demonstrando nosso compromisso com o meio ambiente. Não perca
                mais tempo, confie na CEMARA Estofados e experimente o melhor em
                design, conforto e qualidade.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col md:flex-row md:space-x-14 mx-20 my-20">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-5">Sustentabilidade</h3>
              <p className="text-gray-700 text-center text-xl mb-7">
                Dispomos de uma grande capacidade de produção de energia
                elétrica para garantir a produção sustentável de nossos
                estofados.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-5">Item 2</h3>
              <p className="text-gray-700 text-center text-xl mb-7">
                Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
                muito carinho, desde a seleção das espumas e madeiras até a
                escolha dos tecidos para o acabamento.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-5">Item 3</h3>
              <p className="text-gray-700 text-center text-xl mb-7">
                Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
                muito carinho, desde a seleção das espumas e madeiras até a
                escolha dos tecidos para o acabamento.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-5">Item 4</h3>
              <p className="text-gray-700 text-center text-xl mb-7">
                Aqui, a alta qualidade é nossa prioridade! Cuidamos de tudo com
                muito carinho, desde a seleção das espumas e madeiras até a
                escolha dos tecidos para o acabamento.
              </p>
            </div>
          </div>

      <section id="servicos" className="bg-[url('/src/assets/test4.jpg')] py-16 bg-auto">
        <div className="container mx-auto">
          <h2 className="font-light text-4xl mb-12 text-center tracking-wide">Serviços:</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-3xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Serviço 1</h3>
              <p className="text-gray-700 text-center">
                Descrição do Serviço 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-3xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Serviço 2</h3>
              <p className="text-gray-700 text-center">
                Descrição do Serviço 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-3xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Serviço 3</h3>
              <p className="text-gray-700 text-center">
                Descrição do Serviço 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-3xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Serviço 4</h3>
              <p className="text-gray-700 text-center">
                Descrição do Serviço 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatos" className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-light  mb-5 text-center tracking-widest">Contatos:</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-14 mx-20 my-20">
          {/* Ícone do WhatsApp */}
          <div className="flex flex-col items-center">
            <FaWhatsapp size={34} className="text-blue-500 mb-4" />
            <p className="text-gray-700 text-center text-xl whitespace-nowrap">+55 (11) 1234-5678</p>
          </div>

          {/* Ícone do Instagram */}
          <div className="flex flex-col items-center">
            <FaInstagram size={34} className="text-pink-500 mb-4" />
            <p className="text-gray-700 text-center text-xl">@minha_empresa</p>
          </div>

          {/* Ícone do Telefone */}
          <div className="flex flex-col items-center">
            <IoMdPhonePortrait size={34} className="text-green-500 mb-4" />
            <p className="text-gray-700 text-center text-xl whitespace-nowrap">+55 (11) 9876-5432</p>
          </div>

          {/* Ícone do E-mail */}
          <div className="flex flex-col items-center">
            <IoMdMail size={34} className="text-red-500 mb-4" />
            <p className="text-gray-700 text-center text-xl">contato@minhaempresa.com</p>
          </div>
        </div>
      </div>
    </section>

      <footer className="bg-slate-700 py-14 px-8 text-white text-center">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <p className="text-xl">
              Todos os direitos reservados &copy; 2023 | Motta Clean
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="flex justify-center space-x-6">
              <a
                href="https://api.whatsapp.com/send?phone=5511987654321"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} className="text-white hover:text-gray-300" />
              </a>

                  <a
                    href="https://www.instagram.com/minha_empresa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <FaInstagram size={24} className="text-white hover:text-gray-300" />
              </a>

              <a href="tel:+5511987654321" target="_blank" rel="noopener noreferrer">
                <FaPhone size={24} className="text-white hover:text-gray-300" />
              </a>

              <a href="mailto:contato@minhaempresa.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} className="text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
  
export default App;
