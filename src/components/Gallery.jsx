import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SocialIcons from "./Socialicones";
import { Music2 } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  const ImgPerson = [
    { id: 1, URL: "/assets/img-aula.jpg" },
    { id: 2, URL: "/assets/img-aula2.jpg" },
    { id: 3, URL: "/assets/img-aula3.jpg" },
    { id: 4, URL: "/assets/img-evento2.jpg" },
    { id: 5, URL: "/assets/img-evento3.jpg" },
    { id: 6, URL: "/assets/img-evento4.jpg" },
    { id: 7, URL: "/assets/img-evento5.jpg" },
    { id: 8, URL: "/assets/img-evento6.jpg" },
    { id: 9, URL: "/assets/img-evento7.jpg" },
    { id: 10, URL: "/assets/img-eventos1.jpg" },
    { id: 11, URL: "/assets/img-Naprefeitura.jpg " },
    { id: 12, URL: "/assets/img-salaDeAula.jpg" },
  ];

  return (
    <section
      className="w-fulll py-10 bg-amber-300 rounded-2xl"
      id="gallery"
      data-aos="fade-up"
    >
      <h2 className="text-3xl   flex items-center justify-center gap-1 text-white underline font-semibold mb-10  md:text-5xl md:ml-10">
        <Music2 size={30} className="text-white" /> A Música em Imagens
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-10 "
      >
        {ImgPerson.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="card-img mx-auto w-80 h-full flex items-center justify-center gap-3">
              <div className="img w-full h-70">
                <img
                  src={img.URL}
                  alt="fotos pessoal"
                  loading="lazy"
                  className="w-full rounded-2xl h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="SeeWorks flex flex-col justify-center items-center gap-3 mt-5">
        <h3 className="text-3xl text-white font-semibold md:text-4xl">
          Acompanhe meus trabalhos:
        </h3>
        <SocialIcons className="bg-white/50 p-3 rounded-2xl w-80 " />
      </div>
    </section>
  );
};

export default Gallery;
