import {Check ,ArrowRight} from "lucide-react"
const PlansCard = ({ titulo,duração,cortesia,descrição,className ,detalhes}) => {
  return (
    <div
      className={`bg-black rounded-2xl overflow-y-auto  mb-4 p-6 text-center h-180 w-80 flex flex-col items-center justify-around gap-4 hover:-translate-y-2 transition-transform duration-300 mx-auto lg:h-150 lg:w-100 ${className}`}
    >
      <div className="header-card p-3">
        <h3
          className="
  text-2xl md:text-3xl font-bold
  flex justify-center items-center gap-2
  mb-6 mx-auto text-center w-fit p-3
  bg-linear-to-r from-white via-amber-300 to-amber-500
  text-black rounded-2xl shadow-md
"
        >
          <i>{titulo}</i>
        </h3>
      </div>

      <div className="body-card flex flex-col gap-3">
        <p className="flex items-start text-sm text-white gap-3 text-left">
          <Check size={26} className="text-white min-w-[26px]" />
          <span>
            <strong>Duração:{"  "}</strong>
            {duração}
          </span>
        </p>

        <p className="flex items-start text-sm text-white gap-3 text-left">
          <Check size={26} className="text-white min-w-[26px]" />
          <span>
            <strong>Descrição:</strong> {descrição}
          </span>
        </p>

        <p className="flex items-start text-sm text-white gap-3 text-left">
          <Check size={26} className="text-white min-w-[26px]" />
          <span>
            <strong>Cortesia:</strong> {cortesia}
          </span>
        </p>

        <p className="text-xs text-gray-400 mb-2">Para orçamento, informe:</p>
        <div className="detaitls-box  ">
          <p className="text-xs text-center text-white leading-relaxed">
            Detalhes:{detalhes}
          </p>
          🔊
          <span className="text-xs text-center text-white leading-relaxed">
            {" "}
            Sonoplastia: terá som profissional?
          </span>
          <br />
          📍
          <span className="text-xs text-center text-white leading-relaxed">
            Ambiente: aberto ou fechado?
          </span>
          <br />
          👥{" "}
          <span className="text-xs text-center text-white leading-relaxed">
            {" "}
            Média de convidados?
          </span>{" "}
          <br />
          🎷
          <span className="text-xs text-center text-white leading-relaxed">
            Como você idealizou minha participação?
          </span>
        </div>
        <div className=" form-pay flex flex-col items-center justify-center">
          <p className="text-xl  gap-1 font-bold mb-2 text-white">
            Formas de Pagamentos:
          </p>
          <ul>
            <li className=" text-sm leading-relaxed text-gray-300">Dinheiro</li>
            <li className=" text-sm leading-relaxed text-gray-300">Pix</li>
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
      </div>

      <a
        href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
        rel="noopener noreferrer"
        target="_blank"
        className="p-3 bg-amber-300 flex items-center justify-center text-xl w-fit text-center text-white rounded-2xl font-semibold hover:bg-amber-400"
      >
        Fazer Orçamento
        <ArrowRight size={20} />
      </a>
    </div>
  );
};

export default PlansCard;
