import React from 'react';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { toggleTodoCompleted, deleteTodo } from '../../features/todoListSlise';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  label: string;
  completed: boolean;
  id: string;
}

const TodoItem = ({ label, completed, id }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodoCompleted(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className={styles.item}>
      <div>
        <input
          style={{ marginRight: '20px', cursor: 'pointer' }}
          onClick={() => handleToggleTodo(id)}
          checked={completed}
          type="checkbox"
        />
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => handleToggleTodo(id)}
        >
          {label}
        </span>
      </div>
      <svg
        style={{ cursor: 'pointer' }}
        onClick={() => handleDeleteTodo(id)}
        className={styles.cross}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </div>
  );
};

export default TodoItem;
