import React, { useContext } from 'react';
import TodoContextType from '../../interfaces/TodosContextType';
import TodoListItem from '../TodoListItem';

import { TodosContext } from './../../contexts/TodoContext';

import './styles.css';

const TodoList = () => {

    const { todos } = useContext<TodoContextType>(TodosContext);

    return (
        <ul className="todo-list">
            {
                todos?.map(todo => {
                    return <TodoListItem key={todo.id} todo={todo} />
                })
            }
        </ul>
    )
}

export default TodoList;