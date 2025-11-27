import {Trophy} from "lucide-react"
const Trofeus = () => {

  return (
    <section
      className="
trophies mt-9  bg-zinc-900 py-10 rounded-3xl"
    >
      <h2
        className="
  text-2xl md:text-4xl font-bold
  flex justify-center items-center gap-2
  mb-6 mx-auto text-center w-fit p-3
  bg-linear-to-r from-white via-amber-300 to-amber-500
  text-black rounded-2xl shadow-md
"
      >
        Troféus & Reconhecimentos
        <Trophy size={30} className="text-black" />
      </h2>
      <div className="trofeus-box rounded-3xl  flex justify-center items-center gap-5 flex-wrap md:gap-0">
        <div className="bg-black mx-auto rounded-2xl w-80   shadow-xl p-6 text-center h-full flex flex-col justify-between gap-4 hover:-translate-y-2 transition-transform duration-300 ">
          {/* Imagem */}
          <div className="w-full h-70">
            <img
              src="/assets/img-trofeu1.jpg"
              className="w-full rounded-2xl h-full object-cover"
              loading="lazy"
              alt="foto de premiação"
            />
          </div>
          {/* Conteúdo */}
          <div>
            <h3 className="text-xl flex items-center justify-center gap-1 font-bold mb-2 text-amber-300">
              {" "}
              <Trophy size={30} className="text-amber-300" />
              Prêmio Tô Aqui Profissionais — 2020
            </h3>

            <p className=" text-sm leading-relaxed text-white">
              Uma premiação que simboliza talento, esforço e amor pela arte.
            </p>
          </div>
        </div>
        {/*trofeu2 */}
        <div className="bg-black mx-auto rounded-2xl w-80   shadow-xl p-6 text-center h-full flex flex-col justify-between gap-4 hover:-translate-y-2 transition-transform duration-300 ">
          {/* Imagem */}
          <div className="w-full h-70">
            <img
              src="/assets//img-trofeu2.jpg"
              className="w-full rounded-2xl h-full object-cover"
              alt="foto de premiação"
              loading="lazy"
            />
          </div>
          {/* Conteúdo */}
          <div>
            <h3 className="text-xl flex items-center text-center  justify-center  font-bold mb-2 text-amber-300">
              {" "}
              <Trophy size={30} className="text-amber-300" />
              Prêmio Tô Aqui Profissionais-2021
            </h3>

            <p className=" text-sm leading-relaxed text-white">
              Uma premiação que simboliza talento, esforço e amor pela arte.
            </p>
          </div>
        </div>
        {/*fim da div trofeu-box */}
      </div>
    </section>
  );
};

export default Trofeus;
