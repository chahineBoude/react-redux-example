import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, removeTask } from "../features/todoSlice";
import "./input.css";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addTask({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  const handleDelete = () => {
    dispatch(removeTask());
  };

  return (
    <div className="input">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Add!</button>
      <button onClick={handleDelete}>Remove Tasks</button>
    </div>
  );
}

export default Input;
