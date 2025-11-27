import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { services } from "../data/ServicesData";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ServicesCards = () => {
  
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-4 -mt-10 "
      >
        {services.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="bg-black mx-auto rounded-2xl w-80   shadow-xl p-6 text-center h-full flex flex-col justify-between gap-4 hover:-translate-y-2 transition-transform duration-300 ">
              {/* Imagem */}
              <div className="w-full h-70">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full rounded-2xl h-full object-cover"
                />
              </div>
              {/* Conteúdo */}
              <div>
                <h3 className="text-xl flex items-center justify-center gap-1 font-bold mb-2 text-white">
                  {s.icon && <s.icon size={30} className="text-amber-500" />}
                  {s.title}
                </h3>

                <p className=" text-sm leading-relaxed text-white">
                  {s.description}
                </p>
              </div>
              <div className=" form-pay flex flex-col items-center justify-center">
                <p className="text-xl  gap-1 font-bold mb-2 text-white">
                  Formas de Pagamentos:
                </p>
                <ul>
                  <li className=" text-sm leading-relaxed text-gray-300">
                    Dinheiro
                  </li>
                  <li className=" text-sm leading-relaxed text-gray-300">
                    Pix
                  </li>
                  <li className=" text-sm leading-relaxed text-gray-300">
                    Cartão de Débito
                  </li>
                  <li className=" text-sm leading-relaxed text-gray-300">
                    Cartão de Crédito
                  </li>
                  <li className=" text-sm leading-relaxed text-gray-300">
                    Transferências Bancárias
                  </li>
                </ul>
              </div>
              {/* Botão */}
              <a
                href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
                rel="noopener noreferrer"
                target="_blank"
                className="mt-4 flex items-center justify-center gap-3 px-4 py-2  bg-amber-400 hover:bg-amber-500 transition-colors duration-300 text-base rounded-xl text-white font-semibold shadow-md"
              >
                Fazer Orçamento
                <ArrowRight size={20} />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCards;
