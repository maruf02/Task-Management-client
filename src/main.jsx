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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import UpdateTask from "./Components/DashBoard/AddTask/UpdateTask.jsx";
import BenifiteSection from "./Components/HomePage/BenifiteSection.jsx";
import ContactUsSection from "./Components/HomePage/ContactUsSection.jsx";
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
      {
        path: "/benefit",
        element: <BenifiteSection></BenifiteSection>,
      },
      {
        path: "/contact",
        element: <ContactUsSection></ContactUsSection>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/dashHome",
        element: (
          <PrivateRoute>
            <DashBoardHome></DashBoardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateTask/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://task-management-server-sage-five.vercel.app/tasksheet/${params.id}`
          ),
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
