import * as React from "react";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {RootState} from "../../features";
import {addTodo, deleteCompleted} from "../../features/todoListSlise";
import TodoItem from "../TodoItem/TodoItem";
import {setFilter} from "../../features/filtersSlice";

import styles from './TodoList.module.scss'

interface INewItem {
    label: string;
    completed: boolean;
    id: string;
}
export type TodoType = "Active" | "Completed" | "All"


const TodoList = () => {
    const [typedValue, setTypedValue] = useState('');

    const dispatch = useAppDispatch();

    const todos = useAppSelector((state: RootState) => state.todos.todos);
    const filter = useAppSelector((state: RootState) => state.filters.filter);

    const handleAddTodo = (label: string) => {
        label.trim() !== '' && dispatch(addTodo(label));
        return true;
    };

    const countItemsLeft = (todos: INewItem[]) => {
        return todos.reduce((acc: number, item: INewItem): number => {
            if (!item.completed) return acc + 1;
            return acc;
        }, 0);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'All') {
            return true;
        } else if (filter === 'Active') {
            return !todo.completed;
        } else if (filter === 'Completed') {
            return todo.completed;
        }
        return false;
    });

    return (<div className={styles.container}>
        <h1>TODO LIST</h1>
        <div className={styles.todoList}>
            <input
                className={styles.addTodoItem}
                value={typedValue}
                onChange={e => setTypedValue(e.target.value)}
                type="text"
                onKeyDown={e =>
                    e.key === 'Enter' &&
                    handleAddTodo(typedValue) &&
                    setTypedValue('')
                }
            />
            {todos.length !== 0 && (
                <div className={styles.items}>
                    {filteredTodos.map((item: INewItem) => {
                        return (
                            <TodoItem
                                key={item.id}
                                label={item.label}
                                completed={item.completed}
                                id={item.id}
                            />
                        );
                    })}
                    <div className={styles.sortingFooter}>
                        <span>{countItemsLeft(todos)} items left</span>
                        <div className={styles.sortIsActive}>
                            <span onClick={() => dispatch(setFilter('All'))}>All</span>
                            <span onClick={() => dispatch(setFilter('Active'))}>
                    Active
                  </span>
                            <span onClick={() => dispatch(setFilter('Completed'))}>
                    Completed
                  </span>
                        </div>
                        <span
                            style={{cursor: 'pointer'}}
                            onClick={() => dispatch(deleteCompleted())}
                        >
                  Clear completed
                </span>
                    </div>
                </div>
            )}
        </div>
    </div>)

};
export default TodoList