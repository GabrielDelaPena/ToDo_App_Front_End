import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList() {
  const [items, setItems] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/list", {
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
        setItems(data.lists);
        setLoginStatus(true);
        console.log("Fetched lists");
      });
  }, []);

  return (
    <ul>
      {!loginStatus && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      <button className={classes.btnAdd}>
        <Link className={classes.btnAddLink} to="/addItem">
          Add
        </Link>
      </button>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </ul>
  );
}

export default ItemList;
