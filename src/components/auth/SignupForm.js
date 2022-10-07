import classes from "./SignupForm.module.css";

function SignupForm() {
  return (
    <form className={classes.form}>
      <p className={classes.p}>Signup</p>
      <div>
        <input className={classes.input} type="text" placeholder="Email" />
      </div>
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
      <button className={classes.btn}>Signup</button>
    </form>
  );
}

export default SignupForm;
