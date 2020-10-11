import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { TodosContext } from '../../contexts/TodoContext';
import TodoContextType from '../../interfaces/TodosContextType';

import './styles.css';;

const FormCreate = () => {

    const [todo, setTodo] = useState('');
    const navigate = useHistory();
    const { addTodo } = useContext<TodoContextType>(TodosContext);

    function handleSubmit(e: any) {
        e.preventDefault();
        addTodo(todo);
        navigate.push('/');
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className="form-create">
            <input 
                onChange={e => setTodo(e.target.value)}
                type="text" 
                placeholder="Título da tarefa" 
            />
            <button type="submit">Concluir</button>
        </form>
    )
}

export default FormCreate;