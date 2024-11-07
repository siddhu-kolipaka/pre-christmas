import Backdrop from "./components/Backdrop";
import ClickToPlayAudio from "./components/ClickToPlayAudio";
import Desc from "./components/Desc";
import Foreground from "./components/Foreground";
import PhotoGallery from "./components/PhotoGalley";
import { useRef, useState } from "react";

const imageList = [
  { src: "/1.webp", alt: "Image 1" },
  { src: "/2.webp", alt: "Image 2" },
  { src: "/3.webp", alt: "Image 3" },
  { src: "/4.webp", alt: "Image 4" },
  { src: "/5.webp", alt: "Image 5" },
  { src: "/6.webp", alt: "Image 6" },
  { src: "/7.webp", alt: "Image 7" },
  { src: "/8.webp", alt: "Image 8" },
  { src: "/9.webp", alt: "Image 9" },
  { src: "/10.webp", alt: "Image 10" },
];

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
          <div className="relative w-screen h-screen">
            <Backdrop videoSrc={"/backdrop.mp4"} />
            <Foreground />
            <div className="absolute w-screen h-[10vh] bottom-0 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>
          </div>

          <div className="relative w-screen ">
            <div className="absolute z-10 w-screen h-[10vh] top-[-1px] bg-gradient-to-b from-black/100  to-black/0 pointer-events-none"></div>
            <Desc />
            <div className="absolute w-screen h-[10vh] bottom-0 bg-gradient-to-t from-black/100 to-black/0 pointer-events-none"></div>
          </div>
          <div className="relative w-screen">
            <div className="absolute w-screen h-[10vh] top-[-1px] bg-gradient-to-b from-black/100  to-black/0 pointer-events-none"></div>
            <PhotoGallery images={imageList} />
          </div>
        </>
      )}
    </>
  );
};

export default App;
