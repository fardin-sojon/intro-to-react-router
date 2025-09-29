import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Components/Root/Root.jsx";

import Mobile from "./Components/Mobiles/Mobiles.jsx";
import Laptops from "./Components/Laptops/Laptops.jsx";
import Home from "./Components/Home/Home.jsx";
import Users2 from "./Components/Users-2/Users2.jsx";
import Users from "./Components/Users/Users.jsx";



const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobile },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
       {
        path: 'users2',
        element: <Suspense fallback={<span>Loading.......</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
       }
    ],
  },
  {
    path: "about",
    element: <div>About Me Here</div>,
  },
  {
    path: "blogs",
    element: <div>All blogs here</div>,
  },
  {
    path: "app",
    Component: App,
  },
  {
    path: "/app2",
    // element: <App></App>
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
