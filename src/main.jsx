import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard.jsx";
import SignInPage from "./Components/SignInPage/SignInPage.jsx";
import SignUpPage from "./Components/SignUpPage/SignUpPage.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import AddTask from "./Components/DashBoard/AddTask/AddTask.jsx";
import DashBoardHome from "./Components/DashBoard/DashBoardHome/DashBoardHome.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/signIn",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/dashHome",
        element: <DashBoardHome></DashBoardHome>,
      },
      {
        path: "/dashboard/addtask",
        element: <AddTask></AddTask>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
