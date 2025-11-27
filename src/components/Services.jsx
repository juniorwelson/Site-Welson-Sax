import ServicesCards from "./ServicesCards"
import { Music,ArrowUp} from "lucide-react";


const Services = () => {
  return (
    <section
      className=" services-container    mt-16 rounded-2xl bg-[#FAF9F6] "
      id="services"
      data-aos="fade-up"
    >
      <h2 className="text-4xl text-white    mx-auto flex  items-center justify-center gap-2  font-semibold bg-amber-300 w-fit p-3 rounded-2xl mb-15  md:ml-25 md:text-5xl ">
        <Music size={30} className="text" />
        Meus Serviços
      </h2>
      <ServicesCards />
     
    </section>
  );
}

export default Services
