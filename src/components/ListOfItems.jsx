import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, setDone } from "../features/todoSlice";
import { Checkbox } from "@mui/material";
import "./todoList.css";

function ListOfItems({ name, done, id }) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setDone(id));
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItem__done"}>{name}</p>
    </div>
  );
}

export default ListOfItems;
