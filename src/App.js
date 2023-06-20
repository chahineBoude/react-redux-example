import { useSelector } from "react-redux";
import "./App.css";
import { selectTodoList } from "./features/todoSlice";
import Input from "./components/Input";
import ListOfItems from "./components/ListOfItems";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <ListOfItems id={item.id} name={item.item} done={item.done} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
