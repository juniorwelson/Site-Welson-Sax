//importando componentes

import SocialIcons from "./Socialicones";



const Hero = () => {
  return (
    <section
      className="min-h-screen    flex flex-col md:flex-row flex-wrap items-center justify-center gap-10 px-6 text-center md:text-left md:gap-50"
      id="Home"
    >
      <div
        className="max-w-xl mt-10 flex flex-col items-center justify-between p-5 container-title   "
        data-aos="fade-down"
      >
        <img
          src="/assets/logo-main-trasp.png"
          alt="logo pessoal"
          className="mr-10"
        />

        <p className="text-gray-600 text-center  mt-10 mb-6 text-base md:text-lg md:ml-20">
          Através da música, transformo momentos em emoções que ficam para
          sempre. Cada nota é pensada para tocar sua alma e marcar sua história.
        </p>

        <SocialIcons />
      </div>

      <div className="w-full  md:w-[400px]" data-aos="fade-down">
        <img
          src="/assets/img-main.jpg"
          alt="Músico tocando ao vivo em apresentação"
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-full 
               h-auto mx-auto rounded-xl shadow-lg shadow-amber-300 object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
