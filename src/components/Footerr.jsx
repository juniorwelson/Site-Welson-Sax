import SocialIcons from "./Socialicones";
const Footerr = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 text-center sm:text-left">
        {/* Coluna 1 */}
        <div className="flex flex-col justify-center  items-center">
          <h3 className="text-lg text-center font-semibold tracking-wide">
            Welson Sax
          </h3>
          <span className="font-bold text-amber-300 w-50 text-center    ">
            {" "}
            "A música que toca a sua alma."
          </span>
          <p className="text-gray-300 text-center mt-3 text-sm leading-relaxed">
            Profissional em eventos, casamentos, serenatas e apresentações
            especiais.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#Home" className="hover:text-amber-400 transition">
                Início
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-amber-400 transition">
                Serviços
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Contato</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Alagoinhas - BA <br />
            WhatsApp: (71) 98763-8103 <br />
            Email: welsonsax2022@gmail.com
          </p>
        </div>

        {/* Coluna 4 */}
        <div>
          <h4 className="text-base font-semibold mb-3">Redes Sociais</h4>
          <SocialIcons className="bg-white/40 p-3 w-80 rounded-xl mx-auto sm:mx-0" />
        </div>

        {/* Coluna 5 */}
        <div className=" mx-auto flex justify-center  sm:justify-start md:ml-25">
          <img
            src="/assets/logo-main.jpg"
            alt="Logo Welson Sax"
            className="rounded-4xl max-w-[150px] h-40 "
          />
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Welson Sax · Todos os direitos reservados.
        <p className="mt-1 text-gray-600 text-[11px]">
          Desenvolvido por{" "}
          <span className="text-amber-400">Welson Junior Developer</span>
        </p>
      </div>
    </footer>
  );
};

export default Footerr;
