import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../rootpage/Rootpage";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
