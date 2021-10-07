import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const [formVisible, setFormVisible] = useState(false);

    const saveExpanseDataHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expanseData);
        showForm()
    };

    const showForm = () => {
        setFormVisible(!formVisible);
    };

    return (
        <div className="new-expense">
            {!formVisible && (
                <button onClick={showForm}>Add new expense</button>
            )}
            {formVisible && (
                <ExpenseForm
                    onSaveExpenseData={saveExpanseDataHandler}
                    setVisibleForm={showForm}
                />
            )}
        </div>
    );
}

export default NewExpense;
