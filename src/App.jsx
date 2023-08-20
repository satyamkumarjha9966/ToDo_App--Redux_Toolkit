import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import {
  deleteTodo,
  addTodo,
  editTodo,
  finishedTodo,
} from "./slices/todoSlice";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishedTodo },
    dispatch
  );

  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        finishedTodo={actions.finishedTodo}
      />
    </>
  );
}

export default App;
