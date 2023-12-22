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
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
