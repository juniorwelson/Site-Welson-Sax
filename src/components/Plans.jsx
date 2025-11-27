import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardTeacher from "./CardTeacher";
import PlansCard from "./PlansCard";
const Plans = () => {
  return (
    <section
      className=" mt-20 bg-amber-300 py-6 rounded-2xl"
      id="plans"
      data-aos="fade-up"
    >
      <h2 className="text-5xl underline font-bold mx-auto bg-amber-300 w-fit rounded-2xl  mb-10">
        Planos
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <PlansCard
            titulo="  Show Sax Receptivo para Aniversários"
            duração="1h:30min"
            ideal="Ideal para"
            descrição="De forma requintada, versátil e eclética, ao som impactante do saxofone e da flauta transversal, levando um repertório personalizado; estilos, artistas e/ou canções escolhidas minuciosamente a dedo!"
            cortesia="Pagando à vista, leve +30 minutos free!"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <PlansCard
            titulo=" SHOW SAX CORPORATIVO "
            duração="1h:45min"
            ideal="Ideal para"
            descrição="Performance elegante para eventos corporativos, lançamentos de produtos, inaugurações de espaços, lojas etc. Possibilidade de repertório personalizado, como clássico, jazz ou trilhas populares - ao seu gosto musical. 
Translados e ensaios inclusos"
            cortesia="Pacote VIP inclui sonoplastia completa e iluminação ambiente"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <PlansCard
            titulo="SAX CERIMONIAL -Casamentos - Bodas - Renovação de Votos "
            detalhes="Qual será a data, mês, ano?
Será realizado em qual cidade, local, igreja, espaço de eventos etc.?
 Qual será o horário no seu convite?"
            className="w-90  overflow-y-auto  lg:w-110  "
            duração="1h:20min"
            ideal="Ideal para"
            descrição="
Contrate o Serviço de Cerimônia - cubro de forma integral; da chegada dos seus convidados às saídas após o Cortejo.
Repertório adaptado ao estilo do casal, com trilhas sonoras minuciosas, para cada entrada específica e/ou saída - respeitando o seu desejo e assim, realizando o seu sonho de maneira  inesquecível!--Consulte sobre disponibilidade com até 30 dias de antecedência--"
            cortesia="Show Sax
(Cumprimentos e Fotos)"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <PlansCard
            titulo="HOMENAGENS & SERENATAS 
COM SAX ACÚSTICO"
            ideal="Ideal para"
            duração="3 Músicas"
            descrição=": Escolha 03 lindas canções e dedique para essa pessoa.
Podendo ser realizada em restaurantes, hotéis, praça pública; até mesmo no trabalho dela (e) ou  em sua residência"
            cortesia="ganhe + 02 lindas canções"
          />
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <CardTeacher/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Plans;
