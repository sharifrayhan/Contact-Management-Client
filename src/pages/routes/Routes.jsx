import { createBrowserRouter } from "react-router-dom";
import Rootpage from "../rootpage/Rootpage";
import Home from "../Home/Home";
import AddContacts from "../Add Contacts/AddContacts";
import AllContacts from "../All Contacts/AllContacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage></Rootpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddContacts",
        element: <AddContacts></AddContacts>,
      },
      {
        path: "/AllContacts",
        element: <AllContacts></AllContacts>,
      },
    ],
  },
]);

export default router;
