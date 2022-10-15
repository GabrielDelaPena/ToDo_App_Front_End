import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SignupForm.module.css";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupHandler = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={signupHandler}>
      <p className={classes.p}>Signup</p>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={classes.btn}>Signup</button>
    </form>
  );
}

export default SignupForm;
