const Foreground = () => {
  return (
    <>
      <div className="absolute w-screen h-screen bg-black opacity-80"></div>
      <div className="absolute w-screen h-screen  text-white flex flex-col justify-around items-center p-8 bg-gradient-to-b from-black/100 via-black/0  to-black/100">
        <div className="flex flex-col justify-center items-center">
          <div className="w-fit font-caps text-xl">
            IIEST FELLOWSHIP PRESENTS
          </div>
          <div className="w-fit font-cursive text-7xl">Pre-Christmas</div>
          <div className="w-fit font-caps text-5xl">2024</div>
          <div className="w-fit font-caps text-xl p-4">
            ALL ARE CORDIALLY INVITED
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex text-xl ">
            <div className="w-fit font-caps flex flex-col justify-center items-center border-r-2 p-4">
              <div className="p-2 text-5xl font-serif">9</div>
              <div>NOVEMBER</div>
            </div>
            <div className="w-fit font-caps flex flex-col justify-center items-center border-l-2 p-4">
              <div className="p-2 w-fit font-caps">SATURDAY</div>
              <div className="w-fit font-caps">
                AT <span className="font-serif">4:30</span> PM
              </div>
            </div>
          </div>
          <div className="font-serif font-medium bg-white text-black text-xl py-4 px-6 m-4 rounded-full opacity-50">
            CAROLS - DANCE - DRAMA
          </div>
          <div className="font-caps p-4 text-xl">INSTITUTE HALL, IIEST</div>

          <a href="http://google.com">
            <button className="text-black text-xl font-semibold bg-white rounded-xl px-4 py-2 font-caps opacity-50">
              Resister Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Foreground;
