
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/Todo";
import { v4 as uuidv4 } from "uuid";

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
        localStorage.setItem('todos', JSON.stringify(state));
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
          deleted: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    removeAllTodos(state) {
      state.splice(0, state.length);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    setTodoCompletedStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = action.payload.completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    setTodoDeletedStatus(
      state,
      action: PayloadAction<{ deleted: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = action.payload.deleted;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, removeTodo, removeAllTodos, setTodoCompletedStatus, setTodoDeletedStatus } = todoSlice.actions;
export default todoSlice.reducer;