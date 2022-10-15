import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import classes from "./DetailItem.module.css";

function DetailItem() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [username, setUsername] = useState("");

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
        setList(fetchedList);
        setUsername(fetchedList.creator.username);
        console.log("Fetched one list");
      });
  }, []);

  const deleteHandler = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/api/list/delete-list/" + id, {
      method: "DELETE",
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("auth-token")),
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("List deleted.");
      navigate("/home");
    });
  };

  return (
    <div className={classes.detailContainer}>
      <div>
        <p className={classes.detailLabel}>Detail List</p>
      </div>

      <p className={classes.label}>
        Creator: <span className={classes.detailValue}>{username}</span>
      </p>

      <p className={classes.label}>
        Title: <span className={classes.detailValue}>{list.title}</span>
      </p>

      <p className={classes.label}>
        Created at:{" "}
        <span className={classes.detailValue}>{list.createdDate}</span>
      </p>

      <p className={classes.label}>
        End at: <span className={classes.detailValue}>{list.endDate}</span>
      </p>

      <div className={classes.descriptionContainer}>
        <p className={classes.label}>Description: </p>
        <p className={classes.detailValue}>{list.description}</p>
      </div>

      <div className={classes.btnContainer}>
        <button className={classes.btn}>
          <Link className={classes.btnEdit} to={`/editItem/${list._id}`}>
            Edit
          </Link>
        </button>
        <button className={classes.btn} onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DetailItem;
