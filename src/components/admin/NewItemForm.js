import classes from "./NewItemForm.module.css";

function NewItemForm() {
  return (
    <form className={classes.form}>
      <p className={classes.p}>New list</p>
      <div>
        <input className={classes.input} type="text" placeholder="Title" />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Created Date"
        />
      </div>
      <div>
        <input className={classes.input} type="text" placeholder="End Date" />
      </div>
      <div>
        <textarea className={classes.textarea}></textarea>
      </div>
      <button className={classes.btn}>Submit</button>
    </form>
  );
}

export default NewItemForm;
