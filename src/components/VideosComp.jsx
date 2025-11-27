import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const VideosComp = () => {
  return (
    <div className="mt-10 rounded-2xl  bg-[#FAF9F6]   px-5" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={false} //aqui eu controlo se quero a rolagem automatica
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <video
            src="/assets/videos/videoSax1.mp4"
            controls
            muted
            loop
            playsInline
            className=" rounded-xl w-60 mx-auto md:w-60 "
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            src="/assets/videos/videoSax2.mp4"
            controls
            muted
            loop
            playsInline
            className="rounded-xl w-60 mx-auto md:w-60"
          />
        </SwiperSlide>

        <SwiperSlide>
          <video
            src="/assets/videos/videoSax3.mp4"
            controls
            muted
            loop
            playsInline
            className=" rounded-xl w-60 mx-auto md:w-60"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VideosComp;
