import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { AdminDashboard } from "./pages/Admin-Dashboard";
import { MyProfile } from "./pages/MyProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/signup",
    element: <App />,
  },
  {
    path: "/login",
    element: <App />,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
