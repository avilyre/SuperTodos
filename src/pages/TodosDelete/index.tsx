import React, { useContext, useEffect } from 'react';
import TodoList from '../../components/TodoList';

import TodoContextType from './../../interfaces/TodosContextType';
import { TodosContext } from './../../contexts/TodoContext';

import Header from '../../components/Header';
import ContentArea from '../../components/ContentArea';

const TodoDelete = () => {

    const { toggleDelete } = useContext<TodoContextType>(TodosContext);

    useEffect(() => {
        toggleDelete(true);
    }, []);

    return (
        <>
            <Header title="Apagar Todo" headerType="delete" description="Toque no Todo que deseja apagar" />
            <ContentArea> 
                <TodoList />
            </ContentArea>
        </>
    )
}

export default TodoDelete;