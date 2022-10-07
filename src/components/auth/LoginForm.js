import classes from "./LoginForm.module.css";

function LoginPage() {
  return (
    <form className={classes.form}>
      <p className={classes.p}>Login</p>
      <div>
        <input className={classes.input} type="text" placeholder="Username" />
      </div>
      <div>
        <input
          className={classes.input}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className={classes.tagContainer}>
        <a href="#">Create Account</a>
        <a href="#">Forget?</a>
      </div>
      <button className={classes.btn}>Login</button>
    </form>
  );
}

export default LoginPage;
