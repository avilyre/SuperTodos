import React, { useContext, useState } from 'react';
import Todo from '../../interfaces/Todo';

import TodoContextType from './../../interfaces/TodosContextType';
import { TodosContext } from './../../contexts/TodoContext';

import './styles.css';

interface TodoItemInterface {
    todo: Todo
}

const TodoListItem = (props: TodoItemInterface) => {

    const [outItem, setOutItem] = useState(false);
    const { toggleTodo, removeTodo, deleteEnabled  } = useContext<TodoContextType>(TodosContext);

    function handleDelete(e: any, todo: Todo) {
        e.preventDefault();
        setOutItem(true);
        setTimeout(() => {
            removeTodo(todo);
            setOutItem(true);
        }, 500);
    }

    function handleDoneTodo(todo: Todo) {
        toggleTodo(todo);
    }

    if (deleteEnabled) {
        return (
            <a onClick={e => handleDelete(e, props.todo)} href="/">
                <li className={!outItem ? 'todo-item' : 'todo-item-out'}>
                    <span className="todo-item-title">{props.todo.title}</span>
                </li>
            </a>
        );
    } else {
        return (
            <li className="todo-item">
                <input onChange={() => handleDoneTodo(props.todo)} type="checkbox" checked={props.todo.done} name={props.todo.title} />
                <span className="todo-item-title">{props.todo.title}</span>
            </li>
        );
    }

}

export default TodoListItem;