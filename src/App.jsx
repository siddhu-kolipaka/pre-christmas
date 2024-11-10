import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Luckydraw from "./components/Luckydraw";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/luckydraw",
      element: <Luckydraw />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
