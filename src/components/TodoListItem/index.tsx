import React, { useContext, useState } from 'react';
import Todo from '../../interfaces/Todo';

import TodoContextType from './../../interfaces/TodosContextType';
import { TodosContext } from './../../contexts/TodoContext';

import editIcon from './../../assets/icons/edit.svg';
import checkIcon from './../../assets/icons/check.svg';

import './styles.css';

interface TodoItemInterface {
    todo: Todo
}

const TodoListItem = (props: TodoItemInterface) => {

    const [todoTitle, setTodoTitle] = useState(props.todo.title);
    const [editEnabled, setEditEnabled] = useState(false);
    const [outItem, setOutItem] = useState(false);

    const { toggleTodo, updateTodo, removeTodo, deleteEnabled  } = useContext<TodoContextType>(TodosContext);

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

    function handleUpdateTodo() {

        const { id, done } = props.todo;

        updateTodo({
            id,
            title: todoTitle,
            done
        });

        setEditEnabled(!editEnabled);
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
                {
                editEnabled ?
                    <form onSubmit={handleUpdateTodo}>
                        <div className="todo-item-left">
                            <input 
                                type="text"
                                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                    setTodoTitle(e.currentTarget.value);
                                }}
                                value={todoTitle}
                                placeholder={props.todo.title}
                                name={props.todo.title} 
                            />
                        </div>
                        <div className="todo-item-right">
                            <button 
                                className="transp-button"
                                onClick={handleUpdateTodo}
                            >
                                <img 
                                    className="config-icon"
                                    src={checkIcon}
                                    alt="Confirmar"
                                />
                            </button>
                        </div>
                    </form>
                :
                    <div className="form">
                        <div className="todo-item-left">
                            <input 
                                onChange={() => handleDoneTodo(props.todo)} 
                                type="checkbox" checked={props.todo.done} 
                                name={props.todo.title}
                            />
                            <span className="todo-item-title">{props.todo.title}</span>
                        </div>
                        <div className="todo-item-right">
                            <button 
                                className="transp-button"
                                onClick={() => setEditEnabled(!editEnabled)}
                            >
                                <img
                                    className="config-icon"
                                    src={editIcon}
                                    alt="Editar"
                                />
                            </button>
                        </div>
                    </div>
                }
            </li>
        );
    }

}

export default TodoListItem;