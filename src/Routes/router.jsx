import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SignUp from "../Page/Signup/Signup";
import Books from "../Page/Books/Books";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Page/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import AddItems from "../Page/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Page/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Page/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Page/Dashboard/Payment/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory/PaymentHistory";
import Review from "../Page/Dashboard/Review/Review";
import HistoryFA from "../Page/Dashboard/HistoryFA/HistoryFA";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "books",
            element: <Books></Books>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children: [

        // normal user
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'PaymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path:'review',
          element: <Review></Review>
        },
        {
          path:'history',
          element: <HistoryFA></HistoryFA>
        },
        // admin routes
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
              path: 'manageItems',
              element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path:  'updateItem/:id',
          element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);