import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";

function LoginPage() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [loginStatus, setLoginStatus] = useState(false);

  function loginHandler(event) {
    event.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.token);
        sessionStorage.setItem("auth-token", JSON.stringify(data.token));
        setLoginStatus(true);
        navigate("/home");
      });
  }

  console.log(loginStatus);

  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <p className={classes.p}>Login</p>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Email"
          ref={email}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          ref={password}
        />
      </div>
      <div className={classes.tagContainer}>
        <Link to={"/signup"}>Create Account</Link>
        <a href="#">Forget?</a>
      </div>
      <button className={classes.btn}>Login</button>
    </form>
  );
}

export default LoginPage;
