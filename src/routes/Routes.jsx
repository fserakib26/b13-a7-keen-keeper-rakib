import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Friends from "../pages/friends/Friends";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";

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
      }
    ],
    errorElement: <ErrorPage/>
  },
  
]);