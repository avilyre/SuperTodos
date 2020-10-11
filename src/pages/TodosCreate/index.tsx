import React from 'react';

import Header from '../../components/Header';
import ContentArea from '../../components/ContentArea';
import FormCreate from '../../components/Form';

const TodoCreate = () => {
    return (
        <>
            <Header title="Criar Todo" headerType="create" description="Informe o título do seu novo Todo" />
            <ContentArea> 
                <FormCreate />
            </ContentArea>        
        </>
    )
}

export default TodoCreate;