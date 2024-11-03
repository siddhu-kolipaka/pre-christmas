import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

const Backdrop = ({ videoSrc }) => {
  const { width } = useScreenSize();

  let videoWidth;
  if (width > 1000) {
    videoWidth = width / 3;
  } else if (width > 500) {
    videoWidth = width / 2;
  } else {
    videoWidth = width;
  }

  return (
    <div className="absolute w-screen h-screen flex overflow-hidden">
      <video
        style={{ width: videoWidth }}
        className="h-full object-cover flex-grow"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {width > 500 && (
        <video
          style={{ width: videoWidth }}
          className="h-full object-cover flex-grow"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      {width > 1000 && (
        <video
          style={{ width: videoWidth }}
          className="h-full object-cover flex-grow"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Backdrop;
