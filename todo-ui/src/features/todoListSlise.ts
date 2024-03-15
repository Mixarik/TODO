import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

export interface INewItem {
  label: string;
  completed: boolean;
  id: string;
}

const initialState: { todos: INewItem[] } = {
  todos: [],
};

const newItem = (label: string): INewItem => ({
  label,
  completed: false,
  id: uuidv4(),
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(newItem(action.payload));
    },

    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      return produce(state, draftState => {
        draftState.todos = draftState.todos.filter(
          todo => todo.id !== action.payload,
        );
      });
    },
    deleteCompleted: state => {
      state.todos = state.todos.filter(el => !el.completed);
    },
  },
});

export const {
  addTodo,
  toggleTodoCompleted,
  deleteTodo,
  deleteCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
