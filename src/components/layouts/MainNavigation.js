import { useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const navigate = useNavigate();

  function logoutHandler() {
    sessionStorage.removeItem("auth-token");
    navigate("/");
  }

  return (
    <nav>
      <h1>Todo</h1>
      <button onClick={logoutHandler}>Logout</button>
    </nav>
  );
}

export default MainNavigation;
