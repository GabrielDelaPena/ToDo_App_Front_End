import { Navigate } from "react-router-dom";
import LoginPage from "../components/auth/LoginForm";

function Login() {
  const auth = sessionStorage.getItem("auth-token");

  if (auth) {
    return <Navigate to="/home" />;
  }

  return <LoginPage />;
}

export default Login;
