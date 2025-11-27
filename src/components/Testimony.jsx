import {Star,User} from "lucide-react"

const Testimony = () => {
  return (
    <section
      className="testimony mt-20 rounded-2xl  bg-[#FAF9F6]"
      data-aos="fade-up"
    >
      <h2 className="text-2xl rounded-2xl font-bold mb-4 mx-auto  text-center text-white w-fit p-3 bg-amber-300 md:text-5xl">
        #Quem já viveu essa experiência recomenda!
      </h2>
      <div className="testimony-box flex justify-center items-center gap-3 flex-wrap  bg-[#FAF9F6]">
        <div className="testimony-1 w-70 h-80 px-3 flex flex-col justify-center gap-3 border border-black items-center rounded-2xl">
          <div className="star flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {" "}
                <Star size={20} className="text-amber-300 fill-current" />
              </span>
            ))}
          </div>
          <p>
            "Contratar  Welson Sax foi uma das melhores decisões do nosso
            evento. A música trouxe uma emoção única e deixou tudo ainda mais
            especial. Profissionalismo, pontualidade e um talento indescritível.
            Super recomendo!"
          </p>
          <span className="flex items-center  font-bold justify-center ">
            <User size={20} />
            Usuário: Antônio
          </span>
        </div>

        <div className="testimony-2 w-70 h-80 px-3 flex flex-col justify-center gap-3 border border-black items-center rounded-2xl">
          <div className="star flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {" "}
                <Star size={20} className="text-amber-300 fill-current" />
              </span>
            ))}
          </div>
          <p>
            "Se você quer um evento diferenciado e cheio de emoção,  Welson Sax
            é a escolha certa. Extremamente profissional, repertório excelente e
            uma energia surreal. Não tem erro!"
          </p>
          <span className="flex items-center  font-bold justify-center ">
            <User size={20} />
            Usuário: Marcos Silva
          </span>
        </div>
        <div className="testimony-3 w-70 h-80 px-3 flex flex-col justify-center gap-3 border border-black items-center rounded-2xl">
          <div className="star flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {" "}
                <Star size={20} className="text-amber-300 fill-current" />
              </span>
            ))}
          </div>
          <p>
            "Foi uma apresentação impecável! O sax deu um toque especial ao
            nosso evento e deixou tudo mais elegante. Todos perguntaram o
            contato depois!"
          </p>
          <span className="flex items-center  font-bold justify-center ">
            <User size={20} />
            Usuário: Raquel Souza
          </span>
        </div>
        <div className="testimony-4 w-70 h-80 px-3 flex flex-col justify-center gap-3 border border-black items-center rounded-2xl">
          <div className="star flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {" "}
                <Star size={20} className="text-amber-300 fill-current" />
              </span>
            ))}
          </div>
          <p>
            " Welson foi simplesmente incrível no nosso casamento! Ele tornou a
            cerimônia ainda mais emocionante com o som do saxofone.
            Profissional, pontual e muito talentoso. Recomendamos de olhos
            fechados!"
          </p>
          <span className="flex items-center  font-bold justify-center ">
            <User size={20} />
            Usuário: Lucikley Souza
          </span>
        </div>
      </div>
    </section>
  );
}

export default Testimony
