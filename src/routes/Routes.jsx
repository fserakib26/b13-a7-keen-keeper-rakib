import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Friends from "../pages/friends/Friends";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "/friends",
        element: <Friends/>,
      },      
      {
        path: "/friendDetails/:id",
        element: <FriendDetails/>,
        loader: ()=>fetch("/friends.json"),
      }
    ],
    errorElement: <ErrorPage/>
  },
  
]);