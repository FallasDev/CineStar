import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../App";
import { Routes } from '../../Routes';


export function Router() {

  const routes = Routes.map(child => ({
    path: child.path,
    element: child.element
  }))

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
