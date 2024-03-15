import * as React from "react";
import TodoList from "./TodoList/TodoList";
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.wrapper}>
     <TodoList/>
    </div>
  );
}

export default App;
