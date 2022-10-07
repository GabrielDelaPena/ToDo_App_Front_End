import classes from "./EditForm.module.css";

function EditForm() {
  return (
    <form className={classes.form}>
      <p className={classes.p}>Edit list</p>
      <div>
        <input className={classes.input} type="text" placeholder="Title" />
      </div>
      <div>
        <input className={classes.input} type="text" placeholder="Edit Date" />
      </div>
      <div>
        <input className={classes.input} type="text" placeholder="End Date" />
      </div>
      <div>
        <textarea className={classes.textarea}></textarea>
      </div>
      <button className={classes.btn}>Save</button>
    </form>
  );
}

export default EditForm;
