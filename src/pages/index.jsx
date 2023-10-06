import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageLayout from "../components/PageLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="home" />
    </Route>
  )
);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
