import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import TicketResult from "./pages/TicketResult";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Private from "./components/Private";
import AddMovie from "./pages/AddMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
          <Home />
      </Private>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie/:id",
    element: (
      <Private>
        <MovieDetail />
      </Private>
    ),
  },
  {
    path: "/order",
    element: (
      <Private>
        <Order />
      </Private>
    ),
  },
  {
    path: "/payment",
    element: (
      <Private>
        <Payment />
      </Private>
    ),
  },
  {
    path: "/ticketresult",
    element: (
      <Private>
        <TicketResult />
      </Private>
    ),
  },
  {
    path: "/profile",
    element: (
      <Private>
        <Profile />
      </Private>
    ),
  },
  {
    path: "/orderhistory",
    element: (
      <Private>
        <OrderHistory />
      </Private>
    ),
  },
  {
    path: "/addmovie",
    element: (
      <Private>
        <AddMovie />
      </Private>
    ),
  },
]);

export default router;
