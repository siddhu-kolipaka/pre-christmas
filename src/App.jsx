import Backdrop from "./components/Backdrop";
import Desc from "./components/Desc";
import Foreground from "./components/Foreground";
import PhotoGallery from "./components/PhotoGalley";

const App = () => {
  return (
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
  );
};

export default App;
