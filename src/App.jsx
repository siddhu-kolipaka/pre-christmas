import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Luckydraw from "./components/Luckydraw";
const App = () => {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />}></Route>
        <Route path="/work" element={<Luckydraw />}></Route>
      </Routes>
    </>
  );
};

export default App;
