import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./EditForm.module.css";

function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentList, setCurrentList] = useState({});
  const [title, setTitle] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/list/get-list/" + id, {
      method: "GET",
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("auth-token")),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const fetchedList = data.list;
        setCurrentList(fetchedList);
        setTitle(fetchedList.title);
        setCreatedDate(fetchedList.createdDate);
        setEndDate(fetchedList.createdDate);
        setDescription(fetchedList.description);
        console.log("fetched update list.");
      });
  }, []);

  const updateHandler = (event) => {
    event.preventDefault();

    const updatedList = {
      title: title,
      createdDate: createdDate,
      endDate: endDate,
      description: description,
    };

    fetch("http://localhost:8080/api/list/update-list/" + id, {
      method: "POST",
      body: JSON.stringify(updatedList),
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("auth-token")),
        "Content-Type": "application/json",
      },
    }).then((response) => {
      navigate("/home");
    });
  };

  console.log(currentList.title);

  return (
    <form className={classes.form} onSubmit={updateHandler}>
      <p className={classes.p}>Edit list</p>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={title}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="Edit Date"
          onChange={(e) => setCreatedDate(e.target.value)}
          defaultValue={createdDate}
        />
      </div>
      <div>
        <input
          className={classes.input}
          type="text"
          placeholder="End Date"
          onChange={(e) => setEndDate(e.target.value)}
          defaultValue={endDate}
        />
      </div>
      <div>
        <textarea
          className={classes.textarea}
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={description}
        ></textarea>
      </div>
      <button className={classes.btn}>Save</button>
    </form>
  );
}

export default EditForm;
