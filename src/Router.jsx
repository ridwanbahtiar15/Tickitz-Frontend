import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import AddMovie from "./pages/AddMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/ticketresult",
    element: <TicketResult />,
  },
  {
    path: "/addmovie",
    element: <AddMovie />,
  },
]);

export default router;
