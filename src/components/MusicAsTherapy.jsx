import React from 'react'

const MusicAsTherapy = () => {
  return (
    <section className="max-w-3xl mx-auto mt-10 px-6 py-10 bg-linear-to-b from-white to-amber-300 rounded-2xl">
      <h3 className="text-center text-xl md:text-2xl font-bold mb-6 text-amber-400">
        A Música como Arte, Terapia e Transformação Social
      </h3>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* TEXTO */}
        <p className="text-sm md:text-base leading-relaxed text-black md:w-2/3">
          A música vai muito além do entretenimento. Ela é uma forma profunda de
          expressão artística, capaz de tocar emoções, resgatar memórias e
          promover bem-estar. Através do som, é possível acalmar a mente,
          aliviar o estresse e fortalecer vínculos afetivos.
          <br />
          <br />
          Nesse contexto, a música também se consolida como uma poderosa
          ferramenta terapêutica, sendo aplicada na musicoterapia para auxiliar
          no equilíbrio emocional, no desenvolvimento cognitivo e na melhoria da
          qualidade de vida.
          <br />
          <br />
          Além disso, a música exerce um papel transformador na sociedade, sendo
          uma forte aliada na educação e em projetos sociais voltados para
          crianças e jovens em situação de vulnerabilidade e riscos sociais. Ela
          contribui para o fortalecimento da autoestima, desenvolvimento da
          disciplina, concentração e construção de novas perspectivas de futuro.
          <br />
          <br />
          Como <span className="font-bold text-black">educador social</span>,
          acredito na música como um instrumento de inclusão, formação cidadã e
          transformação de vidas. Com fé em Deus, em breve iniciarei minha{" "}
          <span className="font-bold text-black">
            Pós-Graduação em Musicoterapia
          </span>
          , buscando aprofundar ainda mais esse propósito de usar a música não
          apenas como arte, mas como instrumento de cura, ensino e esperança.
        </p>

        {/* VÍDEO */}
        <div className="video-box flex w-80 flex-col items-center ">
          <video
            src="/assets/videos/videoSax4.mp4"
            controls
            muted
            loop
            playsInline
            className="rounded-xl   h-100  w-100 md:w-full"
          />

          <div className="mt-3 px-4 py-2 bg-white shadow-lg rounded-xl text-sm font-semibold text-gray-800">
            <p> Lar dos Idosos.Participação Especial da <span className='font-bold text-black'>Dep. Ludmila Fiscina</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicAsTherapy
