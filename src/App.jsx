import Backdrop from "./components/Backdrop";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <>
      <div className="relative">
        <Backdrop videoSrc={"/backdrop.mp4"} />
        <Foreground />
      </div>
    </>
  );
};

export default App;
