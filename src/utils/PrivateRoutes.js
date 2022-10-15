import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = sessionStorage.getItem("auth-token");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;