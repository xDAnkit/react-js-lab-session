import { Route, Routes } from "react-router-dom";
import UsersDashboard from "../features/Users";
import UserDetails from "../features/Users/GetDetails";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersDashboard />} />
      <Route path="/details/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default Navigation;
