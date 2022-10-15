import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NewItemForm.module.css";

function NewItemForm() {
  const navigate = useNavigate();
  const title = useRef();
  const description = useRef();
  const createdDate = useRef();
  const endDate = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = title.current.value;
    const enteredCreatedDate = createdDate.current.value;
    const enteredEndDate = endDate.current.value;
    const enteredDescription = description.current.value;

    const newList = {
      title: enteredTitle,
      description: enteredDescription,
      createdDate: enteredCreatedDate,
      endDate: enteredEndDate,
    };

    fetch("http://localhost:8080/api/list/add-list", {
      method: "POST",
      body: JSON.stringify(newList),
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("auth-token")),
        "Content-Type": "application/json",
      },
    }).then((response) => {
      navigate("/home");
    });
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <p className={classes.p}>New list</p>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Title"
          ref={title}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Created Date"
          ref={createdDate}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="End Date"
          ref={endDate}
        />
      </div>
      <div>
        <textarea className={classes.textarea} ref={description}></textarea>
      </div>
      <button className={classes.btn}>Submit</button>
    </form>
  );
}

export default NewItemForm;
