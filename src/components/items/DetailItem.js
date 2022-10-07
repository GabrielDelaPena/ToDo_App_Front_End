import classes from "./DetailItem.module.css";

function DetailItem() {
  return (
    <div className={classes.detailContainer}>
      <div>
        <p className={classes.detailLabel}>Detail List</p>
      </div>

      <p className={classes.label}>
        Title: <span className={classes.detailValue}>Walk on park.</span>
      </p>

      <p className={classes.label}>
        Created at: <span className={classes.detailValue}>07 october 2022</span>
      </p>

      <p className={classes.label}>
        End at: <span className={classes.detailValue}>09 october 2022</span>
      </p>

      <div className={classes.descriptionContainer}>
        <p className={classes.label}>Description: </p>
        <p className={classes.detailValue}>Walk on the park with my dog.</p>
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.btn}>Edit</button>
        <button className={classes.btn}>Delete</button>
      </div>
    </div>
  );
}

export default DetailItem;
