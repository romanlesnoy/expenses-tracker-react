import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    const saveExpanseDataHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expanseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpanseDataHandler}/>
        </div>
    );
}

export default NewExpense;
