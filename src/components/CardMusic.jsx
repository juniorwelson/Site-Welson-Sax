import { useState, useRef } from "react";
import { Headphones } from "lucide-react";

const CardMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleAudio = () => {
    const audio = audioRef.current;

    if (!playing) {
      audio.currentTime = 0;
      audio.volume = 0.2;
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    }

    setTimeout(() => {
      setPlaying(false);
    }, 16000);
  };

  return (
    <div className="audio">
      <audio src="/assets/music/song-main.mp3" ref={audioRef}></audio>
      <button
        onClick={handleAudio}
        className={`   z-60
    cursor-pointer p-3 rounded-2xl font-bold transition flex items-center gap-2
    ${playing ? "bg-black text-amber-300 " : "bg-amber-400 text-white hover:bg-amber-500"}
  `}
      >
              {playing ? "Pausar Performance" : "Ouvir Performance"}
              <Headphones/>
      </button>
    </div>
  );
};

export default CardMusic;
