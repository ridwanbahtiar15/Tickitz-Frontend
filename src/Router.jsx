import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
// import AddMovie from "./pages/AddMovie";
import Login from "./pages/Login";
// import Register from "./pages/Register";

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/orderhistory",
    element: <OrderHistory />,
  },
]);

export default router;
