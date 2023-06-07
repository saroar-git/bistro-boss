import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/User/MyCart";
import Error from "../Pages/Error/Error";
import PrivateRoute from './PrivateRoute';
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AddItem from "../Pages/Dashboard/Admin/AddItem";
import AdminRoute from "../Routes/AdminRoute";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems";
import Payment from "../Pages/Dashboard/User/Payment";
import UserHome from "../Pages/Dashboard/User/UserHome";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main />,
            errorElement: <Error />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: 'menu',
                        element: <Menu />
                  },
                  {
                        path: 'order/:category',
                        element: <Order />
                  },
                  {
                        path: 'login',
                        element: <Login />
                  },
                  {
                        path: 'register',
                        element: <Register />
                  }
            ]
      },
      {
            path: 'dashboard',
            element: <PrivateRoute><Dashboard /></PrivateRoute>,
            errorElement: <Error />,
            children: [
                  {
                        path: 'userHome',
                        element: <UserHome />
                  },
                  {
                        path: 'myCart',
                        element: <MyCart />
                  },
                  {
                        path: 'payment',
                        element: <Payment />
                  },

                  // admin routes
                  {
                        path: 'adminHome',
                        element: <AdminHome/>
                  },
                  {
                        path: 'allUsers',
                        element: <AdminRoute><AllUsers /></AdminRoute>
                  },
                  {
                        path: 'addItem',
                        element: <AdminRoute><AddItem /></AdminRoute>
                  },
                  {
                        path: 'manageItems',
                        element: <AdminRoute><ManageItems /></AdminRoute>
                  }
            ]
      }
]);