

const SocialIcons = ({ className }) => {
  return (
    <div className={`flex gap-6 items-center justify-center mt-6 ${className}`}>
      <a
        href="https://www.facebook.com/share/16VAGoGmB6/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/icon-facebook.png"
          alt="logo-facebook"
          className="w-10  hover:bg-blue-600 hover:rounded-2xl transition duration-300 "
        />
      </a>
      <a
        href="https://www.facebook.com/share/1Bj8DYwab8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/icon-facebook.png"
          alt="logo-facebook"
          className="w-10 hover:bg-blue-400 hover:rounded-2xl transition duration-300"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/welson-dos-santos-gonzaga-364974275?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/logo-linkedin.png"
          alt="logo-facebook"
          className="w-10 hover:bg-blue-700 hover:rounded-2xl transition duration-300"
        />
      </a>

      <a
        href="https://www.instagram.com/welsonsax24?igsh=MWNvbmo3emJmZ3RnNg=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img-instagram.png"
          alt="logo-instagram"
          className="w-10 hover:bg-red-500 hover:rounded-2xl transition duration-300"
        />
      </a>

      <a
        href="https://www.tiktok.com/@welsonsax24?_r=1&_t=ZS-91eZN5Owfbe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets//img-tik.png"
          alt="logo-tiktok"
          className="w-10 hover:bg-black/60 hover:rounded-2xl transition duration-300"
        />
      </a>

      <a
        href="https://wa.me/5571987638103?text=Ol%C3%A1%20Welson%20Sax.%0AVim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20contigo.Desde%20j%C3%A1%20agrade%C3%A7o!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets//img-whatsapp.png"
          alt="logo-whatsapp"
          className="w-10 hover:bg-green-500 hover:rounded-2xl transition duration-300"
        />
      </a>

      <a
        href="https://youtube.com/@welsonsax365?si=CsFU021AWhagFsC4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/img-youtube.png"
          alt="logo-youtube"
          className="w-10 hover:bg-red-500 hover:rounded-2xl transition duration-300"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
