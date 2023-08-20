import Todo from "./../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({ finishedTodo, deleteTodo, editTodo }) {
  const list = useSelector((state) => state.todo.todoList);

  function onFinished(isFinished, todo) {
    finishedTodo({ todo, isFinished });
  }

  function onDelete(todo) {
    deleteTodo({ todo });
  }

  function onEdit(todoText, todo) {
    editTodo({ todoText, todo });
  }
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            id={todo.id}
            changeFinished={(isFinished) => onFinished(isFinished, todo)}
            onDelete={() => onDelete(todo)}
            onEdit={(todoText) => onEdit(todoText, todo)}
          />
        ))}
    </div>
  );
}

export default TodoList;
