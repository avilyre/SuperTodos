import React, { useContext, useEffect } from 'react';
import TodoList from '../../components/TodoList';

import TodoContextType from './../../interfaces/TodosContextType';
import { TodosContext } from './../../contexts/TodoContext';

import Header from './../../components/Header';
import ContentArea from './../../components/ContentArea';

const Todos = () => {

    const { toggleDelete } = useContext<TodoContextType>(TodosContext);

    useEffect(() => {
        toggleDelete(false);
        return;
    }, []);

    return (
        <>
            <Header title="Seus Todos" />
            <ContentArea> 
                <TodoList />
            </ContentArea>        
        </>
    )
}

export default Todos;