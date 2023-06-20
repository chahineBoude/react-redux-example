import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTask: (state, task) => {
      state.todoList.push(task.payload);
    },
    removeTask: (state) => {
      //state.todoList.splice(state.todoList.indexOf(task.payload), 1);
      state.todoList = state.todoList.filter((item) => item.done === false);
    },
    setDone: (state, task) => {
      state.todoList.map((item) => {
        if (task.payload === item.id) {
          item.done === true ? (item.done = false) : (item.done = true);
        }
      });
    },
  },
});

export const { addTask, removeTask, setDone } = todoSlice.actions;

export const selectTodoList = (state) => state.todo.todoList;

export default todoSlice.reducer;
