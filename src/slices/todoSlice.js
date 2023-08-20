import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Here state represent whole state that why we use state.todo to access todo state
    addTodo: (todo, action) => {
      let todoText = action.payload.todoText;
      // We can also directely push in todo state to update state (because redux toolkit use "emerjs algo | function") rather than using return
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      let todoText = action.payload.todoText;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id == payloadTodo.id) {
          t.todoData = todoText;
        }
        return t;
      });

      // OR
      //   let todo = action.payload.todo;
      //   let todoText = action.payload.todoText;
      //   const updatedList = state.todo.map((t) => {
      //     if (t.id == todo.id) {
      //       todo.todoData = todoText;
      //     }
      //     return t;
      //   });
      //   return updatedList;
    },
    finishedTodo: (todo, action) => {
      const payloadTodo = action.payload.todo;
      const isFinished = action.payload.isFinished;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id == payloadTodo.id) {
          t.finished = isFinished;
        }
        return t;
      });
    },
    deleteTodo: (todo, action) => {
      let payloadTodo = action.payload.todo;
      todo.todoList = todo.todoList.filter((t) => t.id != payloadTodo.id);
    },
  },
});

// export default todoSlice;
export const { deleteTodo, addTodo, editTodo, finishedTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
