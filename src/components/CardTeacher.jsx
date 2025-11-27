 import { Check, ArrowRight } from "lucide-react";

 export default function CardTeacher() {
   return (
     <div className="bg-black rounded-2xl overflow-y-auto mb-4 p-6 text-center h-180 w-80 flex flex-col items-center justify-around gap-4 hover:-translate-y-2 transition-transform duration-300 mx-auto lg:h-150 lg:w-100">
       {/* Header */}
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
           <i>AULAS DE SOPRO MUSICAL</i>
         </h3>
       </div>

       {/* Body */}
       <div className="body-card flex flex-col gap-3">
         <p className="flex items-start text-sm text-white gap-3 text-left">
           <Check size={26} className="text-white min-w-[26px]" />
           <span>
             <strong>Aulas:</strong> Práticas e teóricas
           </span>
         </p>

         <p className="flex items-start text-sm text-white gap-3 text-left">
           <Check size={26} className="text-white min-w-[26px]" />
           <span>
             <strong>Conteúdo:</strong> Leitura e domínio de partitura <br />
             (Clave de Sol e Clave de Fá)
           </span>
         </p>

         <p className="flex items-start text-sm text-white gap-3 text-left">
           <Check size={26} className="text-white min-w-[26px]" />
           <span>
             <strong>Modalidade:</strong> EAD e Presencial
           </span>
         </p>

         <p className="flex items-start text-sm text-white gap-3 text-left">
           <Check size={26} className="text-white min-w-[26px]" />
           <span>
             <strong>Níveis:</strong> Básico, Intermediário e Avançado
           </span>
         </p>

         <div className="details-box mt-2">
           <p className="text-xs text-gray-400 mb-2">Instrumentos de sopro:</p>
           <div className="text-xs text-white leading-relaxed space-y-1">
             <p>🎷 Saxofone (Alto, Tenor e Soprano)</p>
             <p>🎼 Clarineta</p>
             <p>🎹 Escaleta</p>
             <p>🥁 Flauta Doce</p>
             <p>🎶 Flauta Transversal</p>
           </div>
         </div>
         <div className=" form-pay flex flex-col items-center justify-center">
           <p className="text-xl  gap-1 font-bold mb-2 text-white">
             Formas de Pagamentos:
           </p>
           <ul>
             <li className=" text-sm leading-relaxed text-gray-300">
               Dinheiro
             </li>
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

         <div className="details-location mt-3">
           <p className="text-xs text-gray-400 mb-2">Local das aulas:</p>
           <p className="text-xs text-white leading-relaxed">
             Escola de Música <strong>Sim Toque</strong> <br />
             Rua 13 de Maio – Centro <br />
             Ao lado do Salão Alagoinhas e Academia Live Men <br />
             Próx. à Casa do Bolo.
           </p>
         </div>
       </div>

       {/* Botão */}
       <a
         href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
         target="_blank"
         rel="noopener noreferrer"
         className="p-3 bg-amber-300 flex items-center justify-center gap-2 text-lg w-fit text-center text-white rounded-2xl font-semibold hover:bg-amber-400 transition"
       >
         Quero me matricular
         <ArrowRight size={20} />
       </a>
     </div>
   );
 }
