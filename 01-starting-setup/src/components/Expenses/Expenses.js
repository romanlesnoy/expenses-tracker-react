import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filteredExpenses = props.items.filter((item) =>
            item.date.getFullYear().toString() === filteredYear
        );


    const dropdownMenuChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onChangeFilter={dropdownMenuChangeHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;
