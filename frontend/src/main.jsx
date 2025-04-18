import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./forms/SignUp.jsx";
import SignIn from "./forms/SignIn.jsx";
import Registration from "./pages/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
    ],
  },
  {
    path: "/auth",
    element: <Registration />,
    children: [
      { path: "sign-up", element: <SignUp /> },
      { path: "sign-in", element: <SignIn /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
