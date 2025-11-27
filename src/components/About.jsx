import {ArrowRight} from "lucide-react"

const About = () => {
  return (
    <section className="about mt-10" id="about" data-aos="fade-up">
      <h2 className="text-2xl mb-5 bg-amber-300 text-white p-3 text-center rounded-2xl text-bold w-fit mx-auto md:text-5xl">
        Um Pouco da Minha História
      </h2>
      <div className="about-box flex flex-col-reverse md:flex-row justify-center items-center gap-6 flex-wrap">
        <div className="text-about flex flex-col max-w-xl space-y-4">
          <p className="text-sm p-2 md:text-xl">
            <strong>Welson Gonzaga</strong>, conhecido artisticamente como
            <strong> Welson Sax</strong>, é músico multi-instrumentista e {" "}
            <span className="text-amber-400 font-bold">graduando em Música pela UNIASSELVI.</span> Natural de
            Alagoinhas – BA, atua profissionalmente desde 1998, dominando
            instrumentos como clarinete, flauta transversal e saxofones soprano,
            alto e tenor.
          </p>

          <p className="text-sm p-2 md:text-xl">
            Durante sua trajetória, integrou importantes filarmônicas e
            participou de festivais, recitais e eventos em diversas cidades da
            Bahia e em outros estados como Sergipe, Rio de Janeiro, Minas Gerais
            e São Paulo. Também colaborou com bandas e artistas em gravações de
            CDs, DVDs e apresentações ao vivo.
          </p>

          <p className="text-sm p-2 md:text-xl">
            Além dos palcos, dedica-se ao ensino musical desde 2014,
            desenvolvendo projetos sociais e educacionais em escolas e
            instituições filantrópicas. Seu trabalho já foi reconhecido pela
            mídia local e por premiações como o{" "}
            <span className="text-amber-400 font-bold">
              Troféu “Tô Aqui Profissionais”
            </span>
            , no qual foi indicado por dois anos consecutivos.
          </p>

          <p className="text-sm p-2 md:text-xl">
            Atualmente, Welson Sax atua em casamentos, serenatas, eventos
            corporativos, formaturas, inaugurações e shows em geral, sempre com
            o propósito de transformar cada momento em uma experiência marcante.
            <br />
            <strong>Welson Sax – A música que toca a sua alma.</strong>
          </p>

          <a
            href=" https://drive.google.com/file/d/1eed7V5jDATQcSRFewY3Q3teE3DFzdVgG/view?usp=sharing"
            className="p-3 bg-amber-300 text-1xl flex items-center justify-center gap-2 font-bold text-white rounded-2xl w-fit mx-auto md:text-2xl hover:bg-amber-400"
            target="_blank "
            rel="noopener noreferrer"
          >
            Conhecer Mais da Minha História
            <ArrowRight size={20} />
          </a>
        </div>

        <img
          src="/assets/img-inauguration.jpg"
          alt="Foto de Welson Sax se apresentando"
          className="rounded-2xl shadow-lg object-cover w-90 md:w-120"
        />
      </div>
    </section>
  );
}

export default About
