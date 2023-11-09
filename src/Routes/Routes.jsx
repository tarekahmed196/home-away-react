import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import BookService from "../Pages/BookService";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "book/:id",
        element: (
          <PrivateRoute>
            <BookService></BookService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://home-away-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
