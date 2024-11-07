import Backdrop from "./components/Backdrop";
import ClickToPlayAudio from "./components/ClickToPlayAudio";
import Desc from "./components/Desc";
import Foreground from "./components/Foreground";
import PhotoGallery from "./components/PhotoGalley";
import { useRef, useState } from "react";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Playback prevented:", error);
    }
  };

  return (
    <>
      {!isPlaying && <ClickToPlayAudio handleClick={handleClick} />}
      <audio className="relative" ref={audioRef} src="/music.mp3" loop />
      {isPlaying && (
        <>
          <div className="relative w-screen h-screen overflow-hidden">
            <Backdrop videoSrc={"/backdrop.mp4"} />
            <Foreground />
            <div className="absolute w-screen h-[10vh] bottom-0 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>
          </div>

          <div className="relative w-screen overflow-hidden">
            <div className="absolute w-screen h-[10vh] top-[-1px] bg-gradient-to-b from-black/100  to-black/0 pointer-events-none"></div>
            <Desc />
            <div className="absolute w-screen h-[10vh] bottom-0 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>
          </div>
          <div className="relative w-screen overflow-hidden">
            <div className="absolute w-screen h-[10vh] top-[-1px] bg-gradient-to-b from-black/100  to-black/0 pointer-events-none"></div>
            <PhotoGallery />
          </div>
        </>
      )}
    </>
  );
};

export default App;
