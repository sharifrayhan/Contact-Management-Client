import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../rootpage/Rootpage";
import Home from "../Home/Home";
import AddContacts from "../Add Contacts/AddContacts";
import AllContacts from "../All Contacts/AllContacts";
import ErrorPage from "../Errorpage/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/AddContacts",
        element: <AddContacts/>,
      },
      {
        path: "/AllContacts",
        element: <AllContacts/>,
      },
    ],
  },
]);

export default router;
