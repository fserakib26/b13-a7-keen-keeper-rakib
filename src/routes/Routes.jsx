// import { createBrowserRouter } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Friends from "../pages/friends/Friends";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/Timeline";

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
        path: "/timeline",
        element: <Timeline/>
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