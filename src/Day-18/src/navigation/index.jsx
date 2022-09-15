import React from "react";
import { Route, Routes } from "react-router-dom";

const UsersDashboardComp = React.lazy(() => import("../features/Users"));
const UserDetails = React.lazy(() => import("../features/Users/GetDetails"));

const Navigation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<HeaderLayout />}>
            <UsersDashboardComp />
          </React.Suspense>
        }
      />
      <Route
        path="/details/:id"
        element={
          <React.Suspense fallback={<HeaderLayout />}>
            <UserDetails />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default Navigation;
