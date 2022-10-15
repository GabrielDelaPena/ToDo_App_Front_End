import { Link } from "react-router-dom";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <li>
      <p>{props.item.title}</p>
      <button><Link className={classes.link} to={`/detail/${props.item._id}`} >Detail</Link></button>
    </li>
  );
}

export default Item;
