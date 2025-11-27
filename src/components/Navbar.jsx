

import { X, List ,CircleUserRound} from "lucide-react";
import { useState } from "react";
import CardMusic from "./CardMusic";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center fixed  bg-gray-300 z-50 shadow-black-50 shadow-lg justify-between  bg-amber w-full py-2 md:justify-around ">
        <div id="branding " className="ml-10">
          <a href="#Home" className=" ">
            <img
              src="/assets/logo-main.jpg"
              alt="logo-main"
              className=" w-20 h-10 rounded-2xl md:w-30,h-20"
            />
          </a>
        </div>
 <CardMusic />
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <List size={32} className="mr-5 text-amber-400" />
        </button>

        <ul className="hidden md:flex items-center justify-center gap-7">
          <li>
            <a
              href="#Home"
              className="text-black text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-black text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="text-black text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#plans"
              className="text-black text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Planos
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-black text-sm font-semibold hover:text-amber-400 hover:underline transition"
            >
              Sobre
            </a>
          </li>
          <li className="bg-white border rounded-xl px-2 py-1  ml-7 flex items-center justufy-center gap-1 hover:text-amber-400 transition">
            <a
              href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
              className="text-amber  text-3x font-semibold "
              rel="noopener noreferrer"
              target="_blank"
            >
              Contato
            </a>
            <CircleUserRound size="20" />
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden">
          <div
            className="fixed bg-black/60 z-60 inset-0"
            onClick={() => setOpen(false)}
          >
            <div className="fixed left-0 top-0 h-full w-80 bg-black/60  p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <a href="#">
                    <img
                      src="/assets/logo-main.jpg"
                      alt="logo-main"
                      className=" w-20 h-10 rounded-2xl"
                    />
                  </a>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg"
                >
                  <X className="size-7 text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-4 p-2">
                <a href="#Home" className="text-white text-sm font-semibold">
                  Home
                </a>
                <a
                  href="#services"
                  className="text-white text-sm font-semibold"
                >
                  Serviços
                </a>
                <a href="#gallery" className="text-white text-sm font-semibold">
                  Galeria
                </a>
                <a href="#plans" className="text-white text-sm font-semibold">
                  Planos
                </a>
                <a
                  href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
                  className="text-white text-sm font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contato
                </a>
                <a href="#about" className="text-white text-sm font-semibold">
                  Sobre
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
